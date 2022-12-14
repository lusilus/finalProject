import { useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import wallPainting from "../assets/wallPainting.jpg"
import { AppContext } from "../components/Context"

export default function Register() {

    const navigate = useNavigate() 
    const { dispatch } = useContext(AppContext)
    const [data, setData] = useState({
        email:"",
        username:"",
        password:"",
        
    })

  
     const handleRegister = async (e) => {
        e.preventDefault()
         console.log('hello from register')
         const response = await axios.post(process.env.REACT_APP_BACKEND +'/user/register', data)
    
        console.log('register response is ', response)
        //updating the global state
        if (response.data.success){
            dispatch({
                type: 'login',
                payload: {...response.data.user}
            })
            navigate('/login')
            
       } }


  return (
    <div className='bg-black text-white h-screen w-full flex flex-row-reverse '>
         <img 
         className='w-[40%] h-[40%] mt-[15%] mr-10 rounded-t-full object-cover'
         src={wallPainting} alt="wall Painting"/> 
        <div className='flex flex-col'>
        <h1 className='font-play text-[80px] ml-5'>REGISTRATION <br/> FORM</h1>
        <h3 className="font-urbanist ml-5">Please fill in your information</h3>
        <form className='flex flex-col gap-3 w-[250px] m-5'>
        <label className='font-urbanist'>E-mail</label>
            <input 
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black"
                placeholder='type your email' 
                value={data.email} 
                onChange={e => setData({...data, email: e.target.value })}/>
             <label className='font-urbanist'>User Name</label>
            <input 
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black"
                placeholder='type your username' 
                value={data.username} 
                onChange={e => setData({...data, username: e.target.value})}/>
             <label className='font-urbanist'>Password</label>
            <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                placeholder='type your password' 
                value={data.password} 
                onChange={e => setData({...data, password: e.target.value})}/>
             <label className='font-urbanist'>Confirm your password</label>
            {/* <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                placeholder='confirm your password' 
                value={data.confirmPassword} 
                onChange={e => setData({...data, confirmPassword: e.target.value})}/> */}
            
            <button 
            className="flex mt-10 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-100 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-urbanist"
            onClick={(e) => handleRegister(e)}>Register</button>
        </form>

        </div>
        
    </div>
  )
}
