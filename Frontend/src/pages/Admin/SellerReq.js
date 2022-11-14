import React, { useEffect, useRef, useState } from 'react'
import Box from '../../components/Box'
import { useNavigate } from 'react-router-dom';
import { Axios } from '../../components/Axios'
import OnBoardHeader from '../../components/OnBoardHeader';

const SellerReq = () => {

    const [bids, setBids] = useState([])
    // const [load, setLoad] = useState(true)
    const [status, setStatus] = useState('processing')
    const [requests, setRequests] = useState([])

  
    const navigate = useNavigate()
  
    const status_proccess = () => {
      setStatus('Already')
  }
  const status_active = () => {
      setStatus('active')
  }
  
  
  useEffect(() => {
  
  
    const getdata = async () => {
  
        try {
  
            await Axios.get('/getall/request/seller').then((res) => {
                setRequests(res.data.admin.sellerReq)
                console.log(res.data);
            })
  
        } catch (error) {
            console.log(error);
        }
  
    }
  
    getdata()
  }, [status])

  return (
    <div className=' flex-1 h-screen overflow-y-scroll px-10 py-6'>
      <OnBoardHeader/>
            <h1 className=' text-2xl mt-16 font-medium'> Seller Account Request</h1>
            {/* <div className="box_cont flex gap-5 mt-7">
                            <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'processing' && 'bg-buyer-primary text-white'} `} onClick={status_proccess}>
                                <Box content={'Already Product'} bids={bids} />
                            </div>
                            <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'active' && 'bg-buyer-primary text-white'} `} onClick={status_active}>
                                <Box content={'New Product'} bids={bids} />
                            </div>
                            
                        </div> */}

                        <div className=''>
      
      <div className=''>
        <div className="flex  flex-col mt-3 bg-white box_shadow">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="   sm:px-6 lg:px-8">
              <div className="overflow-hidden">

              {  requests.length > 0 ?
              
              <table className="min-w-full text-black text-1xl font-normal ">
                  <thead className="">
                    <tr className="border-b  hover:border-b  ">

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Req ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Company Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                       Email
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Mobile
                      </th>
                      

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Date
                         </th>
                    </tr>
                  </thead>
                  <tbody>

                    {requests.length > 0 &&
                      requests.map((elem, index) => {
                        return (
                          <tr className="border-b h-12 hover:border-b  hover:border-blue-500">

                            <td className="text-sm  text-[#1672DE]  font-light px-6 py-4 whitespace-nowrap">
                              #{elem._id}
                            </td>
                            <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                {elem.companyName}
                            </td>
                            <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                              {elem.email }
                            </td>
                            <td className="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                              {elem.mobile}
                            </td>
                            <td className="text-sm   font-light px-6 py-4 whitespace-nowrap  ">
                              {elem.createdAt.split('T')[0]}
                            </td>

                            
                          </tr>

                        )
                      })
                    }


                  </tbody>
                </table>
                :
                <h1 className=' p-4 text-center'>No Requests</h1>
              }
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
        </div>

  )
}

export default SellerReq