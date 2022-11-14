import React from "react";
import OnBoardHeader from "../components/OnBoardHeader";
import cdpage from "../images/Cdpage.png";
import pens from "../images/pens.png";
import write from "../images/write.png";
import rupi from "../images/rupi.png";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import OnboardCom from "./OnboardCom";

export default function Onboard() {
  return (
    <div className=" mb-24">
      <OnboardCom/>
      <div className="flex gap-4 justify-around w-[80%] m-auto relative -top-16 ">
        <img src={cdpage} alt="" className="shadow-2xl" />
        <img src={cdpage} alt="" className="shadow-2xl" />
        <img src={cdpage} alt="" className="shadow-2xl" />
        <img src={cdpage} alt="" className="shadow-2xl" />
      </div>
      <div className="flex flex-col gap-3 text-center mt-10">
        <h1 className="text-[48px] font-[600] text-[#004AA2]">
          How Maqure Makes it easy for you!
        </h1>
        <p className="text-[18px] font-[400] text-[#637F94]">
          Complete the whole process in 3 steps!{" "}
        </p>
      </div>
   
        
        <div className="scrollbox mt-10 flex  ">
          <div className="flex flex-col sticky gap-6  ml-[6%]  justify-center items-center">
        <a href="#one"  className="active w-[50px] h-[50px] rounded-[60%]  bg-blue-500">   </a> 
        <a href="#two" className=" w-[40px] h-[40px] rounded-[60%] bg-[#D9D9D9]"> </a> 
        <a href="#three" className=" w-[20px] h-[20px] rounded-[60%] bg-[#D9D9D9] "> </a> 
          </div>
          <div  className=  " scrollbox h-[450px] overflow-y-scroll">
            <div id="one" className="flex gap-6 mt-16  w-[80%] mx-auto">
              <div>
                <img src={write} alt="" className="rounded-[10px]" />
              </div>
              <div className="flex flex-col mt-[1%] ">
                <div className="mb-3">
                  {" "}
                  <p className="text-[18px] font-[400] text-[#637F94]">
                    Step 1{" "}
                  </p>
                  <h1 className="text-[48px] font-[600] text-[#004AA2]">
                    Recieve Quote
                  </h1>
                </div>

                <div className="flex flex-col gap-7 ">
                  <div className="flex gap-4 ">
                    <DoneAllIcon className="text-blue-500" />
                    <p className="text-[18px] font-[400] ">
                      Our Partners are serving 4500+ SMEs Across India with
                      Tailor Made Financing Solutions.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <DoneAllIcon className="text-blue-500" />
                    <p className="text-[18px] font-[400] ">
                      Our Partners are serving 4500+ SMEs Across India with
                      Tailor Made Financing Solutions.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <DoneAllIcon className="text-blue-500" />
                    <p className="text-[18px] font-[400] ">
                      Our Partners are serving 4500+ SMEs Across India with
                      Tailor Made Financing Solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="two" className="flex gap-6 mt-16 w-[80%] m-auto">
              <div className="flex flex-col mt-[1%] ">
                <p className="text-[18px] font-[400] text-[#637F94]">Step 2 </p>
                <h1 className="text-[48px] font-[600] text-[#004AA2]">
                  Start Preparing
                </h1>
                <div className="flex flex-col gap-7">
                  <div className="flex gap-4 py-3">
                    <DoneAllIcon className="text-blue-500" />
                    <p className="text-[18px] font-[400] ">
                      Our Partners are serving 4500+ SMEs Across India with
                      Tailor Made Financing Solutions.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <DoneAllIcon className="text-blue-500" />
                    <p className="text-[18px] font-[400] ">
                      Our Partners are serving 4500+ SMEs Across India with
                      Tailor Made Financing Solutions.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <DoneAllIcon className="text-blue-500" />
                    <p className="text-[18px] font-[400] ">
                      Our Partners are serving 4500+ SMEs Across India with
                      Tailor Made Financing Solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img src={pens} alt="" />
              </div>
            </div>
            <div id="three" className="flex gap-6 mt-16 w-[80%] m-auto">
              <div>
                <img src={rupi} alt="" className="rounded-[10px]" />
              </div>

              <div className="flex flex-col mt-[1%] ">
                <p className="text-[18px] font-[400] text-[#637F94]">Step 3 </p>
                <h1 className="text-[48px] font-[600] text-[#004AA2]">
                  Get Paid
                </h1>
                <div className="flex flex-col gap-7">
                  <div className="flex gap-4 py-3">
                    <DoneAllIcon className="text-blue-500" />
                    <p className="text-[18px] font-[400] ">
                      Our Partners are serving 4500+ SMEs Across India with
                      Tailor Made Financing Solutions.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <DoneAllIcon className="text-blue-500" />
                    <p className="text-[18px] font-[400] ">
                      Our Partners are serving 4500+ SMEs Across India with
                      Tailor Made Financing Solutions.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <DoneAllIcon className="text-blue-500" />
                    <p className="text-[18px] font-[400] ">
                      Our Partners are serving 4500+ SMEs Across India with
                      Tailor Made Financing Solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
    </div>
  );
}