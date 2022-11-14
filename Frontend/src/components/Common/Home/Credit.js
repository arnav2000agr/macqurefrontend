import React from 'react'

const Credit = () => {

  const credit = () => {
    window.confirm("Sorry for the Inconvience 🙏🙏\nThis feature will be available soon.🤞🤞")
  }
  return (
    <div className='credit_shadow flex bg-white w-full justify-between px-10 rounded  p-4'>
      <div className="heading text-lg">
        <h1 className='font-semibold text-buyer-small_heading'>Avail Amazing Credit Facilities for your Orders</h1>
        <p className=' text-buyer-text-color text-sm'>Get your Account Verified within 3 days.!</p>
      </div>
      <button onClick={credit} className='rounded text-sm text-white bg-buyer-primary px-6 py-2'>Apply For Credit </button>
    </div>
  )
}

export default Credit