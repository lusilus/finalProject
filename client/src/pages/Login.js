import { useContext, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../components/Context'
import clayMan from '../assets/clayMan.png'


export default function Login() {

  const {dispatch} = useContext(AppContext)

  const navigate = useNavigate() 

  const [data, setData] = useState({
    email:"",
    username:"",
    password:"",
    
})


const handleLogin = async (e) => {
  e.preventDefault()
  //console.log('hello from login')
  if (!data.password || (!data.email && !data.username)) {
    alert('Please provide your login data')
    return
  }
   
   const response = await axios.post(process.env.REACT_APP_BACKEND + '/user/login', data, { withCredentials: true })
   

  console.log('login response is ', response)
//updating the global state
  if (response.data.success){
      dispatch({
          type: 'login',
          payload: {...response.data.user}
      })
      navigate('/dashboard')
  }


 } 

  return (
    <div className='bg-black text-white h-screen w-full flex'>
        
        <div className=' flex justify-center items-center ml-[10%]'>
        <img 
          src={clayMan} 
          className='w-[400px] h-[500px] m-5 object-cover  flex '
          alt="clay artist"
        />
        <div className='flex flex-col'>
        <h1 className='font-play text-[80px] ml-5'>LOGIN</h1>
        <form className='flex flex-col gap-3 w-[250px] m-5'>
        
        <label className='font-urbanist'>User Name</label>
            <input 
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black"
                placeholder='type your username' 
                value={data.username} 
                onChange={e => setData({...data, username: e.target.value})}/>
                <h3 className='flex justify-center'>OR</h3>
            <label className='font-urbanist'>E-mail</label>
            <input 
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black"
                placeholder='type your email' 
                value={data.email} 
                onChange={e => setData({...data, email: e.target.value })}/>
              <label className='font-urbanist'>Password</label>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                placeholder='type your password' 
                value={data.password} 
                onChange={e => setData({...data, password: e.target.value})}/>
              <button 
            className="flex mt-10 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-100 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-urbanist pl-[40%]"
            onClick={(e) => handleLogin(e)}>Login</button>
          </form>
          </div>

        </div>
        
    </div>
  )
}
