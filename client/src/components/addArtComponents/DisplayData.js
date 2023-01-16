import React, { useContext } from 'react';
import { stepsContext } from './StepContext';



export default function DisplayData() {

  const {finalData} = useContext(stepsContext)
  return (
    <div>DisplayData</div>
  )
}
