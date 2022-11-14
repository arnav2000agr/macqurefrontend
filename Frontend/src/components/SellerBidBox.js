import React, { useState } from 'react'
import img from '../images/Vector.png'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import CancelIcon from '@mui/icons-material/Cancel';
import { Axios } from './Axios'



const SellerBidBox = ({ e }) => {

  const [popup, setPopUp] = useState(false)
  const [price, setPrice] = useState()


  const showPopup = () => {
    setPopUp(true)
  }

    const giveprice = (id) => {
      console.log(id)
        Axios.put(`/seller/quote/${id}`, {
          kimat: price,
        })
   
  }

  return (
    <div className=" bg-white border p-4 flex flex-col  gap-4 text-sm ">
      {
        popup &&
        <div className=' fixed left-1/2 top-1/2 z-40 box-shadow cursor-pointer -translate-x-1/2 -translate-y-1/2' >
          <div className="w-[933px] h-[365px] flex bg-[#F6F6F6] b m-auto ">
            <CancelIcon onClick={()=>{setPopUp(false)}}  className='absolute right-0 top-0 ' />
            <div className="w-[50%] left ">
              <div className="">
                <h2 className="text-[28px]  text-2xl ml-8 pt-8 font-[500]">
                  Quoto Your Price
                </h2>
                <p className="text-[#637F94] font-[400] text-[16px] text-2xl ml-8 mt-2">
                  Let the buyer know about the price that are willing to charge for
                  the Product{' '}
                </p>
              </div>

              <div className="w-[418px] h-[52px]  flex ml-8 mt-4">
                <div className="text-center  flex-1 shadow-2xl">
                  <CurrencyRupeeIcon className="  h-full mt-3" />
                </div>
                <input
                  type={Number}
                  required={true}
                  placeholder="Enter The Amount"
                  className="bg-white w-[362px] outline-none shodow-xl text-center "
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <button
                onClick={() =>{ giveprice(e._id); setPopUp(false)}}
                className="w-[156px] h-[52px] bg-[#1672DE] ml-8 text-[16px] font-[600] mt-10 text-[#F6F6F6]"
              >
                Quoto Now
              </button>
            </div>
            <div className="right">
              <div className="pt-8 ml-9">
                <h2 className="text-[16px] font-[600] text-[#00212F]">
                  Buyer's Remarks
                </h2>
                <p className="text-[#637F94] text-[14px] font-[400] mt-3">
                  Buyer’s Remarks Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Vestibulum dui, sed id convallis rutrum. Arcu dolor imperdiet
                  ipsum amet ut. Cursus mattis fringilla ut urna malesuada sagittis
                  tortor. Aliquam molestie pellentesque dui, tincidunt ut fames
                  egestas.
                </p>
              </div>
              <div className="mt-9">
                <h2 className="text-[16px] font-[600] ml-8">Documents</h2>
              </div>
              <div className="flex justify-evenly mt-3">
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
        </div>
      }

      <span className=" text-buyer-primary">
        <a href="/">#{e ? e._id : 'null'}</a>
      </span>
      <h1 className=" font-semibold text-seller-heading text-2xl"></h1>
      <div className="decr_box flex   gap-6">
        <div className="">
          <p className=" my-2  text-buyer-text-color font-medium">Quantity</p>
          <p className="">{e ? e.quantity : 'null'} </p>
        </div>
        <div className=" ">
          <p className="my-2 text-buyer-text-color font-medium">HS CODE</p>
          <p className="">29153100</p>
        </div>
        <div className="">
          <p className="my-2   text-buyer-text-color font-medium">CAS NO.</p>
          <p className=" ">503612-47-3</p>
        </div>
      </div>
      <div className="decr_box items-end  justify-between flex gap-6">
        <div className=" font-medium">
          <p className=" my-2  text-buyer-text-color ">Time Remaining</p>
          <div className=" bg-seller-timing_color border border-seller-border_color p-1 rounded px-3 w-fit">
            12:00:00
          </div>
        </div>
        {/* <NavLink to={{ pathname: '/quoto' }} state={e ? { id: e._id } : ''}> */}
        <button onClick={showPopup} className=" rounded-md text-white bg-buyer-primary py-2 px-4">
          Quote Now{' '}
        </button>
        {/* </NavLink> */}
      </div>
    </div>
  )
}

export default SellerBidBox