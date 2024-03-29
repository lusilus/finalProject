import React from 'react'
import { Button , TextField } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import{ stepsContext } from './StepContext';

export default function OverheadStep() {
    const { setStep, artData, setArtData} = useContext(stepsContext)
    const [moreClicked, setMoreClicked] = useState(artData.moreOverHead.length>0 ? true :  false)
    const [moreOverHead, setMoreOverHead] = useState([{
        overheadDescription: "",
        overheadCost:""
    }])

    useEffect(()=>{
    console.log('useEffect overhead',moreOverHead)
    setArtData({...artData, moreOverHead})
   },[moreOverHead])

   useEffect(()=>{
    if (artData.moreOverHead.length > 0 )
    setMoreOverHead(artData.moreOverHead)
   },[])
   
     const handleClick = () => {
      if (!moreClicked)
        {setMoreClicked(true)}
        else (
                setMoreOverHead([...moreOverHead, 
                {overheadDescription: "",overheadCost:""}])
        )
        
    }

    const handleRemove = (index) => {
        const list = [...moreOverHead]
        list.splice(index, 1);
        setMoreOverHead(list)

        //if moreoverhead. length = 0 setmore clicke(false) 
    }

    const handleChange = (e, index) => {
      const {name, value} = e.target;
      const list = [...moreOverHead];
      list[index][name]= value;
      setMoreOverHead(list)
    }
    console.log(' more overhead is', moreOverHead)
    console.log('art data  is', artData)
    //console.log(' more clicked is', moreClicked)
  return (
    <div>
         <div  className='flex justify-center items-center flex-col'>
            <h3>Overhead</h3>
            <div>
            <TextField 
                required 
                label="Rent/month" 
                margin='normal' 
                variant='outlined' 
                color='secondary'
                value={artData.rent} 
                onChange={e => setArtData({...artData, rent: e.target.value })}
            />
            </div>
            <div>
            <TextField 
                required label="Software/month" 
                margin='normal' 
                variant='outlined' 
                color='secondary'
                value={artData.software} 
                onChange={e => setArtData({...artData, software: e.target.value })}
            /> 
            </div>
            <div>
            <TextField   
                required 
                label="Utilities/month" 
                margin='normal' 
                variant='outlined' 
                color='success'
                value={artData.utilities} 
                onChange={e => setArtData({...artData, utilities: e.target.value })}
            />
            </div>
            <div>
            <TextField   
                required 
                label="Biz Insurance/month" 
                margin='normal' 
                variant='outlined' 
                color='secondary'
                value={artData.insurance} 
                onChange={e => setArtData({...artData, insurance: e.target.value })}
            />
            </div>
            <div>
                <p>What is the average number of artwork created that month?</p>
            <TextField   
                required 
                label="" 
                margin='normal' 
                variant='outlined' 
                color='secondary'
                value={artData.avgNumProduction} 
                onChange={e => setArtData({...artData, avgNumProduction: e.target.value })}
            />
            </div>
            <div>
                    {
                        moreClicked?
                            moreOverHead.map((newInput, index) => (
                                <div key={index}>
                                <TextField   
                                        required 
                                        name="overheadDescription" 
                                        label=" Description" 
                                        margin='normal' 
                                        variant='outlined' 
                                        color='secondary'
                                        value={newInput.overheadDescription} 
                                        onChange={(e) => handleChange(e,index) }
                                    /> 
                                    <TextField   
                                        required
                                        name= "overheadCost"
                                        label="overhead Cost" 
                                        margin='normal' 
                                        variant='outlined' 
                                        color='secondary'
                                        value={newInput.overheadCost} 
                                        onChange={(e) => handleChange(e,index) }
                                    /> 
                                    <Button 
                                        variant="outlined" 
                                        color="success" 
                                        onClick={() => handleRemove(index)}>Remove
                                    </Button>
                                </div>
                            )) 
                            
                       :null
                    }
                    
                <Button 
                    variant="outlined" 
                    color="success" 
                    onClick={handleClick}>More
                </Button>
            </div>
            <div>
            <Button 
                variant="outlined" 
                color="success"  
                onClick={()=> setStep(4)}>Next
            </Button>
            <Button 
                variant="outlined" 
                color="error"  
                onClick={()=> setStep(2)}>Back
            </Button>
            </div>  
           
         </div>
    </div>
    
  )
}
