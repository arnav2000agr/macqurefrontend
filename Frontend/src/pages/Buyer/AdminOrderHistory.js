import React from 'react'
import AdminHistory from '../../components/Buyer/Order/AdminHistory'
import Header from '../../components/Header'


export default function AdminOrderHistory({user}) {
    return (
        <div className=' flex-1'>
            <Header />
            <div className="main flex">
                <AdminHistory user={user}/>
            </div>
        </div>
    )
}
