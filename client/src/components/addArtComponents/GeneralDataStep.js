import React from 'react'
import { Button , TextField } from '@mui/material'
import { useContext } from 'react'
import{ stepsContext } from './StepContext';

export default function GeneralDataStep() {
  const { setStep, artData, setArtData} = useContext(stepsContext)
  return (
    <div className='flex justify-center items-center flex-col'>
      <h3>Please fill the information</h3>
      <div>
        <TextField 
          required label="Title" 
          margin='normal' 
          variant='outlined' 
          color='secondary'
          value={artData['title']} 
          onChange={e => setArtData({...artData, title: e.target.value })}
        />
      </div>
      <div>
        <TextField 
          label="Year" 
          margin='normal' 
          variant='outlined' 
          color='secondary'
          value={artData['year']} 
          onChange={e => setArtData({...artData, year: e.target.value })}
        />
      </div>
      <div>
       <TextField 
          label="Catalog Number" 
          margin='normal' 
          variant='outlined' 
          color='secondary'
          value={artData['catalogNumber']} 
          onChange={e => setArtData({...artData, catalogNumber: e.target.value })}
       />
      </div>
      <div>
        <TextField 
          label="Collection" 
          margin='normal' 
          variant='outlined' 
          color='secondary'
          value={artData['collection']} 
          onChange={e => setArtData({...artData, collection: e.target.value })}
        />
      </div>
      <div>
      <Button variant='contained' color='primary' onClick={()=> setStep(2)}>Next</Button>
      </div>
    </div>
  )
}
