import React, { useState } from "react";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import ClearIcon from "@mui/icons-material/Clear";
import { Axios } from "../../components/Axios";
import { toast } from "react-toastify";
import OnBoardHeader from "../../components/OnBoardHeader";

export default function AddProduct() {

  const [name, setName] = useState('')
  const [substance, setSubstance] = useState('')
  const [casno, setCasNo] = useState('')
  const [purity, setPurity] = useState('')
  const [color, setColor] = useState('')
  const [Apperance, setApperance] = useState('')
  const [desc, setDesc] = useState('')
  const [Synonyms, setSynonyms] = useState('')
  const [category, setCategory] = useState('')
  const [ecno, setEcno] = useState('')

  const name_handle = (e) => {
    setName(e.target.value)
  }
  const substance_handle = (e) => {
    setSubstance(e.target.value)
  }
  const color_handle  = (e) => {
    setColor(e.target.value)
  }
  const purity_handle = (e) => {
    setPurity(e.target.value)
  }
  const Apperance_handle = (e) => {
    setApperance(e.target.value)
  }
  const desc_handle = (e) => {
    setDesc(e.target.value)
  }
  const category_handle = (e) => {
    setCategory(e.target.value)
  }

  const casno_handle = (e) => {
    setCasNo(e.target.value)
  }
  const ecno_handle = (e) => {
    setEcno(e.target.value)
  }
  const synonyms_handle = (e) => {
    setSynonyms(e.target.value)
  }

const submit_form = async(e)=>{
  e.preventDefault();
 
   await Axios.post('/new/product',{
    name:name,
    Substance:substance,
    CASNo:casno,
    EINECS:ecno,
    MinPurity:purity,
    Color:color,
    Apperance:Apperance,
    Category:category,
    Synonyms:Synonyms,
    desc:desc
  }).then((res)=>{
    toast.success(res.data.message)
    setName('')
    setCategory('')
    setPurity('')
    setEcno('')
    setCasNo('')
    setColor('')
    setDesc('')
    setSynonyms('')
    setApperance('')
    
  }).catch((error)=>{
    console.log(error.response.data.error)
    toast.error(error.response.data.error)
  })


}
  return (
    <div className=" flex-1 h-screen overflow-y-scroll px-10 py-8 bg-white">
      <OnBoardHeader/>
      <form onSubmit={submit_form} className=" mt-16 flex-1 mx-auto   px-3 pb-6  overflow-y-auto ">
        <div className="flex  ">

          <h1 className="font-[400] text-[24px] p-2 flex-1 ">
            Product Details{" "}
          </h1>

        </div>

        <div className="flex gap-3 p-2">
          <DriveFolderUploadIcon />
          <div className="flex gap-1 justify-center flex-col ">
            <p className="text-[#0377EB] text-[16px] font-[600]">
              Upload Product Image
            </p>
            <p className="text-[#757575] text-[11px] font-[400]">
              Should not be more than 1080x1080px
            </p>
          </div>
        </div>
        <div className="flex  gap-3 flex-col mt-4">
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                Product Name
              </p>
              <input
                value={name}
                onChange={name_handle}
                required
                type="text"
                className="p-2 border shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Substance</p>
              <input
                value={substance}
                onChange={substance_handle}
                required
                type="text"
                className="p-2 border shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter Substance Name"
              />
            </div>
          </div>
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                CAS Number
              </p>
              <input
                value={casno}
                onChange={casno_handle}
                required
                type="text"
                className="p-2 border shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the CAS Category  "
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                EC Number{" "}
              </p>
              <input
                type="text"
                value={ecno}
                onChange={ecno_handle}
                required
                className="p-2 border shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the EC Number "
              />
            </div>
          </div>
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">
                Min Purity
              </p>
              <input
                type="text"
                onChange={purity_handle}
                required
                value={purity}
                className="p-2  border shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Min Purity "
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Color</p>
              <input
                value={color}
                onChange={color_handle}
                required
                type="text"
                className="p-2 border shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Color "
              />
            </div>
          </div>
          <div className="flex gap-8 p-2  ">
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Apperance</p>
              <input
                value={Apperance}
                onChange={Apperance_handle}
                required
                type="text"
                className="p-2 border shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Apperance Details"
              />
            </div>
            <div className="flex flex-col gap-2 w-[46%]">
              <p className="font-[400] text-[16px] text-[#263238]">Category</p>
              <input
                value={category}
                onChange={category_handle}
                required
                type="text"
                className="p-2 border shadow-md bg-[ #FFFFFF] rounded-md"
                placeholder="Enter the Category"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2">
          <p>Product Description</p>
          <textarea
            value={desc}
            onChange={desc_handle}
            required
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder="Enter the Product Description "
            className=" border p-3 rounded-md"
          ></textarea>
        </div>
        <div className="flex flex-col p-2 gap-2">
          <p>Product Synonyms</p>
          <textarea
            value={Synonyms}
            onChange={synonyms_handle}
            required
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder="Let us know more about your company  "
            className=" border p-3 rounded-md"
          ></textarea>
        </div>
        <div className="flex flex-col gap-3 mt-3 p-2">
          <p className="text-[16px] font-[400]">Upload Relevent Document</p>
          <div className="bg-[#DEEFFF] flex gap-3 w-[30%] p-3">
            <UploadFileIcon />

            <p className="text-[#1672DE] text-[16px ] font-[400]">
              Upload Document
            </p>
          </div>
        </div>
        <button type="submit" className="font-[600] text-[16px] bg-[#1672DE] text-[#ffff] px-3 py-2 mt-3 ml-2 ">
          Add Product
        </button>
      </form>
    </div>
  );
}