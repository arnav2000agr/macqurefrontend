import React from "react";

function CreateAcc({ formData, setFormData }) {
	return (
		<div className="flex flex-col justify-center">
			<input type="email" placeholder="Enter Your Email" value={formData.email} onChange={(e) => {
				setFormData({ ...formData, email: e.target.value });
			}} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />

			<input type="text" placeholder="Enter a Secure Password" value={formData.password} onChange={(e) => {
				setFormData({ ...formData, password: e.target.value });
			}} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />

			<input type="password" placeholder="Enter again" value={formData.confirmPassword} onChange={(e) => {
				setFormData({ ...formData, confirmPassword: e.target.value });
			}} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />

		</div>
	);
}

export default CreateAcc;
