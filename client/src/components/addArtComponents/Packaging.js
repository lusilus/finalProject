import React from 'react'
import{ stepsContext } from './StepContext';
import { Button , TextField } from '@mui/material'
import { useContext } from 'react'

export default function Packaging() {
    const { setStep, artData, setArtData} = useContext(stepsContext)
  return (
    <div>
        <h3>Packaging</h3>
        <div>
                <p>Including shipping costs and taxes to get it delivered to you</p>
                <TextField   required label="Packaging Cost" margin='normal' variant='outlined' color='secondary'/>
                <TextField   required label="Packaging Portion" margin='normal' variant='outlined' color='secondary'/>

            </div>
            <Button variant="outlined" color="error"  onClick={()=> setStep(4)}>Back</Button>

            <Button variant="outlined" color="success"  
            // onClick={submitData}
            >Submit</Button>
    </div>
    
  )
}
