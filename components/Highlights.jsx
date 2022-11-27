import React from 'react'
import AirPressureCard from './AirPressureCard'
import HumidityCard from './HumidityCard'
import VisibilityCard from './VisibilityCard'
import WindCard from './WindCard'

const Highlights = () => {
  return (
    <div className='bg-[#100E1D] px-[21px] md:px-[6vw] pb-[137px]'>
        <h2 className='bg-inherit text-[#E7E7EB] font-bold text-[24px] leading-[28px]'>Today's Highlights</h2>
        <div className='mt-[32px] flex flex-col md:grid grid-cols-2 md:gap-[3vw] items-center justify-center gap-[32px] bg-inherit'>
            <WindCard/>
            <HumidityCard/>
            <VisibilityCard/>
            <AirPressureCard/>
        </div>
    </div>
  )
}

export default Highlights