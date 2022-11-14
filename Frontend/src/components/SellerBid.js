import { Axios } from './Axios'
import React, { useEffect, useState } from 'react'
import SellerBidBox from './SellerBidBox'
import ExploreEnquiry from '../pages/Seller/ExploreEnquiry'

const SellerBid = () => {
  const [data, setData] = useState([])
  const [sellerid, setSellerid] = useState('')
  const [bids, setBids] = useState([])


  useEffect(() => {
    Axios.get('/seller/enquries').then((data) => {
      setData(data.data.bids)
      console.log(data.data)
      setSellerid(data.data.sellerid)
    })

    const getdata = async () => {
      try {
        await Axios.get('/getall/buyer/bids').then((res) => {
          setBids(res.data.buyerbids.bids)
          console.log(bids)
        })
      } catch (error) {
        console.log(error);
      }
    }
    getdata()
  }, [])

  return (
    <div className=" flex flex-col gap-3">
      {/* <h1>Latest Enquries </h1> */}
      {bids.filter(bid => bid.quote_status === 'live' || bid.quote_status === 'pending' || bid.quote_status === 'accepted').length > 0 ?
        <div className="brid_box grid grid-cols-3 gap-6">
          {
            data.map((e, key) => {
              return e.bids.map((data, key) => {
                return sellerid === data.seller && data.price === 0 ? (
                  <SellerBidBox e={e} sellerid={sellerid} />

                ) : (
                  ''
                )
              })
            })
          }
        </div>
        :
        <ExploreEnquiry />
      }
    </div>
  )
}

export default SellerBid