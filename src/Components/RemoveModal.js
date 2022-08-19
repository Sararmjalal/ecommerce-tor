export default function RemoveModal(props) {
  return (
    <>
    <div
    className="bg-black fixed top-0 left-0 w-screen h-screen opacity-50 z-10"
    onClick={() => props.setShowModal(false)}
    ></div>
    <div
      onKeyDown={(e) => {
        if (e.key === 'Enter') return 
      }}
      className="bg-white shadow-md	shadow-gray-700/10 p-5 rounded-xl sm:w-[30rem] h-48 w-11/12 fixed top-[calc(50vh-10rem)] sm:left-[calc(50vw-15rem)] left-[calc(50vw-45.8%)] z-20">
      <h1 className="text-gray-900 mb-5 font-semibold	text-xl">Remove</h1>
      <div className="h-8 mt-2 text-gray-600">Are you sure you want to remove this item?</div>
      <div className="flex">
        <div className="w-1/2">
          <button
            className="bg-gray-900 outline-none hover:bg-gray-800 w-full mt-3 mb-12 py-3 text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2"
            onClick={() => props.setShowModal(false)}
          >
            Cancel
          </button>
        </div>
        <div className="w-1/2 pl-2">
          {
            window.location.pathname === '/admin/dashboard/categories/' ?
              <button
                className="w-full mt-3 mb-12 py-3 text-gray-500 bg-gray-100 outline-none hover:bg-gray-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
              >
                Yes
              </button>
              :
              <button
                className="w-full mt-3 mb-12 py-3 text-gray-500 bg-gray-100 outline-none hover:bg-gray-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl text-base px-4 mr-2 "
              >
                Yes
              </button>
          }

        </div>
      </div>
    </div>
  </>
  )
}