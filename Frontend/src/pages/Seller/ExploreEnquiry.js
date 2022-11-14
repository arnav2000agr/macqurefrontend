import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';


function ExploreProducts() {
    return (
        <>
            <div className="flex justify-center align-middle py-3 box_shadow border rounded-md flex-col bg-white flex-1">
                <p className='text-xl text-center'>There are no current enquries in this section</p>
                <div className="text-center mt-3">
                    <ShoppingCartIcon fontSize='large' className='text-center' />
                </div>
                <div className="text-center mx-auto mt-6">
                    <p>Contact <span className='text-[#004E97] underline'>admin@maqure.com </span>for more information</p>
                </div>
            </div>
        </>
    );
}

export default ExploreProducts;
