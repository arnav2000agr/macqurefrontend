import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import { Axios } from './Axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import store from '../Store'
import Logout from '../Logout'

// import { redirect } from "react-router-dom";
// import Home from "./pages/CommonPages/Home";

const OnBoardHeader = ({setShowModal}) => {
   



    const { isAuthenticated } = useSelector(state => state.user)


    const navigate = useNavigate()

    const logout = () => {
        Axios.get(`logout/buyer`).then((req, res) => {
          store.dispatch({type: 'UserReq'})
          
            // toast.success(res.data.message)
        }).catch((error) => {
            console.log(error.response.data.error)
            // toast.error(error.response.data.error)
        })
    }
    // const navigate = useNavigate()
    return (
        <div >
            <div className=" flex justify-between px-14 items-center py-2 mb-6 fixed w-full left-0 top-0  z-40">
                <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active-link' : '')}><img src={logo} alt="" /></NavLink>
                <ul className="flex gap-6 py-2">
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active-link' : '')}><li  className=" text-lg font-semibold  px-2 py-1 text-[#004AA2]">Home</li></NavLink>

                    <li className="nav text-lg font-semibold px-2 py-1">What do we do ? </li>

                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/onboard'}><li className="text-lg font-semibold px-2 py-1">Sellers</li></NavLink>

                    <li className="nav text-lg font-semibold px-2 py-1">About Us</li>

                    {!isAuthenticated ? <>
                        <button onClick={() => { navigate('/create') }} className="signup bg-[#004AA2] rounded-md text-white text-lg font-semibold px-2 py-1  ml-4"><span>Sign Up</span></button>
                        <button className="signup bg-[#004AA2] rounded-md text-white text-lg font-semibold px-2 py-1  ml-4" onClick={() =>  setShowModal(true) }><span>Log In</span></button>
                    </>
                        :
                        <div className='flex gap-6 mt-1'>
                            <NotificationsNoneIcon />
                            {/* <AccountCircleIcon className='dropbtn' onClick={() =><Logout/>} /> */}
                            <div class="dropdown"> 
  <button class="dropbtn"><AccountCircleIcon/></button> 
  <div class="dropdown-content"> 
  <button onClick={logout} className="bg-black px-4 py-1 text-white ">Profile</button>
  <button onClick={logout} className="bg-black px-4 py-1 text-white ">Logout</button>
  
  </div> 
 </div> 
                            {/* <button onClick={logout} className='bg-[#ee1818] px-2 py-1 text-white rounded-md'>Logout</button> */}
                        </div>
                    }
                </ul>

            </div>

        </div>
    )
}

export default OnBoardHeader