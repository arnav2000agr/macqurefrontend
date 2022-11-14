import React from 'react'
import { Axios } from '../src/components/Axios'
import store from './Store'

const Logout = () => {
    const logout = () => {
        Axios.get(`logout/buyer`).then((req, res) => {
          store.dispatch({type: 'UserReq'})
          
            // toast.success(res.data.message)
        }).catch((error) => {
            console.log(error.response.data.error)
            // toast.error(error.response.data.error)
        })
    }
  return (
    <>
        <div>
            <li>Profile</li>
            <button onclick={logout}>Logout</button>
        </div>
    </>
  )
}

export default Logout