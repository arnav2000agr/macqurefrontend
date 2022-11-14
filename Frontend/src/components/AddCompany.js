import React from "react";
import simg from "../images/simg.png";
import files from "../images/files.png";

export default function Buyertable() {
  return (
    <div className="ml-6 w-[80%] overflow-y-auto">
      <h1 className="font-[400] text-[24px] mt-20 p-2 ">Add Company Details </h1>
      <div className="flex gap-3 p-2">
        <img src={simg} alt="" className="p-5 bg-[#DEEFFF] " />
        <div className="flex gap-1 justify-center flex-col ">
          <p className="text-[#0377EB] text-[16px] font-[600]">
            Upload Company Logo
          </p>
          <p className="text-[#757575] text-[11px] font-[400]">
            Should not be more than 1080x1080px
          </p>
        </div>
      </div>
      <div className="flex  gap-3 flex-col mt-4">
        <div className="flex gap-8 p-2  ">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">
              Company Name
            </p>
            <input
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Substance</p>
            <input
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter Substance Name"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">EC Number </p>
            <input
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the EC Number "
            />
          </div>
        </div>
        <div className="flex gap-8 p-2">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">CAS Number</p>
            <input
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the CAS Category  "
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Min Purity </p>
            <input
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Min Purity "
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Min Purity </p>
            <input
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Min Purity "
            />
          </div>
        </div>
        <div className="flex gap-8 p-2">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Apperance </p>
            <input
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Apperance Details"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Category</p>
            <input
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Category"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 gap-2">
      <p>Product Description</p>
      <textarea name="" id="" cols="10" rows="5" placeholder="Enter the Product Description "  ></textarea>
      </div>
      <div className="flex flex-col p-2 gap-2">
      <p>Product Description</p>
      <textarea name="" id="" cols="10" rows="5" placeholder="Enter the Product Description "  ></textarea>
      </div>
      <div className="flex flex-col gap-3 mt-3 p-2">
      <p className="text-[16px] font-[400]">
      Upload Relevent Document 
      </p>
      <div className="bg-[#DEEFFF] flex gap-3 w-[20%] p-3">
      <img src={files} alt="" />
      <p className="text-[#1672DE] text-[16px ] font-[400]">Upload Document</p>
      </div>
      </div>
      <button className="font-[600] text-[16px] bg-[#1672DE] text-[#ffff] p-3 mt-3 ml-2 ">Add Company</button>
    </div>
  );
}