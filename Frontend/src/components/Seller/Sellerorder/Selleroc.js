import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExploreEnquiry from '../../../pages/Seller/ExploreEnquiry'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import img from "../../../images/Chart.png";
import Box from '../../Box'
import SearchBox from "../../SearchBox";
import '../../../css/content.css'
import { Axios } from '../../Axios'

export default function History() {

	const [data, setData] = useState([])
	const [bids, setBids] = useState([])
	const [sellerid, setSellerid] = useState('')
	const [status, setStatus] = useState('preparing')

	useEffect(() => {
		Axios.get('/get/enquries').then((data) => {
			console.log(data.data.bids)
			setData(data.data.bids)
			setSellerid(data.data.sellerid)
		})
	}, [status])

	console.log(sellerid)

	const status_preparing = () => {
		setStatus('preparing')
	}
	const status_delivered = () => {
		setStatus('delivered')
	}

	return (
		<div className="flex flex-col">
			<div className="content_page mt-24 w-[1200px] rounded-md flex-1 p-4">
				<div className="track_header">
					<div>
						<img src={img} alt="" />
					</div>

					<div className="total_amount">
						<p>Total Shipment</p>
						<h2>15000</h2>
					</div>
				</div>
				<div className="track_mid mt-6">
					<div className={` text-sm box_shadow border flex flex-col gap-2 box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'preparing' ? 'bg-buyer-primary text-white' : 'text-black'}`} onClick={status_preparing}>
						<Box content={'PreparingSeller'} bids={bids} />
					</div>

					<div className={` text-sm box_shadow border flex flex-col gap-2 box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'delivered' ? 'bg-buyer-primary text-white' : 'text-black'}`} onClick={status_delivered}>
						<Box content={'DeliveredSeller'} bids={bids} />
					</div>
				</div>
			</div>

			<div className="shadow-xl p-4 border mt-6 bg-[#FFFFFF] rounded-lg">
				<div className="px-4 pt-2">
					<SearchBox />
				</div>

				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
						<div className="overflow-hidden">

							{
								status === 'preparing' &&
								<div>
									{
										data.filter(bid => bid.order_status === 'preparing').length > 0 ?
											<div>
												<div className="flex">
													<div className="text-sm px-6  w-1/4 font-medium text-gray-900 py-4">
														Rfq No
													</div>
													<div className="text-sm px-6  w-1/4 font-medium text-gray-900 py-4">
														Product Name
													</div>
													<div className="text-sm px-6  w-1/6 font-medium text-gray-900 py-4">
														Quantity
													</div>
													{/* <div className="text-sm px-6 w-1/6  font-medium text-gray-900 py-4">
														Status
													</div> */}
													<div className="text-sm px-6 w-1/6  font-medium text-gray-900 py-4">
														Price
													</div>
													<div className="text-sm  w-1/6 font-medium text-gray-900 py-4">
													</div>
												</div>
												{
													data.filter((abc) => abc.order_status === 'preparing').map((e, key) => {
														return e.winner.map((data, key) => {
															return sellerid === data.seller ? (
																<div key={e._id} className="flex my-1 border rounded-md hover:border-blue-500">
																	<div className="px-6 w-1/4 py-4  text-blue-400  whitespace-nowrap text-sm font-medium ">
																		{e._id}
																	</div>
																	<div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
																		{e.product}
																	</div>
																	<div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
																		{e.quantity}
																	</div>
																	{/* <div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
																		{e.order_status}
																	</div> */}
																	<div className="text-sm w-1/4 flex  font-light px-6 py-4 whitespace-nowrap">
																		<p className="w-fit mr-1">Rs. </p>
																		{e.bids.map((data, key) => {
																			return (
																				<span className="flex w-fit">
																					<p>  {sellerid === data.seller ? e.buyer_Price : ''} </p>
																				</span>
																			)
																		})}
																	</div>

																	<div className="text-sm w-1/6 font-light  whitespace-nowrap m-auto flex justify-center">
																		<button className="bg-[#004E97] hover:bg-[#187bd7] text-white p-2 rounded-md">View Order</button>
																	</div>
																</div>
															) : ""
														})
													})
												}
											</div>
											:
											< ExploreEnquiry />

									}
								</div>
							}
							{
								status === 'delivered' &&
								<div>
									{
										data.filter(bid => (bid.order_status === 'delivered' || bid.order_status === 'inTransit')).length > 0 ?
											<div>
												<div className="flex">
													<div className="text-sm px-6  w-1/4 font-medium text-gray-900 py-4">
														Rfq No
													</div>
													<div className="text-sm px-6  w-1/4 font-medium text-gray-900 py-4">
														Product Name
													</div>
													<div className="text-sm px-6  w-1/6 font-medium text-gray-900 py-4">
														Quantity
													</div>
													{/* <div className="text-sm px-6 w-1/6  font-medium text-gray-900 py-4">
														Status
													</div> */}
													<div className="text-sm px-6 w-1/6  font-medium text-gray-900 py-4">
														Price
													</div>
													<div className="text-sm  w-1/6 font-medium text-gray-900 py-4">
													</div>
												</div>
												{
													data.filter((bid) => bid.order_status === 'inTransit').map((e, key) => {
														return e.winner.map((data, key) => {
															return sellerid === data.seller ? (
																<div key={e._id} className="flex my-1 border rounded-md hover:border-blue-500">
																	<div className="px-6 w-1/4 py-4  text-blue-400  whitespace-nowrap text-sm font-medium ">
																		{e._id}
																	</div>
																	<div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
																		{e.product}
																	</div>
																	<div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
																		{e.quantity}
																	</div>
																	{/* <div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
																		{e.order_status}
																	</div> */}
																	<div className="text-sm w-1/4 flex font-light px-6 py-4 whitespace-nowrap">
																		<p className="w-fit mr-1">Rs. </p>
																		{e.bids.map((data, key) => {
																			return (
																				<div className="flex">
																					<p>  {sellerid === data.seller ? e.buyer_Price : ''} </p>
																				</div>
																			)
																		})}
																	</div>


																	<div className="text-sm w-1/6 font-light  whitespace-nowrap m-auto flex justify-center">
																		<button className="bg-[#004E97] hover:bg-[#187bd7] text-white p-2 rounded-md">View Order</button>
																	</div>
																</div>
															) : ('')
														})
													})
												}
												{
													data.filter((bid) => bid.order_status === 'delivered').map((e, key) => {
														return e.winner.map((data, key) => {
															return sellerid === data.seller ? (
																<div key={e._id} className="flex my-1 border rounded-md hover:border-blue-500">
																	<div className="px-6 w-1/4 py-4  text-blue-400  whitespace-nowrap text-sm font-medium ">
																		{e._id}
																	</div>
																	<div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
																		{e.product}
																	</div>
																	<div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
																		{e.quantity}
																	</div>
																	{/* <div className="text-sm w-1/4    font-light px-6 py-4 whitespace-nowrap">
																		{e.order_status}
																	</div> */}
																	<div className="text-sm w-1/4 flex font-light px-6 py-4 whitespace-nowrap">
																		<p className="w-fit mr-1">Rs. </p>
																		{e.bids.map((data, key) => {
																			return (
																				<div className="flex">
																					<p>  {sellerid === data.seller ? e.buyer_Price : ''} </p>
																				</div>
																			)
																		})}
																	</div>

																	<div className="text-sm w-1/6 font-light  whitespace-nowrap m-auto flex justify-center">
																		<button className="bg-[#004E97] hover:bg-[#187bd7] text-white p-2 rounded-md">View Order</button>
																	</div>
																</div>
															) : ('')
														})
													})
												}

											</div>
											:
											< ExploreEnquiry />
									}
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}