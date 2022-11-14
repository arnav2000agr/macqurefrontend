import axios from "axios";
import React, { useState, Fragment, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../images/Vector.png";
import rac from "./rfqimg/rac.png"
import { FiSearch } from 'react-icons/fi'
import { Checkbox } from "@material-tailwind/react";
import { Axios } from '../../Axios'



export default function Qvotobox({ elem, id ,setStatus }) {
	const [isActive, setIsActive] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [arr, setArr] = useState([])
 
	const date = new Date(elem.createdAt)
   
	console.log(elem)

	const val = date.getDate()
	const month = date.getMonth()
	const year = date.getFullYear()

	const sendarr = []

	const searchbar = useRef()

	const navigate = useNavigate()

	const process = async (e) => {
		try {
			setIsActive(true)
			setShowModal(true)
		} catch (error) {
			console.log(error)
		}
	}

	const Reject = async (e) => {
		try {
			setIsActive(true)
			await Axios.put('/updates/order/admin', {
				quote_status: 'rejected',
				id: id
			}).then((res) => {
					setIsActive(false)
			setStatus('history')

			})
		} catch (error) {
			console.log(error)
		}
	}


	const handleInputChangeDom = (event) => {
		const id = event.target.getAttribute('seller')
		if (event.target.checked) {
		  sendarr.push({
			seller:id,
			price:null
		  })
		} else {
		const index = sendarr.indexOf(id)
		sendarr.splice(index,1)
		}
	  
		
	  };

      const sendRfq = async()=>{
        await Axios.put('/admin/click/sendrfq' , {
			id:id,
			sellers : sendarr
		}).then((res)=>{
			setShowModal(false)
			setStatus('active')
		}).catch((err)=>{
			console.log(err)
		})
	  }

	useEffect(() => {
		const getdata = async () => {
			await Axios.get(`/product/${elem.product._id}`).then((res) => {
				setArr(res.data.product.sellers)
			}).catch((err) => {
				console.log(err);
			})
		}
 
		getdata()

	}, [])


	return (
		<div>

			{
				showModal ? (
					<>
						<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none 	">
							<div className="relative w-auto mx-auto">
								<div className="flex bg-white w-[650px] p-4">
									<div className="flex flex-col w-full">
										<p className="text-[#1672DE]">#1672DE</p>
										<p className="mt-1 font-semibold text-2xl">{elem.product.name}</p>
										<div className="flex mt-4">
											<div className="w-1/5 mr-2 flex flex-col">
												<p className="text-[#637F94] font-semibold">Quantity</p>
												<p className="text-base">{elem.quantity}</p>
											</div>
											<div className="w-1/5 mr-2 flex flex-col">
												<p className="text-[#637F94] font-semibold">Has No.</p>
												<p className="text-base">29153100</p>
											</div>
											<div className="w-1/5 mr-2 flex flex-col">
												<p className="text-[#637F94] font-semibold">Cas No.</p>
												<p className="text-base">{elem.product['CAS No']}</p>
											</div>
										</div>

										{/* <div className="mt-10">
											<button className="bg-[#1672DE] rounded-md text-white text-center py-2 px-10">Send RFQ</button>
										</div> */}

										<div ref={searchbar} className={`flex gap-4  items-center   `}>
											<div className={`search_cover box_shadow border p-2 my-2 flex-1 rounded flex items-center $ bg-white`}>
												<input type="text" className='flex-1 outline-none' placeholder='search' />
												<FiSearch size={20} className='text-buyer-text-color' />
											</div>
										</div>

										<div className="mt-2">
											<p className="underline mb-2">Sellers Selling this product</p>


											<div className="flex flex-col h-32 overflow-y-scroll">
												{arr.map((elem, index) => {
													return (
														<div key={elem._id} className="flex justify-between p-2 rounded-md shadow-lg my-2">
															<Fragment>
																<Checkbox seller={elem._id} onClick={handleInputChangeDom} id="ripple-on" ripple={true} />
															</Fragment>
															<p className="ml-4 mt-2 text-[#1672DE]">#453412434</p>
															<p className="ml-4 mt-2 font-semibold">{elem.name}</p>
															<p className='ml-4 mt-2 font-semibold'>Product Available</p>
															
															<p>edit</p>
														</div>
													)
												})

												}
												
											</div>
										</div>

										<div className="mt-6">
											<p className="underline mb-2">Other Sellers</p>

											<div className="flex flex-col h-32 overflow-y-scroll">
												<div className="flex justify-between p-2 rounded-md shadow-lg my-2">
													<Fragment>
														<Checkbox id="ripple-on" ripple={true} />
													</Fragment>
													<p className="ml-4 mt-2 text-[#1672DE]">#453412434</p>
													<p className="ml-4 mt-2 font-semibold">Abc Privare Ltd</p>
													<p>edit</p>
												</div>
												<div className="flex justify-between p-2 rounded-md shadow-lg my-2">
													<Fragment>
														<Checkbox id="ripple-on" ripple={true} />
													</Fragment>
													<p className="ml-4 mt-2 text-[#1672DE]">#453412434</p>
													<p className="ml-4 mt-2 font-semibold">Abc Privare Ltd</p>
													<p>edit</p>
												</div>
												
												
												
											</div>
										</div>

										<div className="mt-4 flex justify-around">
											<button
												className="bg-red-500 text-white background-transparent font-bold uppercase px-6 py-3 text-sm rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="button"
												onClick={() =>{ setShowModal(false)}}
											>
												Close
											</button>
											<button
												className="bg-[#1672DE] text-white active:bg-[#1672DE] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="button"
												onClick={sendRfq}
											>
												Send RFQs
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				) : null}




			<div className="right bg-white shadow-xl px-3  rounded-md py-4">
				<div className="flex flex-col gap-2">
					<p className="text-[#1672DE] text-[14px] font-[400px]">#RFQ{val + '' + month + '' +year }</p>
					<h2 className=" text-[24px] font-[600]">{elem.product ? elem.product.name : 'null'}</h2>
				</div>
				<div className="flex gap-4 mt-3">
					<button onClick={process} className="bg-[#1672DE] rounded-md text-[#FFFFFF] font-[700] text-[16px] px-5 py-2 border-2 ">
						Process
					</button>
					<button onClick={Reject} className="bg-[#FFFFFF] rounded-md text-[#637F94] text-[16px] font-[700] px-5 py-2 border-2">
						Reject
					</button>
				</div>

				<div className="flex gap-3 mt-5 ">
					<div className="flex flex-col gap-2">
						<p className="text-[14px] font-[600] text-[#637F94]">Quanty</p>
						<p className="text-[14px] text-center font-[400]">{elem.quantity}</p>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-[14px] font-[600] text-[#637F94]">Has No</p>
						<p className="text-[14px] font-[400]">2951000</p>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-[14px] font-[600] text-[#637F94]">CAS No</p>
						<p className="text-[14px] font-[400]">{elem.product['CASNo'] ?elem.product['CASNo']:'null' }
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-[14px] font-[600] text-[#637F94]">PinCode</p>
						<p className="text-[14px] font-[400]">{elem.buyer_pincode}</p>
					</div>
				</div>

				<div className="flex gap-3 mt-6 mb-2">
					<img src={rac} className={' h-full'} alt="" />
					<div className="flex flex-col gap-1">
						<p className="text-[14px] font-[600] text-[#1672DE]">Buyer Id : {elem && elem.buyer ? elem.buyer._id : "null"} </p>
						<p className="text-[16px] font-[400] text-black">Abc ltd. </p>
					</div>
				</div>

				<div className="pt-4 ">
					<h2 className="text-[16px] font-[600] text-[#00212F]">
						Buyer's Remarks
					</h2>
					<p className="text-[#637F94] text-[14px] font-[400] mt-3">
						{elem.remark ? elem.remark : 'No Remark'}	
						{ elem.remark.length > 40 &&
						 <span className="text-[blue]"> <a href="/"> read more </a></span>}
					</p>
				</div>
				<div className="mt-9">
					<h2 className="text-[16px] font-[600] ">Documents</h2>
				</div>
				<div className="flex justify-evenly mt-3 mb-2">
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
			</div>
		</div>
	);
}
