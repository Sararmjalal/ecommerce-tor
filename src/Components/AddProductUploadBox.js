import * as ReactIconsBS from "react-icons/bs/index"
import * as ReactIconsMD from "react-icons/md/index"
import { useState, useEffect } from "react"
import axios from "axios"
import { sleep } from "../lib"
import Cookies from "universal-cookie"
import Avatar from "../Uploads/Avatar.jpg"

export default function UploadBox(props) {

  const { showModal, setShowModal, setFormImages, uploadUrl } = props
  
  const [images, setImages] = useState([])
  const [myImages, setMyImages] = useState([
    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    },
    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    },
    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    },
    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    },
    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    },
    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    },    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    },
    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    },    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    },
    {
      imageID: "_id1",
      src: Avatar,
      barColor: 'blue',
      barWidth: 0,
      name: "this image 1"
    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'blue',
      barWidth: 70,
      name: "this image 2"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'rgb(5 150 105)',
      barWidth: 100,
      name: "this image 3"

    },
    {
      imageID: "_id2",
      src: Avatar,
      barColor: 'red',
      barWidth: 70,
      name: "this image 4"

    }
  ])
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
  
        formData.append("reserve", fileToLoad);

        const res = await axios.post(uploadUrl, formData, {
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
          arr[index].barColor = 'rgb(5 150 105)'
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
    onClick={() => setShowModal(false)}
    >
      </div>
      <div className={`z-40 bg-white fixed w-3/4 h-3/4 rounded-xl top-[12%] left-[12%] ${myImages[0] ? "items-start" : " flex flex-row items-end"}`}>
        {
          myImages[0] ?
            <>
            <div className="lg:h-[calc(100%-110px)] h-[calc(100%-80px)] overflow-y-auto mx-2 lg:mx-4 lg:px-4 px-2 lg:my-8 my-4">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-start w-full">
              {
          
                myImages.map(image => {
                  return (
                    <div className="bg-white rounded-xl border-[1px] border-gray-200 p-4 h-max flex gap-2">
                      <div className="w-1/4">
                        <img
                          src={image.src}
                          className="rounded-full object-cover aspect-square"
                        />
                      </div>
                      <div className="w-[calc(50%+20px)] flex flex-col justify-between">
                        <div>
                        <span className="font-semibold text-gray-500 text-sm">Name: </span>
                        <span className="font-light text-sm">
                          {image.name.length > 10 ? image.name.slice(0, 10) + "..." : image.name}
                        </span>
                        </div>
                        <div className="rounded-xl overflow-hidden w-full bg-white border-[1px] border-gray-200 ">
                        <div
                          className="rounded-xl h-2 opacity-70"
                          style={{background: `${image.barColor}`, width: `${image.barWidth}%`}}
                        ></div>
                        </div>
                      </div>
                      <div className="w-[calc(25%-20px)] flex flex-col items-end gap-2">
                        <div>
                          <ReactIconsBS.BsTrash
                            className="text-gray-600 hover:text-gray-800 cursor-pointer"
                          />
                        </div>
                        <div>
                          <ReactIconsBS.BsFillArrowLeftCircleFill
                          className="text-gray-600 hover:text-gray-800 cursor-pointer"
                          />
                        </div>
                        <div>
                          <ReactIconsBS.BsFillArrowRightCircleFill
                          className="text-gray-600 hover:text-gray-800 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                    
                )
              })
              
              }
                </div>
                </div>
                <div className="mx-auto w-max">
                  <label
                  htmlFor="imagesInput"
                  className="cursor-pointer text-white bg-gray-900 outline-none hover:bg-gray-800
                  focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-2"
                  >
                    Select Images
                  </label>
          </div> 
            </>
            :
          <div className="mx-auto mb-8 ">
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