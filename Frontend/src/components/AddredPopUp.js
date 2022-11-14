import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { Axios } from './Axios'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'

function AddredPopUp({ setShowModal, user, setUser }) {
    const [type, setType] = useState(user.type ? user.type : "")
    const [name, setName] = useState(user.name ? user.name : "")
    const [mobile, setMobile] = useState(user.mobile ? user.mobile : "")
    const [address, setAddress] = useState(user.address ? user.address : "")
    const [profile, setProfile] = useState(user.profileAddress)
    console.log(profile)

    const newp = {
        adtype: type,
        name: name,
        mobile: mobile,
        address: address
    }
    const { role } = useParams()

    const handleType = (e) => {
        setType(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleMobile = (e) => {
        setMobile(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleSubmit = async () => {
        setProfile(profile.push(newp));

        await Axios.put(`/update/${role}/${user._id}`, { 
            profileAddress: profile
        }).then((res) => {
            console.log(res)
            toast.success('profile updated successfully')
            setUser(res.data.user)
            setShowModal(false)

        }).catch((error) => {
            toast.error(error.response.data.error)
            console.log(error)

        })
    }


    return (
        <>
            <div className="flex justify-center align-middle">
                <div className="flex flex-col bg-[#f4f4f4] p-5 rounded-md">
                    <div className="flex justify-between">
                        <p className="font-medium text-2xl">Address Details</p>
                        <ClearIcon onClick={() => { setShowModal(false) }} className=' cursor-pointer' />
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="flex">
                            <div className="w-1/2">
                                <p className='mb-1'>Address Type </p>
                                <input value={type} onChange={handleType} required type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder={`Type Of Addresss`} />
                            </div>
                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>Contact Person Name</p>
                                <input value={name} onChange={handleName} required type="text" className='bg-white rounded-md py-2 px-4 w-64 border border-gray-400 target::border-[#0377EB]' placeholder={`Enter Your Name`} />
                            </div>
                        </div>

                        <div className="flex mt-6">
                            <div className="w-1/2">
                                <p className='mb-1'>Contact Number</p>
                                <div className="flex justify-between my-1">
                                    <input value={mobile} onChange={handleMobile} required type="text" className='bg-white rounded-md py-2 px-4 w-48 border border-gray-400 target::border-[#0377EB]' placeholder='Enter the Number' />
                                    <button type="button" className='bg-[#1672DE]  text-xs p-1 rounded-md text-white'>Send Otp</button>
                                </div>
                            </div>

                            <div className="w-1/2 ml-8">
                                <p className='mb-1'>OTP</p>
                                <div className="flex justify-between">
                                    <input required type="text" className='bg-white rounded-md py-2 px-4 w-44 border border-gray-400 target::border-[#0377EB]' placeholder='Enter OTP' />
                                    <button type="button" className='bg-[#1672DE] p-1 text-sm rounded-md text-white'>Verify Otp</button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className='mb-1'>Address</p>
                            <input value={address} onChange={handleAddress} type="text" className='w-full h-56 bg-white rounded-md py-2 px-4 border border-gray-400 ' placeholder='Enter Address' />
                        </div>
                    </div>

                    <div className="text-end mt-1">
                        <button type='submit'  onClick={() => { setShowModal(false); handleSubmit() }} className='bg-[#1672DE] px-3 py-2 mt-4 text-white rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddredPopUp;