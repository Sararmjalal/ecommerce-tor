import { useState } from "react"
import * as ReactIconsBS from "react-icons/bs/index"


const CatList = (props) => {
  
  return (
    <li className="flex gap-2 items-center mb-3" key={`cat${props.i}`}>
      <p>{props.cat.name}</p>
      <div
        className={` w-4 h-4 cursor-pointer rounded-md p-[1.5px] 
        ${props.cat.isSelected ? "bg-violet-700" : "bg-white border-2 border-gray-200"}`}
        onClick={() => props.selectCategory(props.i)}
      >
        {props.cat.isSelected ? <ReactIconsBS.BsCheck fill='white' size="14px" /> : " "}
      </div>
    </li>
  )
}

export default  CatList