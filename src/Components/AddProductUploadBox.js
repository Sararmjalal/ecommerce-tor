import * as ReactIconsBS from "react-icons/bs/index"
import { useState, useEffect } from "react"
import axios from "axios"
import { sleep } from "../lib"
import Cookies from "universal-cookie"

export default function UploadBox(props) {

  const { setShowModal, setFormImages, uploadUrl } = props
  
  const [images, setImages] = useState([])
  const cookies = new Cookies()

  useEffect(() => {

    if(images[0]) {

    setFormImages(images)

    AxiosFunction()

    }

  }, [images])

  const handlePictureUpload = e => {

    const { target: { files } } = e

    const filesSelected = files;

    if (filesSelected.length < 1) return

    const fileToLoad = filesSelected[0];
    
    const fileReader = new FileReader();

    fileReader.onload = async function (fileLoadedEvent) {

      const theHiddenImage = document.createElement("img");
      theHiddenImage.src = fileLoadedEvent.target.result;

      await sleep(100)

      const myArray = [...images]

      const imageID = `${new Date().getTime()}${Math.floor(Math.random() * 1000)}`

      myArray.push({
        imageID,
        src: fileLoadedEvent.target.result,
        isUploaded: false,
        uploadStarted: false,
        barColor: 'blue',
        barWidth: 0,
        fileToLoad
      })

      setImages(myArray)

    };

    fileReader.readAsDataURL(fileToLoad);

  }

  const AxiosFunction = async () => {

    const imageToUpload = images.find(item => !item.uploadStarted) 

    if (imageToUpload) {
      const arr = [...images]
      const index = arr.findIndex(item => item.imageID === imageToUpload.imageID)
  
      arr[index].uploadStarted = true
  
      try {
  
        const formData = new FormData();
        
        const fileToLoad = imageToUpload.fileToLoad

        console.warn(fileToLoad)
  
        formData.append("image", fileToLoad);

        
        const res = await axios.post(uploadUrl, fileToLoad, {
          headers: {
            'Content-Type': 'multipart/form-data',
            a_auth: `at ${cookies.get("at")}`
          },

          onUploadProgress: progressEvent => {
  
            const percentage =  Math.floor( 100 * progressEvent.loaded  / progressEvent.total ) 
  
            arr[index].barWidth = percentage

            setImages(arr)
  
          },
        })
  
        if (res.status === 200) {
          console.log(res.status)
          arr[index].isUploaded = true
          arr[index].barWidth = 100
          arr[index].barColor = 'green'
          arr[index].reservePath = res.data
          setImages(arr)
  
        }

          arr[index].barWidth = 100
          arr[index].barColor = 'red'
          setImages(arr)

      } catch (error) {
        console.error(error)
        arr[index].barWidth = 100
        arr[index].barColor = 'red'
        setImages(arr)

      }
    }
  }

  if (!uploadUrl) return console.error("You should give valid upload url to upload box!")

  return (
    <>
    <div
    className="w-full h-full bg-black opacity-50 fixed top-0 left-0 z-20"
    onClick={() => props.setShowModal(false)}
    >
      </div>
      <div className="z-40 bg-white fixed w-3/4 h-3/4 rounded-xl top-[12%] left-[12%] flex flex-row items-end">
        {
          images[0] ?
          ""
            :
          <div className="mx-auto mb-8">
            <p className='font-light text-sm mb-4'>No images selected yet.</p>
            <label
            htmlFor="imagesInput"
            className="cursor-pointer text-white bg-gray-900 outline-none hover:bg-gray-800
            focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-2"
            >
              Select Images
            </label>
          </div> 
        }
      <input
        type="file"
        id="imagesInput"
        accept="image/png, image/jpeg"
        className="hidden"
        multiple
        onChange={(e) => handlePictureUpload(e)}
        />
      </div>
    
    </>
  )
}