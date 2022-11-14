import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';


function ExploreProducts() {
    return (
        <>
            <div className="flex justify-center align-middle py-3 box_shadow border rounded-md flex-col bg-white flex-1">
                <p className='text-xl text-center'>There are  no Bids in this section</p>
                <div className="text-center mt-3">
                    <ShoppingCartIcon fontSize='large' className='text-center' />
                </div>
                <div className="text-center mx-auto mt-6">
                    <NavLink to={'/products'}><li className="w-fit text-center py-2 px-3 rounded-md text-sm list-none bg-[#004E97] text-white">Explore All Products</li></NavLink>
                </div>
            </div>
        </>
    );
}

export default ExploreProducts;
