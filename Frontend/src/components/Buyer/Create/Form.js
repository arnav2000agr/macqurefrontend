
import React, { useState } from 'react'
import '../../../index.css'
import logo from '../../../images/logo.png'
import { Navigate, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import SignUpInfo from './SignUpInfo'
import CreateAcc from './CreateAcc.js'
import CompanyInfo from './CompanyInfo'
import AboutCompany from './AboutCompany'
import axios from 'axios'
import { Axios } from '../../Axios'



function Form() {

  let navigate = useNavigate();
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    otp: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    cinNo: '',
    area: '',
    category: '',
    products: '',
    rawMaterial: '',
  })
  const submitform = () => {
    console.log('onsubmit')
    Axios.post('/new/buyer', {
      name: formData.name,
      Category: formData.category,
      Area: formData.area,
      cin: formData.cinNo,
      email: formData.email,
      password: formData.password,
      role: 'buyer',
      companyName: formData.companyName,
      mobile: formData.mobile,
    }).then((data)=>{
    console.log(data)
    navigate("/dashboard")
    
  }).catch((e)=>{
    console.log(e)
  })
  }

  const FormTitles = [
    'Sign Up',
    'Create Account',
    'Company Info.',
    'About Company',
  ]

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
      return <CreateAcc formData={formData} setFormData={setFormData} />
    } else if (page === 2) {
      return <CompanyInfo formData={formData} setFormData={setFormData} />
    } else {
      return <AboutCompany formData={formData} setFormData={setFormData} />
    }
  }

  return (
    <section className="flex-1 bg-slate-200">
      <div className="flex justify-center ">
        <div className="flex bg-white w-3/5 h-[520px] mt-28 rounded-md shadow-md">
          <div className="flex flex-col justify-center w-8/12 p-3">
            <img src={logo} alt="Logo" className="h-14 w-40 mx-auto mb-3" />
            <p className="text-3xl text-center font-semibold my-1">
              Welcome to Maqure
            </p>
            <p className="mb-5 text-center">
              Enter you account details Or{' '}
              <a href="/" className="underline text-[#004AA1] font-medium">
                Login
              </a>
            </p>

            <div className="h-[300px]">{PageDisplay()}</div>

            <div className="flex justify-between w-3/5 text-center mx-auto mt-2">
              <button
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1)
                }}
                className={`rounded-md p-2 text-white w-[100px] bg-[${
                  page === 0 ? '#FFFFFF' : '#004AA1'
                }]`}
              >
                Previous
              </button>

              <button
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert('FORM SUBMITTED')
                    submitform()
                    console.log(formData)
                  } else {
                    setPage((currPage) => currPage + 1)
                  }
                }}
                className="bg-[#004AA1] rounded-md p-2 text-white w-[100px]"
              >
                {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>

            <div className="border border-transparent border-b-gray-300 w-3/5 mx-auto mt-8"></div>
            <div className="text-[#637D94] text-center mt-5 text-lg">
              Want to Sell on Maqure ?
            </div>
            <NavLink
              to={'/onboard'}
              className="text-[#004AA1] font-semibold underline text-center mt-1 text-lg"
            >
              Become a Seller
            </NavLink>
          </div>


<div className="grow-0 shrink-1 md:shrink-0 my-24 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
