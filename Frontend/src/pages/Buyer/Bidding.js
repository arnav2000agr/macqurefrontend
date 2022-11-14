import React, { useEffect, useRef, useState } from 'react'
import Box from '../../components/Box'
import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Bid from '../../components/Buyer/Bidding/Bid'
import SearchBox from '../../components/SearchBox'
import ExploreProducts from './ExploreProducts'
import { Axios } from '../../components/Axios'

const Bidding = () => {

    const [change, setChange] = useState(false)
    const [bids, setBids] = useState([])
    // const [load, setLoad] = useState(true)
    const [status, setStatus] = useState('processing')
    const content = useRef()
    const searchbar = useRef()


    // functions
    const status_proccess = () => {
        setStatus('processing')
    }
    const status_active = () => {
        setStatus('active')
    }
    const status_pending = () => {
        setStatus('pending')

    }
    const status_previous = () => {
        setStatus('previous')
    }


    useEffect(() => {


        const getdata = async () => {

            try {

                await Axios.get('/getall/buyer/bids').then((res) => {
                    setBids(res.data.buyerbids.bids)
                })

            } catch (error) {
                console.log(error);
            }


        }

        content.current.addEventListener('scroll', () => {
            var rect = searchbar.current.getBoundingClientRect();

            if (rect.top < 70) {
                setChange(true)
            }
            if (rect.top > 70) {
                setChange(false)
            }
        })
        getdata()
    }, [status])

    return (
        <div className=' flex-1 h-screen overflow-y-scroll'>
            <Header />
            <div className="flex">

                <div ref={content} className=' flex-1 p-8 overflow-y-scroll mt-16'>
                    <div className="bg-white p-3 rounded-md">
                        <Heading />
                        <div className="box_cont flex gap-5 mt-7">
                            <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'processing' && 'bg-buyer-primary text-white'} `} onClick={status_proccess}>
                                <Box content={'Processing'} bids={bids} />
                            </div>
                            <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'active' && 'bg-buyer-primary text-white'} `} onClick={status_active}>
                                <Box content={'Active'} bids={bids} />
                            </div>
                            <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'pending' && 'bg-buyer-primary text-white'} `} onClick={status_pending}>
                                <Box content={'Pending'} bids={bids} />
                            </div>
                            <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'previous' && 'bg-buyer-primary text-white'} `} onClick={status_previous}>
                                <Box content={'Previous'} bids={bids} />
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col space-y-5 bg-white p-4 rounded-md mt-10'>
                        <div ref={searchbar} className='sticky top-4' >
                            <SearchBox change={change} />
                        </div>

                        {
                            status !== 'previous' ?

                                status !== 'pending' ?

                                    status !== 'active' ?

                                        // Processing
                                        bids.filter(bid => bid.quote_status === 'processing').length > 0 ?
                                            bids.filter(bid => bid.quote_status === 'processing').map((elem, index) => {
                                                return (
                                                    <Bid key={elem._id} id={elem._id} elem={elem} />
                                                )
                                            })
                                            :
                                            <ExploreProducts/>

                                        :

                                        // Active
                                        bids.filter(bid => bid.quote_status === 'active').length > 0 ?

                                            bids.filter(bid => bid.quote_status === 'active').map((elem, index) => {
                                                return (
                                                    <Bid key={elem._id} id={elem._id} elem={elem} />
                                                )
                                            })

                                            :

                                            <ExploreProducts/>

                                    :

                                    // for pending status
                                    bids.filter(bid => bid.quote_status === 'ended' || bid.quote_status === 'buyer_accepted').length > 0 ?

                                        bids.filter(bid => bid.quote_status === 'ended' || bid.quote_status === 'buyer_accepted').map((elem, index) => {
                                            return (
                                                <Bid key={elem._id} id={elem._id} elem={elem} />
                                            )
                                        })

                                        :

                                        <ExploreProducts/>
                                :
                                // Previous Status
                                bids.filter(bid => bid.quote_status === 'accepted' || bid.quote_status === 'rejected').length > 0 ?

                                    bids.filter(bid => bid.quote_status === 'accepted' || bid.quote_status === 'rejected').map((elem, index) => {
                                        return (
                                            <Bid key={elem._id} id={elem._id} elem={elem} />
                                        )
                                    })

                                    :

                                    <ExploreProducts/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bidding