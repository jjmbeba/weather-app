import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const HumidityCard = () => {
  const results = useSelector((state) => state.results);
  const humidString = results.main.humidity.toString();
  const bar = document.getElementById("bar");
  if(bar){
    bar.style.width = humidString+"%"
  }

  return (
    <div className='flex flex-col items-center justify-center pt-[22px] w-full pb-[35px] md:w-[22vw] md:h-[16vw]'>
        <h3 className='text-[#E7E7EB] text-[16px] leading-[19px] font-[500]'>Humidity</h3>
        <div className='text-[#E7E7EB] pt-[10px]'>
            <span className='text-[64px] leading-[75px]'>{results.main.humidity}</span>
            <span className='text-[36px] leading-[42px]'>%</span>
        </div>
        <div className='flex items-center justify-center pt-[28px]'>
            <div className="relative z-0 w-[229px] h-[8px] bg-[#E7E7EB] block rounded-[80px]">
              <div id='bar' className={`absolute left-0 h-full rounded-[80px] bg-[#FFEC65]`}/>
              <span className='lbl left-[2px]'>0</span>
              <span className='lbl left-[50%] translate-x-[-50%]'>50</span>
              <span className='lbl right-0'>100</span>
            </div>
        </div>
    </div>
  )
}

export default HumidityCard