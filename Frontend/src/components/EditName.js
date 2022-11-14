import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { BsCloudUploadFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Axios } from './Axios';

// import PhotoIcon from '@mui/icons-material/Photo';

function EditName({ setShowModal, user, setUser }) {
    const upload = () => {
        let file = document.getElementById("file");
        file.click()
    }

    const [name, setName] = useState(user.name ? user.name : "")
    const [companyName, setCompanyName] = useState(user.companyName ? user.companyName : "")
    const [Category, setCategory] = useState(user.Category ? user.Category : "")
    const [Area, setArea] = useState(user.Area ? user.Area : "")
    const [employees, setEmployees] = useState(user.employees ? user.employees : "")
    const [cin, setCin] = useState(user.cin ? user.cin : "")
    const [gst, setGst] = useState(user.gst ? user.gst : "")
    const [mobile, setMobile] = useState(user.mobile ? user.mobile : "")
    const [capacity, setCapacity] = useState(user.capacity ? user.capacity : "")
    const [email, setEmail] = useState(user.email ? user.email : "")
    const [linkedin, setLinkedin] = useState(user.linkedin ? user.linkedin : "")
    const [address, setAddress] = useState(user.address ? user.address : "")
    const [about, setAbout] = useState(user.about ? user.about : "")


    const { role } = useParams()

    const handlename = (e) => {
        setName(e.target.value)
    }
    const handlecompany = (e) => {
        setCompanyName(e.target.value)
    }
    const handlecategory = (e) => {
        setCategory(e.target.value)
    }
    const handlearea = (e) => {
        setArea(e.target.value)
    }
    const handlemployees = (e) => {
        setEmployees(e.target.value)
    }
    const handlecin = (e) => {
        setCin(e.target.value)
    }
    const handlegst = (e) => {
        setGst(e.target.value)
    }
    const handlemobile = (e) => {
        setMobile(e.target.value)
    }
    const handlecapacity = (e) => {
        setCapacity(e.target.value)
    }
    const handleemail = (e) => {
        setEmail(e.target.value)
    }
    const handlelinkedin = (e) => {
        setLinkedin(e.target.value)
    }
    const handleaddress = (e) => {
        setAddress(e.target.value)
    }
    const handleabout = (e) => {
        setAbout(e.target.value)
    }



    const submit_form = async (e) => {
        e.preventDefault();

        await Axios.put(`/update/${role}/${user._id}`, {
            name: name,
            companyName: companyName,
            email: email,
            linkedin: linkedin,
            address: address,
            capacity: capacity,
            gst: gst,
            cin: cin,
            Area: Area,
            employees: employees,
            Category: Category,
            mobile: mobile,
            about: about,
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
                <form onSubmit={submit_form} className="flex flex-col bg-[#f4f4f4] p-5 rounded-md">
                    <div className="flex justify-between">
                        <p className="font-medium text-2xl">Profile Information</p>
                        <ClearIcon onClick={() => { setShowModal(false) }} className=' cursor-pointer' />
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="flex flex-wrap gap-3">
                            <div className="">
                                <p className='mb-1'>Company Name </p>
                                <input value={companyName} onChange={handlecompany} required type="text" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder={`Company\'s Name`} />
                            </div>
                            <div className="">
                                <p className='mb-1'>Category</p>
                                <input value={Category} onChange={handlecategory} required type="text" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder={`Company\'s Category`} />
                            </div>
                            <div className="">
                                <p className='mb-1'>Area </p>
                                <input value={Area} onChange={handlearea} required type="text" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder='Area' />
                            </div>
                            <div className="">
                                <p className='mb-1'>No. of Employees</p>
                                <input value={employees} onChange={handlemployees} required type="Number" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder='Employees' />
                            </div>
                            <div className="">
                                <p className='mb-1'>CIN No.</p>
                                <input value={cin} onChange={handlecin} required type="text" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Your CIN No.' />
                            </div>
                            <div className="">
                                <p className='mb-1'>GST No. </p>
                                <input value={gst} onChange={handlegst} required type="text" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Your GST No.' />
                            </div>
                            <div className="">
                                <p className='mb-1'>Company Owner's Name</p>
                                <input value={name} onChange={handlename} required type="text" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Full Name' />
                            </div>
                            <div className="">
                                <p className='mb-1'>Company Owner's Contact</p>
                                <input value={mobile} onChange={handlemobile} required type={'number'} className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder='Contact Number' />
                            </div>
                            <div className="">
                                <p className='mb-1'>Warehouse Capacity </p>
                                <input value={capacity} onChange={handlecapacity} required type="Number" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder='In Sqfts' />
                            </div>
                            <div className="">
                                <p className='mb-1'>Email ID </p>
                                <input value={email} onChange={handleemail} required type="Email" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder='Enter Your Email' />
                            </div>
                            <div className="">
                                <p className='mb-1'>LinkedIn </p>
                                <input value={linkedin} onChange={handlelinkedin} type="text" className='bg-white rounded-md py-1 px-2 border border-gray-400 target::border-[#0377EB]' placeholder='Your LinkedIn ID ' />
                            </div>


                        </div>
                        <div className="mt-3 flex gap-20">
                            <div className="">
                                <p className='mb-1'>Address</p>
                                <input value={address} onChange={handleaddress} type="text" className='h-32 w-64 bg-white rounded-md py-2 px-4 border border-gray-400 ' placeholder='Enter Address' />

                            </div>

                            <div className="">
                                <p className='mb-1'>About</p>
                                <input value={about} onChange={handleabout} type="text" className='h-32 w-64 bg-white rounded-md py-2 px-4 border border-gray-400 ' placeholder='Enter About' />

                            </div>

                            <div className="">
                                <p className='mb-1'>Company's Logo</p>
                                <input id="file" className='hidden' accept={".pdf"} type="file" />

                                <div className="flex gap-3">

                                    <button type='button' onClick={upload} className=' bg-[#1672DE] w-fit flex text-white text-[0.7rem] rounded h-14 flex-col gap-2 text-center p-2 items-center justify-center px-2'>
                                        <BsCloudUploadFill color='' size={20} />
                                        <p>Upload</p>
                                    </button>

                                    <span className='h-32 w-32 text-sm bg-white rounded-md py-2 px-4 border border-gray-400 ' placeholder='Enter Address'>No Preview available</span>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className="text-end mt-">
                        <button type='submit' className='bg-[#1672DE] px-3 py-2 mt-4 text-white rounded-md'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditName;