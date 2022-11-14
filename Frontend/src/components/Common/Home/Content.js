import React, { useEffect, useRef, useState } from 'react'
import BuyerBox from './BuyerBox'
import FrameIcon from '../../../icons/growth.svg'
import { NavLink } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Credit from './Credit'
import { Axios } from '../../Axios'
import SearchBox from '../../SearchBox'
import SellerBid from '../../SellerBid'
import BuyerBid from '../../BuyerBid'

const Content = ({ user }) => {

	const content = useRef()
	const searchbar = useRef()
	const [change, setChange] = useState(false)
	const [bids, setBids] = useState([])

	useEffect(() => {

		content.current.addEventListener('scroll', () => {
			var rect = searchbar.current.getBoundingClientRect();

			if (rect.top < 70) {
				setChange(true)
			}
			if (rect.top > 70) {
				setChange(false)
			}

		})

		const getdata = async () => {
			const { data } = await Axios.get('/getall/buyer/bids')
			setBids(data.buyerbids.bids)
		}

		getdata()

	}, [])


	return (
		<div ref={content} className=' flex-1 px-14 py-8 space-y-5 overflow-y-scroll h-screen  '>
			<div className="box_conteainer grid grid-cols-3 gap-6 mt-16">
				<BuyerBox color='button_1' growth={true} icon={FrameIcon} desc={"Total Purchases"} />
				<BuyerBox color='button_2' growth={false} icon_set='icon_setting' icon={FrameIcon} desc={"Total Orders"} />

				{/* the third Box start */}
				<div className=' box_shadow  border flex flex-col p-4 bg-white rounded'>
					<h1 className=' text-buyer-small_heading text-lg font-semibold mb-6'>Total Biddings</h1>
					<div className='content_box flex flex-col mt-3 gap-3'>
						<div className="line_1 flex items-start  justify-between">
							<img src={FrameIcon} className='h-8' alt="" srcSet="" />
							<div className="processing w-2/5">
								<span>Processing</span>
								<h3 className=' text-buyer-know_more font-bold'>{bids.filter(bid => bid.quote_status === 'processing').length}</h3>
							</div>
							<div className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize'><NavLink
								to={"/bidding"} className=' text-buyer-know_more font-semibold underline'>Know more</NavLink>
								<BsFillArrowRightCircleFill size={16} />
							</div>
						</div>
						<div className="line_1 flex items-start  justify-between">
							<img src={FrameIcon} className='h-8' alt="" srcSet="" />
							<div className="processing w-2/5">
								<span>Live Biddings</span>
								<h3 className=' text-buyer-know_more font-bold'>{bids.filter(bid => bid.quote_status === 'active').length}</h3>
							</div>
							<div className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize'><NavLink to={"/bidding"} className=' text-buyer-know_more font-semibold underline'>Know more</NavLink>
								<BsFillArrowRightCircleFill size={16} />
							</div>
						</div>
						<div className="line_1 flex items-start  justify-between">
							<img src={FrameIcon} className='h-8' alt="" srcSet="" />
							<div className="processing w-2/5 ">
								<span>Pending Bids</span>
								<h3 className=' text-buyer-know_more font-bold'>{bids.filter(bid => bid.quote_status === 'ended').length}</h3>
							</div>
							<div className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize'><NavLink to={"/bidding"} className=' text-buyer-know_more font-semibold underline'>Know more</NavLink>
								<BsFillArrowRightCircleFill size={16} />
							</div>
						</div>
					</div>
				</div>
				{/* third Box ended */}

			</div>

			{/* credit Box start  ( for buyer page )  */}
			{
				user !== 'seller' &&
				<Credit />
			}
			{/* credit end */}


			{/* search box start from here */}
			<div ref={searchbar} className={'sticky top-4'}>
				<SearchBox change={change} />
			</div>
			{/* search box endded */}


			{
				user === 'seller' ?
					<SellerBid />
					:
					<BuyerBid bids={bids} />
			}
		</div>
	)
}

export default Content