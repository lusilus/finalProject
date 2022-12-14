import './App.css';
import {Link} from 'react-router-dom'
import homePage from './assets/homePage.jpg'


export default function HomePage() {
  return (
    <div className='bg-black text-white h-screen w-full flex flex-row'>
        <img 
          className='w-[600px] h-[635px] m-5 object-cover'
          src={homePage}
          alt='art'/>
        <div className='flex flex-col'>
          <h1 className='font-play text-[80px]'>The <br/>Working<br/> Artist<br/> App</h1>
          <h3 className="font-urbanist mt-3 mb-3 w-[300px]" >We are here to help you make profit from your art. To keep growing and developing the business side of your artistic career. </h3>
          <div className='flex flex-row'>
          <Link to='/register'>
            <button 
            className="flex mt-10 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-100 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-urbanist mr-5">Register Now</button>
          </Link>
          <Link to='/login'>
            <button 
            className="flex mt-10 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-100 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-urbanist">Login</button>
          </Link>

          </div>
          
        </div>
    </div>
  )
}
