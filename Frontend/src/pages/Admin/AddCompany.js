import React, { useState } from "react";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Axios } from "../../components/Axios";
import { toast } from "react-toastify";
import OnBoardHeader from "../../components/OnBoardHeader";

export default function AddCompany() {
 
  const [name, setName] = useState('')
  const [employesno, setEmployesno] = useState('')
  const [category, setCategory] = useState('')
  const [area, setArea] = useState('')
  const [owner, setOwner] = useState('')
  const [cin, setCin] = useState('')
  const [gst, setGst] = useState('')
  const [ownermobile, setOwnerMobile] = useState('')
  const [capacity, setCapacity] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [about, setAbout] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')


 
  const name_handle = (e) =>{
   setName(e.target.value)
  }
  const employesno_handle = (e) =>{
    setEmployesno(e.target.value)
   }
   const capacity_handle = (e) =>{
    setCapacity(e.target.value)
   }
   const owner_handle = (e) =>{
    setOwner(e.target.value)
   }
   const linkedin_handle = (e) =>{
    setLinkedin(e.target.value)
   }
   const about_handle = (e) =>{
    setAbout(e.target.value)
   }
   const ownermobile_handle = (e) =>{
    setOwnerMobile(e.target.value)
   }

   const gst_handle = (e) =>{
    setGst(e.target.value)
   }
   const cin_handle = (e) =>{
    setCin(e.target.value)
   }

   const area_handle = (e) =>{
    setArea(e.target.value)
   }

   const category_handle = (e) =>{
    setCategory(e.target.value)
   }

   const email_handle = (e) =>{
    setEmail(e.target.value)
   }

   const password_handle = (e) =>{
    setPassword(e.target.value)
   }

   const company_handle = (e) =>{
    setCompany(e.target.value)
   }

   
  const submit_form = async(e) =>{
  e.preventDefault();

  await Axios.post('/new/seller', {
     name:name,
     employees:employesno,
     Category:category,
     Area:area,
     cin:cin,
     gst:gst,
     ownername:owner,
     mobile:ownermobile,
     capacity:capacity,
     linkedin:linkedin,
     about:about,
     email:email,
     password:password,
     companyName:company
  }).then((res)=>{
    toast.success(res.data.message)
    setName('')
    setCategory('')
    setEmployesno('')
    setOwner('')
    setOwnerMobile('')
    setLinkedin('')
    setEmail('')
    setPassword('')
    setAbout('')
    setGst('')
    setCapacity('')
    setArea('')
    setCompany('')

  }).catch((error)=>{
    toast.error(error.response.data.error)
  })
    
  }
       

  return (
   
    <form onSubmit={submit_form} className=" flex-1 px-10 py-8  h-screen overflow-y-scroll">
    <OnBoardHeader/>
      
      <h1 className="font-[400] text-[24px] mt-16 p-2 ">Add Company Details </h1>
      <div className="flex gap-3 p-2">
        <DriveFolderUploadIcon />
        <div className="flex gap-1 justify-center flex-col ">
          <p className="text-[#0377EB] text-[16px] font-[600]">
            Upload Company Logo
          </p>
          <p className="text-[#757575] text-[11px] font-[400]">
            Should not be more than 1080x1080px
          </p>
        </div>
      </div>
      <div className="flex  gap-3 flex-col mt-4">
        <div className="flex gap-8 p-2  ">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">
              Company Name
            </p>
            <input
              value={company}
              required
              onChange={company_handle}
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter Company Name"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Number of employees</p>
            <input
              value={employesno}
              required

              onChange={employesno_handle}
              type="number"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter Number of employees"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]"> Category </p>
            <input

              value={category}
              onChange={category_handle}
              required
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Category "
            />
          </div>
        </div>
        <div className="flex gap-8 p-2">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Area</p>
            <input

              value={area}
              required
              onChange={area_handle}

              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the area  "
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">CIN Number</p>
            <input
              value={cin}
              onChange={cin_handle}
              required
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the CIN number "
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">GST Number</p>
            <input
              value={gst}
              onChange={gst_handle}
              required
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Min Purity "
            />
          </div>
        </div>
        <div className="flex gap-8 p-2">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Company owner name</p>
            <input
              value={owner}
              onChange={owner_handle}
              required
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Company owner name"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Owners Contact Number</p>
            <input
              value={ownermobile}
              onChange={ownermobile_handle}
              required
              type="number"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Owners Contact Number"
            />
          </div>
          <div className="flex flex-col gap-2 w-[26%]">
            <p className="font-[400] text-[16px] text-[#263238]">Warehousing Capacity</p>
            <input
              value={capacity}
              onChange={capacity_handle}
              required
              type="text"
              className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
              placeholder="Enter the Warehousing Capacity"
            />
          </div>
          
        </div>



        <div className="flex gap-8 p-2">
          {" "}
          <div className="flex flex-col gap-2 w-[26%]">
        <p className="font-[400] text-[16px] text-[#263238]">Email</p>
        <input
          value={email}
          onChange={email_handle}
          required
          type="text"
          className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
          placeholder="Enter the email Id"
        />
      </div>

      <div className="flex flex-col gap-2 w-[26%]">
        <p className="font-[400] text-[16px] text-[#263238]">Password</p>
        <input
          value={password}
          onChange={password_handle}
          required
          type="text"
          className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
          placeholder="Enter the passowrd"
        />
      </div>

      <div className="flex flex-col gap-2 w-[26%]">
        <p className="font-[400] text-[16px] text-[#263238]">Password</p>
        <input
          value={name}
          onChange={name_handle}
          required
          type="text"
          className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
          placeholder="Enter the your Name"
        />
      </div>
          
          
        </div>
      </div>

      <div className="flex flex-col gap-2 p-2 w-[26%]">
        <p className="font-[400] text-[16px] text-[#263238]">Linkedin Id</p>
        <input
          value={linkedin}
          onChange={linkedin_handle}
          required
          type="text"
          className="p-2 shadow-md bg-[ #FFFFFF] rounded-md"
          placeholder="Enter the Linkedin Id"
        />
      </div>

      


      <div className="flex flex-col p-2 gap-2">
        <p>About The Company</p>
        <textarea 
        value={about}
        onChange={about_handle}
        required
        name="" id="" cols="10" rows="5" className=" p-2 rounded-md" placeholder="Enter the company Description "  ></textarea>
      </div>
   
      <div className="flex flex-col gap-3 mt-3 p-2">
        <p className="text-[16px] font-[400]">
          Upload Relevent Document
        </p>
        <div className="bg-[#DEEFFF] flex gap-3 w-fit p-3">
          <UploadFileIcon />
          <p className="text-[#1672DE] text-[16px ] font-[400]">Upload Document</p>
        </div>
      </div>
      <button className="font-[600] text-[16px] bg-[#1672DE] text-[#ffff] p-3 mt-3 ml-2 ">Add Company</button>
    </form>
  );
}