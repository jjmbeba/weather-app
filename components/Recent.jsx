import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { setLocation, setMenuState } from "../slices/menuSlice";

const Recent = ({city}) => {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setLocation(city));
        dispatch(setMenuState(false))
    }

  return (
    <div onClick={handleClick} className="px-[12px] w-full py-[23px] group hover:border border-solid border-[#616475] flex items-center justify-between cursor-pointer">
      <span>{city}</span>
      <Image
        className="hidden group-hover:block"
        src="/arrowRight.svg"
        width={14}
        height={14}
        alt="arrow-right-logo"
      />
    </div>
  );
};

export default Recent;
