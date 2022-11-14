import React, { useEffect, useState } from 'react'
import updown from "./rfqimg/updown.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Header from '../../Header';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getallorders } from '../../../actions/OrderActions';



export default function Activerfq() {
  const [bids, setBids] = useState([])
  
  const [status, setStatus] = useState('active')
  const navigate = useNavigate()

  const { bid } = useSelector(state => state.bid)
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
 
	const [timerHours, setTimerHours] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();

	let interval;

	const startTimer = () => {
		const countDownDate = new Date("Sept 25,2022").getTime();
				
		interval = setInterval(() => {
			const now = new Date().getTime();

			const distance = countDownDate - now;

			const hours = Math.floor(
				(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);

			if (distance <= 0) {

				// Change the status in Database



				// Stop Timer
				clearInterval(interval.current);
			} else {
				// Update Timer
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		});
	};

	

  

  useEffect(() => {
    dispatch(getallorders)
    setBids(bid)
    startTimer();
  }, [])




  return (
    <div className=''>
      
      <div className=' '>
        {/* <div className='flex gap-4 mt-16 '>
          <img src={updown} alt="" className='p-3 h-[70px] bg-[#E6F3FF]' />
          <div className='flex flex-col'>
            <p className='text-[#637F94] text-[20px] font-[400]'>Total RFQs</p>
            <h2 className='text-[48px] font-[600] -mt-3'>15000</h2>
          </div>
        </div> */}




        {/* <div className="track_mid ">
          <div onClick={status_NewRFQs} className={` cursor-pointer  ${status === 'processing' ? 'first' : 'second'} `}>
            <div className="flex">
              <p className="flex-1">New RFQs</p>
              <ChevronRightIcon className="mt-2 mr-4" />
            </div>
            <h3>15000</h3>
          </div>
          <div onClick={status_active} className={` cursor-pointer  ${status === 'active' ? 'first' : ' second'} `}>
            <div className="flex">
              <p className="flex-1">Active RFQs</p>
              <ChevronRightIcon className="mt-2 mr-4" />
            </div>
            <h3>15000</h3>
          </div>
          <div onClick={status_Accepted} className={` cursor-pointer  ${status === 'accepted' ? 'first' : ' second'} `}>
            <div className="flex items-center">
              <p className="flex-1">Accepted RFQs</p>
              <ChevronRightIcon className="mt-2 mr-4" />
            </div>
            <h3>15000</h3>
          </div>
          <div onClick={status_RfqHistory} className={` cursor-pointer  ${status === 'RFQs History' ? 'first' : ' second'} `}>
            <div className="flex">
              <p className="flex-1">RFQs History</p>
              <ChevronRightIcon className="mt-2 mr-4" />
            </div>
            <h3>15000</h3>
          </div>
        </div> */}




        <div className="flex flex-col bg-white box_shadow">
          <div className="mr-6">
            <div className="">
              <div className="overflow-hidden">

               { bids.filter(bid => bid.quote_status === 'active').length > 0 ?
                <table className="min-w-full text-black text-1xl font-normal ">
                  <thead className="">
                    <tr className="border-b  hover:border-b  ">
                     
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        RFQ No.
                      </th>
                      <th
                        scope="col"
                        className="text-sm   font-medium text-gray-900 px-6 py-4 text-left"
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
                      >
                        Timer
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      > </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      bids.filter(bid => bid.quote_status === status).length > 0 &&
                        bids.filter(bid => bid.quote_status === status).map((elem, index) => {
                          return (
                            <tr key={elem._id} className="border-b h-12 hover:border-b  hover:border-blue-500">
                             
                              <td className="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
                                #5234234
                              </td>
                              <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                {elem.product ? elem.product.name : 'null'}
                              </td>
                              <td className="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                                {elem.quantity}
                              </td>
                             
                              <td className="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                {elem.createdAt.split('T')[0]}

                              </td>
                              <td className="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                {
                                  elem.bids.filter(bid=>bid.price===null).length+'/'+elem.bids.length
                                }

                              </td>
                              <td className="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                12:00:00

                              </td>
                              <td className="text-sm font-light px-6 py-4  whitespace-nowrap">
                                <button onClick={()=>{navigate(`/order/${elem._id}`)}} className='bg-[#1672DE] px-5 py-2 rounded-md text-white font-[600] '>View Details</button>

                              </td>
                              <td className="text-sm  font-light  whitespace-nowrap">
                                <MoreVertIcon />
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
