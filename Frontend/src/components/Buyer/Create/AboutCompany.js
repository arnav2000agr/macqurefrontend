import React from "react";

function AboutCompany({ formData, setFormData }) {
    return (
        <div className="flex flex-col justify-center">
            <input type="text" placeholder="Categories" value={formData.category} onChange={(e) => {
                setFormData({ ...formData, category: e.target.value });
            }} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />

            <input type="text" placeholder="Products" value={formData.products} onChange={(e) => {
                setFormData({ ...formData, products: e.target.value });
            }} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />

            <input type="text" placeholder="Raw Materials" value={formData.rawMaterial} onChange={(e) => {
                setFormData({ ...formData, rawMaterial: e.target.value });
            }} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />
        </div>
    );
}

export default AboutCompany;
