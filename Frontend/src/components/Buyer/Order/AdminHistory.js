import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import img from "../../../images/Chart.png";
import SearchBox from "../../SearchBox";
import { Axios } from '../../Axios'
import ExploreProducts from "../../../pages/Buyer/ExploreProducts";

export default function History({user}) {
    const [bids, setBids] = useState(user.bids)

    console.log(user)
    useEffect(() => {
        
    }, [])


    return (
        <div className="pt-24  pb-10 px-14 flex-1 overflow-y-scroll h-screen">
            <div className="track_header mb-6 bg-white p-3 rounded-md shadow-md">
                <div>
                    <img src={img} alt="" />
                </div>

                <div className="total_amount">
                    <p>Total Shipment</p>
                    <h2>15000</h2>
                </div>
            </div>


            {/* table start */}
            <div className="flex flex-col mt-5 bg-white p-3 rounded-md shadow-md">
                <div className="my-3">
                    <SearchBox />
                </div>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">

                            {bids.filter(bid => bid.quote_status === 'accepted').length > 0 ?
                                <div>
                                    <div className="flex">
                                        <div className="text-sm px-6  w-1/4 font-medium text-gray-900 py-4">
                                            Order No
                                        </div>
                                        <div className="text-sm px-6  w-1/4 font-medium text-gray-900 py-4">
                                            Product Name
                                        </div>
                                        <div className="text-sm px-6  w-1/6 font-medium text-gray-900 py-4">
                                            Delivered at
                                        </div>
                                        <div className="text-sm px-6 w-1/6  font-medium text-gray-900 py-4">
                                            Price Bought at
                                        </div>
                                        <div className="text-sm  w-1/6 font-medium text-gray-900 py-4">
                                        </div>
                                    </div>

                                    {
                                        bids.filter(bid => bid.quote_status === 'accepted').length > 0 ?
                                            bids.filter(bid => bid.quote_status === 'accepted').map((elem) => {
                                                return (
                                                    <div key={elem._id} className="flex my-1 border rounded-md hover:border-blue-500">
                                                        <div className="px-6 w-1/4 py-4  text-blue-400  whitespace-nowrap text-sm font-medium ">
                                                            {elem._id}
                                                        </div>
                                                        <div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
                                                            {elem.product ? elem.product.name : 'null'}
                                                        </div>
                                                        <div className="text-sm w-1/6  font-light px-6 py-4 whitespace-nowrap">
                                                            12/12/12
                                                        </div>
                                                        <div className="text-sm w-1/6   font-light px-6 py-4 whitespace-nowrap">
                                                            Rs. {elem.buyer_Price}
                                                        </div>
                                                        <div className="text-sm w-1/6 font-light  whitespace-nowrap m-auto flex justify-center">
                                                            <button className="bg-[#004E97] hover:bg-[#187bd7] text-white p-2 rounded-md">View Order</button>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :
                                            <ExploreProducts />
                                    }
                                </div>
                                :
                                <ExploreProducts />
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}