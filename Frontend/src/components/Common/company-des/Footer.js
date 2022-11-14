import React from "react";
import arrow from "../../../images/arrow.png";
import twiter from "../../../images/twiter.png";
import instagram from "../../../images/instagrm.png";
import linkdin from "../../../images/linkdin.png";
import fb from "../../../images/fb.png";
import "../../../css/footer.css";
export default function Footer() {
  return (
    <div className="footer border-2">
      <div className="mt-[4rem] flex flex-col gap-4 m-auto ml-[20rem] ">
        <h2 className="text-[32px] font-[600]">Talk to us! </h2>
        <p className="text-[#263238] text-[18px] font-[400]">
          Contact us to get more information.
        </p>
      </div>
      <div className="flex w-[50%] gap-8 ml-[20rem] mt-8">
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-[16px] font-[500]">Company Name</p>
          <input
            type="text"
            placeholder="Enter your registered company name"
            className=" rounded-md outline-none text-[10px] font-[400] py-3 px-8 "
          />
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <p className="text-[16px] font-[500]">Owner Name</p>
          <input
            type="text"
            placeholder="Enter the full name"
            className="rounded-md outline-none text-[10px] font-[400] py-3 px-8"
          />
        </div>
      </div>
      <div className="flex w-[50%] gap-8 ml-[20rem] mt-8">
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-[16px] font-[500]">Email ID</p>
          <input
            type="text"
            placeholder="Please enter your company email id"
            className=" rounded-md outline-none text-[10px] font-[400] py-3 px-8 "
          />
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <p className="text-[16px] font-[500]">Phone No.</p>
          <input
            type="text"
            placeholder="Please enter your company no."
            className="rounded-md outline-none text-[10px] font-[400] py-3 px-8"
          />
        </div>
      </div>
      <div className="flex w-[40%] gap-8 ml-[20rem] mt-8">
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-[16px] font-[500]">What are you Interested in?</p>
          <input
            type="text"
            placeholder="Let us know about your company and what you interested in "
            className=" rounded-md outline-none text-[10px] font-[400] py-3 px-8 "
          />
        </div>
      </div>
      <div className="flex w-[40%] gap-8 ml-[20rem] mt-8">
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-[16px] font-[500]">Any Messages </p>
          <input
            type="text"
            placeholder="Any remarks for us  "
            className=" rounded-md outline-none text-[10px] font-[400] py-3 px-8 "
          />
        </div>
      </div>
      <div className="flex ml-[20rem] w-[10%] bg-[#1672DE] py-2 rounded-md px-2  mt-6 text-center gap-2 items-center">
        <button className="text-white">Submit Now</button>
        <img src={arrow} alt="" />
      </div>
      <div className="bg-[#263238] flex mt-5 py-10 gap-32       items-center ">
        <div className=" flex flex-col ml-[10rem] gap-4 ">
          <div>
            <h1 className="text-[48px] font-[600] text-white">Maqure</h1>
          </div>
          <div className="flex gap-6 justify-around">
            <img src={instagram} alt="" />
            <img src={twiter} alt="" />
            <img src={fb} alt="" />
            <img src={linkdin} alt="" />
          </div>
        </div>
        <div>
          <div className="flex  text-white gap-10 py-3 px-3 text-center ">
            <div className=" flex flex-col gap-3 justify-around">
              <p>Home</p>
              <p>Buyers</p>
              <p>Terms & Condition</p>
            </div>
            <div className="flex flex-col gap-3 justify-around ">
              <p>What do we do ? </p>
              <p>Sellers</p>
              <p>Privacy Policy </p>
            </div>
            <div className="flex flex-col  gap-3">
              <p>About Us</p>
              <p>Credit Facility</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white">
        <h2 className="text-[20px] font-[600] text-white">Our Location</h2>
        <p className="text-[16px] font-[400] w-[200px]">
          1st floor
         Prahladnagar, 
          Ahmedabad Pincode-312526
        </p>
      </div>
      </div>
     
    </div>
  );
}
