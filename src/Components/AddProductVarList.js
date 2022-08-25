import * as ReactIconsBS from "react-icons/bs/index"

const VarList = (props) => {
  return (
    <li
      key={`var${props.outerIndex}`}
      className={`flex gap-2 mb-6 ${props.outerIndex === props.variables.length-1 ? "" : "border-b-[1px] border-gray-200"} `}>
      <p className='w-1/2 font-semibold text-gray-500'>{props.varr.name}:</p>
      {
        props.varr.type === "text" ?
          <input className='w-1/2' placeholder='alo' />
          :
          <ul className='w-1/2 flex flex-col items-end'>
            {
              props.varr.options.map((option, innerIndex) => {
                return (
                  <li
                    key={`opt${props.outerIndex}-${innerIndex}`}
                    className='flex gap-1 items-center text-right mb-4'
                  
                  >
                    <p className="text-sm">{option.name}</p>
                    <div
                      className={` w-4 h-4 cursor-pointer rounded-md p-[1.5px] 
                      ${option.isSelected ? "bg-violet-700" : "bg-white border-2 border-gray-200"}`}
                    >
                      {option.isSelected ? <ReactIconsBS.BsCheck fill='white' size="14px" /> : " "}
                    </div>
                  </li>
                )
              })
            }
          </ul>
      }
  </li>
  )
}

export default VarList