import React, { useEffect, useState } from "react";
import Box from '../../Box'
import { NavLink } from "react-router-dom";
import img from "../../../images/Chart.png";
import SearchBox from "../../SearchBox";
import { Axios } from "../../Axios";
import ExploreProducts from "../../../pages/Buyer/ExploreProducts";

const AdminTrack = ({user}) => {
    const [options, setOptions] = useState(false);
    const [optionVal, setOptionVal] = useState("Sort by");
    const [status, setStatus] = useState(null)
    const [bids, setBids] = useState(user.bids);

    //functions
    const show_option = () => {
        setOptions(!options);
    };

    const getval = (e) => {
        setOptionVal(e.target.value);
        setOptions(false);
    };

    const status_prepare = () => {
        setStatus('preparing')
    }
    const status_inTransit = () => {
        setStatus('InTransit')
    }
    const status_delivered = () => {
        setStatus('delivered')

    }


    useEffect(() => {
        
    }, [status]);

    return (
        <div className="pt-24 pb-10 px-14 flex-1 overflow-y-scroll h-screen">
            <div className="track_header mb-6 bg-white flex flex-col p-3 rounded-md box_shadow">
                <div className="flex gap-3">
                    <div>
                        <img src={img} alt="" />
                    </div>

                    <div className="total_amount">
                        <p>Total Shipment</p>
                        <h2>15000</h2>
                    </div>
                </div>

                <div className="bg-white p-3 rounded-md">
                    <div className="box_cont flex gap-5">
                        <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'preparing' && 'bg-buyer-primary text-white'} `} onClick={status_prepare}>
                            <Box content={'preparing'} bids={bids} />
                        </div>
                        <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'InTransit' && 'bg-buyer-primary text-white'} `} onClick={status_inTransit}>
                            <Box content={'inTransit'} bids={bids} />
                        </div>
                        <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'delivered' && 'bg-buyer-primary text-white'} `} onClick={status_delivered}>
                            <Box content={'delivered'} bids={bids} />
                        </div>
                    </div>
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
                            {bids.filter((bid) => bid.quote_status === "accepted").length > 0 ? (
                                <div>
                                    <div className="flex">
                                        <div className="text-sm w-1/4 font-medium text-gray-900 py-4 px-6">
                                            Order No
                                        </div>
                                        <div className="text-sm px-6 w-1/4 font-medium text-gray-900 py-4">
                                            Product Name
                                        </div>
                                        <div className="text-sm px-6 w-1/6 font-medium text-gray-900 py-4">
                                            Delivered at
                                        </div>
                                        <div className="text-sm w-1/6 px-6 font-medium text-gray-900 py-4">
                                            Price Bought at
                                        </div>
                                        <div className="text-sm  w-1/6 font-medium text-gray-900 py-4"></div>
                                    </div>

                                    {
                                        status === '' ?
                                            bids.filter((bid) => bid.quote_status === "accepted").map((elem) => {
                                                return (
                                                    <div key={elem._id} className="flex my-1 border rounded-md hover:border-blue-500">
                                                        <div className="px-6 w-1/4 py-4  text-blue-400  whitespace-nowrap text-sm font-medium ">
                                                            {elem._id}
                                                        </div>
                                                        <div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
                                                            {elem.product ? elem.product.name : "null"}
                                                        </div>
                                                        <div className="text-sm w-1/6  font-light px-6 py-4 whitespace-nowrap">
                                                            Eta
                                                        </div>
                                                        <div className="text-sm w-1/6   font-light px-6 py-4 whitespace-nowrap">
                                                            Rs. {elem.buyer_Price}
                                                        </div>
                                                        <div className="text-sm w-1/6 font-light  whitespace-nowrap m-auto flex justify-center">
                                                            <button className="bg-[#004E97] hover:bg-[#187bd7] text-white p-2 rounded-md">
                                                                View Order
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                            :
                                            status !== 'preparing' ?
                                                status !== 'inTransit' ?
                                                    bids.filter((bid) => bid.order_status === "delivered").length > 0 ?
                                                        bids.filter((bid) => bid.order_status === "delivered").map((elem) => {
                                                            return (
                                                                <div key={elem._id} className="flex my-1 border rounded-md hover:border-blue-500">
                                                                    <div className="px-6 w-1/4 py-4  text-blue-400  whitespace-nowrap text-sm font-medium ">
                                                                        {elem._id}
                                                                    </div>
                                                                    <div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
                                                                        {elem.product ? elem.product.name : "null"}
                                                                    </div>
                                                                    <div className="text-sm w-1/6  font-light px-6 py-4 whitespace-nowrap">
                                                                        Eta
                                                                    </div>
                                                                    <div className="text-sm w-1/6   font-light px-6 py-4 whitespace-nowrap">
                                                                        Rs. {elem.buyer_Price}
                                                                    </div>
                                                                    <div className="text-sm w-1/6 font-light  whitespace-nowrap m-auto flex justify-center">
                                                                        <button className="bg-[#004E97] hover:bg-[#187bd7] text-white p-2 rounded-md">
                                                                            View Order
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                        :
                                                        <ExploreProducts />
                                                    :
                                                    bids.filter((bid) => bid.order_status === "inTransit").length > 0 ?
                                                        bids.filter((bid) => bid.order_status === "inTransit").map((elem) => {
                                                            return (
                                                                <div key={elem._id} className="flex my-1 border rounded-md hover:border-blue-500">
                                                                    <div className="px-6 w-1/4 py-4  text-blue-400  whitespace-nowrap text-sm font-medium ">
                                                                        {elem._id}
                                                                    </div>
                                                                    <div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
                                                                        {elem.product ? elem.product.name : "null"}
                                                                    </div>
                                                                    <div className="text-sm w-1/6  font-light px-6 py-4 whitespace-nowrap">
                                                                        Eta
                                                                    </div>
                                                                    <div className="text-sm w-1/6   font-light px-6 py-4 whitespace-nowrap">
                                                                        Rs. {elem.buyer_Price}
                                                                    </div>
                                                                    <div className="text-sm w-1/6 font-light  whitespace-nowrap m-auto flex justify-center">
                                                                        <button className="bg-[#004E97] hover:bg-[#187bd7] text-white p-2 rounded-md">
                                                                            View Order
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                        :
                                                        <ExploreProducts />
                                                :
                                                bids.filter((bid) => bid.order_status === "preparing").length > 0 ?
                                                    bids.filter((bid) => bid.order_status === "preparing").map((elem) => {
                                                        return (
                                                            <div key={elem._id} className="flex my-1 border rounded-md hover:border-blue-500">
                                                                <div className="px-6 w-1/4 py-4  text-blue-400  whitespace-nowrap text-sm font-medium ">
                                                                    {elem._id}
                                                                </div>
                                                                <div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
                                                                    {elem.product ? elem.product.name : "null"}
                                                                </div>
                                                                <div className="text-sm w-1/6  font-light px-6 py-4 whitespace-nowrap">
                                                                    Eta
                                                                </div>
                                                                <div className="text-sm w-1/6   font-light px-6 py-4 whitespace-nowrap">
                                                                    Rs. {elem.buyer_Price}
                                                                </div>
                                                                <div className="text-sm w-1/6 font-light  whitespace-nowrap m-auto flex justify-center">
                                                                    <button className="bg-[#004E97] hover:bg-[#187bd7] text-white p-2 rounded-md">
                                                                        View Order
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                    :
                                                    <div className="text-center mt-2">
                                                        Nothing to Show
                                                    </div>
                                    }
                                </div>
                            ) : (
                                <ExploreProducts />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminTrack;