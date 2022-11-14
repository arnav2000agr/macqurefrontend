import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { AiFillQuestionCircle } from 'react-icons/ai'
import 'reactjs-popup/dist/index.css';
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import { BsCloudUploadFill } from 'react-icons/bs'
import Popup from 'reactjs-popup';
import { Axios } from '../../Axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const OrderForm = () => {


    const [form1, setForm1] = useState(true)
    const [quantity, setQuantity] = useState('')
    const [pincode, setPincode] = useState('')
    const [remarks, setRemarks] = useState('')

    const navigate = useNavigate()

    const { id } = useParams()

    //functions

    const forward = (e) => {
        e.preventDefault();
        setForm1(!form1)
    }

    const quantity_handle = (e) => {
        setQuantity(e.target.value)
    }


    const pincode_handle = (e) => {
        setPincode(e.target.value)
    }

    const remarks_handle = (e) => {
        setRemarks(e.target.value)
    }

    const create_order = async (e) => {
        e.preventDefault()
        await Axios.post('/new/order', {
            quantity: quantity,
            product: id,
            buyer_pincode: parseInt(pincode),
            remark: remarks
        }).then((res) => {
            console.log(res)
            toast.success(res.data.order)
            navigate('/bidding')
        }).catch((error) => console.log(error))
    }

    const upload = () => {
        let file = document.getElementById("file");
        file.click()
    }


    return (
        <div className='px-1 mt-20  '>
            <div className=' rounded flex  order_shadow order_form overflow-hidden relative bg-white '>
                <form action="" onSubmit={forward} className={` ${!form1 && 'left_form'} left-0 transition ease-in-out delay-150  flex flex-col justify-between  py-4 px-6 `}>
                    <div className=' flex items-center gap-4 text-buyer-primary font-medium'>
                        <BsCartFill size={20} />
                        <h1>Order Now</h1>
                    </div>
                    <p className=' text-buyer-text-color '>You can order this product right now by requestion a quote from us </p>
                    <div>
                        <h3 className='mb-1'>Quantity</h3>
                        <div className="input_cover w-full flex gap-4">
                            <div className=' flex-1'>
                                <input onChange={quantity_handle} type="number" value={quantity} placeholder='Enter the Volume' className=' w-full box_shadow outline-none border p-2 px-4' />
                            </div>

                            <div className="flex bg-white box_shadow justify-center border px-3">
                                <select className="form-select 
                                            px-2.5
                                            py-1.5
                                            w-full
                                            text-gray-700
                                            rounded
                                            transition
                                            ease-in-out
                                            outline-none
                                            bg-transparent
                                            ">
                                    <option value="1">kgs</option>
                                    <option value="1">Two</option>
                                    <option value="1">Thre</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h3 className=' mb-1'>Pincode</h3>
                        <div className="input_cover flex flex-1 gap-4">
                            <input required={true} onChange={pincode_handle} type="number" value={pincode} placeholder='Enter Delivery Pincode' className='outline-none w-full box_shadow  border p-2 px-4' />
                        </div>
                    </div>
                    <p className='text-buyer-text-color'>Final Price will be available upon quotes</p>
                    <button className=' button bg-buyer-primary py-2 px-4 rounded text-white'>Request a Quote</button>
                </form>


                {/* second form */}
                <form action="" onSubmit={create_order} className={`  ${form1 && 'right_form'} left-full flex flex-col justify-between gap-1 py-4 px-6`}>
                    <div className=' flex items-center gap-2 text-buyer-primary font-medium'>
                        <IoArrowBackCircleSharp onClick={forward} className='cursor-pointer' size={22} />
                        <h1>Order Now</h1>
                    </div>
                    <p className=' text-buyer-text-color '>You can order this product right now by requestion a quote from us </p>

                    {/* Additional Remarks */}
                    <div className=' flex flex-col gap-1'>
                        <h3>Additional Remarks </h3>
                        <input type="text" value={remarks} onChange={remarks_handle} placeholder='Enter your Requirements ' className='rounded border py-2 px-2' />
                    </div>

                    {/* upload documents */}
                    <div className=' flex flex-col gap-1'>

                        {/* upload document heading */}
                        <div className=' flex items-center gap-2'>

                            <Popup
                                trigger={open => (
                                    <button type='button' className='flex gap-3'><p>Upload Documents</p><AiFillQuestionCircle size={18} /></button>
                                )}
                                position="top center"
                                closeOnDocumentClick
                                on={['hover', 'focus']}
                            >
                                <span> Please upload only .pdf format files only <sup className='text-red-700 text-md'>*</sup></span>
                            </Popup>

                        </div>

                        <input id="file" className='hidden' accept={".pdf"} type="file" />

                        <button type='button' onClick={upload} className=' bg-[#1672DE] w-fit flex text-white text-[0.7rem] rounded flex-col gap-2  p-2 items-center justify-center px-2'>
                            <BsCloudUploadFill color='' size={20} />
                            <p>Upload</p>
                        </button>
                    </div>
                    <p className=' text-buyer-text-color'>Final Price will be available upon quotes</p>
                    <button type='submit' className=' bg-buyer-primary py-2 text-white rounded-md '>submit</button>
                </form>
            </div>

        </div>
    )
}

export default OrderForm