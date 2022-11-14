import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import { RiArrowDownSFill } from 'react-icons/ri'
import HomeIcon from '@mui/icons-material/Home';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaymentIcon from '@mui/icons-material/Payment';
// import EnqreIcon from '@mui/icons-material
import creditcardicon from '../icons/credit-card.png';
import payico from '../icons/Pyment.png';
import listicon from '../icons/list.png';

import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = ({ role }) => {

  // states
  const [rfq_li, setRfq_li] = useState(false)
  const [buyer_li, setBuyer_li] = useState(false)
  const [seller_li, setSeller_li] = useState(false)
  const [order_li, setOrder_li] = useState(false)

  const [product_li, setProduct_li] = useState(false)

  const { user } = useSelector(state => state.user)

  return (
    <div className='navbar   h-screen overflow-y-scroll flex flex-col justify-between text-base px-2'>
      <nav className=' mt-24'>
        <div>
          {role !== 'admin' &&
            <NavLink to={'/dashboard'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
              <div className='flex gap-6 items-center'>
                <HomeIcon size={18} />
                Home
              </div>
              <MdKeyboardArrowRight size={18} />
            </NavLink>

          }
          {/* buyer's navbar links */}
          {

            role === 'buyer' &&
            <>
              <NavLink to={`/buyer/profile/${user._id}`} className='flex cursor-pointer dash_menu_li p-3 px-5 rounded-lg  items-center justify-between  '>
                <div className='flex gap-6 items-center'>
                  {/* <EnquireIcon size={18} /> */}
                  <img src={creditcardicon}/>
                  Profile
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>
              <NavLink to={'/bidding'} className='flex cursor-pointer dash_menu_li p-3 px-5 rounded-lg  items-center justify-between  '>
                <div className='flex gap-6 items-center'>
                  <img src={listicon}/>
                  Bidding
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>

              <NavLink to={'/buyerorder'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <ListAltIcon size={18} />
                  Order History
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>


              <NavLink to={'/trackshipment'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <LocalShippingIcon size={18} />
                  Track Shipment
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>

              <NavLink to={'/products'} className={`flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between`}>
                <div className='flex gap-6 items-center'>
                  <Inventory2Icon size={12} />
                  Products
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>

              <NavLink to={'/payment'} className={`flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between`}>
                <div className='flex gap-6 items-center'>
                  <PaymentIcon size={12} />
                  {/* <img src={payico}/> */}
                 
                  Payment
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>
            </>

          }

          {/* seller's navbar links */}
          {

            role === 'seller' &&
            <>
              <NavLink to={`/seller/profile/${user._id}`} className='flex cursor-pointer dash_menu_li p-3 px-5 rounded-lg  items-center justify-between  '>
                <div className='flex gap-6 items-center'>
                  <AccountBoxIcon size={18} />
                  Profile
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>
              <NavLink to={'/enqires'} className='flex cursor-pointer dash_menu_li p-3 px-5 rounded-lg  items-center justify-between  '>
                <div className='flex gap-6 items-center'>
                  <MdPayment size={18} />
                  Enquries
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>

              <NavLink to={'/sellerorder'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <AiOutlineMenuUnfold size={18} />
                  Order History
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>
              <NavLink to={'/Payment'} className={`flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between`}>
                <div className='flex gap-6 items-center'>
                  <FaTruck size={18} />
                  Payment
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>
            </>
          }


          {/* admin routes */}

          {
            role === 'admin' &&
            <>
              <NavLink to={'/rfq'} className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between'>
                <div className='flex gap-6 items-center'>
                  <FaTruck size={18} />
                  RFQs
                </div>
                <MdKeyboardArrowRight size={18} />
              </NavLink>

              <div>
                <div onClick={() => { setBuyer_li(!buyer_li) }} className=' flex   cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                  <div className='flex gap-7'>
                    <MdPayment size={18} />
                    <h1>buyer</h1>
                  </div>
                  <RiArrowDownSFill className={`${buyer_li && 'rotate-180'}`} size={18} />
                </div>
                <ul className=' list-disc ml-14 list-inside space-y-1'>

                  {
                    buyer_li &&
                    <>
                      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/create'}><li>Add New Buyer</li></NavLink>
                      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/buyerlist'}><li>Buyer List</li></NavLink>
                    </>
                  }

                </ul>
              </div>



              <div>
                <div onClick={() => { setSeller_li(!seller_li) }} className=' flex   cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                  <div className='flex gap-7'>
                    <MdPayment size={18} />
                    <h1>seller</h1>
                  </div>
                  <RiArrowDownSFill className={`${seller_li && 'rotate-180'}`} size={18} />
                </div>
                <ul className=' list-disc ml-14 list-inside space-y-1'>
                  {seller_li && <>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/addcompany'}><li>Add New Seller</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/sellerlist'}><li>Sellers List</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/sellerreq'}><li>Sellers Request</li></NavLink>
                  </>
                  }
                </ul>
              </div>



              <div>
                <div onClick={() => { setProduct_li(!product_li) }} className=' flex   cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                  <div className='flex gap-7'>
                    <MdPayment size={18} />
                    <h1>product</h1>
                  </div>
                  <RiArrowDownSFill className={`${product_li && 'rotate-180'}`} size={18} />
                </div>
                <ul className=' list-disc ml-14 list-inside space-y-1'>
                  {product_li && <>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/addproduct'}><li>Add Product</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/products'}><li>Categories</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/prodreq'}> <li>Product Request</li></NavLink>
                  </>
                  }
                </ul>
              </div>

              <div>
                <div onClick={() => { setOrder_li(!order_li) }} className=' flex   cursor-pointer gap-6 p-3 px-5 rounded-lg justify-between'>
                  <div className='flex gap-7'>
                    <MdPayment size={18} />
                    <h1>orders</h1>
                  </div>
                  <RiArrowDownSFill className={`${order_li && 'rotate-180'}`} size={18} />
                </div>
                <ul className=' list-disc ml-14 list-inside space-y-1'>
                  {order_li && <>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/orderlist'}><li>Order List</li></NavLink>
                    <li>invoice</li>
                    <li>Payments</li>
                    <li>Track Shipment</li>
                    <li>Issues Raised</li>
                  </>
                  }
                </ul>
              </div>



            </>
          }
        </div>
      </nav>
      <div className=' gap-5 my-6 flex flex-col justify-center'>


        {role !== 'admin' &&
          <>
            <div className="credit flex flex-col space-y-6  px-6 ">
              <button className=' w-full dash_button border px-3 py-3 rounded '>Get Credit Now!</button>

              <hr className='border-b border-gray-300' />
            </div>
            <div className='flex flex-col mx-auto  w-fit'>
              <span className=''>Having issue? </span><a href="/contact" className=' text-code-dash_board_primary underline capitalize'>contact us</a>
            </div>

          </>
        }
      </div>
    </div>
  )
}

export default Navbar