import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Box from '../../components/Box'
import Heading from '../../components/Heading'
import SellerBidBox from '../../components/SellerBidBox'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import { Axios } from '../../components/Axios'

const AdminEnquiry = () => {
    const content = useRef()
    const searchbar = useRef()

    const [change, setChange] = useState(false)
    const [status, setStatus] = useState('live')
    const [data, setData] = useState([])
    const [sellerid, setSellerid] = useState('')


    const status_live = () => {
        setStatus('live')
    }
    const status_pending = () => {
        setStatus('pending')
    }
    const status_previous = () => {
        setStatus('previous')
    }

    useEffect(() => {
        content.current.addEventListener('scroll', () => {
            var rect = searchbar.current.getBoundingClientRect()
            if (rect.top < 70) {
                setChange(true)
            }
            if (rect.top > 70) {
                setChange(false)
            }
        })

        Axios.get('/get/enquries').then((data) => {
            console.log(data.data.bids)
            setData(data.data.bids)
            setSellerid(data.data.sellerid)
        }).catch((error) => {
            console.log(error);
        })
    }, [status])

    return (
        <div className=" flex-1">
            <Header />

            <div className="flex">
                <div
                    ref={content}
                    className=" flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen bg-white">
                    <Heading />

                    <div className="box_cont flex gap-5">
                        <div
                            onClick={status_live}
                            className={`text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'live' && 'bg-buyer-primary text-white'
                                } `}>
                            <Box bids={data} content={'Live'} />
                        </div>
                        <div
                            onClick={status_pending}
                            className={`text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'pending' && 'bg-buyer-primary text-white'
                                } `}>
                            <Box bids={data} content={'Pending'} />
                        </div>
                        <div
                            onClick={status_previous}
                            className={`text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'previous' && 'bg-buyer-primary text-white'
                                } `}>
                            <Box bids={data} content={'Previous'} />
                        </div>
                    </div>

                    <div className="shadow-xl p-4 border bg-[#FFFFFF] rounded-lg">
                        <div ref={searchbar} className="sticky top-4 px-4 py-2">
                            <SearchBox change={change} />
                        </div>

                        <div className="brid_box  gap-6 px-4 py-4">
                            <div className="grid grid-cols-3 gap-6">
                                {data.map((e, key) => {
                                    return e.bids.map((data, key) => {
                                        return sellerid === data.seller &&
                                            data.price === null &&
                                            status === 'live' ? (
                                            <SellerBidBox e={e} sellerid={sellerid} />
                                        ) : (
                                            ''
                                        )
                                    })
                                })}
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                {data.map((e, key) => {
                                    return e.bids.map((data, key) => {
                                        return ((sellerid === data.seller && data.price !== null && e.quote_status !== 'active' && status === 'pending')) ? (
                                            <SellerBidBox e={e} sellerid={sellerid} />
                                        ) : (
                                            ''
                                        )
                                    })
                                })}{' '}
                            </div>
                            {status === 'previous' ? (
                                <div class="flex  mt-4 px-4 m-auto">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2  min-w-full sm:px-6 lg:px-8">
                                            <div class="overflow-hidden ">
                                                <table class=" text-black text-1xl font-normal m-auto ">
                                                    <thead class="">
                                                        <tr className="border-b  h-12 hover:border-b  ">
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                                            ></th>
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                                                            >
                                                                RFQ No
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                                                            >
                                                                Product Name
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                                                            >
                                                                Quantity
                                                            </th>

                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                                                            >
                                                                Status
                                                            </th>

                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                                                            >
                                                                Price
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    {data.map((e, key) => {
                                                        return status === 'previous'
                                                            ? e.winner.map((data, key) => {
                                                                return sellerid === data.seller ? (
                                                                    <tbody>
                                                                        <tr className="border-b h-12 hover:border-2  hover:border-blue-300 text-center">
                                                                            <td class="px-6 py-4 text-blue-400  whitespace-nowrap text-sm font-medium ">
                                                                                <ChevronRightIcon />
                                                                            </td>
                                                                            <td class="text-sm text-blue-500 text-1xl  font-light px-6 py-4 whitespace-nowrap">
                                                                                {e._id}
                                                                            </td>
                                                                            <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                                                {e.product}
                                                                            </td>
                                                                            <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                                                                                {e.quantity}
                                                                            </td>

                                                                            <td class="text-sm  rounded-md px-6 py-4  font-light  ">
                                                                                {' '}
                                                                                <p className="px-2 py-1 bg-[#A9FEC6] text-[#005E25] rounded-lg text-center ">
                                                                                    Accepted
                                                                                </p>
                                                                            </td>

                                                                            <td class="text-sm   font-[600] text-[14px] px-6 py-4 whitespace-nowrap flex justify-center">
                                                                                <CurrencyRupeeIcon
                                                                                    sx={{ width: '20px' }}
                                                                                />
                                                                                {e.bids.map((data, key) => {
                                                                                    return (
                                                                                        <div className="flex">
                                                                                            <p>
                                                                                                {' '}
                                                                                                {sellerid === data.seller
                                                                                                    ? data.price
                                                                                                    : ''}{' '}
                                                                                            </p>
                                                                                        </div>
                                                                                    )
                                                                                })}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                ) : e.bids.map((info, key) => {
                                                                    return sellerid === info.seller && info.price !== null ? <tbody>
                                                                        <tr className="border-b h-12 hover:border-2  hover:border-blue-300 text-center">
                                                                            <td class="px-6 py-4 text-blue-400  whitespace-nowrap text-sm font-medium ">
                                                                                <ChevronRightIcon />
                                                                            </td>
                                                                            <td class="text-sm text-blue-500 text-1xl  font-light px-6 py-4 whitespace-nowrap">
                                                                                {e._id}
                                                                            </td>
                                                                            <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                                                {e.product}
                                                                            </td>
                                                                            <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                                                                                {e.quantity}
                                                                            </td>

                                                                            <td class="text-sm  rounded-md px-6 py-4  font-light  ">
                                                                                {' '}
                                                                                <p className="px-2 py-1 bg-[#FF9B9B] text-[#900404] rounded-lg text-center ">
                                                                                    Rejected
                                                                                </p>
                                                                            </td>

                                                                            <td class="text-sm   font-[600] text-[14px] px-6 py-4 whitespace-nowrap flex justify-center">
                                                                                <CurrencyRupeeIcon
                                                                                    sx={{ width: '20px' }}
                                                                                />
                                                                                {e.bids.map((data, key) => {
                                                                                    return (
                                                                                        <div className="flex">
                                                                                            <p>
                                                                                                {' '}
                                                                                                {sellerid === data.seller
                                                                                                    ? e.buyer_Price
                                                                                                    : ''}{' '}
                                                                                            </p>
                                                                                        </div>
                                                                                    )
                                                                                })}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody> : sellerid === info.seller && info.price === null ? <tbody>
                                                                        {console.log(info.price)}
                                                                        <tr className="border-b h-12 hover:border-2  hover:border-blue-300 text-center">
                                                                            <td class="px-6 py-4 text-blue-400  whitespace-nowrap text-sm font-medium ">
                                                                                <ChevronRightIcon />
                                                                            </td>
                                                                            <td class="text-sm text-blue-500 text-1xl  font-light px-6 py-4 whitespace-nowrap">
                                                                                {e._id}
                                                                            </td>
                                                                            <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                                                                {e.product}
                                                                            </td>
                                                                            <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                                                                                {e.quantity}
                                                                            </td>

                                                                            <td class="text-sm  rounded-md px-6 py-4  font-light  ">
                                                                                {' '}
                                                                                <p className="px-2 py-1 bg-[#daff9b] text-[#866767] rounded-lg text-center ">
                                                                                    Missing
                                                                                </p>
                                                                            </td>

                                                                            <td class="text-sm   font-[600] text-[14px] px-6 py-4 whitespace-nowrap flex justify-center">
                                                                                <CurrencyRupeeIcon
                                                                                    sx={{ width: '20px' }}
                                                                                />
                                                                                {e.bids.map((data, key) => {
                                                                                    return (
                                                                                        <div className="flex">
                                                                                            <p>
                                                                                                {' '}
                                                                                                {sellerid === data.seller
                                                                                                    ? e.buyer_Price
                                                                                                    : ''}{' '}
                                                                                            </p>
                                                                                        </div>
                                                                                    )
                                                                                })}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody> : ""

                                                                })


                                                            })
                                                            : ''
                                                    })}
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEnquiry