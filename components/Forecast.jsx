import React from 'react'
import { useSelector } from 'react-redux'
import ForecastCard from './ForecastCard'

const Forecast = () => {

  const forecast = useSelector((state) => state.forecast);
  const date = new Date()
  const nextDate = new Date();

  return (
    <div className='bg-[#100E1D] py-[52px] px-[34px] md:px-[6vw] grid grid-cols-2 md:flex items-center gap-[26px] gap-x-[26px] gap-y-[32px]'>
        {

          forecast.map(({main},i) => {
            nextDate.setDate(date.getDate()+i+1)
            return (
              <ForecastCard main={forecast[0].weather[0].main} desc={forecast[0].weather[0].description} date={nextDate.toDateString().slice(0,-4)} key={i} index={i} max={main.temp_max} min={main.temp_min}/>
            )
          })
        }
    </div>
  )
}

export default Forecast