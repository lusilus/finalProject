import {TbMinusVertical} from 'react-icons/tb'
import {BsCheckCircle} from 'react-icons/bs'
import sculpture from '../assets/sculpture.jpg'

export default function HowTo() {
  return (
    <div className='flex flex-row'>
         <div className='w-[40%] m-5'>
             <img src={sculpture} alt="" className='object-cover object-left
 rounded-t-full h-[700px]' /> 
         </div>
       <div className='flex items-center flex-col w-[600px] '>
      
        <h1 className='font-play text-[36px] mb-3'>Easy steps to start using this app:</h1>
        <div className='flex items-center'>
        <BsCheckCircle className='text-[100px]'/>
        
            <div className='pl-5'>
                <h3 className='font-play text-[24px] text-amber-300'> Create your profile</h3>
                <p className='w-[350px]'>Click on the profile icon, and fill in the empty fields. Take your time and think about your goals for the next year. In addition, think about who is your audience. It will help you focus on your goals and the way to achieve them.
                </p>
            </div>
        </div>
        <TbMinusVertical className='text-[100px]'/>
        <div className='flex items-center'>
        <BsCheckCircle className='text-[100px]'/>
            <div className='pl-5'>
                <h3 className='font-play text-[24px] text-amber-300'> Read the Explanation Page </h3>
                <p className='w-[350px]'>On this page you will find basic information about pricing and how the calculation works, strategy, and easy to understand concepts for making profit. 
                </p>
            </div>
        </div>

        <TbMinusVertical className='text-[100px]'/>
        <div className='flex items-center'>
        <BsCheckCircle className='text-[100px]'/>
            <div className='pl-5'>
                <h3 className='font-play text-[24px] text-amber-300'> Create your Artwork Cards</h3>
                <p className='w-[350px]'>Open an artwork card for every artwork you want to sell. Fill in the artwork information. Fill in the pricing calculator tables. And click SAVE. Then you will receive the complete calculation of your cost for each artwork and the recommended price for it.
                </p>
            </div>
        </div>
       
    </div>
</div>
  )
}
