import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setLocation, setMenuState, setResults } from '../slices/menuSlice'
import Search from './Search'

const Header = ({lat, lon}) => {

  const dispatch = useDispatch();

  const fetchWeather = () => {
    axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
  )
  .then((response) => {
    dispatch(setResults(response.data));
  })
  dispatch(setLocation(""))
  }
  return (
    <div className='px-[11px] pt-[18px] flex items-center justify-between'>
        <Search/>
        <div onClick={fetchWeather} className='p-[9px] rounded-full bg-[rgba(110,112,122,0.3)]'>
            <Image className='bg-transparent cursor-pointer' src="/my-location.svg" width={22} height={22} alt="my-location"/>
        </div>
    </div>
  )
}

export default Header