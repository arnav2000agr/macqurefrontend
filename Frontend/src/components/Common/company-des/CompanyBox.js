import React from "react";
import company from "../../../images/company.png";
import { BsArrowDownCircleFill } from "react-icons/bs";

const CompanyBox = () => {
  return (
    <div className=" flex flex-col  mt-7  ">
      <div className="flex flex-col  border  gap-4 text-sm">
        <div className=" relative bg-slate-400">
          <img className="image w-full h-full" src={company} alt="" />
          <div className=" absolute bottom-0 w-full p-4 flex flex-col gap-2">
            <h1 className="  text-white text-xl">ISOFOL 28</h1>
            <hr className=" bg-white  w-full" />
          </div>
        </div>

        <div className="p-3 flex flex-col  gap-4">
          <div className=" flex flex-col gap-1 ">
            <p className="  text-[#637F94]">INCI Name</p>
            <h4 className="">Dodecylhexadecanol</h4>
          </div>

          <div className=" flex flex-col gap-1">
            <p className="  text-[#637F94]">Chemical Family </p>
            <p className=" ">Alcohols</p>
          </div>

          <div className=" flex flex-col gap-1">
            <p className="  text-[#637F94]">Functions</p>
            <p className=" ">
              Coupling Agent, Solubilizer, Slip Agent, Intermediate, Emollient,
              Conditioner, Chemical Intermediate
            </p>
          </div>

          <hr />

          <div className=" flex text-[#58A9E4] justify-between items-center">
            <BsArrowDownCircleFill size={30} />
            <h3 className=" cursor-pointer text-base">View Product</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBox;
