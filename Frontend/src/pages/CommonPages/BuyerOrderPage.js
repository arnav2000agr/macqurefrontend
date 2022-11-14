import React, { useRef, useState } from "react";
import img from "../../images/Vector.png";
import threed from "../../images/box.png";
import CheckIcon from "@mui/icons-material/Check";
import { FiSearch } from "react-icons/fi";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function BuyerOrderPage() {
  const [options, setOptions] = useState(false);
  const [optionVal, setOptionVal] = useState("Sort by");

  //functions
  const show_option = () => {
    setOptions(!options);
  };

  const getval = (e) => {
    setOptionVal(e.target.value);
    setOptions(false);
  };
  return (
    <div className="  px-10 py-2 h-screen overflow-y-scroll flex-1  bg-white ">
      <div className=" border-r-2">
        <p className="font-[400] text-[16px] text-[#1672DE]">#231234</p>
        <h1 className="font-[600] text-[36px]">Apixaban</h1>
        <div className="flex mt-4 items-center gap-8">
          <div className=" mr-2 flex flex-col gap-2">
            <p className="text-[#637F94] font-semibold">Quantity</p>
            <p className="text-base">3 MT</p>
          </div>
          <div className=" mr-2 flex flex-col gap-2">
            <p className="text-[#637F94] font-semibold">Has No.</p>
            <p className="text-base">29153100</p>
          </div>
          <div className=" mr-2 flex flex-col gap-2">
            <p className="text-[#637F94] font-semibold">Cas No.</p>
            <p className="text-base">503612-47-3 </p>
          </div>
          <div className=" mr-2 flex flex-col gap-2">
            <p className="text-[#637F94] font-semibold">Status</p>
            <p className="text-base bg-[#FFF61C] px-1 py-1 rounded-lg">
              Preparing{" "}
            </p>
          </div>
        </div>
        <p className="font-[400] text-[16px] text-[#637F94] mt-4">
          Price Accepted at
        </p>
        <h1 className="font-[600] text-[#1672DE] text-[36px]">Rs 15,20,222</h1>

        <div className="pt-4 ">
          <h2 className="text-[16px] font-[600] text-[#00212F] mt-8">
            Buyer's Remarks
          </h2>
          <p className="text-[#637F94] text-[14px] font-[400] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius
            deserunt, harum repellendus in, facilis ex a vitae repellat
            molestias laboriosam, optio labore amet perferendis quos explicabo
            soluta nostrum similique!
            <span className="text-[blue]">
              {" "}
              <a href="/"> read more </a>
            </span>
          </p>
        </div>
        <div className="mt-9">
          <h2 className="text-[20px] font-[600] ">Documents</h2>
        </div>
        <div className="flex justify-evenly mt-3 mb-2 w-[40%]">
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
          <div>
            <img src={img} alt="" />
            <p className="mt-1">abc.pdf</p>
          </div>
        </div>
        <p className="font-[600] text-[20px] mt-8">Invoice </p>
        <div className="flex gap-2 border-2 w-[200px] mt-3">
          <img src={img} alt="" className="px-1 py-1" />
          <div>
            <p className="mt-1 text-[#455A64] text-[16px] font-[500]">
              Sellers Invoice
            </p>
            <p className="mt-1 text-[#1672DE] text-[14px] font-[400]">
              View Now
            </p>
          </div>
        </div>
        <p className="font-[600] text-[20px] mt-8">Payment</p>
        <div className="flex gap-8 items-center mt-4">
          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-[400] text-[#637F94]">
              Payment Mode
            </p>
            <button className="text-[16px] font-[400] bg-[#C3E2FF] px-2 py-1 rounded-lg">
              Upfront Payment{" "}
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-[400] text-[#637F94]">
              Upfront Payment{" "}
            </p>
            <button className="text-[16px] font-[400] bg-[#C3FFC5] px-2 py-1 rounded-lg">
              Completed
            </button>
          </div>
        </div>
        <p className="text-[#637F94] text-[16px] font-[400] mt-6">
          Payment Proof
        </p>
        <p className="mt-2">
          Could be bank Account state or any screenshot of the payment recieved
          on your end{" "}
        </p>
        <button className="px-2 py-2 rounded-md bg-[#1672DE] mt-2 text-white">
          Upload Payment Proof
        </button>
        <p className="text-[#455A64] font-[400] mt-8">
          Sellers Bank Statements
        </p>
        <p className="text-[#1672DE] font-[400] text-[14px]">View Now</p>
        <p className="font-[600] text-[20px] mt-8">Tracking</p>
        <div className="flex gap-8 items-center mt-3">
          <div className="flex  gap-2 justify-center items-center bg-black text-white px-4  py-2">
            <img src={threed} alt="" className="px-1 w-[40px]" />
            <p>Preparing</p>
          </div>
          <div className="flex gap-2 bg-[#F1F1F1] shadow-lg px-4 py-3">
            <CheckIcon />
            <p>Preparing</p>
          </div>
        </div>
        <p className="text-[18px] font-[400] mt-6">Update Status</p>
        <div className="flex  items-center gap-4">
          <div
            className={`sort_cover border box_shadow  relative rounded w-64 justify-between items-center flex bg-white py-2 shadow-lg mt-3 `}
          >
            <p className=" text-buyer-text-color">{optionVal}</p>
            <MdOutlineArrowDropDown
              onClick={show_option}
              className={`cursor-pointer ${
                options ? "rotate-180" : "rotate-0"
              } `}
              size={20}
            />
            {options && (
              <div className="options absolute w-full left-0 top-full">
                <div className=" border bg-white">
                  <option
                    onClick={(e) => {
                      getval(e);
                    }}
                    className="py-2 px-4 hover:bg-slate-200"
                  >
                    option_1
                  </option>
                  <option
                    onClick={(e) => {
                      getval(e);
                    }}
                    className="py-2 px-4 hover:bg-slate-200"
                  >
                    option_2
                  </option>
                  <option
                    onClick={(e) => {
                      getval(e);
                    }}
                    className="py-2 px-4 hover:bg-slate-200"
                  >
                    option_3
                  </option>
                  <option
                    onClick={(e) => {
                      getval(e);
                    }}
                    className="py-2 px-4 hover:bg-slate-200"
                  >
                    option_4
                  </option>
                </div>
              </div>
            )}
          </div>
          <button className="bg-[#1672DE] text-white py-2 px-2 ">
            Update Now
          </button>
        </div>
        <p className="text-[18px] font-[400] mt-6">Having any issues ? </p>
        <button className="bg-[#1672DE] text-white py-2 px-2 mt-3 ">
          Talk to us
        </button>
      </div>
    </div>
  );
}