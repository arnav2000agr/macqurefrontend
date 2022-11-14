import React from 'react'
import { FiBarChart2 } from 'react-icons/fi'
const Heading = () => {
	return (
		<div>
			<div className="heading text-sm flex items-center gap-6">
				<FiBarChart2 className=' text-buyer-primary font-bold graph' size={75} />
				<div className='flex flex-col gap-3'>
					<p className='text-buyer-text-color text-xl'>Total Enquries</p>
					<h1 className=' font-bold text-[44px]'>15,000</h1>
				</div>
			</div>
		</div>
	)
}

export default Heading