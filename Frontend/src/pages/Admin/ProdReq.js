import React, { useEffect, useRef, useState } from 'react'
import Box from '../../components/Box'
import { useNavigate } from 'react-router-dom';
import { Axios } from '../../components/Axios'
import company from "../../images/company.png";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import OnBoardHeader from '../../components/OnBoardHeader';




const ProdReq = () => {

  const [requests, setRequests] = useState([])
  // const [load, setLoad] = useState(true)
  const [status, setStatus] = useState('Already')

  const navigate = useNavigate()

  const status_proccess = () => {
    setStatus('Already')
  }
  const status_active = () => {
    setStatus('New')
  }

  const Acceptprod = async(elem)=>{
    await Axios.post('/request/addprod',{
      products:elem.product._id,
      sellers:elem.seller._id
    }).then((res)=>{
     
      toast.success(res.data.message)
      setRequests(res.data.requests)
    }).catch((error)=>{
    toast.error(error.response.data.error)

    })
  }


  const getdata = async () => {

    try {

      await Axios.get('/getall/request/product').then((res) => {
        setRequests(res.data.addrequs.AddprodReq)
        // setStatus(res.data.sucess)
        console.log(res.data.addrequs.AddprodReq);

      })

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {


    

    getdata()
  }, [status])

  return (
    <>
    <div className=' flex-1 h-screen overflow-y-scroll px-10 py-6'>
      <OnBoardHeader/>
      <h1 className=' text-2xl mt-16 font-medium'> Add Product Request</h1>
      <div className="box_cont flex gap-5 mt-7">
        <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'Already' && 'bg-buyer-primary text-white'} `} onClick={status_proccess}>
          Already Prodreq
        </div>
        <div className={` text-sm box_shadow border flex flex-col gap-2  box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'New' && 'bg-buyer-primary text-white'} `} onClick={status_active}>
          New Product Request
        </div>

      </div>

      {


        status === "New" ?
          <>
          <div className=' grid grid-cols-4 gap-4'>
          {
           requests.length >0 ?
           
            requests.map((elem,index)=>{
              
              return(
               
                <>

                
                <div className=" flex bg-white flex-col  mt-7  ">
                  <div className="flex flex-col  border  gap-4 text-sm">
                    <div className=" relative bg-slate-400">
                      <img className="image w-full h-full" src={company} alt="" />
                      <div className=" absolute bottom-0 w-full p-4 flex flex-col gap-2">
                        <h1 className="  text-white text-xl">ISOFOL 28</h1>
                        <hr className=" bg-white  w-full" />
                      </div>
                    </div>
  
                    <div className="p-3 flex flex-col  gap-4">
                      <div className=" flex flex-col gap-1 ">
                        <p className="  text-[#637F94]">INCI Name</p>
                        <h4 className="">{elem.product.name}</h4>
                      </div>
  
                      <div className=" flex flex-col gap-1">
                        <p className="  text-[#637F94]">Chemical Formula </p>
                        <p className=" ">{elem.product.Formula}</p>
                      </div>
  
                      <div className=" flex flex-col gap-1">
                        <p className="  text-[#637F94]">Seller Name</p>
                        <p className=" ">
                          {elem.seller.name}
                        </p>
                      </div>
  
                      <hr />
  
                      <div className=" flex  justify-between items-center">
                         <button className='px-5 py-2 rounded-md bg-red-300 hover:bg-[#ff8989]'>Reject</button>
                         <button onClick={()=>{ Acceptprod(elem) }} className='px-5 py-2 rounded-md bg-code-primary hover:bg-[#01407a] text-white'>Accept</button>
                      </div>
                    </div>
                  </div>
                </div>
            
                
                </>
                

              
              
             
              )
            })

            : 
            <>

            <h1 className=' bg-white p-2 text-center my-3 border '>No request yet</h1>
            </>
            }
            </div>
          </>
          :

          <>
         
          
          </>

      }

    </div>
    </>


  )
}

export default ProdReq