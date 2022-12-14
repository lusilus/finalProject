import{TiThumbsUp} from 'react-icons/ti'
import treads from '../assets/treads.png'
import {IoMdPricetags} from 'react-icons/io'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {VscKey} from 'react-icons/vsc'
import {BsArrowUpRightCircle} from 'react-icons/bs'
import {TbBulb} from 'react-icons/tb'
import {BiTime} from 'react-icons/bi'
import {GiReceiveMoney} from 'react-icons/gi'
import {GiTrophyCup} from 'react-icons/gi'

export default function Explain() {
  return (
    <div className='bg-black text-white h-[100hv] w-full font-urbanist p-3'>
      <img 
        src={treads} 
        alt='threads'
        className=' object-cover object-top h-48 w-full'/>
      <div className='   flex items-center flex-col '>
      <h1 className='font-play text-[3rem] mt-6'>Some Background about Pricing</h1>
      <br/>
      <div className=' text-[20px] w-[50%] bg-slate-200 text-black rounded-xl p-3 font-bold flex  m-4 flex-row text-left' >
        <p >Pricing is the center piece of your artistic career. The reason is simple: to be successful and make a living off your art, you need to be profitable. And to be profitable, you have to price for profit.
          <br/>
          <br/>
        <span className=' text-[20px] text-amber-600'>Truth is, it can feel very uncomfortable, and if numbers aren’t your favorite thing to play with, this app is here for you.</span>
        </p> 
        <div className='text-[140px] m-3 flex justify-center items-center'><IoMdPricetags /></div>
        
      </div>
     
    
      <div className=' text-[20px] w-[50%] bg-slate-200 text-black rounded-xl p-3 font-bold flex  m-4 flex-row text-left'>
      <div className='text-[140px] m-3 flex justify-center items-center'><HiOutlineLightBulb /></div>
        <div>
          <p className=' text-[20px] '>This App use Value-Based-Pricing strategy:</p>
          <p className=' underline text-[18px] text-blue-300'>Value-based pricing:</p>
          <p>Value-based pricing is the methodology you should be using to price your art.</p>
          <br/>
          The idea is to set your prices based on <span className='underline text-[18px] text-teal-500'>what your target customers
          think your artworks are worth.</span> 
          <br/>
          <p>• It is known as <span className='underline text-[18px] text-amber-600'>“Perceived Value”.</span></p>

        </div>
        
      </div>
      
   
      <div className=' text-[20px] w-[50%] bg-slate-200 text-black rounded-xl p-3 font-bold flex  m-4 flex-row text-left'>
        <div className='w-[80%]'>
          <p className=' text-[20px] underline text-teal-500'>Key Concept:</p>
          <p> Value-based pricing means you know exactly how much it costs to create each one of your artworks.</p>
          <br/>
          <p>• AND you also greatly understand who your target customers are and what they need/want/value.</p>
          <br/>
          <br/>
          <p>• Value-based pricing means that your price based on perceived value rather than only on cost.</p>
          <br/>
          <p className=' text-[20px]  text-amber-600'>A customer’s opinion of an artwork’s value to him or her. It may have little or nothing to do with the art’s market price and depends on the art’s ability to satisfy his or her needs or requirements.</p>
        </div>
        
        <div className='text-[140px] m-3 flex justify-center items-center'><VscKey/></div>
      </div>

      <div className=' text-[20px] w-[50%] bg-slate-200 text-black rounded-xl p-3 font-bold flex  m-4 flex-row text-left'>
      <div className='text-[140px] m-3 flex justify-center items-center'><BsArrowUpRightCircle/></div>
          <div>
            <div className=' p-3 '>
            <p className='underline'>WAYS TO INCREASE PERCEIVED-VALUE:</p>
            <p className=' text-teal-500'>Recognition</p>
            <p className=' text-blue-500'>Quality</p>
            <p className=' text-amber-600'>Concept</p>
            <p className=' text-teal-500'>Creativity</p>
            <p className=' text-blue-500'> Skill</p>
            <p className=' text-amber-600'>Social proof </p>
            <p className=' text-teal-500'>price</p>
           </div>
        </div>
      
      </div>
      <div className=' text-[20px] w-[50%] bg-slate-200 text-black rounded-xl p-3 font-bold flex  m-4 flex-row text-left'>
        <div>
            <p>Definitions: <span className='text-amber-600'>fixed</span> or <span className='text-blue-600'>variable</span> cost?</p>
            <p className='text-amber-600'>Fixed costs = Overhead = Operating costs</p>
              • You have to pay for it even if you do not make a single sale
            <br/>
              • Costs that you have to pay to operate your business
            <br/>
            <p className='text-blue-600'>Variable costs = Cost of goods sold = COGS</p>
            • Variable costs vary depending on your production volume
            <br/>
           • If you make and sell more artworks, your variable costs will increase
           <br/>
           • COGS – or cost of goods sold-this is essentially your supplies and materials
        </div>
          <div  className='text-[140px] m-3 flex justify-center items-center'><TbBulb/></div> 
      </div>
     
    
       
      <div className=' text-[20px] w-[50%] bg-slate-200 text-black rounded-xl p-3 font-bold flex  m-4 flex-row text-left'>
        <div  className='text-[140px] m-3 flex justify-center items-center'><BiTime/></div>
        <div>
        <p className=' text-teal-500'>Cost of time (labor) = <br/>Time spent creating an artwork x Hourly wage</p>
        
        • Easy to overlook
         <br/>
        • Run a test to get an average
         <br/>
        • Labor time is “variable” but is not included in your C.O.G.S (cost of goods sold).
        </div>
      </div>
      <div className=' text-[20px] w-[50%] bg-slate-200 text-black rounded-xl p-3 font-bold flex  m-4 flex-row text-left'>
        <div className='w-[80%]'>
        <p className='underline'>Profit vs Revenue:</p>
        Revenue:
        <br/>
        price x sales = <span className='text-red-600'> revenue </span>
        <br/>
        Profit:
        <br/>
        revenue - COGS = <span className='text-orange-600'>gross profit </span>
        <br/>
        revenue - All expenses = <span className='text-green-600'>net profit </span> 
        <br/>
        <br/>
        </div>
        <div  className='text-[140px] m-3 flex justify-center items-center'><GiReceiveMoney/></div>
      </div>
      <div className=' text-[20px] w-[50%] bg-slate-200 text-black rounded-xl p-3 font-bold flex  m-4 flex-row text-left'>
        <div  className='text-[140px] m-3 flex justify-center items-center text-amber-600'><GiTrophyCup/></div>
        <div>
        Once you paid all your expenses, it’s a good idea to have a few rules in place to know what to do
        with the money that’s sitting in the bank:<br/> your profit!
        <br/>
        <br/>
        • The goal is always to:
        <br/>
        - Pay for taxes
        <br/>
        - Pay yourself
        <br/>
        - Re-invest in your business
        <br/>
        <br/>
        • A good strategy can be to start with 3 buckets or “allocation percentages”.
        <br/>
        <br/>
        • You could decide for example to allocate your profit this way:
        <br/>
        - Taxes: 25%
        <br/>
        - Pay: 55%
        <br/>
       - Re-investing: 20%

        </div>
      </div>
      <div className=' mt-4  p-3 font-bold flex  m-4 flex-row text-center'>
      <p className='text-teal-500 flex text-[36px]'>
          <TiThumbsUp className='text-[56px] mr-3 text-amber-600'/>
          If you made it until here- GOOD JOB! <br/>You are in the right way to be a successful artist!
          <TiThumbsUp className='text-[56px] ml-3 text-amber-600'/>
        </p>
      </div>
        
      
      
        </div>
    </div>
  )
}
