import { useContext, useState } from 'react'
import { AppContext } from '../Context'
import axios from 'axios'
import {AiOutlineCloudUpload} from 'react-icons/ai'

export default function Main() {
    const {state, dispatch} = useContext(AppContext)
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

        const response = await axios.post('/artCard/add', 
        formdata, config)
        console.log("add new  image response Main", response)
    }         
  return (
    <div>
        <form>
            <div className='hidden'>Title:
                <p><input 
                        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black w-[250px]"
                        placeholder='art work name' 
                        value={data.title} 
                        onChange={e => setData({...data, title: e.target.value })}
                        />
                </p>
            </div>
            <div className='hidden'>Year:
                <p><input 
                        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black w-[250px]"
                        placeholder='art work name' 
                        value={data.year} 
                        onChange={e => setData({...data, year: e.target.value })}
                        />
                </p>
            </div>
            <div className='hidden '>
                <label className='font-urbanist cursor-pointer flex flex-row  hover:text-red-200'>
                    Upload Art-Work Image 
                    <AiOutlineCloudUpload className='cursor-pointer hover:text-red-200 text-[2rem] text-white ml-3'/> 
                    <input 
                        onChange={handleImageChange} 
                        type='file' 
                        className='hidden'
                    />              
                </label>
            </div>
            <div className='overflow-auto'>
                <div className='float-right'>
                <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
                <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
                </div>
            </div>
            {/* Circles which indicates the steps of the form:  */}
                <div className='text-center mt-[40px];'>
                <span className='h-[15px] w-[15px] m-1 bg-slate-400 border-none rounded-full inline-block opacity-25'></span>
                <span className='h-[15px] w-[15px] m-1 bg-slate-400 border-none rounded-full inline-block opacity-25'></span>
                <span className='h-[15px] w-[15px] m-1 bg-slate-400 border-none rounded-full inline-block opacity-25'></span>
                <span className='h-[15px] w-[15px] m-1 bg-slate-400 border-none rounded-full inline-block opacity-25'></span>
                </div>

            <div>
                <button 
                    className="flex mt-10 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-100 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-urbanist w-[250px]"
                    onClick={(e) => handleSave(e)}>Save
                </button>
            </div>
        </form>

    </div>
  )
}


