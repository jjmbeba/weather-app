import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation, setMenuState, setRecent } from '../slices/menuSlice';
import Recent from './Recent';

const SearchMenu = () => {

    const dispatch = useDispatch();
    const [loc, setLoc] = useState("");
    const handleClick = () => {
        dispatch(setLocation(loc));
        dispatch(setRecent(loc));
        dispatch(setMenuState(false))
    }
    const recent = useSelector((state) => state.recent);

  return (
    <div className='md:w-[31vw] z-100 absolute top-0 left-0 right-0 bottom-0 w-screen h-full bg-[#1E213A] px-[13px] pt-[17px]'>
        <div className='w-full flex items-center justify-end'>
            <Image onClick={() => dispatch(setMenuState())} src="/close.svg" width={18} height={18} alt="close"/>
        </div>
        <div className='relative w-full flex items-center justify-between pt-[30px]'>
            <input onChange={(e) => setLoc(e.target.value)} className='border border-solid border-[#E7E7EB] max-h-[48px] py-[14px] pl-[49px] text-[#E7E7EB]' type="text" placeholder='search location'/>
            <button onClick={handleClick} className='text-[#E7E7EB] max-h-[48px] text-[16px] leading-[19px] p-[14px] bg-[#3C47E9]'>
                Search
            </button>
            <Image className='absolute bg-transparent left-[15px]' src='/search.svg' width={21} height={21} alt='search-icon'/>
        </div>
        <div className='pt-[38px] flex flex-col items-start gap-[40px] font-[500] text-[16px] leading-[19px] text-[#E7E7EB]'>
            {
                recent.map((city) => (
                    <Recent city={city}/>
                ))
            }  
        </div>
    </div>
  )
}

export default SearchMenu