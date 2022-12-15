import axios from 'axios'
import {FiEdit2 }from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import { AppContext } from './Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Card(props) {
  const {dispatch}= useContext(AppContext)
  const navigate = useNavigate()
  // console.log(" Card props are", props.artCard._id)
  const handleEdit = () => {

      navigate('/edit/' +  props.artCard._id)

  }
  
  const handleDelete = async (id) => {
    //sending to the server the artCard ID
     //const response = await axios.delete(process.env.REACT_APP_BACKEND +`/artCard/delete?artCard=${props.artCard._id}`)
     const response = await axios.delete(`/artCard/delete?artCard=${props.artCard._id}`)

     if (response.data.success){
     
       dispatch({
       type:'deleteCard',
        payload: id
				
      })
       
  
        // const cleanedArtCard = state.filter(item => item._id )
     }
	//console.log(" handleDelete card ", props.artCard._id)
  console.log(" handleDelete response card ", response)
  

    

  }
  return (
    <div className='bg-black text-white font-urbanist '>
        <div className="flex p-3 flex-col gap-[20px] w-[250px] h-[625px] ">
            <img 
                src={'https://res.cloudinary.com/dp4yo8jcf/image/upload/v1669061302/' + props.artCard.image} 
                alt=''
                className='w-[250px] h-auto object-cover border-2 border-white'
            /> 
            <h3 className='font-play text-[24px] '>{ props.artCard.title }</h3> 
            <hr />
            <h3 >Cost: { props.artCard.cost} €</h3> 
            <hr />
            <h3 >Recommended price: { props.artCard.recommendedPrice} €</h3> 
            <hr />
            <h3 > Year:  { props.artCard.year } </h3> 
            <hr />
            <h3 >collection: { props.artCard.collectionArt }</h3> 
            <hr />
            
            <div className='flex gap-[12px]'>
                <FiEdit2 className='cursor-pointer hover:text-red-200 text-[16px] '
                onClick={() => handleEdit((props.artCard._id))}/>
                <MdDelete className='cursor-pointer hover:text-red-200 text-[16px]'
                onClick={()=> handleDelete((props.artCard._id))}/>
            </div>
        </div>
    </div>
  )
}
 
