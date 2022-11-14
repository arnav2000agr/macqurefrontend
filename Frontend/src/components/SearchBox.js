import React, { useRef, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {MdOutlineArrowDropDown} from 'react-icons/md'


const SearchBox = ({change}) => {


  const [options, setOptions] = useState(false)
  const [optionVal, setOptionVal] = useState('Sort by')
  const searchbar = useRef()
  

  //function
  const show_option = ()=>{
    setOptions(!options)
  }

  const getval = (e)=>{
    setOptionVal(e.target.value)
    setOptions(false)

  }
 
  
  return (
    <div ref={searchbar} className={`flex gap-4  items-center ${change && 'py-2 bg-white'} `}>
        <div className={`search_cover box_shadow border flex-1 rounded flex items-center ${change ? 'p-2' : 'p-4'} bg-white`}>
            <input type="text" className='flex-1 outline-none' placeholder='search' />
            <FiSearch size={20} className='text-buyer-text-color' />
        </div>
        <div className={`sort_cover border box_shadow  relative rounded w-64 justify-between items-center flex bg-white ${change ? 'p-2' : 'p-4'}`}>
           <p className=' text-buyer-text-color'>{optionVal}</p>
           <MdOutlineArrowDropDown onClick={show_option} className={`cursor-pointer ${options ? 'rotate-180':'rotate-0'} `} size={20}/>
{     
       options &&
           <div className="options absolute w-full left-0 top-full">
            <div className=' border bg-white'>
                <option onClick={(e)=>{getval(e)}} className='py-2 px-4 hover:bg-slate-200'>option_1</option>
                <option onClick={(e)=>{getval(e)}} className='py-2 px-4 hover:bg-slate-200'>option_2</option>
                <option onClick={(e)=>{getval(e)}} className='py-2 px-4 hover:bg-slate-200'>option_3</option>
                <option onClick={(e)=>{getval(e)}} className='py-2 px-4 hover:bg-slate-200'>option_4</option>
            </div>
        </div>
        }
        </div>
        
    </div>
  )
}

export default SearchBox