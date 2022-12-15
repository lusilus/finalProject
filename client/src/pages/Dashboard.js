import { useState, useContext, useEffect } from 'react'

import axios from 'axios'
import { AppContext } from '../components/Context'
import Card from '../components/Card'
import HowTo from '../components/HowTo'
//import ProfileCard from '../components/ProfileCard'

function Dashboard() {

    const { state, dispatch } = useContext(AppContext)
     const [count, setCount] = useState(0)
    	
useEffect(()=>{
    getData()

},[])

    const getData = async () => {
        // const response = await axios.get(`${process.env.REACT_APP_BACKEND}/artCard/list?skip=${state.artCards.length}&id=${state.user._id}`,  { withCredentials: true })
		// console.log(" getData -> response", response)
        const response = await axios.get(`/artCard/list?skip=${state.artCards.length}&id=${state.user._id}`,  { withCredentials: true })
		console.log(" getData -> response", response)



        dispatch({
           type: 'getArtCard',
           payload: response.data.artCards
        })
        setCount(response.data.count)
		console.log("TCL: getData -> response.data.count", response.data)
    }

    //console.log('hello from state dashboard', state)
    
   

    
    
const artCardArray =  state.artCards
console.log("TCL: Dashboard ->  artCardArray",  artCardArray)

  return (
    <div className='bg-black text-white  h-[100hv] w-full flex font-urbanist flex-col gap-[20px] items-center'>
        
            {/* <ProfileCard />
        <hr className='w-[90%]'/> */}
  
        {
            
            state?.artCards.length  ?
            
            <div className='grid grid-cols-3 gap-5 mb-5 '>
             {state.artCards.map((item => <Card key={item._id} artCard={item}/>))}
             </div>
            :
           
            <div className='h-[850px]'>
                <HowTo/>
            </div>
        }

        {
            state.artCards.length < count? 

            <div className='flex items-end'><button onClick={getData} className="border-2 cursor-pointer border-gray-200 text-gray-200 font-medium p-3 rounded-full font-urbanist w-[250px] h-[50px] ">Load More</button> </div>
              :
            <p className='flex items-end '>No more artworks</p>
        } 
    
    </div> 

    
    
  
  )

}
export default Dashboard