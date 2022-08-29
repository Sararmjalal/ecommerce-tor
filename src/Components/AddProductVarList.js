import * as ReactIconsBS from "react-icons/bs/index"

const VarList = (props) => {
  return (
    <li
      key={`var${props.outerIndex}`}
      className={`flex gap-2 mb-6 ${props.outerIndex === props.variables.length-1 ? "" : "border-b-[1px] border-gray-200"} `}>
      {
        props.varr.type === "text" ?
        <div className="flex items-center gap-2 w-full mb-6">
            <p className='w-1/2 font-semibold text-gray-500'>{props.varr.name}:</p>
          <input
            placeholder='Type value...'
            className="w-1/2 outline-none text-gray-600 py-3 pl-2 bg-gray-100	rounded-xl mt-1 hover:bg-gray-200 focus:bg-gray-200"
          />
        </div>
          :
          <>
          <p className='w-1/2 font-semibold text-gray-500'>{props.varr.name}:</p>
          <ul className='w-1/2 flex flex-col items-end'>
            {
              props.varr.options.map((option, innerIndex) => {
                return (
                  <li
                    key={`opt${props.outerIndex}-${innerIndex}`}
                    className='flex gap-1 items-center text-right mb-4'
                  >
                    <p className="text-sm font-light">{option.name}</p>
                    <div
                      className={`w-4 h-4 cursor-pointer rounded-md p-[1.5px] 
                      ${option.isSelected ? "bg-gray-700" : "border-2 border-gray-200"}`}
                      onClick={() => props.selectVariables(props.outerIndex, innerIndex)}
                    >
                      {option.isSelected ? <ReactIconsBS.BsCheck fill='white' size="14px" /> : " "}
                    </div>
                  </li>
                )
              })
            }
            </ul>
            </>
      }
  </li>
  )
}

export default VarList