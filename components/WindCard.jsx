import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';

const WindCard = () => {
  const results = useSelector((state) => state.results);

  const speed = results.wind.speed.toString().split(".")[0];
  const arrow = document.getElementById("arrow")
  
  if(arrow && results){
    arrow.style.rotate = results.wind.deg
  }

  return (
    <div className='flex flex-col items-center justify-center pt-[22px] w-full pb-[35px] md:w-[22vw] md:h-[16vw]'>
        <h3 className='text-[#E7E7EB] text-[16px] leading-[19px] font-[500]'>Wind status</h3>
        <div className='text-[#E7E7EB] pt-[10px]'>
            <span className='text-[64px] leading-[75px] md:text-[4vw]'>{speed}</span>
            <span className='text-[36px] leading-[42px] md:text-[2vw]'>mph</span>
        </div>
        <div className='flex items-center justify-center gap-[8px] pt-[24px] md:pt-[0.5vw]'>
            <div className='p-[9px] rounded-full bg-[rgba(255,255,255,0.3)] -rotate-[150]'>
                <Image id='arrow' className='bg-transparent z-0 transform -rotate-[150deg]' src="/map-arrow.svg" width={14} height={14} alt="map-arrow"/>
            </div>
            <span className='text-[#E7E7EB] text-[14px] leading-[16px]'>WSW</span>
        </div>
    </div>
  )
}

export default WindCard