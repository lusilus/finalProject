import { useContext, useState} from 'react'
import axios from 'axios'
import colors from "../assets/colors.png"
import { AppContext } from "../components/Context"
import { useNavigate } from 'react-router-dom'



export default function Profile() {

  const {state, dispatch} = useContext(AppContext)
	console.log("TCL: Profile -> state", state)
  const navigate = useNavigate() 


     const [profileData, setProfileData] = useState({
        
        ...state.user
        
     })
    console.log("TCL: Profile -> profileData", profileData)

    const [imgUrl, setImgUrl] = useState(state.user.image ? 'https://res.cloudinary.com/dp4yo8jcf/image/upload/v1669060122/' + state.user.image : null)
     const [file, setFile] = useState(null)

    const handleImageChange = (e) =>{
        //console.log('file is', e.currentTarget.files[0])
        const url = URL.createObjectURL(e.currentTarget.files[0])

        setImgUrl(url)
        setFile(e.currentTarget.files[0])
    }
     
  
     const handleSave = async (e) => {
        e.preventDefault()

        const formdata= new FormData()

        formdata.set('_id', profileData._id)
        formdata.set('email', profileData.email)
        formdata.set('username', profileData.username)
        formdata.set('address', profileData.address)
        formdata.set('artistSince', profileData.artistSince)
        formdata.set('goals', profileData.goals)
        formdata.set('customersTarget', profileData.customersTarget)
        formdata.set('education', profileData.education)
        formdata.set('artField', profileData.artField)
        if (file) formdata.set('image', file , 'fileName')

        const config= {
          Headers: {'content-type': 'multipart/form-data'}
        }
        const response = await axios.patch(process.env.REACT_APP_BACKEND +'/user/profile', formdata, config )
				console.log("TCL: handleSave -> response", response)

        //updating the global state
       if (response.data.success){
          dispatch({
            type: 'login',
            payload:{...response.data.user}
          })
          navigate('/dashboard')
         }
      
       } 

    console.log(state)

  return (
    <div className='bg-black text-white h-screen w-full flex flex-row-reverse'>
         <img 
         className='w-[40%] h-[40%] mt-[15%] mr-10 rounded-xl object-cover'
         src={colors} alt="wall Painting"/> 
        <div className='flex flex-col'>
        <h1 className='font-play text-[50px] ml-5'>Profile</h1>
        <h3 className="font-urbanist ml-5">The information here is only for you, to keep you focus on your goals</h3>
         <form className='flex flex-col gap-3 w-[250px] m-5'>
         <label className='font-urbanist cursor-pointer'>
                Upload Profile Image 
                <input 
                onChange={handleImageChange} 
                type='file' 
                className='hidden'
               
                /> 
            </label>
            <img className='w-[150px] h-[150px] rounded-full object-cover' 
            src={ imgUrl } 
           
            alt="" />

         <label className='font-urbanist'>E-mail</label>
            <input 
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black"
                placeholder='type your email' 
                disabled
                value={state.user.email} 
                onChange={e => setProfileData({...profileData, email: e.target.value })}
               />
             <label className='font-urbanist'>User Name</label>
            <input 
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black"
                placeholder='type your username' 
                disabled
                value={state.user.username} 
                onChange={e => setProfileData({...profileData, username: e.target.value})}
                />
             <label className='font-urbanist'>Address</label>
            <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                placeholder='Enter your address' 
                 value={state.user.address} 
                 onChange={e => setProfileData({...profileData, address: e.target.value})}
                />
             <label className='font-urbanist'>I'm an Artist Since</label>
            <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                placeholder='Artist since the year ...' 
                 value={state.user.artistSince} 
                onChange={e => setProfileData({...profileData, artistSince: e.target.value})}
                />
              <label className='font-urbanist'>Education</label>
            <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                placeholder='Enter your education path' 
                 value={state.user.education} 
                onChange={e => setProfileData({...profileData, education: e.target.value})}
                />
            <label className='font-urbanist'>Art Field</label>
            <select 
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black" 
              onChange={e=> setProfileData({...profileData, artField:e.target.value})}
               >
              <option value=''>
               Select Art Field
              </option>
              <option value='Fine Art'>
               Fine Art
              </option>
              <option value='Prints'>
               Prints
              </option>
              <option value='Digital Art'>
               Digital Art
              </option>
            </select>
            <label className='font-urbanist'>My goals are:</label>
            <textarea 
            className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black" 
            rows="6" 
            cols="25"
            value={state.user.goals} 
            placeholder="Write 3-5 goals you would like to achieve."
            onChange={e => setProfileData({...profileData, goals: e.target.value})}
            />
            <label className='font-urbanist'>My target customer profile is:</label>
            <textarea 
            className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black" 
            rows="6" 
            cols="25"
            value={state.user.customersTarget} 
            placeholder="Write your target customer profile here: age, gender, location, education, hobbies etc."
            onChange={e => setProfileData({...profileData, customersTarget: e.target.value})}
            />

            <button 
            className="flex mt-10 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-100 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-urbanist"
            onClick={(e) => handleSave(e)}>Save</button> 
         
        </form> 

        </div>
        
    </div>
  )
}
