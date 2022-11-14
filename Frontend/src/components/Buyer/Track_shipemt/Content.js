import React from "react";
import "../../css/content.css";

import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineArrowDropDown } from "react-icons/md";

import img from "../../Images/Chart.png";

const Content = () => {
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
    <div className="content_page">
      <div className="track_header">
        <div>
          <img src={img} alt="" />
        </div>

        <div className="total_amount">
          <p>Total Shipment</p>

          <h2>15000</h2>
        </div>
      </div>
      <div className="track_mid ">
        <div className="first">
          <div className="flex">
            <p className="flex-1">Preparing</p>
            <ChevronRightIcon className="mt-2 mr-4" />
          </div>

          <h3>15000</h3>
        </div>
        <div className="second">
          <div className="flex">
            <p className="flex-1">Preparing</p>
            <ChevronRightIcon className="mt-2 mr-4" />
          </div>
          <h3>15000</h3>
        </div>
        <div className="third">
          <div className="flex">
            <p className="flex-1">Preparing</p>
            <ChevronRightIcon className="mt-2 mr-4" />
          </div>
          <h3>15000</h3>
        </div>
      </div>

      <div className="flex gap-4 items-center mb-4 mt-7 ">
        <div className="search_cover box_shadow flex-1 rounded flex items-center p-4 bg-white">
          <input
            type="text"
            className="flex-1 outline-none"
            placeholder="search"
          />
          <FiSearch size={20} className="text-buyer-text-color" />
        </div>
        <div className="sort_cover box_shadow  relative rounded w-64 justify-between items-center flex bg-white p-4">
          <p className=" text-buyer-text-color">{optionVal}</p>
          <MdOutlineArrowDropDown
            onClick={show_option}
            className={`cursor-pointer ${options ? "rotate-180" : "rotate-0"} `}
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
      </div>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-black text-1xl font-normal ">
                <thead class="">
                  <tr className="border-b  h-12 hover:border-b  ">
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Order No
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Eta
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price Bought at
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b h-12 hover:border-b  hover:border-blue-500">
                    <td class="px-6 py-4 text-blue-400  whitespace-nowrap text-sm font-medium ">
                      #1
                    </td>
                    <td class="text-sm    font-light px-6 py-4 whitespace-nowrap">
                      Mark
                    </td>
                    <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      Otto
                    </td>
                    <td class="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                      @mdo
                    </td>
                    <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>
                    <td class="text-sm  font-light  whitespace-nowrap">
                      <NavLink to={"/track"}>
                        {" "}
                        <ChevronRightIcon />{" "}
                      </NavLink>
                    </td>
                  </tr>
                  <tr className=" border-b h-12 hover:border-b   hover:border-blue-500">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-400 ">
                      #2
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Jacob
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Thornton
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      @fat
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>
                    <td class="text-sm text-gray-900 font-light  whitespace-nowrap">
                      <NavLink to={"/track"}>
                        {" "}
                        <ChevronRightIcon />{" "}
                      </NavLink>
                    </td>
                  </tr>
                  <tr className=" border-b h-12 hover:border-b   hover:border-blue-500">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-400 ">
                      #3
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Larry
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Wild
                    </td>
                    <td class="text-sm  text-gray-900 font-light  px-6 py-4  whitespace-nowrap    ">
                      @twitter
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrapbg-green-400">
                      @mdo
                    </td>
                    <td class="text-sm text-gray-900 font-light   whitespace-nowrap">
                      <NavLink to={"/track"}>
                        {" "}
                        <ChevronRightIcon />{" "}
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
