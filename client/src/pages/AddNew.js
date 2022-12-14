import axios from 'axios'
import React, { useContext,  useState } from 'react'
import {FiEdit2 }from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import { AppContext } from '../components/Context'
import {Link, useNavigate } from 'react-router-dom'
import wallPainting from '../assets/wallPainting.png'
import {AiOutlineCloudUpload} from 'react-icons/ai'

export default function AddNew() {

    const { state } = useContext(AppContext)
    const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        year: "",
        cost: "",
        basePrice: "",
        currentPrice: "",
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
        const formdata = new FormData()

        formdata.set('title', data.title)
        formdata.set('year', data.year)
        formdata.set('cost', data.cost)
        formdata.set('basePrice', data.basePrice)
        formdata.set('currentPrice', data.currentPrice)
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
        
        const response = await axios.post(process.env.REACT_APP_BACKEND +'/artCard/add', 
        formdata, config)
                
        
             
		console.log("add new  image response", response)
       
        // const response =  await axios.post('/artCard/add', {
        //     data,
        //     owner: state.user._id
        // })

        // if (response.data.success){

        //     dispatch({
        //         type: 'addArtCard',
        //         payload: response.data.artCards
        //     })

        // }
		// console.log("TCL: handleSave -> response", response)

        navigate('/dashboard')
        

    }
   
        return (
        <div className='bg-black text-white h-screen w-full flex flex-row-reverse '>
              <img 
             className='w-[40%] h-[40%] mt-[15%] mr-10 rounded-t-full object-cover '
             src={wallPainting} alt="wall Painting"/> 
            <div className='flex flex-col'>
            <h1 className='font-play text-[80px] ml-5'>Add your new Artwork</h1>
            <h3 className="font-urbanist ml-5">Please fill in the information</h3>
            <form className='flex flex-col gap-3 w-[250px] m-5'>
            <label className='font-urbanist cursor-pointer flex flex-row  hover:text-red-200'>
                Upload Art-Work Image 
                <AiOutlineCloudUpload className='cursor-pointer hover:text-red-200 text-[2rem] text-white ml-3'/> 
                <input 
                onChange={handleImageChange} 
                type='file' 
                className='hidden'
                /> 
               
            </label>
            
            <img src={imgUrl} alt="" />

            <label className='font-urbanist'>title*</label>
                <input 
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black"
                    placeholder='art work name' 
                     value={data.title} 
                     onChange={e => setData({...data, title: e.target.value })}
                    />
                 <label className='font-urbanist'>year</label>
                <input 
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black"
                    placeholder='year of production' 
                     value={data.year} 
                     onChange={e => setData({...data, year: e.target.value})}
                    />
                 <label className='font-urbanist'>cost</label>
                <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                    placeholder='cost of art work' 
                     value={data.cost} 
                     onChange={e => setData({...data, cost: e.target.value})}
                    />
                 <label className='font-urbanist'>Base Price</label>
                    <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                    placeholder='base price of art work' 
                     value={data.basePrice} 
                     onChange={e => setData({...data, basePrice: e.target.value})}
                    />
                     <label className='font-urbanist'>Current Price</label>
                    <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                    placeholder='current Price' 
                     value={data.currentPrice} 
                     onChange={e => setData({...data, currentPrice: e.target.value})}
                    />
                     <label className='font-urbanist'>Collection</label>
                     <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm  text-black" 
                    placeholder='collection' 
                     value={data.collectionArt} 
                     onChange={e => setData({...data, collectionArt: e.target.value})}
                    />

                    <Link to='/Cost'><button 
                     className="flex mt-10 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-100 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-urbanist"
                      >Pricing</button></Link>
                 
                
                <button 
                className="flex mt-10 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-100 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-urbanist"
                onClick={(e) => handleSave(e)}>Save</button>
                <FiEdit2 className='cursor-pointer hover:text-red-200 text-[2rem]'/>
                <MdDelete className='cursor-pointer hover:text-red-200 text-[2rem]'/>

                 

            </form>
    
            </div>
          {/* <div>
          {
            state.artCards.length ?
            state.artCards.map((item => <div key={item._id}>{item.username}</div>))
            :
            'Time to Create your art works cards'
        }
          </div> */}
            
        </div>
      )
}
