import { useContext, useState } from 'react'
import { AppContext } from '../Context'
import axios from 'axios'
//import {AiOutlineCloudUpload} from 'react-icons/ai'
import GeneralDataStep from './GeneralDataStep'
import LaborStep from './LaborStep'
import OverheadStep from './OverheadStep'
import { Stepper, StepLabel, Step } from '@mui/material'
import { stepsContext } from './StepContext'
import Materials from './Materials'
import './main.css';
import Packaging from './Packaging'

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
    const { currentStep, finalData} = useContext(stepsContext)
 

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
    
    function showStep(step){
        switch(step){
            case 1:
                return <GeneralDataStep/>
            case 2:
                return <LaborStep/>
            case 3:
                return <OverheadStep/>
            case 4:
                return <Materials/>
            case 5:
                return <Packaging/>
            default: console.log('hello from steps')
        }
           
    }
  return (
    <div >
        <div className='center-stepper'>
            <Stepper style={{width:'18%'}} activeStep={currentStep - 1} orientation='horizontal'>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
        </div>
        {showStep(currentStep)}

        <div>Item Cost: </div>
        <div>Recommended Price: </div>
        when it will be ready, it need to render here the general info as well
        
       
    </div>
  )
}


