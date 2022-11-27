import React from 'react'
import { useSelector } from 'react-redux';

const AirPressureCard = () => {
  const results = useSelector((state) => state.results);
  return (
    <div className='flex flex-col items-center justify-center pt-[22px] w-full pb-[35px] md:w-[22vw] '>
        <h3 className='text-[#E7E7EB] text-[16px] leading-[19px] font-[500]'>Air Pressure</h3>
        <div className='text-[#E7E7EB] pt-[10px]'>
            <span className='text-[64px] leading-[75px]'>{results.main.pressure}</span>
            <span className='text-[36px] leading-[42px]'>mb</span>
        </div>
    </div>
  )
}

export default AirPressureCard