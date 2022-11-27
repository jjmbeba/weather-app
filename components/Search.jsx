import React from 'react'
import { useDispatch } from 'react-redux';
import { setMenuState } from '../slices/menuSlice';

const Search = () => {

  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setMenuState())} className='bg-[#6E707A] text-[#E7E7EB] text-[16px] leading-[19px] px-[18px] py-[11px] font-[500] shadow-my-location'>
        Search for places
    </button>
  )
}

export default Search