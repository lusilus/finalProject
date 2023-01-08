import { useState, createContext} from "react"


export const stepsContext = createContext()
 
export default function StepContext({children}) {
  const [currentStep, setStep] = useState(1);
  const [artData, setArtData] = useState({});
  const [finalData, setFinalData] = useState([]);

  function submitData(){
    setFinalData(finalData=>[...finalData, artData]);
    setArtData("")
    setStep(1)
    console.log('final data is', finalData)
  }

  return (
    
      <stepsContext.Provider value={{ currentStep, setStep, artData, setArtData, finalData, setFinalData, submitData}}>
        {children}
      </stepsContext.Provider>
    
  )
}

