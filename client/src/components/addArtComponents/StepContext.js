import { useState, createContext} from "react"


export const stepsContext = createContext()
 
export default function StepContext({children}) {
  const [currentStep, setStep] = useState(1);
  //const [artData, setArtData] = useState({});
  const [artData, setArtData] = useState({
    title: "",
    year:"",
    catalogNumber: "",
    collection: "",
    image: "",
    hourlyRate:"",
    timeProduction:"",
    rent:"",
    software: "",
    utilities: "",
    insurance:"",
    avgNumProduction:"",
    overheadCost: "",
    moreOverHead: [],
    materialName: "",
    materialCost: "",
    materialPortion: "",
    moreMaterials: [],
    materialCostTotal: "",
    
    laborCost:""
  });
  const [finalData, setFinalData] = useState([]);
  const [cost, setCost] = useState([])
  const [recommendedPrice, setRecommendedPrice] = useState([])

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

