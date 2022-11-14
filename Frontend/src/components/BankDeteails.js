import React from 'react'
import { useState } from 'react';
import '../index.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AlterProfile from './AlterProfile';

const BankDeteails = ({ setShowModal, user }) => {
	const [profile, setProfile] = useState(user && user.profileBank)
	console.log(user)

	return (
		<>
			<div className="mt-4">

				<div className="flex flex-col overflow-y-scroll h-[240px]">
					<button onClick={() => { setShowModal('bankDetails') }} className='text-white bg-[#004AA1] px-3 py-2 text-lg font-medium rounded-md w-fit'><AddCircleOutlineIcon className='mr-1 mb-1' fontSize='small' />Bank Details</button>

					{
						profile && profile.length !== 0 ? 
						profile.map((e) => {
							return (
								<div className="mt-3 rounded-md box_shadow border bg-white p-3">
									<div className="flex justify-between">
										<h1>Contacts</h1>
										<button onClick={() => { setShowModal('bankDetails') }} className='text-white bg-[#004AA1] px-2 py-1 rounded-md '><BorderColorIcon className='mb-1' fontSize='small' /><span className='mx-2'>Edit</span></button>
									</div>

									<div className="flex w-11/12 mt-3 p-1 flex-wrap">
										<div className="flex flex-col w-1/3 my-2">
											<p className="text-[#637F94] text-sm font-medium">Account Holder Name</p>
											<p>{e.name}</p>
										</div>
										<div className="flex flex-col w-1/3 my-2">
											<p className="text-[#637F94] text-sm font-medium">IFSC Code</p>
											<p>{e.ifsc}</p>
										</div>
										<div className="flex flex-col w-1/3 my-2">
											<p className="text-[#637F94] text-sm font-medium">Account Number</p>
											<p>{e.accountNo}</p>
										</div>
										<div className="flex flex-col w-1/3 my-2">
											<p className="text-[#637F94] text-sm font-medium">Bank Name</p>
											<p>{e.bankName}</p>
										</div>
										<div className="flex flex-col w-1/3 my-2">
											<p className="text-[#637F94] text-sm font-medium">Branch Name</p>
											<p>{e.branchName}</p>
										</div>
										<div className="flex flex-col w-1/3 my-2">
											<p className="text-[#637F94] text-sm font-medium">Is this your Primary Account </p>
											<p>{e.primary}</p>
										</div>
									</div>
								</div>
							)
						})
						:
						<AlterProfile/>
					}
				</div>
			</div>
		</>
	)
}

export default BankDeteails