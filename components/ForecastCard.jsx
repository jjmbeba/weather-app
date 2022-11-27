import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import icon from '../utils/icon';

const ForecastCard = ({max, min, index, date, main, desc}) => {

  const tempMax = max.toString().split(".");
  const tempMin = min.toString().split(".");
  const selectedUnit = useSelector((state) => state.selectedUnit);

  const covertTemp = (cel) => {
    return (cel*1.8)+32
  }

  return (
    <div className='flex flex-col items-center justify-center py-[18px] px-[22px] w-[160px] text-[15px] leading-[19px] font-[500]'>
        <h3 className='text-[#E7E7EB]'>{index === 0 ? "Tomorrow" : date}</h3>
        <Image className='pt-[10px]' src={icon(main, desc)} width={56} height={62} alt="forecast-image"/>
        <div className='flex items-center justify-center gap-[16px] pt-[31px]'>
            <span className='text-[#E7E7EB]'>{selectedUnit === "°C" ? tempMax[0] : covertTemp(tempMax[0]).toString().split(".")[0]}{selectedUnit}</span>
            <span className='text-[#A09FB1]'>{selectedUnit === "°C" ? tempMin[0] : covertTemp(tempMin[0]).toString().split(".")[0]}{selectedUnit}</span>
        </div>
    </div>
  )
}

export default ForecastCard