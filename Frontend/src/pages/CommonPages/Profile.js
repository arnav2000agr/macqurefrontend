import React, { useEffect, useState } from 'react'
import Address from '../../components/Address'
import Header from '../../components/Header'
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import clogo from '../../images/img.png'
import Contact from '../../components/Contact';
import BankDeteails from '../../components/BankDeteails';
import AddredPopUp from '../../components/AddredPopUp';
import ContactPopUp from '../../components/ContactPopUp';
import BankDetailsPopup from '../../components/BankDetailsPopup';
import UpContactPopup from '../../components/UpContactPopup'
import EditName from '../../components/EditName';
import Company_description from './Company_description'
import { Axios } from '../../components/Axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import SellerProducts from '../Seller/SellerProducts';
import Enquires from '../Seller/Enquires';
import Sellerorderhistory from '../Seller/Sellerorderhistory';
import Payment from '../../components/Buyer/Payment/Payment';
import AdminBidding from '../Buyer/AdminBidding';
import AdminOrderHistory from '../Buyer/AdminOrderHistory';
import AdminTrackShipment from '../Buyer/AdminTrackShpiment';
import AdminEnquiry from '../Seller/AdminEnquiry';
import AdminOrder from '../Seller/AdminOrder';


const Profile = () => {
	const [value, setValue] = useState(0)
	const [val, setVal] = useState()
	const [user, setUser] = useState()
	const [admin, setAdmin] = useState(true)

	const data = useSelector(state => state.user)
	console.log(data.user.role)


	const [showModal, setShowModal] = React.useState(false);
	const { id } = useParams()
	const { role } = useParams()


	useEffect(() => {
		data.user.role === 'admin' ? setAdmin(true) : setAdmin(false)
		const getdata = async () => {
			await Axios.get(`/${role}/${id}`).then((res) => {
				if (role === 'buyer') {
					console.log(res.data.buyer)
					setUser(res.data.buyer)
				}
				if (role === "seller") {
					console.log(res.data.seller)
					setUser(res.data.seller)
				}

			}).catch((error) => {
				console.log(error);
			})
		}
		getdata()

	}, [])

	const handletabs = (e, val) => {
		setValue(val)
	}

	return (
		<div className='flex-1 space-y-3 mt-20'>
			<Header />

			<div className="flex flex-col overflow-y-scroll h-[88vh] gap-3">
				<div className="bg-white w-[95%] mx-auto relative z-45 px-4 box_shadow rounded-md">
					<div className="flex gap-4 border py-4 border-transparent border-b-2 border-b-[#004AA1]">
						<img src={clogo} alt="" className="h-[123px]  w-[123px]" />
						<div className="flex flex-col w-full gap-3">
							<div className="flex justify-between">
								<h1 className="text-[28px] font-[500]">{user && user.companyName}</h1>
								<button onClick={() => setShowModal('editName')} className='text-white bg-[#004AA1] w-24 h-10 px-3 rounded-md mt-2 mr-3'><BorderColorIcon className='mb-1' fontSize='small' /><span className='mx-2'>Edit</span></button>
							</div>
							<div className="flex gap-3">
								<p className="text-[#637F94] text-[14px] font-[400]">
									{user && user.employees ? user.employees : "-"}
								</p>
								<hr className="rotate-90 text-[#6d869a]  w-[20px] mt-2 border-20" />
								<p className="text-[#637F94] text-[14px] font-[400]">
									{user && user.Category ? user.Category : "-"}
								</p>
								<hr className="rotate-90 text-[#6d869a]  w-[20px] mt-2 border-20" />
								<p className="text-[#637F94] text-[14px] font-[400]">
									{user && user.Area ? user.Area : "-"}
								</p>
							</div>
							<p className="text-[#00212F] text-[16px] font-[400] w-[60%]">
								{user && user.about ? user.about : "-"}
							</p>
						</div>
					</div >

					<div className="mx-auto flex flex-col justify-center border border-transparent p-2">
						<div className="flex justify-between">
							<div className="flex w-3/4">
								<div className="flex flex-col w-1/3 mt-3">
									<p className='text-[#637F94] text-sm font-medium'>category</p>
									<p>{user && user.Category ? user.Category : "-"}</p>
								</div>
								<div className="flex flex-col w-1/3 mt-3">
									<p className='text-[#637F94] text-sm font-medium'>CIN Number</p>
									<p>{user && user.cin ? user.cin : "-"}</p>
								</div>
								<div className="flex flex-col w-1/3 mt-3">
									<p className='text-[#637F94] text-sm font-medium'>GST Number</p>
									<p>{user && user.gst ? user.gst : "-"}</p>
								</div>
							</div>
						</div>

						<div className="flex w-3/4 flex-wrap mb-1">
							<div className="flex flex-col w-1/3 mt-3">
								<p className='text-[#637F94] text-sm font-medium'>Company owner name</p>
								<p>{user && user.name ? user.name : "-"}</p>
							</div>
							<div className="flex flex-col w-1/3 mt-3">
								<p className='text-[#637F94] text-sm font-medium'>Owners Contact Number</p>
								<p>{user && user.mobile ? user.mobile : "-"}</p>
							</div>
							<div className="flex flex-col w-1/3 mt-3">
								<p className='text-[#637F94] text-sm font-medium'>Warehousing Capacity</p>
								<p>{user && user.capacity ? user.capacity : "-"}</p>
							</div>
							<div className="flex flex-col w-1/3 mt-3">
								<p className='text-[#637F94] text-sm font-medium'>Email ID</p>
								<p>{user && user.email ? user.email : "-"}</p>
							</div>
							<div className="flex flex-col w-1/3 mt-3">
								<p className='text-[#637F94] text-sm font-medium'>LinkedIn ID</p>
								<p>{user && user.linkedin ? user.linkedin : "-"}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-white w-[95%] mx-auto px-3 py-2 box_shadow rounded-md">
					<Tabs value={value} onChange={handletabs} >
						<Tab label='Address' />
						<Tab label='Bank Details' />
						<Tab label='Contacts' />
						{(role === 'buyer' && admin) && <Tab label='Bidding' />}
						{(role === 'buyer' && admin) && <Tab label='Order History' />}
						{(role === 'buyer' && admin) && <Tab label='Track Shipment' />}
						{(role === 'buyer' && admin) && <Tab label='Payment' />}
						{role === 'seller' && <Tab label='Products' />}
						{role === 'seller' && <Tab label='Store Front' />}
						{(role === 'seller' && admin) && <Tab label='Enquiry' />}
						{(role === 'seller' && admin) && <Tab label='Order History' />}
						{(role === 'seller' && admin) && <Tab label='Payment' />}
					</Tabs>

					{/* modal code */}
					{
						showModal ? (
							<>
								<div
									className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
									<div className="relative w-auto  my-6 mx-auto max-w-3xl">
										{/* content */}
										{showModal === "address" && <AddredPopUp setUser={setUser} setShowModal={setShowModal} user={user} />}
										{showModal === "contact" && <ContactPopUp setUser={setUser} setShowModal={setShowModal} user={user} />}
										{showModal === "upcontact" && <UpContactPopup setUser={setUser} setShowModal={setShowModal} user={user} val={val} />}
										{showModal === "bankDetails" && <BankDetailsPopup setUser={setUser} setShowModal={setShowModal} user={user} />}
										{showModal === 'editName' && <EditName setUser={setUser} setShowModal={setShowModal} user={user} />}

									</div>
								</div>
								<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
							</>
						) : null
					}

					<div>
						{
							value === 0 &&
							<Address setUser={setUser} setShowModal={setShowModal} user={user} />
						}
						{
							value === 1 &&
							<BankDeteails setUser={setUser} setShowModal={setShowModal} user={user} />
						}
						{
							value === 2 &&
							<Contact setUser={setUser} setShowModal={setShowModal} user={user} setVal={setVal} />
						}
						{
							role === 'buyer' &&
							value === 3 &&
							<AdminBidding user={user} />
						}
						{
							role === 'buyer' &&
							value === 4 &&
							<AdminOrderHistory user={user} />
						}
						{
							role === 'buyer' &&
							value === 5 &&
							<AdminTrackShipment user={user} />
						}
						{
							role === 'buyer' &&
							value === 6 &&
							<Payment />
						}
						{
							role === 'seller' &&
							value === 3 &&
							<SellerProducts id={id} user1={user} />
						}
						{
							role === 'seller' &&
							value === 4 &&
							<Company_description />
						}
						{
							role === 'seller' &&
							value === 5 &&
							<Enquires />
						}
						{
							role === 'seller' &&
							value === 6 &&
							<Sellerorderhistory />
						}
						{
							role === 'seller' &&
							value === 7 &&
							<Payment />
						}
					</div>
				</div>
			</div>
		</div >

	)
}

export default Profile