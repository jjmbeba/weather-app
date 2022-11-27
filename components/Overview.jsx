import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import icon from '../utils/icon';

const Overview = ({temp, weather}) => {

  const location = useSelector((state) => state.location);
  const date = new Date().toDateString().slice(0,-4);
  const tempNow = temp.toString().split(".");
  const selectedUnit = useSelector((state) => state.selectedUnit);

  const results = useSelector((state) => state.results);

  const covertTemp = (cel) => {
    return (cel*1.8)+32
  }

  return (
    // bg-cloud-pattern
    <div className='w-full bg-cloud-pattern bg-transparent flex items-center justify-center pt-[76px] md:pt-[5vw] flex-col md:pb-[52px] pb-[105px] bg-center'>
        <Image className='image-contain' src={icon(results.weather[0].main, results.weather[0].description)} width={150} height={174} alt="weather-icon"/>
        <div className='pt-[40px] md:pt-[2vw] font-[500]'>
            <span className='text-[144px] md:text-[10vw] leading-[169px] md:leading-[11vw] text-[#E7E7EB]'>{selectedUnit === "°C" ? tempNow[0] : covertTemp(tempNow[0]).toString().split(".")[0]}</span>
            <span className='text-[48px] leading-[56px] text-[#A09FB1]'>{selectedUnit}</span>
        </div>
        <span className='pt-[23px] md:pt-[1vw] text-[36px] md:text-[2vw] leading-[42px] md:leading-[2.9vw] text-[#A09FB1]'>{weather}</span>
        <div className='pt-[48px] md:pt-[3vw] flex items-center justify-center gap-[16px] text-[18px] md:text-[1.5vw] leading-[21px] md:leading-[1.4vw] text-[#88869D]'>
            <span>Today</span>
            <span>.</span>
            <span>{date}</span>
        </div>
        <div className='flex items-center justify-center gap-[9px] pt-[34px] md:pt-[2vw] text-[18px] md:text-[1.5vw] leading-[21px] md:leading-[1.4vw] text-[#88869D] font-semibold'>
            <Image src="/location.svg" width={14} height={19} alt='location-pin'/>
            <span>{location || 'Current location'}</span>
        </div>
    </div>
  )
}

export default Overview