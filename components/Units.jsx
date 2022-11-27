import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUnits } from '../slices/menuSlice';

const Units = ({unit}) => {

    const dispatch = useDispatch();
    const selectedUnit = useSelector((state) => state.selectedUnit);

  return (
    <div onClick={() => dispatch(setUnits(unit))} className={`cursor-pointer p-[10px] rounded-full text-[1.3vw] leading-[1.4vw] font-bold ${selectedUnit===unit ? '!bg-[#E7E7EB] text-[#110E3C]' : 'bg-[#585676] text-[#E7E7EB]'}`}>
        <div className='bg-transparent h-[18px] w-[18px]'>
        {unit}
        </div>
    </div>
  )
}

export default Units