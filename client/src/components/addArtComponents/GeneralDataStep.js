import React from 'react'
//import axios from 'axios'
import { Avatar, Button , TextField } from '@mui/material'
import { useContext, useState } from 'react'
import{ stepsContext } from './StepContext';
import {AiOutlineCloudUpload} from 'react-icons/ai'
//import { AppContext } from '../Context';

export default function GeneralDataStep() {
  const { setStep, artData, setArtData} = useContext(stepsContext)
  //const { state } = useContext(AppContext)
  // const [data, setData] = useState({
  //   title: "",
  //   year: "",
  //   cost: "", 
  //   recommendedPrice: "", 
  //   catalogNumber: "", 
  //   laborCost: "",
  //   OverheadCost: "",
  //   collectionArt: "",
  //   date: "",
  //   })

  const [imgUrl, setImgUrl] = useState( null)
  const [file, setFile] = useState(null)

  const handleImageChange = (e) =>{
    //console.log('file is', e.currentTarget.files[0])
    const url = URL.createObjectURL(e.currentTarget.files[0])

    setImgUrl(url)
    setFile(e.currentTarget.files[0])
}
 console.log('art data  is', artData)
  return (
    <div className='flex justify-center items-center flex-col'>
      <h3>Please fill the information</h3>
      <div>
        <TextField 
          required label="Title" 
          margin='normal' 
          variant='outlined' 
          color='secondary'
          value={artData.title} 
          onChange={e => setArtData({...artData, title: e.target.value })}
        />
      </div>
      <form>
        <label>
          <div>
          Upload Art-Work Image 
            <AiOutlineCloudUpload className='cursor-pointer hover:text-red-200 text-[2rem] text-black ml-3'/> 
            <input 
              onChange={handleImageChange} 
              type='file' 
              className='hidden'
            /> 
          </div>
        </label>
        <Avatar 
          src={imgUrl} 
          alt="art work image"  
          sx={{ width: 156, height: 156 }}
        />
      </form>
      
      <div>
        <TextField 
          label="Year" 
          margin='normal' 
          variant='outlined' 
          color='secondary'
          value={artData.year} 
          onChange={e => setArtData({...artData, year: e.target.value })}
        />
      </div>
      <div>
       <TextField 
          label="Catalog Number" 
          margin='normal' 
          variant='outlined' 
          color='secondary'
          value={artData.catalogNumber} 
          onChange={e => setArtData({...artData, catalogNumber: e.target.value })}
       />
      </div>
      <div>
        <TextField 
          label="Collection" 
          margin='normal' 
          variant='outlined' 
          color='secondary'
          value={artData.collection} 
          onChange={e => setArtData({...artData, collection: e.target.value })}
        />
      </div>
      <div>
      <Button variant='contained' color='primary' onClick={()=> setStep(2)}>Next</Button>
      </div>
    </div>
  )
}
