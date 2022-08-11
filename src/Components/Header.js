import { useState } from "react"
import Logo from "../Uploads/Logo.png"
import { useSelector, useDispatch } from 'react-redux'
import { current_user, logout } from "../Global State/Slice"

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const thisUser = useSelector(current_user)
  const dispatch = useDispatch()

  return (
    <div className="shadow-md	shadow-gray-700/10 z-100">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
                <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
            </a>
            <div className="flex items-center lg:order-2">
            {
                          thisUser ? 
                          <>
                          <p
                    className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 cursor-pointer"
                    onClick={() => dispatch(logout())}
                    >Logout</p>
                          <p className="text-white bg-violet-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 cursor-pointer">Dashboard</p>
                            </>
                              :
                               <>
                              <a href='/login'>
                                <p className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 cursor-pointer">Login</p>
                              </a>
                              <a href='/signup'>
                                <p className="text-white bg-violet-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 cursor-pointer">Sign Up</p>
                              </a>
                              </>
            }
            <button onClick={() => setMobileMenu(!mobileMenu)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <a href='/'>
                    <li className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${"/" === window.location.pathname ? " text-violet-700":" text-gray-800 "}`}>
                        Home
                    </li>
                  </a>
                  <a href='/shop'>
                        <li className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${"/shop" === window.location.pathname ? " text-violet-700":" text-gray-800 "}`}>
                            Shop
                        </li>
                  </a>
                  <a href='/about'>
                        <li className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${"/about" === window.location.pathname ? " text-violet-700":" text-gray-800 "}`}>
                            About us
                        </li>
                  </a>
                  <a href='/contact'>
                    <li className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${"/contact" === window.location.pathname ? " text-violet-700":" text-gray-800 "}`}>
                        Contact Us
                    </li>
              </a>
                </ul>
            </div>
        </div>
      </nav>
      {
        mobileMenu ? 
        <div className="bg-white px-6 pb-6 justify-between items-center w-1/2 md:w-1/3 lg:hidden absolute right-0 z-10 shadow-md	shadow-gray-700/10 rounded-bl-xl">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
            <a href="/" className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  ${"/" === window.location.pathname ? " text-violet-700":" text-gray-800 "}`}>Home</a>
        </li>
              <li>
            <a href="/shop" className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  ${"/shop" === window.location.pathname ? " text-violet-700":" text-gray-800 "}`}>Shop</a>
        </li>
            <li>
            <a href="/about" className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  ${"/about" === window.location.pathname ? " text-violet-700":" text-gray-800 "}`}>About Us</a>
        </li>          
            <li>
            <a href="/contact" className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  ${"/contact" === window.location.pathname ? " text-violet-700":" text-gray-800 "}`}>Contact Us</a>
        </li>
        </ul>
        </div>
          :
          ''
      }
    </div>
  )
}