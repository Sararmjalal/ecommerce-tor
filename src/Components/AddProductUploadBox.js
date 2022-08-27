import * as ReactIconsBS from "react-icons/bs/index"

export default function UploadBox(props) {
  return (
    <div>   
      <p className='font-light text-sm'>Select product main image to upload</p>
      <label for="mainImageInput">
      <div
        className='cursor-pointer rounded-xl bg-gray-100 hover:bg-gray-200 w-full py-[calc(30%-9px)] px-[calc(50%-9px)]'>
        <ReactIconsBS.BsPlusSquareDotted
          size="18px"
        />
        </div>
      </label>
      <input
        className='hidden'
        id='mainImageInput'
        type="file"
        name="mainImage"
        accept="image/png, image/jpeg" />
      <div>

      </div>
    </div>
  )
}