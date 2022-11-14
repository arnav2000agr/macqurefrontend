import React from "react";

import ClearIcon from "@mui/icons-material/Clear";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function ProductReqpopUp({setShowModal}) {
  return (
    <div className="">
      <div className=" m-auto border  mx-auto bg-[#E3E9EF] p-3  overflow-y-auto ">
        <div className="flex border ">
       
            <h1 className="font-[400] text-[24px] p-2 flex-1 ">
              Product Details{" "}
            </h1>
            <div className="   ">
            <ClearIcon className=" cursor-pointer" onClick={()=>setShowModal(false)} />
            </div>
        
        </div>

        <div className="flex gap-3 p-2">
         <DriveFolderUploadIcon/>
          <div className="flex gap-1 justify-center flex-col ">
            <p className="text-[#0377EB] text-[16px] font-[600]">
              Upload Product Image
            </p>
            <p className="text-[#757575] text-[11px] font-[400]">
              Should not be more than 1080x1080px
            </p>
          </div>
        </div>
        <div className="flex  gap-3 flex-col mt-4">
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                Product Name
              </p>
              <input
                type="text"
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Substance</p>
              <input
                type="text"
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter Substance Name"
              />
            </div>
          </div>
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                CAS Number
              </p>
              <input
                type="text"
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the CAS Category  "
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                EC Number{" "}
              </p>
              <input
                type="text"
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the EC Number "
              />
            </div>
          </div>
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                Min Purity
              </p>
              <input
                type="text"
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Min Purity "
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Color</p>
              <input
                type="text"
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Color "
              />
            </div>
          </div>
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Apperance</p>
              <input
                type="text"
                className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Apperance Details"
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
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
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            className=" p-2 rounded-md"
            placeholder="Enter the Product Description "
          ></textarea>
        </div>
        <div className="flex flex-col p-2 gap-2">
          <p>Product Synonyms</p>
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            className="rounded-md p-2"
            placeholder="Let us know more about your company  "
          ></textarea>
        </div>
        <div className="flex flex-col gap-3 mt-3 p-2">
          <p className="text-[16px] font-[400]">Upload Relevent Document</p>
          <div className="bg-[#DEEFFF] flex gap-3  w-fit p-3">
            <UploadFileIcon/>
            <p className="text-[#1672DE] text-[16px ] font-[400]">
              Upload Document
            </p>
          </div>
        </div>
        <button  onClick={()=>{setShowModal('added')}} className="font-[600] text-[16px] bg-[#1672DE] text-[#ffff] px-3 py-2 mt-3 ml-2 ">
        Send Request</button>
      </div>
    </div>
  );
}