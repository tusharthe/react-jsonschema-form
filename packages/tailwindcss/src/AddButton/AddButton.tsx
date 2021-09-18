import React from "react";

import { AddButtonProps } from "@rjsf/core";
 
import { HiPlusSm } from "react-icons/hi";

const AddButton: React.FC<AddButtonProps> = props => (
  <div {...props}   style={{width: "100%"}} className="ml-1 bg-blue-700">
    <HiPlusSm/>
  </div>
);

export default AddButton;
