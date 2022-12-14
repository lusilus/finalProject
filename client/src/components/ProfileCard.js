 import { AppContext } from './Context'
 import { useContext } from 'react'

export default function ProfileCard(props) {
    const {state}= useContext(AppContext)
    //console.log('props ProfileCard', state)
  return (
    <div className='text-[18px] font-urbanist  '>
         
        <h3 className='font-bold '>My Goals are: </h3>
        <h3 > {state.user.goals}</h3>
        
        <h3 className='font-bold '>My Target Customer is : </h3>
        <h3 > {state.user.customersTarget}</h3>

    </div>
  )
}
