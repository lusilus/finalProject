import React from 'react'
import { Button , TextField } from '@mui/material'
import { useContext, useState, useEffect} from 'react'
import{ stepsContext } from './StepContext';

export default function Materials() {
    const { setStep, artData, setArtData} = useContext(stepsContext)
    const [moreClicked, setMoreClicked] = useState(false)
    const [moreMaterials, setMoreMaterials]= useState([{
        name: "",
        cost:"",
        portion:""

    }])
    
   
useEffect(()=>{
 console.log('useEffect materials', moreMaterials)
 console.log('art data  is', artData)
},[artData, moreMaterials])

    const handleClick = ( ) => {
        setMoreClicked(true)
        setMoreMaterials([...moreMaterials, 
            {
                name: "",
                cost:"",
                portion:""
        
            }])
}

const handleChange = (e, index) => {
    const {name, value} = e.target;
    const list = [...moreMaterials];
    list[index][name]= value;
    setMoreMaterials(list)
    //update the global state with the more state:
    setArtData({...artData, moreMaterials})
  }
   
const handleRemove = (index) => {
    const list = [...moreMaterials]
    list.splice(index, 1);
    setMoreMaterials(list)
}
    console.log('art data  is', artData)
  
  return (
    <div>
         <div  className='flex justify-center items-center flex-col'>
            <h3>Materials</h3>
            
            <div >
                <TextField 
                    required 
                    label="Material Name" 
                    margin='normal' 
                    variant='outlined' 
                    color='secondary'
                    value={artData.materialName} 
                    onChange={e => setArtData({...artData, materialName: e.target.value })}
                />
                <TextField   
                    required 
                    label="Material Cost" 
                    margin='normal' 
                    variant='outlined' 
                    color='secondary'
                    value={artData.materialCost} 
                    onChange={e => setArtData({...artData, materialCost: e.target.value })}
                />
                <TextField   
                    required 
                    label="Material Portion" 
                    margin='normal' 
                    variant='outlined' 
                    color='secondary'
                    value={artData.materialPortion} 
                    onChange={e => setArtData({...artData, materialPortion: e.target.value })}
                />
                    <p>*How much of the item will you use to make the product? eg. if you can make 2 gloves with the yarn ball then it's 1/2 which equals 0.5. If you can make 50 gloves with the yarn ball it's 1/50 which equals 0.02.
                    </p>
            </div>
            {
                moreClicked?
                moreMaterials.map((newInput, index) => (
                    <div key={index}>
                            <TextField 
                                required 
                                name='name'
                                label="Material Name" 
                                margin='normal' 
                                variant='outlined' 
                                color='secondary'
                                 value={newInput.name} 
                                 onChange={(e) => handleChange(e,index) }
                            />
                            <TextField   
                                required 
                                name='cost'
                                label="Material Cost" 
                                margin='normal' 
                                variant='outlined' 
                                color='secondary'
                                value={newInput.cost} 
                                onChange={(e) => handleChange(e,index) }
                            />
                            <TextField   
                                required 
                                name='portion'
                                label="Material Portion" 
                                margin='normal' 
                                variant='outlined' 
                                color='secondary'
                                value={newInput.portion} 
                                onChange={(e) => handleChange(e,index) }
                            />
                            <Button variant="outlined" color="success" onClick={() => handleRemove(index)}>Remove</Button>  
                        
                    </div>
                ))
                :null
            }
            <div>
                <Button 
                variant="outlined" 
                color="success" 
                onClick={handleClick}>More</Button>
            </div>
           
            <div>
           
            <Button variant="outlined" color="success"  onClick={()=> setStep(5)}>Next</Button>
            <Button variant="outlined" color="error"  onClick={()=> setStep(3)}>Back</Button>
            </div>  
           
         </div>
    </div>
    
  )
}
