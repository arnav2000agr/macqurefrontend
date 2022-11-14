import React, { useEffect, useState } from 'react'
import updown from "./rfqimg/updown.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Header from '../../Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getallorders } from '../../../actions/OrderActions';


export default function Accepted() {
  const [bids, setBids] = useState([])
  const [status, setStatus] = useState('active')



  const { bid } = useSelector(state => state.bid)
  const navigate = useNavigate()

  const dispatch = useDispatch()


  const status_NewRFQs = () => {
    navigate('/rfq')
    setStatus('processing')
  }
  const status_active = () => {
    navigate('/activerfq')
    setStatus('active')

  }
  const status_Accepted = () => {
    navigate('/arfq')
    setStatus('accepted')

  }
  const status_RfqHistory = () => {
    setStatus('accepted')
  }


  const status_color = () => {

  }


  useEffect(() => {
    dispatch(getallorders)
    setBids(bid)
  }, [])

  return (
    <div className=''>
      
      <div className=''>
        <div className="flex  flex-col mt-3 bg-white box_shadow">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="   sm:px-6 lg:px-8">
              <div className="overflow-hidden">

              {  bids.filter(bid => bid.quote_status === 'buyer_accepted').length > 0 ?
              
              <table className="min-w-full text-black text-1xl font-normal ">
                  <thead className="">
                    <tr className="border-b  hover:border-b  ">

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        RFQ No.
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Quantity
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        status
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      > </th>
                    </tr>
                  </thead>
                  <tbody>

                    {bids.filter(bid => bid.quote_status === 'buyer_accepted').length > 0 &&
                      bids.filter(bid => bid.quote_status === 'buyer_accepted').map((elem, index) => {
                        return (
                          <tr className="border-b h-12 hover:border-b  hover:border-blue-500">

                            <td className="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
                              #{elem._id}
                            </td>
                            <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                              {elem.product.name}
                            </td>
                            <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                              {elem.quantity}
                            </td>
                            <td className="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                              {elem.createdAt.split('T')[0]}
                            </td>
                            <td className="text-sm  rounded-md  font-light px-6 py-4 whitespace-nowrap">
                              <p className={`${elem.order_status==='preparing' ? 'bg-[#FFF61C]' : 'bg-[#1FACFB66]'} px-3 py-2 rounded-md text-center `}>{elem.order_status} </p>
                            </td>

                            <td className="text-sm  font-light cursor-pointer whitespace-nowrap">
                              <ChevronRightIcon onClick={()=>{navigate(`/order/${elem._id}`)}} />

                            </td>
                          </tr>

                        )
                      })
                    }


                  </tbody>
                </table>
                :
                <h1 className=' p-4 text-center'>No bids in this Status</h1>
              }
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
