import React from 'react'
import { Button , TextField } from '@mui/material'
import { useContext, useState } from 'react'
import{ stepsContext } from './StepContext';

export default function Materials() {
    const { setStep, artData, setArtData, submitData} = useContext(stepsContext)
    const [materials, setMaterials]= useState([{
        material: "",
        cost:"",
        portion:""

    }])
    const handleClick = ( ) => {
       
        setMaterials([...materials, 
            {
                material: "",
                cost:"",
                portion:""
        
            }])
}

const handleRemove = (index) => {
    const list = [...materials]
    list.splice(index, 1);
    setMaterials(list)
}

    //console.log('submit data is', submitData)
  return (
    <div>
         <div  className='flex justify-center items-center flex-col'>
            <h3>Materials</h3>
            
            <div>
                <TextField required label="Material Name" margin='normal' variant='outlined' color='secondary'/>
                <TextField   required label="Material Cost" margin='normal' variant='outlined' color='secondary'/>
                <TextField   required label="Material Portion" margin='normal' variant='outlined' color='secondary'/>
                    <p>*How much of the item will you use to make the product? eg. if you can make 2 gloves with the yarn ball then it's 1/2 which equals 0.5. If you can make 50 gloves with the yarn ball it's 1/50 which equals 0.02.
                    </p>
            </div>
            {
                materials.map((newMaterial, index) => (
                    <div key={index}>
                        <div>
                            <TextField required label="Material Name" margin='normal' variant='outlined' color='secondary'/>
                            <TextField   required label="Material Cost" margin='normal' variant='outlined' color='secondary'/>
                            <TextField   required label="Material Portion" margin='normal' variant='outlined' color='secondary'/>
                            <Button variant="outlined" color="success" onClick={() => handleRemove(index)}>Remove</Button>  
                        </div>
                    </div>
                ))
            }
            <div>
                <Button variant="outlined" color="success" onClick={handleClick}>More</Button>
            </div>
           
            <div>
           
            <Button variant="outlined" color="success"  onClick={()=> setStep(5)}>Next</Button>
            <Button variant="outlined" color="error"  onClick={()=> setStep(3)}>Back</Button>
            </div>  
           
         </div>
    </div>
    
  )
}
