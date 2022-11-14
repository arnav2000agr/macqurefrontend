import React from 'react'
import Featues from '../../components/Common/ProductDecr/Featues'
import OrderForm from '../../components/Common/ProductDecr/OrderForm'
import ProdDecr from '../../components/Common/ProductDecr/ProdDerc.js.js'
import Header from '../../components/Header'

const Prodcut = () => {
  return (
    <div className='flex'>
       <Header/>
       <div className=' product flex-1 h-screen overflow-y-scroll '>
         <ProdDecr/>
       </div>
       <div className=' text-[0.84rem] px-3 flex flex-col h-screen fixed right-4'>
          <OrderForm/>
          <Featues/>
       </div>
    </div>
  )
}

export default Prodcut