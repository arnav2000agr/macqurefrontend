import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import '../index.css';
import AlterProfile from './AlterProfile';

function Contact({ setShowModal, user, setVal }) {
	const [profile, setProfile] = useState(user && user.profileContact)
	console.log(user)
	return (
		<>
			<div className="mt-4">

				<div className="flex flex-col overflow-y-scroll h-[240px]">
					<button onClick={() => { setShowModal('contact') }} className='text-white bg-[#004AA1] px-3 py-2 text-lg font-medium rounded-md w-fit'><AddCircleOutlineIcon className='mr-1 mb-1' fontSize='small' />Contacts</button>

					{
						profile && profile.length !== 0 ?
							profile.map((e) => {
								return (
									<div className="mt-3 rounded-md box_shadow bg-white p-3 border">
										<div className="flex justify-between">
											<h1>Contacts</h1>
											<button onClick={() => { setShowModal('upcontact'); setVal(e._id) }} className='text-white bg-[#004AA1] px-2 py-1 rounded-md '><BorderColorIcon className='mb-1' fontSize='small' /><span className='mx-2'>Edit</span></button>
										</div>

										<div className="flex w-11/12 mt-3 p-1">
											<div className="flex flex-col w-1/4">
												<p className="text-[#637F94] text-sm font-medium">Name</p>
												<p>{e.name}</p>
											</div>
											<div className="flex flex-col w-1/4">
												<p className="text-[#637F94] text-sm font-medium">Role</p>
												<p>{e.role}</p>
											</div>
											<div className="flex flex-col w-1/4">
												<p className="text-[#637F94] text-sm font-medium">Mobile Number</p>
												<p>{e.mobile}</p>
											</div>
											<div className="flex flex-col w-1/4">
												<p className="text-[#637F94] text-sm font-medium">Email ID</p>
												<p>{e.email}</p>
											</div>
										</div>
									</div>
								)
							})
							:
							<AlterProfile />
					}
				</div>
			</div>
		</>
	);
}

export default Contact;