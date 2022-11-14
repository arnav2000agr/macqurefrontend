import React from "react";

function CompanyInfo({ formData, setFormData }) {
	return (
		<div className="flex flex-col justify-center">
			<input type="text" placeholder="Your Company Name" value={formData.companyName} onChange={(e) => {
				setFormData({ ...formData, companyName: e.target.value });
			}} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />

			<input type="text" placeholder="Company's CIN Number" value={formData.cinNo} onChange={(e) => {
				setFormData({ ...formData, cinNo: e.target.value });
			}} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />

			<input type="text" placeholder="Company's Locality" value={formData.area} onChange={(e) => {
				setFormData({ ...formData, area: e.target.area });
			}} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />
		</div>
	);
}

export default CompanyInfo;
