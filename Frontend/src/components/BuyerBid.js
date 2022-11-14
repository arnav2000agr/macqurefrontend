import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getallorders } from '../actions/OrderActions'
import ExploreProducts from '../pages/Buyer/ExploreProducts'
import Bid from './Buyer/Bidding/Bid'

const BuyerBid = (bids) => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getallorders)
	}, [])

	return (
		<div className=' flex flex-col space-y-5'>
			{
				bids.bids.filter(bid => bid.quote_status === 'ended').length + bids.bids.filter(bid => bid.quote_status === 'active').length > 0 ?
					bids.bids.filter(bid => bid.quote_status === 'ended').length + bids.bids.filter(bid => bid.quote_status === 'active').length > 0 ?
						bids.bids.filter((bid => bid.quote_status === 'ended') || (bid => bid.quote_status === 'active')).map((elem) => {
							return (
								<Bid key={elem._id} id={elem._id} elem={elem} />
							)
						})
						:
						""
					:
					<ExploreProducts />
			}

			
		</div>
	)
}

export default BuyerBid