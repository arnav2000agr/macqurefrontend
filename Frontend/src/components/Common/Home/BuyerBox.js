import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'


const BuyerBox = ({ color, icon, icon_set, growth, desc }) => {
	return (
		<div className='box_shadow border flex flex-col p-4 bg-white rounded'>
			<div className="icon_box flex justify-between">
				<img className={`${icon_set}`} src={icon} alt="" srcSet="" />
				<div>
					<div className="mt-3 flex -space-x-2 overflow-hidden">
						<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
						<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
						<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
						<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
						<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
					</div>
				</div>
			</div>
			<div className="heading my-6">
				<h1 className=' my-2 text-3xl'>Rs 0</h1>
				<h2 className=' text-md font-medium text-buyer-small_heading'>{desc}</h2>
			</div>
			<NavLink className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize mt-2' to={'buyerorder'}><a href="/" className=' text-buyer-know_more'>Know more</a>
				<BsFillArrowRightCircleFill size={16} />
			</NavLink>
		</div>
	)
}

export default BuyerBox