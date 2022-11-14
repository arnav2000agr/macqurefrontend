import React, { useEffect, useState } from 'react'
import updown from "./rfqimg/updown.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Header from '../../Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getallorders } from '../../../actions/OrderActions';


export default function RfqHistory() {
  const [bids, setBids] = useState([])
  const [status, setStatus] = useState('active')



  const { bid } = useSelector(state => state.bid)
  const navigate = useNavigate()

  const dispatch = useDispatch()


  


  useEffect(() => {
    dispatch(getallorders)
    setBids(bid)
  }, [])

  return (
    <div className=''>
      
      <div className=''>
        <div className="flex  flex-col mt-3 bg-white">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="   sm:px-6 lg:px-8">
              <div className="overflow-hidden">
              { bids.filter(bid => bid.quote_status === 'accepted' || bid.quote_status === 'rejected' ).length > 0 ?
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

                    {bids.filter(bid =>  bid.quote_status === 'rejected' || bid.quote_status === 'accepted').length > 0 &&
                      bids.filter(bid =>  bid.quote_status === 'rejected' || bid.quote_status === 'accepted').map((elem, index) => {
                        return (
                          <tr key={elem._id} className="border-b h-12 hover:border-b  hover:border-blue-500">

                            <td className="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
                              #{elem._id}
                            </td>
                            <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                              {elem.product ? elem.product.name : 'null' }
                            </td>
                            <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                              {elem.quantity}
                            </td>
                            <td className="text-sm font-light px-6 py-4 whitespace-nowrap  ">
                              {elem.createdAt.split('T')[0]}
                            </td>
                            <td className="text-sm  rounded-md  font-light px-6 py-4 whitespace-nowrap">
                              <p className={` ${elem.quote_status==='accepted' ? 'bg-[#C9FFC8]' : 'bg-[#FFC8C8]'} px-3 py-2 rounded-md text-center `}>{elem.quote_status} </p>
                            </td>

                            <td className="text-sm  font-light  whitespace-nowrap">
                              <ChevronRightIcon />

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
