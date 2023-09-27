import React, { useState } from 'react'
import Form from './Form';
const Sidebar = ( {isCardView,setlsCardView}) => {
    const [isFormVisible,setIsFormVisible] = useState(false);
    const handleFormBtn = () =>{
        setIsFormVisible (!isFormVisible)
    }
  return (
    
    <div className='flex h-screen '>
        <div className=' bg-blue-200 text-white p-6'>
            <div className='bg-white text-black font-bold text-[20px] py-2 px-4 rounded-lg mt-3 w-[278px] h-[77px]'>
                Hiii Reader
                <br/>
                <span className='font-normal text-base text-[17px]'>Here's Your News!</span>
            </div>
            <div className='bg-white text-black font-bold text-[28px] py-2 px-4 rounded-lg mt-3 w-[278px] h-[161px]'>
                View Toggle
                <button className='bg-gray-400 hover:bg-blue-500 text-black font-semibold py-2 px-4 rounded w-[65%]' onClick={()=>setlsCardView(!isCardView)}>
                    Toggle
                </button>
                
            </div>
            <div className='bg-white text-black font-bold text-[28px] py-2 px-4 rounded-lg mt-3 w-[278px] h-[161px]'>
                Have a Feedback?
                <button className='bg-[#A3FFD3] w-[229px] h-14 rounded-lg mt-2' onClick={handleFormBtn}>
                    We're Listening

                </button>
                {isFormVisible && <Form />}
            </div> 
          
        </div>
    </div>
  )
}

export default Sidebar;