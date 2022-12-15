import axios from 'axios'
import React, { useContext,  useState } from 'react'
import { AppContext } from '../components/Context'
import { useNavigate } from 'react-router-dom'
import cooking from '../assets/cooking.jpg'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import Cost from '../components/Cost'
export default function AddNew() {

    const { state } = useContext(AppContext)
    const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        year: "",
        cost: "", 
        recommendedPrice: "", 
        catalogNumber: "", 
        collectionArt: "",
        date: "",
        
    })
    const [imgUrl, setImgUrl] = useState( null)
    const [file, setFile] = useState(null)
	


   
    const handleImageChange = (e) =>{
        //console.log('file is', e.currentTarget.files[0])
        const url = URL.createObjectURL(e.currentTarget.files[0])

        setImgUrl(url)
        setFile(e.currentTarget.files[0])
    }

    const handleSave = async(e) =>{
        e.preventDefault()
        alert('Please wait')
        const formdata = new FormData()

        formdata.set('title', data.title)
        formdata.set('year', data.year)
        formdata.set('cost', data.cost)
        formdata.set('recommendedPrice', data.recommendedPrice)
        formdata.set('catalogNumber', data.catalogNumber)
        formdata.set('collectionArt', data.collectionArt)
        formdata.set('date', data.date)
        formdata.set('owner', state.user._id)

		if (file) formdata.set('image', file ,'artworkImage')
		
        // console.log("add new formdata", formdata.keys())
        // console.log('add new data is', data)
         console.log("add new file", file)

        const config = {
            Headers: {"content-type": "multipart/form-data"}
        }
        
        // const response = await axios.post(process.env.REACT_APP_BACKEND +'/artCard/add', 
        // formdata, config)
        const response = await axios.post('/artCard/add', 
        formdata, config)
                
                
        
             
		console.log("add new  image response", response)
     

        navigate('/dashboard')
        

    }
   
        return (
        <div className='bg-black text-white h-[100hv] w-full flex flex-row-reverse '>
              <img 
             className='w-[500px] h-[50%] mt-[10%] mr-10 rounded-t-full object-contain '
             src={cooking} alt="wall Painting"/> 
            <div className='flex flex-col'>
            <h1 className='font-play text-[80px] ml-5'>Add your new Artwork</h1>
            <h3 className="font-urbanist ml-5 text-[36px]">Please fill in the information</h3>
            <form className='flex flex-col gap-3 w-[600px] m-5'>
            <label className='font-urbanist cursor-pointer flex flex-row  hover:text-red-200'>
                Upload Art-Work Image 
                <AiOutlineCloudUpload className='cursor-pointer hover:text-red-200 text-[2rem] text-white ml-3'/> 
                <input 
                onChange={handleImageChange} 
                type='file' 
                className='hidden'
                /> 
               
            </label>
            
            <img src={imgUrl} alt="" className='w-[250px] h-auto object-cover ' />

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
                onClick={(e) => handleSave(e)}>Save</button>
               
               

                 

            </form>
    
            </div>
      
            
        </div>
      )
}
