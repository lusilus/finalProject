import {HiHome} from 'react-icons/hi'
import { AiOutlineLogout } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {CgProfile }from 'react-icons/cg'
import {AiFillFileAdd} from 'react-icons/ai'
import {VscQuestion} from 'react-icons/vsc'
import { useContext } from 'react'
import { AppContext } from './Context'
import axios from 'axios'
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs'

function Header() {

  const {state, dispatch}= useContext(AppContext)
	//console.log("TCL: Header -> state", state)
  
  
  const handleLogout = async () => {

    // const response = await axios.get(process.env.REACT_APP_BACKEND + '/user/logout',  { withCredentials: true })
		// console.log("handleLogout -> response", response)
    const response = await axios.get( '/user/logout',  { withCredentials: true })
		console.log("handleLogout -> response", response)


    if (response.data.success) {

      dispatch({type: 'logout'})
    }

  }
 

  return (
    <div className='bg-black text-white h-[100px] 
    w-full flex text-[2rem] gap-[20px] items-center justify-center md:justify-end
    cursor-pointer'>
        {/* <h3 className=' text-[24px] font-urbanist flex '>Hello {state.user.username}</h3>  */}
         <Link to='/profile'><CgProfile className='cursor-pointer hover:text-red-200 '/></Link>
         <Link to='/add'><AiFillFileAdd className='cursor-pointer hover:text-green-200 '/></Link>
        <Link to='/dashboard'><HiHome className='cursor-pointer hover:text-blue-200'/></Link>
        <Link to='/explain'><VscQuestion className='cursor-pointer hover:text-purple-200'/></Link>
        <Link to='/login'><AiOutlineLogout className='cursor-pointer hover:text-yellow-200 mr-3' onClick={handleLogout}/></Link>

        {
          state?.user.image?
          <img 
          alt=''
          className='w-[35px] h-[35px] object-cover rounded-full' 
           src={'https://res.cloudinary.com/dp4yo8jcf/image/upload/v1669060122/' + state.user.image}
         
         />
         :
         <p><BsFillEmojiSmileUpsideDownFill className='cursor-pointer text-orange-200'/></p>
         ///
         
          }
        
       
    </div>
  )
}

export default Header