import axios from 'axios'
import React, { useContext,  useState } from 'react'
import { AppContext } from '../components/Context'
import { useNavigate, useParams } from 'react-router-dom'
import clay from '../assets/clay.png'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import Cost from '../components/Cost'
export default function Edit() {

    const {id} = useParams()

    const { state, dispatch } = useContext(AppContext)
    const navigate = useNavigate()
    const [data, setData] = useState(state.artCards.find(item => item._id === id))
    // const [data, setData] = useState({
    //     title: "",
    //     year: "",
    //     cost: "", 
    //     recommendedPrice: "", 
    //     catalogNumber: "", 
    //     collectionArt: "",
    //     date: "",
    // })    

     const [imgUrl, setImgUrl] = useState( null)
     const [file, setFile] = useState(null)
   
    const handleImageChange = (e) =>{
        //console.log('file is', e.currentTarget.files[0])
        const url = URL.createObjectURL(e.currentTarget.files[0])

        setImgUrl(url)
        setFile(e.currentTarget.files[0])
    }

    const handleEdit = async (e) =>{
        e.preventDefault()
       
        const formdata = new FormData()

        formdata.set('_id', data._id)
        formdata.set('title', data.title)
        formdata.set('year', data.year)
        formdata.set('cost', data.cost)
        formdata.set('recommendedPrice', data.recommendedPrice)
        formdata.set('catalogNumber', data.catalogNumber)
        formdata.set('collectionArt', data.collectionArt)
        formdata.set('date', data.date)
        formdata.set('owner', state.user._id)

		if (file) formdata.set('image', file ,'artworkImage')
		
         console.log("edit file", file)

        const config = {
            Headers: {"content-type": "multipart/form-data"}
        }
        
         const response = await axios.patch(process.env.REACT_APP_BACKEND +'/artCard/edit', 
         formdata, config)
        
         if (response.data.success) {

            dispatch({
                type: 'editCard',
                payload: response.data.artCard
            })

             navigate('/dashboard')
         }
		console.log("edit image response", response.data)
    console.log('-----state.artCards.image is ', state.artCards[0].image)

    }
        console.log('data is', data)
        return (
        <div className='bg-black text-white h-[100hv] w-full flex flex-row-reverse '>
              <img 
                className='w-[500px] h-[50%] mt-[10%] mr-10 rounded-t-full object-contain '
                src={clay} alt="wall Painting"/> 
            <div className='flex flex-col'>
            <h1 className='font-play text-[80px] ml-5'>Edit</h1>
            <h3 className="font-urbanist ml-5 text-[36px]">Please fill in the updated information</h3>
            <form className='flex flex-col gap-3 w-[600px] m-5'>
            <label className='font-urbanist cursor-pointer flex flex-row  hover:text-red-200'>
                Upload Art-Work Image 
            <AiOutlineCloudUpload 
                className='cursor-pointer hover:text-red-200 text-[2rem] text-white ml-3'/> 
            <input 
                onChange={handleImageChange} 
                type='file' 
                className='hidden'
                /> 
               
            </label>
            
            <img src={data.image ? 'https://res.cloudinary.com/dp4yo8jcf/image/upload/v1669061302/' + data.image : null} alt="" className='w-[250px] h-auto object-cover border-2 border-white' />

            <label className='font-urbanist'>title<span className='text-red-500'>*</span></label>
                <input 
                    className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black w-[250px]"
                    placeholder='art work name' 
                     value={data.title} 
                     onChange={e => setData({...data, title: e.target.value })}
                    />
                 <label className='font-urbanist'>year</label>
                <input 
                    className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black w-[250px]"
                    placeholder='year of production' 
                     value={data.year} 
                     onChange={e => setData({...data, year: e.target.value})}
                    />
                     <label className='font-urbanist'>Catalog Number</label>
                    <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black w-[250px]" 
                    placeholder='current Price' 
                     value={data.catalogNumber} 
                     onChange={e => setData({...data, catalogNumber: e.target.value})}
                    />
                     <label className='font-urbanist'>Collection</label>
                     <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black w-[250px]" 
                    placeholder='collection' 
                     value={data.collectionArt} 
                     onChange={e => setData({...data, collectionArt: e.target.value})}
                    />
                 
                 <Cost setData={setData} data={data}  />
                
                <button 
                className="flex mt-10 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-100 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-urbanist w-[250px]"
                onClick={(e) => handleEdit(e)}>Save Changes</button>
               
               

                 

            </form>
    
            </div>
      
            
        </div>
      )
}
