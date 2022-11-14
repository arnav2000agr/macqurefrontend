import React from "react";
import img from "../../../images/triangle.png";
import { FiSearch } from "react-icons/fi";
import PeopleIcon from "@mui/icons-material/People";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CompanyBox from "./CompanyBox";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Otherproduct from "./Otherproduct";
import OtherCompany from "./OtherCompany";


export default function ContentOfCd() {
  return (
    <div className=" bg-[ #FBFBFB]  ml-[4rem] flex flex-col p-4  ">
      <h2 className="text-[36px] mt-6 font-[600]">Sasol</h2>
      <div className="flex gap-6">
        <div className="flex items-center py-2 px-3 gap-4    justify-around bg-[#E0F3FF] mt-4 ">
          <img src={img} alt="" className=" " />
          <p>Globle Chemicals And Energy Company</p>
        </div>
        <div className="flex items-center py-2 px-3 gap-4   justify-around bg-[#E0F3FF] mt-4   ">
          <PeopleIcon />
          <p>Globle Chemicals And Energy Company</p>
        </div>
      </div>
      <div className="w-[60%]  mt-6">
        <h2 className="text-[24px] font-[600]">About us</h2>
        <p className="text-[20px] font-[500] ml-4 mt-3">
          Innovating For A Better World
        </p>
        <p className="mt-4 ml-4 text-[#637F94] ">
          Innovating for a better world We at Sasol Chemicals innovate for a
          better world and deliver long-term value to our customers, communities
          and society. Our broad portfolio of high-value products plays an
          integral role in the creation of numerous solutions that benefit the
          lives of millions of people. Thousands of companies around the world
          leverage our technology, world-class facilities, expertise and
          collaborative approach to tackle their challenges.
        </p>
      </div>
      <hr className="w-[80%] mt-4 bg-[#637F94] h-0.5" />
      <h2 className="text-[24px] font-[600]  mt-6 ">
        Certification & Documentation
      </h2>
      <div className="flex mt-4 gap-4 ">
        <div className="flex  items-center py-2 px-4 gap-4 border-2 border-black">
          <FileCopyIcon />
          <p className="text-[16px] font-[400] ">Download Documents</p>
        </div>
        <div className="flex  items-center py-2 px-4 gap-4 border-2 border-black">
          <FileCopyIcon />
          <p className="text-[16px] font-[400]">Download Certificate</p>
        </div>
      </div>
      <hr className="w-[80%] mt-12 bg-[#637F94] h-0.5" />
      <div className=" mt-4 flex items-center gap-4">
        <h1 className="text-[24px] font-[600]">Most Popular Product</h1>
        <p className="text-[16px] font-[400] text-[#1672DE] mt-4 ">View all</p>
      </div>
      <div className="search_cover box_shadow flex-1 rounded flex items-center p-4 shadow-2xl mt-5 w-[40%] bg-white">
        <input
          type="text"
          className="flex-1 outline-none"
          placeholder="search"
        />
        <FiSearch size={20} className="text-buyer-text-color" />
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-4 w-[85%]">
          <CompanyBox />
          <CompanyBox />
          <CompanyBox />
          <CompanyBox />
        </div>
        <BsArrowDownCircleFill className=" text-[30px] text-[#1672DE] -rotate-90" />
      </div>
      <div className=" mt-8 flex gap-4">
        <h1 className="text-[24px] font-[600]">Other Product</h1>
        <p className="text-[16px] font-[400] text-[#1672DE] mt-4 ">View all</p>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-4 w-[85%]">
          <Otherproduct />
          <Otherproduct />
          <Otherproduct />
          <Otherproduct />
        </div>
        <BsArrowDownCircleFill className=" text-[30px] text-[#1672DE] -rotate-90" />
      </div>
      <h1 className="text-[24px] font-[600] mt-7">Other Companies</h1>
      <div className="flex gap-6 items-center my-3">
        <div className="flex gap-4 w-[85%]">
          <OtherCompany />
          <OtherCompany />
          <OtherCompany />
          <OtherCompany />
        </div>
        <BsArrowDownCircleFill className=" text-[30px] text-[#1672DE] -rotate-90" />
      </div>
     


    </div>
  );
}
