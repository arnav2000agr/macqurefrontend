import { Axios } from './Axios'
import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import LoadingOverlay from 'react-loading-overlay-ts';
import { useParams } from 'react-router-dom'


export default function Rfq(change) {
    const [bid, setBid] = useState(null)
    const [load, setLoad] = useState(true)
    const [winner, setWinner] = useState('')


    const { id } = useParams()


    const searchbar = useRef()




    const UpdatePrice = async () => {
        const val = window.prompt('Enter the Price')
        setLoad(true)
        if (val) {
            await Axios.put(`/updates/order/admin`, {
                buyer_Price: val,
                id: id
            }).then((res) => {
                setLoad(false)
                setBid(res.data.order)
                console.log(bid)
            })
        }
    }

    const Acceptorder = async (e) => {
        await Axios.put(`/admin/accept/${id}`, {
            id: id,
            seller: e.target.getAttribute('seller'),
            price: e.target.getAttribute('price'),

        }).then((res) => {
        }).catch((err) => console.log(err.responce.message))
    }

    useEffect(() => {

        const getdata = async () => {
            if (id) {
                await Axios.get(`/order/${id}`).then((res) => {
                    setBid(res.data.order)
                    setLoad(false)
                    setWinner(res.data.order.winner[0].seller)
                })

            }
        }

        getdata()


    }, [])

    return (
        <>

            <div className="flex flex-1 h-screen overflow-scroll p-4 px-6">
                {bid ?
                    <div className="flex flex-col w-2/3">
                        <p className="text-[#1672DE]">#{bid._id}</p>
                        <p className="mt-4 font-semibold text-2xl">{bid.product.name}</p>
                        <div className="flex mt-4">
                            <div className="w-1/5 mr-2 flex flex-col">
                                <p className="text-[#637F94] font-semibold">Quantity</p>
                                <p className="text-xl">{bid.quantity}</p>
                            </div>
                            <div className="w-1/5 mr-2 flex flex-col">
                                <p className="text-[#637F94] font-semibold">Has No.</p>
                                <p className="text-xl">29153100</p>
                            </div>
                            <div className="w-1/5 mr-2 flex flex-col">
                                <p className="text-[#637F94] font-semibold">Cas No.</p>
                                <p className="text-xl">503612-47</p>
                            </div>
                            <div className="w-1/5 flex flex-col">
                                <p className="text-[#637F94] font-semibold">Time Remaining</p>
                                <p className="bg-[#BEE5F5] w-fit p-1 rounded-md">12 : 55 : 45</p>
                            </div>
                        </div>

                        <div className="flex mt-10 flex-col">
                            <p className="text-[#637F94]">Final Price Quoted</p>
                            <div className="flex ">
                                <p className="text-[#1672DE] font-bold text-3xl">Rs. {bid.buyer_Price}</p>

                                <button onClick={UpdatePrice} type="submit" className="border  border-[#1672DE] text-[#1672DE] underline p-2 rounded-md ml-10 hover:bg-[#1672DE] hover:text-white">Update Price</button>
                            </div>
                        </div>

                        <div className="mt-10 flex">
                            <div className="w-1/5 p-2 border border-transparent  border-b-[#1672DE]">
                                <p className="text-[#1672DE] text-center text-lg">Sellers</p>
                            </div>

                        </div>

                        <div ref={searchbar} className={`flex gap-4 my-4 items-center ${change && 'py-2 '} `}>
                            <div className={`search_cover box_shadow border flex-1 rounded flex items-center ${change ? 'p-2' : 'p-4'} bg-white`}>
                                <input type="text" className='flex-1 outline-none' placeholder='search' />
                                <FiSearch size={20} className='text-buyer-text-color' />
                            </div>
                        </div>


                        {/* seller's List */}

                        <div className="flex flex-col">

                            {bid.bids.map((elem, index) => {
                                return (
                                    <div key={elem._id} className="flex mt-2 mb-2 p-2 box_shadow rounded-md">

                                        <div className="w-1/3">
                                            <div className="font-semibold">{elem.seller.name}</div>
                                            <div className="text-[#1672DE]">{elem.seller._id}</div>
                                        </div>
                                        <div className="w-1/3 text-center">
                                            <div className="text-gray-500">Price Qouted at</div>
                                            <div className="text-[#1672DE] font-semibold">{elem.price ? elem.price : 'yet to quote'}</div>
                                        </div>
                                        <div className="w-1/6">
                                            <button onClick={Acceptorder} seller={elem.seller._id} price={elem.price} className={` w-fit py-1 px-2 mt-2 rounded-md text-white ${winner === elem.seller._id ? 'bg-green-600' : 'bg-[#1672DE]'}`}>Accept</button>
                                        </div>
                                        <div className="w-1/6">
                                            <button className="border border-red-600 w-fit py-1 px-2 mt-2 rounded-md text-red-600">Reject</button>
                                        </div>
                                        <p>Edit</p>
                                    </div>
                                )
                            })

                            }

                        </div>
                    </div>

                    :

                    <LoadingOverlay className=' flex-1' active={load} spinner text='Loading.... Please Wait!' />

                }
            </div>
        </>
    );
}