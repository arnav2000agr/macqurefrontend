import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function AlterProfile() {
    return (
        <>
            <div className="flex justify-center align-middle py-3 mt-3 box_shadow border rounded-md flex-col bg-white flex-1">
                <p className='text-xl text-center'>There are users added in this section</p>
                <div className="text-center mt-3">
                    <PersonAddIcon fontSize='large' className='text-center' />
                </div>
                <div className="text-center mx-auto mt-6">
                    <p>Contact <span className='text-[#004E97] underline'>admin@maqure.com</span> for more information</p>
                </div>
            </div>
        </>
    );
}

export default AlterProfile;
