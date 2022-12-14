export default function Footer() {
  return (
    <div className="block md:flex h-max bg-gray-100 md:min-h-64 p-10 max-h-max md:px-24">
    <div className="w-full md:w-1/2 mr-12 md:mb-0 mb-12">
      <h3 className="font-semibold text-lg mb-4 text-violet-700">About Ecommerce-Tor</h3>
      <p className="text-gray-800 font-extralight lg:w-96 md:w-72 md:text-justify	">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div className="w-full md:w-1/2 md:mb-0 mb-12">
      <h3 className="font-semibold text-lg mb-4 text-violet-700">Quick Access</h3>
      <ul className="font-extralight text-gray-400">
        <li className="mb-2"><a className="hover:text-violet-700 text-gray-800" href="/">Home</a></li>
        <li className="mb-2"><a className="hover:text-violet-700 text-gray-800" href="/about">About</a></li>
          <li className="mb-2"><a className="hover:text-violet-700 text-gray-800" href="/contact">Contact</a></li>
          <li className="mb-2"><a className="hover:text-violet-700 text-gray-800" href="/shop">Shop</a></li>
        <li className="mb-2"><a className="hover:text-violet-700 text-gray-800" href="/user/dashboard">Dashboard</a></li>
      </ul>
    </div>
  </div>
  )
}