import React from 'react'
import { Button , TextField } from '@mui/material'
import { useContext } from 'react'
import{ stepsContext } from './StepContext';

export default function LaborStep() {
    const { setStep, artData, setArtData} = useContext(stepsContext)
    console.log('art data  is', artData)
  return (
    <div  className='flex justify-center items-center flex-col'>
        <h3>Labor</h3>
        <div>
          <TextField 
            required 
            label="Hourly Rate" 
            margin='normal' 
            variant='outlined' 
            color='secondary'
            value={artData.hourlyRate} 
            onChange={e => setArtData({...artData, hourlyRate: e.target.value })}
          />
        </div>
        <div>
         <TextField 
            required label="Time in hours necessary of the piece" 
            margin='normal' 
            variant='outlined' 
            color='secondary'
            value={artData.timeProduction} 
            onChange={e => setArtData({...artData, timeProduction: e.target.value })}
         />
        </div>
        <div >
          <Button variant="outlined" color="success"  onClick={()=> setStep(3)} >Next</Button>
        </div>  
        <div >
            <Button variant="outlined" color="error"  onClick={()=> setStep(1)}>Back</Button>
        </div>
           
    </div>
  )
}
