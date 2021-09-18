import React from "react";
 
import { IoIosRemove } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

 
const mappings: any = {
  remove: <IoIosRemove />,
  plus: <GrAdd />,
  "arrow-up": <AiOutlineArrowUp />,
  "arrow-down": <AiOutlineArrowDown />,
};

type IconButtonProps = {
  icon: string;
  className?: string;
  tabIndex?: number;
  style?: any;
  disabled?: any;
  onClick?: any;
};

const IconButton = (props: IconButtonProps) => {
  const { icon, className, ...otherProps } = props;
  return (
    <button {...otherProps} className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-300" type="button">
       {mappings[icon]}       
      </button>
 
  );
};

export default IconButton;
