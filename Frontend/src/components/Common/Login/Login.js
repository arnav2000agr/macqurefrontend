import React, { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { loginbuyeraction, loginselleraction, loginadminaction } from '../../../actions/BuyerActions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

    // state variables
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type_pass, setType_pass] = useState(true)

    // other variable and states
    const dispatch = useDispatch()
    const { error, isAuthenticated } = useSelector(state => state.user)
    const navigate = useNavigate()
    const location = useLocation()
    // functions
    const handle_email = (e) => {
        setEmail(e.target.value)
    }
    const handle_pass = (e) => {
        setPassword(e.target.value)
    }
    const set_pass_type = () => {
        setType_pass(!type_pass)
    }
    const submit_form = (e) => {
        e.preventDefault()
        if (byer) {
            if (email === "sau@001") {
                dispatch(loginadminaction(email, password)).then(()=>{
                    navigate('/dashboard')
                }).catch((error)=>{
                    console.log(error);
                })
            } else {
                dispatch(loginbuyeraction(email, password)).then(()=>{
                    navigate('/dashboard')
                }).catch((error)=>{
                    console.log(error);
                })

            }
        }
        else {
            dispatch(loginselleraction(email, password)).then(()=>{
                navigate('/dashboard')
            }).catch((error)=>{
                console.log(error);
            })
        }
    }

    const [byer, setByer] = useState(true)

    const select_seller = (e) => {
        e.preventDefault();
        setByer(false)
     
    }
    const select_byer = (e) => {
        e.preventDefault();
        setByer(true)
        
    }
  

    return (
        <div className='p-3 fixed left-1/2 flex flex-col  -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-md bg-white w-96 border'>

            <form action="" className=' p-3'>
                <div className="heading">
                    <h1 className=' text-heading my-1 text-code-text-heading font-semibold'>Welcome back!</h1>
                    <p className=' text-base text-code-text-color'>Login below or <span> <a href="/" className=' text-code-primary underline'>Create an Account</a></span></p>
                </div>
                <div>
                    <div className="buttons flex gap-4 my-4 mb-8">
                        <button onClick={select_byer} className={`flex-1    p-3 capitalize ${byer ? 'border-code-primary border-b-2 font-bold text-code-text-heading' : 'border-gray-300 border-b text-code-text-color'}`}>as a buyer</button>
                        <button onClick={select_seller} className={`p-3 capitalize  flex-1  ${!byer ? 'border-code-primary border-b-2 font-bold text-code-text-heading' : 'border-gray-300 border-b text-code-text-color'}`} >as a seller</button>
                    </div>
                </div>
                <div className="input_cover my-5 space-y-2">
                    <h3 className='text-sm text-code-text-color'>Email</h3>
                    <input value={email} required onChange={handle_email} type="email" className=' outline-none p-2 w-full border rounded border-code-primary' />
                </div>
                <div className="input_cover my-5 space-y-2">
                    <h3 className='text-sm text-code-text-color'>Password</h3>
                    <div className=' p-2 flex gap-2 justify-between items-center w-full border rounded border-code-primary'>
                        <input required value={password} onChange={handle_pass} type={type_pass ? 'password' : 'text'} className=' flex-1 outline-none' />
                        <AiOutlineEye onClick={set_pass_type} cursor={'pointer'} size={20} color={type_pass ? '#667080' : '#00A99D'} />
                    </div>
                </div>
                <button onClick={submit_form} type='submit' className='my-5 bg-code-primary text-white p-4 w-full rounded-md font-bold text-base'>Login</button>
                <span className=' font-bold text-[#004E97] block text-center'><a href="/" className='underline'>Forgot Password</a></span>
            </form>



        </div>
    )
}

export default Login