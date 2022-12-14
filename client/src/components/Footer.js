

function Footer() {
  return (
    <div className='bg-black text-white h-screen w-full flex font-urbanist items-end justify-center text-center'>
      <div>
        <p>© 2022-2023  |  All rights reserve to Shir Koren</p>
        
        <br/>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <br/>
        <ul className="flex flex-wrap items-center mb-6  text-sm text-gray-500 sm:mb-0 dark:text-gray-400 ">
            <li className="mr-4 hover:underline md:mr-6 ">
                 About
            </li>
            <li className="mr-4 hover:underline md:mr-6 ">
                Privacy Policy
            </li>
            <li className="mr-4 hover:underline md:mr-6 ">
               Licensing
            </li>
            <li className="mr-4 hover:underline md:mr-6 ">
                Contact
            </li>
        </ul>
        <br/>
      </div>
      
      
     </div>
  )
}

export default Footer
