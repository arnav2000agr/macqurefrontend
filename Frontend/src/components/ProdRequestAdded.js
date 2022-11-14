import thumb from '../images/thumb.png'

function ProdRequestAdded({setShowModal}) {
    return (
        <>
            <div className="flex justify-center align-middle">
                <div className="flex flex-col bg-[#f4f4f4] py-5 rounded-md">

                    <img src={thumb} alt="" className='w-1/5 text-center mx-auto' />

                    <div className="flex flex-col mt-2 justify-center w-4/5 mx-auto">
                        <p className='font-medium text-2xl text-center w-10/12 mx-auto'>We are reviewing your request. We will get back to you shortly!</p>
                        <p className='text-[#637F94] text-center mt-2 w-4/5 mx-auto'>In the meantime please explore through your digital company store that we have created.</p>
                    </div>


                    <div className="text-center mt-6">
                        <button onClick={()=>{ setShowModal(false) }} className='bg-[#1672DE] px-3 py-2 mt-4 text-white rounded-md'>Request to add the product</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProdRequestAdded;
