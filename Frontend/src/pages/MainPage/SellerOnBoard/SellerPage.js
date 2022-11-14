import React, { useRef, useState } from 'react'
import MainHeading from '../../../components/MainHeading'
import img from '../../../images/onboard.png'
import company1 from '../../../images/image4.png'
import company2 from '../../../images/image5.png'
import company3 from '../../../images/image6.png'
import { HiUserCircle } from 'react-icons/hi'
import { MdLocalPhone } from 'react-icons/md'
import card1 from '../../../images/card1.png'
import card2 from '../../../images/card2.png'
import card3 from '../../../images/card3.png'
import truck from '../../../images/Truck.png'
import footer2 from '../../../images/footer2.png'


import Map from '../../../components/Map'
import Card from '../../../components/Card'
import Review from '../../../components/Review'
import FreqBox from '../../../components/FreqBox'
import Onboard from '../../../components/onboard'
import OnBoardHeader from '../../../components/OnBoardHeader'
import { Axios } from '../../../components/Axios'
import { toast } from 'react-toastify'


const SellerPage = () => {
  const image = useRef()

  const [company, setCompany] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
    

  const company_handle = (e) =>{
    setCompany(e.target.value)
  }

  const mobile_handle = (e) =>{
    setMobile(e.target.value)
}

const email_handle = (e) =>{
    setEmail(e.target.value)
}
 
const submit_form = async(e) =>{
    e.preventDefault();
  await Axios.post('/send/createreq', {
    email:email,
    mobile:mobile,
    companyName:company
  }).then((res)=>{
    toast.success(res.data.message)
    setEmail('')
    setCompany('')
    setMobile('')
  }).catch((error)=>{
    toast.error(error.response.data.error)
  })
}
    return (
        <div className=' relative flex-1 flex flex-col overflow-hidden'>
           <OnBoardHeader/>
            {/* home div */}

            <div className=' relative overflow-hidden px-36   h-screen flex flex-col'>
                <div className=' gredient'></div>
                <MainHeading />
                <div className=' flex-1 flex justify-between items-center'>
                    <div className="left flex flex-col gap-6 w-2/5">
                        <h1 className=' font-semibold text-4xl text-[#00212F]'>Join Maqure
                            To Sell Nationally and  Internationally</h1>

                        <p className=' text-sm text-buyer-text-color'>Request a demo to learn how Maqure makes it easier than ever for you to market, sell and transact online.
                        </p>
                        <form onSubmit={submit_form} className=' z-40 flex flex-col gap-4 w-[21.6rem]'>
                            <input required onChange={company_handle} value={company} type="text" className=' outline-none border-[#667080] rounded-md py-2 px-4 border' placeholder='Company Name' />
                            <input required  onChange={email_handle} value={email} type="text" className=' border-[#667080] rounded-md py-2 px-4 border outline-none' placeholder='Email ' />
                            <input required onChange={mobile_handle} value={mobile} type="text" className=' border-[#667080] rounded-md py-2 px-4 border outline-none' placeholder='Phone Number' />
                            <button type='submit' className=' bg-buyer-primary py-3 px-6 text-white rounded-md'>Request A Call </button>
                        </form>

                    </div>
                    <div className="right flex">
                        <img className='h-[29rem] object-cover ' src={img} alt="" />
                    </div>
                </div>



            </div>

            <div className=''>
                {/* trusted.....part */}
                <div className='flex flex-col gap-10 py-4 my-10'>
                    <h1 className='  text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>TRUSTED BY INDUSTRY VETRANS</h1>

                    {/* trusted companies images  */}
                    <div className=' grid grid-cols-8 justify-center'>
                        <img src={company1} alt="" />
                        <img src={company2} alt="" />
                        <img src={company3} alt="" />
                        <img src={company1} alt="" />
                        <img src={company2} alt="" />
                        <img src={company3} alt="" />
                        <img src={company1} alt="" />
                        <img src={company2} alt="" />
                    </div>
                </div>
                {/* trusted part Ended */}


                {/* Get onboard part start..... */}

                <div className=' flex flex-col my-14 mb-32 '>

                    {/* heading */}
                    <div className=' space-y-2 mb-14'>
                        <h1 className='  text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Get Onboarded with us</h1>
                        <p className='text-[#637F94] text-base text-center'>Enjoy the benefits that we provide only to you. The sellers!</p>
                    </div>

                    <div className=' grid grid-cols-3 gap-10 mx-auto'>

                        {/* box_1 */}
                        <div className=' relative flex flex-col rounded-md bg-[#F8F9FC] border w-[260px] py-8 gap-3 p-3'>
                            <HiUserCircle className='mx-auto p-1 rounded-full bg-slate-300 ' size={55} />
                            <h1 className='font-semibold text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Register</h1>
                            <p className=' text-center text-[#808080] text-sm '>Schedule a call with us
                                And get your Company Registered</p>

                            {/* box cart */}
                            <img src={card1} className='absolute top-[59%] left-1/2 -translate-x-1/2 w-[188px] mx-auto' alt="" />
                        </div>

                        {/* box_2 */}
                        <div className=' relative flex flex-col rounded-md bg-[#F8F9FC] border w-[260px] h-[22rem] py-8 gap-3 p-3'>
                            <MdLocalPhone className='mx-auto p-2 rounded-full bg-slate-300 ' size={55} />
                            <h1 className='font-semibold text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Recieve</h1>
                            <p className=' text-center text-[#808080] text-sm '>Recieve a call from us and we will onboard your with us!</p>

                            {/* box cart */}
                            <img src={card2} className='absolute top-[59%] left-1/2 -translate-x-1/2 w-[188px] mx-auto' alt="" />
                        </div>

                        {/* box_3 */}

                        <div className=' relative flex flex-col rounded-md bg-[#F8F9FC] border w-[260px] h-[22rem] py-8 gap-3 p-3'>
                            <HiUserCircle className='mx-auto p-1 rounded-full bg-slate-300  ' size={55} />
                            <h1 className='font-semibold text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Start Quoting </h1>
                            <p className=' text-center text-[#808080] text-sm '>You are done! You can start recieving Demand and send your quotes </p>

                            {/* box cart */}
                            <img className='absolute top-[59%] left-1/2 -translate-x-1/2 w-[188px] mx-auto' src={card3} alt="" />
                        </div>
                    </div>

                </div>
            
               <Onboard/>

                <Map />


                {/* how maqure makes easy for you.............. */}
                <div className=' my-14'>
                    <div className=' space-y-2 mb-14'>
                        <h1 className='  text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>How Maqure Makes it easy for you!</h1>
                        <p className='text-[#637F94] text-base text-center'>Complete the whole process in 3 steps! </p>
                    </div>

                    <div className=' flex mx-auto w-fit gap-4'>
                        <div className="left h-full  items-end flex flex-col  gap-3 text-[#004968]">

                            <div  className=' hover_effect bg-[#9898981a] hover:bg-[#72ccff1a] p-4 w-[322px]'>
                                <h1 className=' text-[#004AA2]'>No Logistical Headaches</h1>
                                <p>No Logistical Headaches No Logistical HeadachesNo Logistical HeadachesNo Logistical Headaches</p>
                            </div>
                            <div  className=' hover_effect bg-[#9898981a] hover:bg-[#72ccff1a] p-4 w-[322px]'>
                                <h1 className=' text-[#004AA2]'>No Logistical Headaches</h1>
                                <p>No Logistical Headaches No Logistical HeadachesNo Logistical HeadachesNo Logistical Headaches</p>
                            </div>
                            <div  className=' hover_effect bg-[#9898981a] hover:bg-[#72ccff1a] p-4 w-[322px]'>
                                <h1 className=' text-[#004AA2]'>No Logistical Headaches</h1>
                                <p>No Logistical Headaches No Logistical HeadachesNo Logistical HeadachesNo Logistical Headaches</p>
                            </div>
                            <div  className=' hover_effect bg-[#9898981a] hover:bg-[#72ccff1a] p-4 w-[322px]'>
                                <h1 className=' text-[#004AA2]'>No Logistical Headaches</h1>
                                <p>No Logistical Headaches No Logistical HeadachesNo Logistical HeadachesNo Logistical Headaches</p>
                            </div>
                            <div  className=' hover_effect bg-[#9898981a] hover:bg-[#72ccff1a] p-4 w-[322px]'>
                                <h1 className=' text-[#004AA2]'>No Logistical Headaches</h1>
                                <p>No Logistical Headaches No Logistical HeadachesNo Logistical HeadachesNo Logistical Headaches</p>
                            </div>
                            <div  className=' hover_effect bg-[#9898981a] hover:bg-[#72ccff1a] p-4 w-[322px]'>
                                <h1 className=' text-[#004AA2]'>No Logistical Headaches</h1>
                                <p>No Logistical Headaches No Logistical HeadachesNo Logistical HeadachesNo Logistical Headaches</p>
                            </div>
                        </div>

                        <div className="right">
                            <img ref={image} className='image object-cover h-[30rem]' src={truck} alt="" />
                        </div>
                    </div>
                </div>



                {/* Benefit only for Sellers! */}

                <div className=' px-20 py-6'>

                    <div className=' space-y-2 mb-14'>
                        <h1 className='  text-4xl  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Benefits only for Sellers!</h1>
                        <p className='text-[#637F94] text-base'>Enjoy the benefits that we provide only to you. The sellers! </p>
                    </div>

                    <div className=' flex gap-5 justify-center'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>

                {/* testinimonial section started */}
                <div className='px-20 my-10'>
                    <div className=' space-y-2 mb-14'>
                        <h1 className='  text-4xl  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Testimonials</h1>
                        <p className='text-[#637F94] text-base'>Here’s What our clients have to say for us! </p>
                    </div>

                    <div className=' grid grid-cols-2 gap-4'>
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                    </div>
                </div>


                {/* footer section */}

                <div className=' my-32 w-[110%] -left-[5%]  justify-around relative flex items-center h-[475px] clips px-36 bg-[#00212F] '>
                    <div className="left rotate-[4.38deg] flex flex-col w-[35%] gap-8">
                        <h4 className=' font-semibold text-2xl italic text-white'>“Everything you need to move online — all in one place.”</h4>
                        <p className='text-[#637F94] text-xl'>Everything you need to move online — all in one place.</p>
                        <button className=' p-2 px-4 w-[345px] rounded-md bg-white'>
                            <span className=' font-semibold text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> Request A Call
                            </span>
                        </button>
                    </div>
                    <div className=" rotate-[4.38deg] ">
                        <img src={footer2} alt="" />
                    </div>
                </div>



                {/* Frequently asked questions */}


                <div className=' space-y-20 my-10'>
                    <h1 className=' text-center text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Frequently Asked Questions</h1>
                    <div className=' space-y-4'>
                    <FreqBox />
                    <FreqBox />
                    <FreqBox />
                    <FreqBox />
                    <FreqBox />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default SellerPage