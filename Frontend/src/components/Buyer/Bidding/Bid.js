import React, { useState, useEffect } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FiPhoneCall } from 'react-icons/fi'
import { GrDocumentDownload } from 'react-icons/gr'
import img from '../../../images/structure.png'
import { Axios } from '../../Axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bid = ({ elem }) => {

    useEffect(() => {
        status_color();
        startTimer();
    })


    // For adding documents by buyer 
    const [know_more, setKnow_more] = useState(false)
    const show = () => {
        setKnow_more(!know_more)
    }


    // Date of creation of bid
    const date = new Date(elem.createdAt)
    const dates = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`


    // Bid accepted by buyer (Put request)
    const acceptQuote = async () => {
        await Axios.put('/updates/order/buyer', {
            quote_status: 'buyer_accepted',
            id: elem._id
        }).then((res) => {
            // console.log(res)

        }).catch((error) => {
            console.log(error);
            toast.error(error.response.data.error)
        })
    }


    // For changing color of status button
    const [statusColor, setStatusColor] = useState("")
    const status_color = () => {
        if (elem.quote_status === 'processing') setStatusColor("#FFF61C")
        if (elem.quote_status === 'active') setStatusColor("#1672DE")
        if (elem.quote_status === 'ended') setStatusColor("")
        if (elem.quote_status === 'buyer_accepted') setStatusColor('#1672DE')
        if (elem.quote_status === 'accepted') setStatusColor('#64FF1C')
        if (elem.quote_status === 'rejected') setStatusColor("#FF2424")
        if (elem.quote_status === 'preparing') setStatusColor("#FFF61C")
        if (elem.quote_status === 'inTransit') setStatusColor("#8AE3FF")
        if (elem.quote_status === 'delivered') setStatusColor("#64FF1C")
    }


    // Popup for admin rejected bid/order
    const remark = () => {
        window.confirm("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum debitis sint maiores sed dicta, sapiente iure, molestias placeat architecto aut praesentium commodi, itaque consequuntur unde voluptas quisquam expedita officia fugit.")
    }


    // Timer for Bidding
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("Oct 14,2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance <= 0) {

                // Change the status in Database



                // Stop Timer
                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    return (
        <div className=' bg-white px-6 pt-2 border justify-between flex-col flex box_shadow rounded hover:border-[#1060bc]'>

            <div className='  justify-between flex'>

                {/* left div start */}
                <div className=' flex'>
                    <img src={img} className='h-4/5' alt="this is img" />
                    <div className="left flex flex-col gap-10 text-sm w-2/3">
                        <h1 className=' text-2xl text-buyer-small_heading font-semibold mt-10'>{elem.product.name}</h1>
                        <div className="flex gap-3">
                            <div className=" text-sm ">
                                <p className=' my-2 text-center text-buyer-text-color font-semibold'>Quantity</p>
                                <p className=' text-center'>{elem.quantity}</p>
                            </div>
                            <div className="text-sm">
                                <p className='my-2 w-20 text-center text-buyer-text-color font-semibold'>HS CODE</p>
                                <p className=' text-center'>{elem.product['HS Code'] ? elem.product['HS Code'] : 'null'}</p>
                            </div>
                            <div className=" text-sm">
                                <p className='my-2 w-28  text-center text-buyer-text-color font-semibold'>CAS NO.</p>
                                <p className=' text-center'>{elem.product['CASNo']}</p>
                            </div>
                            <div className="text-sm">
                                <p className='mt-2  text-center text-buyer-text-color font-semibold'>Date</p>
                                <div className={`p-1 mt-1 rounded px-2 w-20 text-center`}>{dates}</div>
                            </div>
                            <div className="text-sm ">
                                <p className='mt-2 text-center text-buyer-text-color font-semibold'>status</p>
                                <div className={`bg-[${statusColor}]  p-1 mt-1 rounded px-3 w-fit text-center`}>{elem.quote_status}</div>
                            </div>
                            {
                                elem.quote_status === 'active' ?
                                    <div className="text-sm ">
                                        <p className='mt-2 text-center text-buyer-text-color font-semibold'>Time Left</p>
                                        <div className={`bg-[${statusColor}] p-1 mt-1 rounded w-20 text-center`}>{timerHours} : {timerMinutes} : {timerSeconds}</div>
                                    </div>
                                    :
                                    ""
                            }

                        </div>

                    </div>
                </div>

                {
                    elem.quote_status === "active" || elem.quote_status === "ended" ?
                        <div className='left  flex flex-col text-sm  gap-3'>
                            <div className="right_head text-buyer-text-color flex items-center justify-between mt-1">
                                <p>Lowest Bid Yet</p>
                                <ChevronRightIcon className='cursor-pointer' size={16} />
                            </div>
                            <h1 className=' text-2xl font-bold'>{elem.buyer_Price === 0 ? "Not Bidded" : 'Rs. ' + elem.buyer_Price}</h1>
                            {elem.quote_status === "accepted" || elem.quote_status === "rejected" ? "" : <p className=' text-buyer-text-color mb-4'>*Updates in 12hrs</p>}


                            <div className="buttons flex items-center gap-4">
                                {elem.quote_status === "accepted" || elem.quote_status === "rejected" || elem.quote_status === "processing" ? <div></div> : <button onClick={acceptQuote} className=' py-3 px-12 rounded-md text-sm bg-buyer-second_know_more text-white'>Accept</button>}

                                {
                                    elem.quote_status === "accepted" || elem.quote_status === "rejected" ?
                                        <div className=' border p-3 rounded border-buyer-second_know_more'>
                                            <FiPhoneCall size={20} width={40} />
                                        </div>
                                        :
                                        <div className=' border p-3 rounded border-buyer-second_know_more'>
                                            <FiPhoneCall size={20} />
                                        </div>
                                }

                            </div>
                            {elem.quote_status === "rejected" ? <a href="/" className=' underline text-buyer-primary'>Negotiate</a> : ""}
                        </div>
                        :
                        ""
                }
                {
                    elem.quote_status === "processing" ?
                        <div className='left  flex flex-col text-sm'>
                            <div className="right_head text-buyer-text-color flex items-end justify-end mt-1">
                                <ChevronRightIcon className='cursor-pointer' size={16} />
                            </div>
                            <h1 className=' text-2xl font-bold mt-4'>Bid not started yet</h1>

                            <div className="buttons flex items-center gap-4 mt-14 hover:bg-[#1672DE] hover:text-white">
                                <div className='flex justify-evenly border p-2 rounded border-buyer-second_know_more w-full cursor-pointer'>
                                    <p className='border border-transparent border-r-gray-400 px-4'>Call for Inquries</p>
                                    <FiPhoneCall size={20} />
                                </div>
                            </div>

                            {elem.quote_status === "rejected" ? <a href="/" className=' underline text-buyer-primary'>Negotiate</a> : ""}
                        </div>
                        :
                        ""
                }
                {
                    elem.quote_status === "rejected" ?
                        <div className='left  flex flex-col text-sm '>
                            <div className="right_head text-buyer-text-color flex items-center justify-end mt-1">
                                <ChevronRightIcon className='cursor-pointer' size={16} />
                            </div>

                            {
                                elem.buyer_Price === 0 ?
                                    <>
                                        <h1 className='text-2xl font-semibold mt-3 text-[#ff2424]'>Bid Rejected</h1>
                                        <div onClick={remark} className="buttons flex items-center gap-4 mt-4 my-2 hover:bg-[#1672DE] hover:text-white">
                                            <div className='flex justify-evenly border p-2 rounded border-buyer-second_know_more w-full cursor-pointer'>
                                                <p>Know the Reason</p>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <h1 className='text-2xl font-semibold mt-3 text-[#ff2424]'>Order Rejected</h1>
                                        <h1 className="text-xl text-gray-500 mt-2 font-medium ">Amount: <span className='text-2xl text-black'>Rs. 1234567</span></h1>
                                    </>
                            }




                            <div className="buttons flex items-center gap-4 mt-1 hover:bg-[#1672DE] hover:text-white">
                                <div className='flex justify-evenly border p-2 rounded border-buyer-second_know_more w-full cursor-pointer'>
                                    <p className='border border-transparent border-r-gray-400 px-4'>Call for Inquries</p>
                                    <FiPhoneCall size={20} />
                                </div>
                            </div>
                        </div>
                        :
                        ""
                }
                {
                    elem.quote_status === "accepted" ?
                        <div className='left  flex flex-col text-sm '>
                            <div className="right_head text-buyer-text-color flex items-center justify-end mt-1">
                                <ChevronRightIcon className='cursor-pointer' size={16} />
                            </div>
                            <h1 className='text-2xl font-semibold mt-3 text-[#1672DE]'>Order Confirmed</h1>

                            <h1 className="text-xl text-gray-500 mt-2 font-medium mb-4">Amount: <span className='text-2xl text-black'>Rs. {elem.buyer_Price}</span></h1>
                            <div onClick={remark} className="buttons flex items-center gap-4 mt-2 my-2 hover:bg-[#1672DE] hover:text-white">
                                <div className='flex justify-evenly border p-2 rounded-md border-buyer-second_know_more w-full cursor-pointer hover:rounded-md'>
                                    <p>Go to Order Page</p>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                }
                {
                    elem.quote_status === "buyer_accepted" ?
                        <div className='left  flex flex-col text-sm '>
                            <div className="right_head text-buyer-text-color flex items-center justify-end mt-1">
                                <ChevronRightIcon className='cursor-pointer' size={16} />
                            </div>
                            <h1 className='text-2xl font-semibold mt-3 text-[#1672DE]'>Order Confirmed</h1>

                            <h1 className="text-xl text-gray-500 mt-2 font-medium mb-4">Amount: <span className='text-2xl text-black'>Rs. {elem.buyer_Price}</span></h1>
                            <div onClick={remark} className="buttons flex items-center gap-4 mt-2 my-2 hover:bg-[#1672DE] hover:text-white">
                                <div className='flex justify-evenly border p-2 rounded-md border-buyer-second_know_more w-full cursor-pointer hover:rounded-md'>
                                    <p>Go to Order Page</p>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                }
            </div>




            {/* know maore */}
            <div onClick={show} className=' cursor-pointer flex items-center gap-2  mb-4 text-end text-base font-medium text-buyer-second_know_more capitalize'>
                <p className='  font-semibold'>Know more</p>
                <MdOutlineArrowDropDown className={`cursor-pointer ${know_more && 'rotate-180'}`} size={22} />
            </div>



            {
                know_more &&
                <div className=' flex flex-col gap-2 text-sm'>
                    <div>
                        <h1 className=' font-semibold text-base my-2'>Your Remarks</h1>
                        <p className=''>{elem.remark ? elem.remark : 'No Remark'}</p>
                    </div>
                    <h1 className='font-semibold text-base my-2'>Documents </h1>
                    <div className='flex gap-5 '>
                        <div className=' flex flex-col items-center gap-1'>
                            <GrDocumentDownload color='#1672DE' size={35} />
                            <p className=' text-buyer-text-color'>abc.pdf</p>
                        </div>
                        <div className=' flex flex-col items-center gap-1'>
                            <GrDocumentDownload color='#1672DE' size={35} />
                            <p className=' text-buyer-text-color'>abc.pdf</p>
                        </div>
                        <div className=' flex flex-col items-center gap-1'>
                            <GrDocumentDownload color='#1672DE' size={35} />
                            <p className=' text-buyer-text-color'>abc.pdf</p>
                        </div>
                        <div className=' flex flex-col items-center gap-1'>
                            <GrDocumentDownload color='#1672DE' size={35} />
                            <p className=' text-buyer-text-color'>abc.pdf</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Bid