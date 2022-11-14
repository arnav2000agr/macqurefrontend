import React from 'react'
import History from '../../components/Buyer/Order/History'
import Header from '../../components/Header'
export default function Orderhistory() {
  return (
    <div className=' flex-1'>
     <Header/>
      <div className="main flex">
        <History />
      </div>
    </div>
  )
}
