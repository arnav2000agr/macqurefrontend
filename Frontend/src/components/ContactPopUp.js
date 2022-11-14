import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Axios } from './Axios'
import { useParams } from 'react-router-dom'
// import './App.css';

function ContactPopUp({ setShowModal, user, setUser }) {
    const [name, setname] = useState()
    const [crole, setcrole] = useState()
    const [mobile, setmobile] = useState()
    const [email, setemail] = useState()
    const [profile, setProfile] = useState(user.profileContact)
    console.log(profile)
    const newp = {
        name: name,
        role: crole,
        mobile: mobile,
        email: email
    }
    const { role } = useParams()

    const handlename = (e) => {
        setname(e.target.value)
    }
    const handlecrole = (e) => {
        setcrole(e.target.value)
    }
    const handlemobile = (e) => {
        setmobile(e.target.value)
    }
    const handleemail = (e) => {
        setemail(e.target.value)
    }

    const handleSubmit = () => {

        setProfile(profile.push(newp))
        console.log(profile)
        Axios.put(`/update/${role}/${user._id}`, {
            profileContact: profile
        }).then((req, res) => {
            toast.success(res.data.message)
            setUser(res.data.user)
            setShowModal(false)
        }).catch((error) => {
            console.log(error.response.data.error)
            toast.error(error.response.data.error)
        })
    }

    return (
        <>
            <div className="flex justify-center align-middle">
                <div className="flex flex-col bg-[#f4f4f4] p-5 rounded-md">
                    <div className="flex justify-between">
                        <p className="font-medium text-2xl">Contact Details</p>
                        <ClearIcon onClick={() => { setShowModal(false) }} className='cursor-pointer' />
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="flex">
                            <div className="w-1/2">
                                <p className='mb-1'>Name </p>
                                <input value={name} onChange={handlename} required type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Enter your Full Name ' />
                            </div>
                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>Role</p>
                                <input value={crole} onChange={handlecrole} required type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Contact Person Name' />
                            </div>
                        </div>

                        <div className="flex mt-6">
                            <div className="w-1/2">
                                <p className='mb-1'>Mobile Number</p>
                                <div className="flex justify-between my-1">
                                    <input value={mobile} onChange={handlemobile} required type="text" className='bg-white rounded-md py-2 px-4 w-48 border border-gray-400 target::border-[#0377EB]' placeholder='Enter the Number' />
                                    <button className='bg-[#004AA1] p-1 text-xs rounded-md text-white'>Send Otp</button>
                                </div>
                            </div>

                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>OTP</p>
                                <div className="flex justify-between">
                                    <input required type="text" className='bg-white rounded-md py-2 px-4 w-44 border border-gray-400 target::border-[#0377EB]' placeholder='Enter OTP' />
                                    <button className='bg-[#004AA1] p-1 text-sm rounded-md text-white'>Verify Otp</button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className='mb-1'>Email Address</p>
                            <input value={email} onChange={handleemail} required type="email" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Your Email' />
                        </div>
                    </div>

                    <div className="text-end mt-2">
                        <button onClick={() => { setShowModal(false); handleSubmit() }} className='bg-[#004AA1] px-3 py-2 mt-4 text-white rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPopUp;