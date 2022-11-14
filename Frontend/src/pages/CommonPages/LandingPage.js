import React, { useEffect, useState } from "react";
import pbb from "../../images/pbb.png";
import pag from "../../images/pag.png";
import rightcheck from "../../images/rightcheck.png";
import notepage from "../../images/notepage.png";
import truckone from "../../images/truckone.png";
import mainimg from "../../images/mainimg.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OtherCompany from "../../components/Common/company-des/OtherCompany";
import half from "../../images/half.png";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Login from '../../components/Common/Login/Login'

import rightkon from "../../images/rightkon.png";
import homebox from "../../images/homebox.png";
import chatdol from "../../images/chatdol.png";
import pics from "../../images/pics.png"
import pic from "../../images/pic.jpeg"

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Review from "../../components/Review";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../../images/logo.png'
import OnBoardHeader from "../../components/OnBoardHeader";
import Slider from "react-slick";
import ProductSlide from "../../components/ProductSlide";
import { Axios } from "../../components/Axios";



export default function LandingPage() {

    const [products, setProducts] = useState([])
    const [showModal, setShowModal] = useState(false)


    const navigate = useNavigate()


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    const redirect = (id) => {
        navigate(`/prod/${id}`)
    }

    useEffect(() => {
     const getdata = async()=>{
       const {data} =  await Axios.get('/get/products')
       setProducts(data.products)
     }

     getdata()

    }, [])

    return (
        <div className=" flex-1 overflow-hidden relative top-0">

             {
                showModal &&
                <>
                <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                    <Login setShowModal={setShowModal} />
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
             }
             

            <OnBoardHeader setShowModal={setShowModal} />
            <div className="flex mt-24">
                <div className=" z-10  flex flex-col gap-3 mt-16 relative left-12">
                    <div className="flex flex-col gap-0">
                        <p className="font-[400] text-[40px]">
                            Solution to your end to end
                        </p>
                        <p className="font-[600] text-[40px] text-[#004AA2]">
                            Material Procurement & financing{" "}
                        </p>
                    </div>

                    <img src={pbb} className="w-[223px] h-[23px] mt-3" alt="" />
                    <p className="w-[600px] text-[#455A64]">
                        Maqure helps you acheive the highest efficiently in getting all your
                        material procurement and financing needs with the power of
                        blockchain!
                    </p>
                    <div className="flex gap-3 rounded-md mt-4 ">
                        <div className="bg-[#ffff] shadow-md p-4  flex flex-col  gap-3 w-[144px] h-[164px]">
                            <img src={pag} className="h-[30px] w-[30px]" alt="" />
                            <p className="font-[500] text-[15px]">Health Care & Pharma </p>
                            <div className="flex">
                                <p className="text-[#004AA2] flex flex-1">Explore</p>
                                <div className="bg-[#004AA2] p-1 rounded-2xl">
                                    <ChevronRightIcon className="text-[#ffff]" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#ffff] shadow-md p-4  flex flex-col gap-3 w-[144px] h-[164px] rounded-md">
                            <img src={pag} className="h-[30px] w-[30px]" alt="" />
                            <p className="font-[500] text-[15px]">Health Care & Pharma </p>
                            <div className="flex">
                                <p className="text-[#004AA2] flex flex-1">Explore</p>
                                <div className="bg-[#004AA2] p-1 rounded-2xl">
                                    <ChevronRightIcon className="text-[#ffff]" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#ffff] shadow-md p-4  flex flex-col gap-3 w-[144px] h-[164px] rounded-md">
                            <img src={pag} className="h-[30px] w-[30px]" alt="" />
                            <p className="font-[500] text-[15px]">Health Care & Pharma </p>
                            <div className="flex">
                                <p className="text-[#004AA2] flex flex-1">Explore</p>
                                <div className="bg-[#004AA2] p-1 rounded-2xl">
                                    <ChevronRightIcon className="text-[#ffff]" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#ffff] shadow-md p-4  flex flex-col gap-3 w-[144px] h-[164px] rounded-md">
                            <img src={pag} className="h-[30px] w-[30px]" alt="" />
                            <p className="font-[500] text-[15px]">Health Care & Pharma </p>
                            <div className="flex">
                                <p className="text-[#004AA2] flex flex-1">Explore</p>
                                <div className="bg-[#004AA2] p-1 rounded-2xl">
                                    <ChevronRightIcon className="text-[#ffff]" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#ffff] shadow-md p-4  flex flex-col gap-3 w-[144px] h-[164px] rounded-md">
                            <img src={pag} className="h-[30px] w-[30px]" alt="" />
                            <p className="font-[500] text-[15px]">Health Care & Pharma </p>
                            <div className="flex">
                                <p className="text-[#004AA2] flex flex-1">Explore</p>
                                <div className="bg-[#004AA2] p-1 rounded-2xl">
                                    <ChevronRightIcon className="text-[#ffff]" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#ffff] shadow-md p-4  flex flex-col gap-3 w-[144px] h-[164px] rounded-md">
                            <img src={pag} className="h-[30px] w-[30px]" alt="" />
                            <p className="font-[500] text-[15px]">Health Care & Pharma </p>
                            <div className="flex">
                                <p className="text-[#004AA2] flex flex-1">Explore</p>
                                <div className="bg-[#004AA2] p-1 rounded-2xl">
                                    <ChevronRightIcon className="text-[#ffff]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => navigate('/products')} className="bg-[#004AA2] px-3 py-2 w-[220px] mt-3 text-[#ffff]">
                        View All Products <ChevronRightIcon className="text-[#ffff]" />{" "}
                    </button>
                </div>
                <div className=" -z-0">
                    <img src={mainimg} alt="" className="w-[540px] h-[613px]" />
                </div>
            </div>
            <h1 className="text-[#062940] font-[600] text-[40px] pl-12 mt-10">
                Our Biggest Sellers
            </h1>
            <p className="text-[#455A64] text-[18px] font-[400] pl-12 w-[550px] mt-2">
                Maqure has teamed up with the biggest seller across the country to
                ensure quality and timely delivery.{" "}
            </p>
            <div className="gap-6 px-12 items-center my-3">
                <div className="">
                <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
	</div>
</div>




                
                    {/* <ProductSlide/> */}
                </div>
            </div>
            <div className="flex flex-col pl-12 ">
                <p className="text-[#004AA2] text-[18px] mt-2 fomt-[400]">Why Maqure</p>
                <h1 className="text-[#062940] font-[600] text-[40px] w-[600px] ">
                    {" "}
                    Buying and Selling Materials has never been easier
                </h1>
                <p className="w-[550px] text-[#455A64] text-[18px] font-[400] ">
                    Maqure has teamed up with the biggest seller across the country to
                    ensure quality and timely delivery.{" "}
                </p>
            </div>
            <div className="gap-72 px-12 mt-10">
                <div className="gap-4  ">

                    <Slider className=" gap-4" {...settings}>
                        
                    <div className="gap-3  flex flex-col bg-[#ffff] shadow-xl p-3">
                        <img src={truckone} className="w-[50px] h-[40px]" alt="" />
                        <h1 className="text-[32px] font-[600]">Logistics</h1>
                        <p className="text-[16px] font-[400] w-[300px]">
                            Through Maqure, Save time & Money,by procuring raw material from
                            any among the hunderds of suppliers at a gauranteed lowest price
                            in the market .
                        </p>
                        <p className="text-[#004AA2]">Read more</p>
                    </div>
                    <div className="gap-3 flex flex-col bg-[#ffff] shadow-xl p-3">
                        <img src={rightcheck} className="w-[50px] h-[40px]" alt="" />
                        <h1 className="text-[32px] font-[600]">Quality</h1>
                        <p className="text-[16px] font-[400] w-[300px]">
                            Through Maqure, Save time & Money,by procuring raw material from
                            any among the hunderds of suppliers at a gauranteed lowest price
                            in the market .
                        </p>
                        <p className="text-[#004AA2]">Read more</p>
                    </div>
                    <div className="gap-3 flex flex-col bg-[#ffff] shadow-xl p-3">
                        <img src={notepage} className="w-[50px] h-[40px]" alt="" />
                        <h1 className="text-[32px] font-[600]">
                            Transperancy & Tracebility
                        </h1>
                        <p className="text-[16px] font-[400] w-[300px]">
                            Through Maqure, Save time & Money,by procuring raw material from
                            any among
                        </p>
                        <p className="text-[#004AA2]">Read more</p>
                    </div>
                    <div className="gap-3 flex flex-col bg-[#ffff] shadow-xl p-3">
                        <img src={rightcheck} className="w-[50px] h-[40px]" alt="" />
                        <h1 className="text-[32px] font-[600]">Quality</h1>
                        <p className="text-[16px] font-[400] w-[300px]">
                            Through Maqure, Save time & Money,by procuring raw material from
                            any among the hunderds of suppliers at a gauranteed lowest price
                            in the market .
                        </p>
                        <p className="text-[#004AA2]">Read more</p>
                    </div>
                    <div className="gap-3 flex flex-col bg-[#ffff] shadow-xl p-3">
                        <img src={rightcheck} className="w-[50px] h-[40px]" alt="" />
                        <h1 className="text-[32px] font-[600]">Quality</h1>
                        <p className="text-[16px] font-[400] w-[300px]">
                            Through Maqure, Save time & Money,by procuring raw material from
                            any among the hunderds of suppliers at a gauranteed lowest price
                            in the market .
                        </p>
                        <p className="text-[#004AA2]">Read more</p>
                    </div>
                    </Slider>
                </div>

                <BsArrowDownCircleFill className=" text-[30px] text-[#004AA2] -rotate-90" />
            </div>
            <div className=" mt-16 bg-black ">
                <h1 className="text-white w-[350px] relative top-32 left-24 font-[600] text-[36px]">
                    We Supply all over the World !{" "}
                </h1>
                <p className="text-white relative top-36 left-24 ">
                    Raise a Demand and Leave everything to us!{" "}
                </p>
                <img src={half} alt="" className="h-[300px] w-full" />
                <button className="signup bg-[#fbfbfb] rounded-lg px-8 py-2 relative bottom-32 left-24" onClick={() => { navigate('/products') }}>
                    <span>Buy Now!{" "}</span>
                </button>
            </div>
            <h1 className="font-[600] text-[40px] mt-10 w-[50%] ml-[25%]">
                How Maqure makes sure you always get the Best Price!
            </h1>
            <p className="font-[400]  text-[18px] w-[50%] ml-[25%] mt-6 ">
                We Apply a 3 step Process to make sure you get the best price!{" "}
            </p>
            <div className="bg-[#E2F4FF] flex gap-5 rounded-lg p-4 w-[65%] m-auto mt-7">
                <div className=" border-r-2 border-r-[#1e94dd] ">
                    <img src={homebox} className="p-2" alt="" />
                    <p className="text-[#004AA2] font-[600] text-[24px]">Raise A RFQ</p>
                    <p className="font-[400] text-[18px]">
                        Raise a demand from our comprehensive product catalog from multiple
                        Sellers.
                    </p>
                </div>

                <div className=" border-r-2 border-r-[#1e94dd] px-4">
                    <img src={chatdol} className="p-2" alt="" />
                    <p className="text-[#004AA2] font-[600] text-[24px]">Bidding </p>
                    <p className="font-[400] text-[18px]">
                        We Recive Quotes from the demand raised and sort throught them.
                    </p>
                </div>

                <div className="  ">
                    <img src={rightkon} className="p-2" alt="" />
                    <p className="text-[#004AA2] font-[600] text-[24px]">Finalizing</p>
                    <p className="font-[400] text-[18px]">
                        Finally an Agreed upon rate is Fixed and we start working for you to
                        make you get the material on time!
                    </p>
                </div>
            </div>
            <button onClick={() => { navigate('/products') }} className="w-[20%] ml-[40%] bg-[#004AA2] py-2  mt-10 font-[700] text-[16px] text-[#ffff] ">
                Get Started Now!{" "}
            </button>
            <div className="bg-[#000000] text-white mt-24 border pb-24">
                <div className="w-[80%] ml-[15%]  mt-10 ">
                    <p className="font-[600] text-[48px] mt-4 ">
                        We Partner with Financial Institutions to Solve your Financial
                        Problems
                    </p>
                    <p className="font-[400] text-[18px] m">
                        Our Partners are serving 4500+ SMEs Across India with Tailor Made
                        Financing Solutions.
                    </p>
                </div>
                <div className="flex gap-3 ml-[15%] mt-10">
                    <div className="bg-[#D6E2E9] text-[24px] text-[#9D9D9D] font-[600] text-center  py-6 px-6">
                        Company logo
                    </div>
                    <div className="bg-[#D6E2E9] text-[24px] text-[#9D9D9D] font-[600] text-center py-6 px-6">
                        Company logo
                    </div>
                    <div className="bg-[#D6E2E9] text-[24px] text-[#9D9D9D] font-[600] text-center py-6 px-6">
                        Company logo
                    </div>
                    <div className="bg-[#D6E2E9] text-[24px] text-[#9D9D9D] font-[600] text-center py-6 px-6">
                        Company logo
                    </div>
                </div>
            </div>

            {/* bhut vasu start  */}

            <div className="flex justify-center align-middle w-full">
                <div className="flex flex-col bg-white px-20">
                    <p className='font-semibold text-2xl'>Testimorials</p>
                    <p className='text-[#637F94]'>Here’s What our clients have to say for us! </p>

                    <div className="my-4 flex overflow-x-scroll">
                        <Carousel autoPlay={true} interval={1000} showThumbs={false} >
                            <div className=" flex justify-between gap-4">
                                <Review />
                                <Review />
                            </div>
                            <div className=" flex justify-between gap-4">
                                <Review />
                                <Review />
                            </div>
                            <div className=" flex justify-between gap-4">
                                <Review />
                                <Review />
                            </div>

                        </Carousel>



                    </div>

                    <div className="mt-10 text-center">
                        <p className='text-[#004AA2] text-3xl font-semibold mb-1'>100+ Product Categories</p>
                        <p className='text-[#637F94] text-sm'>Raw Materials at Lowest Prices-Guaranteed</p>

                        <div className=" w-11/12 grid grid-cols-4 gap-4 mx-auto justify-between mt-6">

                            {products && products.map((elem, index) => {
                                return (
                                    <div key={elem._id} className="w-64 flex flex-col rounded-md shadow-lg ">
                                        <div className="">
                                            <img src={pic} className="h-36 w-64 rounded-t-md" />
                                        </div>
                                        <div className="p-3">
                                            <p className='text-start text-[#637F94] text-sm'>Name</p>
                                            <p className="text-start">{elem.name.length > 25 ?
                                                <>
                                                    {elem.name.slice(0, 25)}
                                                    <span className="span">....</span>
                                                </>
                                                :
                                                elem.name.slice(0, 25)
                                            }</p>
                                        </div>

                                        <div className="mt-2 border border-transparent border-t-gray-200 flex justify-between p-3">
                                            <ArrowUpwardIcon className="text-white bg-[#58A9E4] rounded-full my-auto" fontSize="medium" />
                                            <button onClick={() => redirect(elem._id)} className='text-[#1E94DD] font-medium my-2'>View Product</button>
                                        </div>

                                    </div>
                                )
                            })
                            }


                        </div>



                        <button onClick={() => navigate('/products')} className='text-white bg-[#004AA2] my-16 rounded-md py-2 px-3'>View All Products</button>
                    </div>

                </div>
            </div>
            <div className="bg-black p-28 h-[450px]">
                <h1 className="text-4xl font-medium text-white w-1/5">You Can Sell On Maqure As Well!</h1>
                <p className="mt-2 text-white w-1/3">Request a demo to learn how Maqure makes it easier than ever for you to market, sell and transact online.</p>
                <button className="signup bg-white rounded-md mt-4 px-5 py-2"><span>Become a Seller</span></button>
            </div>

        </div>
    );
}
