import React, { useEffect, useState } from 'react'

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import updown from "./rfqimg/updown.png";

import Qvotobox from './Qvotobox';
import SearchBox from '../../SearchBox';
import Header from '../../Header';
import { useDispatch, useSelector } from 'react-redux';
import { getallorders } from '../../../actions/OrderActions';
import { useNavigate } from 'react-router-dom';
import Activerfq from './Activerfq';
import Accepted from './AccepetedRfq';
import RfqHistory from './RfqHistory';
import Box from '../../Box';


export default function RfqContent() {
  const [bids, setBids] = useState([])
  const [status, setStatus] = useState('processing')



  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { bid } = useSelector(state => state.bid)




  const status_NewRFQs = () => {
    setStatus('processing')
  }
  const status_active = () => {

    setStatus('active')

  }
  const status_Accepted = () => {

    setStatus('buyer_accepted')

  }
  const status_RfqHistory = () => {
    setStatus('history')
  }

  useEffect(() => {

    dispatch(getallorders)
    setBids(bid)

  }, [status])



  return (
    <div className='border flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen'>
      <Header />

      <div className=''>
        <div className='flex gap-4 mt-16'>
          <img src={updown} alt="" className='p-3 h-[70px] bg-[#E6F3FF]' />
          <div className='flex flex-col  '>
            <p className='text-[#637F94] text-[20px] font-[400]'>Total RFQs</p>
            <h2 className='text-[48px] font-[600] -mt-3'>15000</h2>
          </div>
        </div>

        <div className="box_cont flex gap-5 mt-7">
          <div className={` text-sm box_shadow border flex bg-white flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'processing' && 'bg-buyer-primary text-white'} `} onClick={status_NewRFQs}>
            <Box content={'NewRFQs'} bids={bids} />
          </div>
          <div className={` text-sm box_shadow border bg-white flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'active' && 'bg-buyer-primary text-white'} `} onClick={status_active}>
            <Box content={'ActiveRFQs'} bids={bids} />
          </div>
          <div className={` text-sm box_shadow border bg-white flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'buyer_accepted' && 'bg-buyer-primary text-white'} `} onClick={status_Accepted}>
            <Box content={'AcceptedRFQs'} bids={bids} />
          </div>
          <div className={` text-sm box_shadow border bg-white flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'history' && 'bg-buyer-primary text-white'} `} onClick={status_RfqHistory}>
            <Box content={'RFQHistory'} bids={bids} />
          </div>
        </div>

      </div>


      <div className=''>
        <SearchBox />
      </div>

      <div className=''>
        <div className=' grid grid-cols-3  justify-around gap-6'>
          {
            status === 'processing' &&
            (
              bid.filter(bid => bid.quote_status === status).length > 0 ?
                bid.filter(bid => bid.quote_status === status).map((elem, index) => {
                  return (
                    <Qvotobox key={elem._id} setStatus={setStatus} id={elem._id} elem={elem} />
                   
                  )
                })

                :
                <h1>no bids in this status</h1>

            )

          }
        </div>



        {
          status === 'active' &&
          <Activerfq />
        }


        {
          status === 'buyer_accepted' &&
          <Accepted />
        }



        {

          status === 'history' &&

          <RfqHistory />


        }



      </div>

    </div>
  )
}