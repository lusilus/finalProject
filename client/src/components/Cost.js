
import { useState, useEffect } from 'react'
import {VscQuestion} from 'react-icons/vsc'



export default function Cost({ data, setData}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpen2, setModalOpen2] = useState(false)
  const [modalOpen3, setModalOpen3] = useState(false)

  const [labor, setLabor] = useState({
    hourlyRate: '',
    time: '',
   
    
  })

  let laborCost = `${labor.hourlyRate * labor.time}`
	//console.log("TCL: Cost -> laborCost", laborCost)
  
  const [overhead, setOverhead] = useState({
    rent: "",
    software: "",
    utilities: "",
    insurance: "",
    aveArt: "",
  })

  let overheadMonth = `${(parseInt(overhead.rent) || 0) + (parseInt(overhead.software) || 0) + (parseInt(overhead.utilities) || 0) + (parseInt(overhead.insurance) || 0)}`

	console.log("TCL: Cost -> overheadMonth", overheadMonth)

  let overheadArtWork =`${((parseInt(overhead.rent) || 0) + (parseInt(overhead.software) || 0) + (parseInt(overhead.utilities) || 0) + (parseInt(overhead.insurance) || 0))  / overhead.aveArt || 0}`
	//console.log("TCL: Cost -> overheadArtWork", overheadArtWork)

  
  const [material, setMaterial] = useState(
     {
      materialsA: "",
      materialsB: "",
      materialsC: "",
      materialsD: "",
      
    
      totalMaterialA: "",
      totalMaterialB: "",
      totalMaterialC: "",
      totalMaterialD: "",
  
      portionA: "",
      portionB: "",
      portionC: "",
      portionD: "",
  
      packagingTotalMaterial: "",
      packagingPortion: "",
     
    
    }
 )
      let materialCostA = `${material.totalMaterialA * material.portionA}`
			//console.log("TCL: Cost -> materialCostA", materialCostA)
      
      let materialCostB = `${material.totalMaterialB * material.portionB}`
			//console.log("TCL: Cost ->  materialCostB",  materialCostB)
      
      let materialCostC = `${material.totalMaterialC * material.portionC} `
			//console.log("TCL: Cost -> materialCostC", materialCostC)
      
      let materialCostD = `${material.totalMaterialD * material.portionD}`
      //console.log("TCL: Cost -> materialCostD", materialCostD)
      
      let packagingMaterialCost = `${(material.packagingTotalMaterial * material.packagingPortion )}`
      //console.log("TCL: Cost -> packagingMaterialCost", packagingMaterialCost)
      
      let totalMaterialCost =`${(parseInt(material.totalMaterialA) || 0) + (parseInt(material.totalMaterialB) || 0) + (parseInt(material.totalMaterialC) || 0) + (parseInt(material.totalMaterialD) || 0)} `
			//console.log("TCL: Cost -> totalMaterialCost", totalMaterialCost)
      
      let portion =`${(parseInt(material.portionA) || 0) + (parseInt(material.portionB) || 0) + (parseInt(material.portionC) || 0) + (parseInt(material.portionD) || 0)} `
			//console.log("TCL: Cost -> portion", portion)
      //need to right the right formula and update the value
      let materialCost =`${((parseInt(material.totalMaterialA) || 0) + (parseInt(material.totalMaterialB) || 0) + (parseInt(material.totalMaterialC) || 0) + (parseInt(material.totalMaterialD) || 0)) + (parseInt(packagingMaterialCost) || 0)} `
      //console.log("TCL: Cost -> materialCost", materialCost)

      let cost =`${ (parseInt(materialCost) || 0 ) + (parseInt(laborCost) || 0 ) +(parseInt(overheadArtWork) || 0 ) }`

      let recommendedPrice = `${cost * 5}`
      // i need to pass the cost into add new2 
      useEffect(() => {
        setData((data)=>({...data, cost, recommendedPrice }) )
      }, [materialCost, laborCost, overheadArtWork ]);
   

  //console.log('material is', material)
  //console.log('labor is', labor)


  return (
    <div className=' flex flex-col cursor-pointer font-urbanist mt-8 '>
      <h1 className='font-play text-[36px] '>It's Time to Calculate Your Cost</h1>
      <br/>
        <div className='flex flex-row gap-2 text-[22px] font-bold w-[300px]'>
          <h2 className="w-[253px] ">Item Cost:</h2>
            { data.cost }
        </div>
        <div className='flex flex-row gap-3 text-[22px] font-bold'>
           <h2 className="w-[250px]">Recommended Price:</h2>
           {data.recommendedPrice} 
        </div> 
        
        
      <br/>
      <h3 className='font-play text-[24px] '>Raw Materials Used</h3>
      <br/>
      <table className="table-auto border-separate border-spacing-2 border border-slate-400 ">
  <thead>
    <tr>
      <th className="p-2 border-separate border-spacing-2 border border-slate-400 ">Materials</th>
      <th className=" border-separate border-spacing-2 border border-slate-400 p-2">Material Total 
        <VscQuestion onClick={()=> setModalOpen(true)}/></th>
      <th className="p-2 border-separate border-spacing-2 border border-slate-400">Portion Used to Make Product  <VscQuestion onClick={()=> setModalOpen2(true)}/></th>
      <th className="p-2 border-separate border-spacing-2 border border-slate-400">Material Cost for this Item</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td >
        <textarea 
          id="materialsA" 
          name="materialsA"
          rows="3" cols="24"
          placeholder = 'Material 1'
        
          className='bg-slate-900 text-white'
          value={material.materialsA}
          onChange={e => setMaterial({...material, materialsA: e.target.value })}
          >         
        </textarea>
      </td>
      <td>
        <textarea 
            id="totalMaterialA" 
            name="totalMaterialA"
            rows="3" cols="24"
            placeholder = '5.00€'
            className='bg-slate-900 text-white'
            value={material.totalMaterialA}
            onChange={e => setMaterial({...material, totalMaterialA: e.target.value })}
            >         
          </textarea>
         </td>
      <td>
        <textarea 
            id="portionA" 
            name="portionA"
            rows="3" cols="24"
            placeholder = '0.25'
            className='bg-slate-900 text-white' 
            value={material.portionA} 
            onChange={e => setMaterial({...material, portionA: e.target.value })} 
            >      
          </textarea>
      </td>
      <td>
      
         <textarea 
            id="materialCostA" 
            name="materialCostA"
            disabled
            rows="3" cols="24"
            placeholder = '1.25€'
            className='bg-slate-900 text-white'
            value={material.totalMaterialA * material.portionA} 
            // onChange={e => setMaterial({...material, totalMaterialA:e.target.value, materialCostA: e.target.value / material.portionA })}
            onChange={()=> console.log('hello from materialCostA')}
            >               
          </textarea>
      </td>
    </tr>
    <tr>
      <td>
        <textarea 
          id="materialsB" 
          name="materialsB"
          rows="3" cols="24"
          placeholder = 'Material 2'
          className='bg-black text-white'
          value={material.materialsB}
          onChange={e => setMaterial({...material, materialsB: e.target.value })}
          >         
        </textarea>
      </td>
      <td>
        <textarea 
            id="totalMaterialB" 
            name="totalMaterialB"
            rows="3" cols="24"
            placeholder = '3.50€'
            className='bg-black text-white'
            value={material.totalMaterialB}
            onChange={e => setMaterial({...material, totalMaterialB: e.target.value })}
            >                  
          </textarea>
         </td>
      <td>
        <textarea 
            id="portionB" 
            name="portionB"
            rows="3" cols="24"
            placeholder = '0.5'
            className='bg-black text-white'
            value={material.portionB} 
            onChange={e => setMaterial({...material, portionB: e.target.value })} 
            >               
          </textarea>
      </td>
      <td>
        <textarea 
            id="materialCostB" 
            name="materialCostB"
            disabled
            rows="3" cols="24"
            placeholder = '1.75€'
            className='bg-black text-white'
            value={material.totalMaterialB * material.portionB} 
            onChange={e => setMaterial({...material, materialCostB: e.target.value })} 
            >         
          </textarea>
      </td>
    </tr>
    <tr >
      <td>
        <textarea 
          id="materialsC" 
          name="materialsC"
          rows="3" cols="24"
          placeholder = 'Material 3'
          className='bg-slate-900 text-white'
          value={material.materialsC}
          onChange={e => setMaterial({...material, materialsC: e.target.value })}
          >                  
        </textarea>
      </td>
      <td>
        <textarea 
            id="totalMaterialC" 
            name="totalMaterialC"
            rows="3" cols="24"
            placeholder = '5.00€'
            className='bg-slate-900 text-white'
            value={material.totalMaterialC}
            onChange={e => setMaterial({...material, totalMaterialC: e.target.value })}
            >              
          </textarea>
         </td>
      <td>
        <textarea 
            id="portionC" 
            name="portionC"
            rows="3" cols="24"
            placeholder = '0.5'
            className='bg-slate-900 text-white'
            value={material.portionC} 
            onChange={e => setMaterial({...material, portionC: e.target.value })} 
            >            
          </textarea>
      </td>
      <td>
        <textarea 
            id="materialCostC" 
            name="materialCostC"
            disabled
            rows="3" cols="24"
            placeholder = '2.5€'
            className='bg-slate-900 text-white'
            value={material.totalMaterialC * material.portionC} 
            onChange={e => setMaterial({...material, materialCostC: e.target.value })} 
            >         
          </textarea>
      </td>
    </tr>
    <tr>
      <td>
        <textarea 
          id="materialsD" 
          name="materialsD"
          rows="3" cols="24"
          placeholder = 'Material 4'
          className='bg-black text-white'
          value={material.materialsD}
          onChange={e => setMaterial({...material, materialsD: e.target.value })}
          >         
        </textarea>
      </td>
      <td>
        <textarea 
            id="totalMaterialD" 
            name="totalMaterialD"
            rows="3" cols="24"
            placeholder = 'type here'
            className='bg-black text-white'
            value={material.totalMaterialD}
            onChange={e => setMaterial({...material, totalMaterialD: e.target.value })}
            >            
          </textarea>
         </td>
      <td>
        <textarea 
            id="portionD" 
            name="portionD"
            rows="3" cols="24"
            placeholder = 'type here'
            className='bg-black text-white'
            value={material.portionD} 
            onChange={e => setMaterial({...material, portionD: e.target.value })} 
            >                      
          </textarea>
      </td>
      <td>
        <textarea 
            id="materialCostD" 
            name="materialCostD"
            rows="3" cols="24"
            disabled
            placeholder = 'type here'
            className='bg-black text-white'
            value={material.totalMaterialD * material.portionD} 
             onChange={e => setMaterial({...material, materialCostD: e.target.value })} 
            
            >         
          </textarea>
      </td>
    </tr>
    <tr>
      <td className="p-2 border-separate border-spacing-2 border border-slate-400">Packaging <VscQuestion onClick={()=> setModalOpen3(true)}/> </td>
      <td>
        <textarea 
            id="packagingTotalMaterial" 
            name="packagingTotalMaterial"
            rows="3" cols="24"
            placeholder = '45€'
            className='bg-slate-900 text-white'  
            value={material.packagingTotalMaterial} 
            onChange={e => setMaterial({...material, packagingTotalMaterial: e.target.value })} 
            >                   
        </textarea>
      </td>
      <td>
        <textarea 
            id="packagingPortion" 
            name="packagingPortion"
            rows="3" cols="24"
            placeholder = '0.02'
            className='bg-slate-900 text-white'
            value={material.packagingPortion} 
            onChange={e => setMaterial({...material, packagingPortion: e.target.value })} 
            >                            
        </textarea>
      </td>
      <td>
        <textarea 
            id="packagingMaterialCost" 
            name="packagingMaterialCost"
            rows="3" cols="24"
            disabled
            placeholder = '0.09€'
            className='bg-slate-900 text-white'
            value={(material.packagingTotalMaterial * material.packagingPortion )} 
            onChange={()=> console.log('packagingMaterialCost')} 
            >                        
        </textarea>
      </td>
    </tr>
    <tr>
      <td className="p-2 border-separate border-spacing-2 border border-slate-400">Total Material Cost</td>
      <td>
        <textarea 
            id="totalMaterialCost" 
            name="totalMaterialCost"
            rows="3" cols="24"
            disabled
            placeholder = '123.5€'
            className='bg-black text-white'
             value={(parseInt(material.totalMaterialA) || 0) + (parseInt(material.totalMaterialB) || 0) + (parseInt(material.totalMaterialC) || 0) + (parseInt(material.totalMaterialD) || 0)} 
            //onChange={e=> setMaterial({...material, totalMaterialCost: e.target.value})} 
            onChange={()=> console.log('Hello from total material cost')} 
            >                                 
        </textarea>
      </td>
      <td>
        <textarea 
            id="portion" 
            name="portion"
            rows="3" cols="24"
            disabled
            placeholder = '1.28'
            className='bg-black text-white'
             value={(parseInt(material.portionA) || 0) + (parseInt(material.portionB) || 0) + (parseInt(material.portionC) || 0) + (parseInt(material.portionD) || 0)} 
             onChange={()=> console.log('Hello from portion')} 
            >        
        </textarea>
      </td>
      <td>
        <textarea 
            id="materialCost" 
            name="materialCost"
            rows="3" cols="24"
            disabled
            placeholder = '7.05€'
            className='bg-black text-white'
            value={((parseInt(material.totalMaterialA) || 0) + (parseInt(material.totalMaterialB) || 0) + (parseInt(material.totalMaterialC) || 0) + (parseInt(material.totalMaterialD) || 0)) + (parseInt(packagingMaterialCost) || 0)}
            onChange={()=> console.log('Hello from material cost')} 
            >         
        </textarea>
      </td>
    </tr>
   
  </tbody>
</table>
    <div className='absolute '>
        {
            modalOpen?
            <div className='absolute flex top-[calc(50vh -200px)] left-[calc(50vw -200px)] w-[400px] h-[200px] bg-pink-700 rounded-xl'>

                <div className='m-3'>
                   
                    <br/>
                   <p>This is the total cost of the item you bought.
eg. a ball of yarn to make a glove (even if the glove won't require a the whole ball of yarn, input the cost of the whole yarn ball.)</p>
                    <br/>
                    <button 
                    className='font-bold'
                    onClick={()=> setModalOpen(false)}>Close</button>
                </div>
              
            </div>
            :null
        }
       
    </div>
    <div className='absolute '>
        {
            modalOpen2?
            <div className='flex top-[calc(50vh -200px)] ml-[10%] w-[400px] h-[200px] bg-orange-900 rounded-xl'>

                <div className='m-3'>
                   
                    <br/>
                   <p>How much of the item will you use to make the product?

eg. if you can make 2 gloves with the yarn ball then it's 1/2 which equals 0.5.

If you can make 50 gloves with the yarn ball it's 1/50 which equals 0.02.
</p>
                    <br/>
                    <button 
                    className='font-bold'
                    onClick={()=> setModalOpen2(false)}>Close</button>
                </div>
              
            </div>
            :null
        }
       
    </div>
    <div className='absolute '>
        {
            modalOpen3?
            <div className=' flex mt-[500px] left-[calc(50vw -200px)] w-[400px] h-[170px] bg-green-900 rounded-xl'>

                <div className='m-3'>
                   
                    <br/>
                   <p>Including shipping costs and taxes to get it delivered to you</p>
                    <br/>
                    <button 
                    className='font-bold'
                    onClick={()=> setModalOpen3(false)}>Close</button>
                </div>
              
            </div>
            :null
        }
       
    </div>
    <br/>
    
  <div className='flex flex-row gap-3'>
    <div  >
    <h3 className='font-play text-[24px] '>Labor</h3>
      <br/>
      <table className="table-auto border-separate border-spacing-2 border border-slate-400">
  <thead>
    
  </thead>
  <tbody>
    <tr >
      <td  className='p-3 '>
      Hourly Rate
      </td>
      <td>
        <textarea 
          id="hourlyRate" 
          name="hourlyRate"
          rows="3" cols="10"
          placeholder = ' 15€'
          className='bg-black text-white'
          value={labor.hourlyRate}
          onChange={e => setLabor({...labor, hourlyRate: e.target.value })}
          />         
        
      </td>
    </tr>
    <tr>
      <td  className='p-3'>
      Time in hours necessary<br/>for item creation
      </td>
      <td>
        <textarea 
          id="time" 
          name="time"
          rows="3" cols="10"
          placeholder = '2'
          className='bg-black text-white'
          value={labor.time}
          onChange={e => setLabor({...labor, time: e.target.value })}
          /> 
      </td>
    </tr>
    <tr>
      <td  className='p-3'>
      Labor Cost
      </td>
      <td>
        <textarea 
          id="laborCost" 
          name="laborCost"
          rows="3" cols="10"
          placeholder = '30€'
          className='bg-black text-white'
          value={labor.hourlyRate * labor.time}
          onChange={() => console.log('hello from labor')}
          >         
        </textarea>
      </td>
    </tr>
  </tbody>
      </table>
    </div>

<br/>
  <div>
    <h3 className='font-play text-[24px] '>Overhead</h3>
      <br/>
      <table className="table-auto border-separate border-spacing-2 border border-slate-400">
  <thead>
    
  </thead>
  <tbody>
    <tr >
      <td  className='p-3 '>
      Rent/month
      </td>
      <td>
        <textarea 
          id="rent" 
          name="rent"
          rows="3" cols="10"
          placeholder = ' 150€'
          className='bg-black text-white'
          value={overhead.rent}
          onChange={e => setOverhead({...overhead, rent: e.target.value })}
          />         
      </td>
    </tr>
    <tr>
      <td  className='p-3'>
      Design Software/mth
      </td>
      <td>
        <textarea 
          id="software" 
          name="software"
          rows="3" cols="10"
          placeholder = '0€'
          className='bg-black text-white'
          value={overhead.software}
          onChange={e => setOverhead({...overhead, software: e.target.value })}
          />  
      </td>
    </tr>
    <tr>
      <td  className='p-3'>
      Utilities/month
      </td>
      <td>
        <textarea 
          id="utilities" 
          name="utilities"
          rows="3" cols="10"
          placeholder = '40€'
          className='bg-black text-white'
          value={overhead.utilities}
          onChange={e => setOverhead({...overhead, utilities: e.target.value })}
          />  
      </td>
    </tr>
    <tr>
      <td  className='p-3'>
      Biz Insurance/month
      </td>
      <td>
        <textarea 
          id="insurance" 
          name="insurance"
          rows="3" cols="10"
          placeholder = '10€'
          className='bg-black text-white'
          value={overhead.insurance}
          onChange={e => setOverhead({...overhead, insurance: e.target.value })}
          />  
      </td>
    </tr>
    <tr>
      <td  className='p-3'>
      Average number of products
      <br/> created that month
      </td>
      <td>
        <textarea 
          id="aveArt" 
          name="aveArt"
          rows="3" cols="10"
          placeholder = '10'
          className='bg-black text-white'
          value={overhead.aveArt}
          onChange={e => setOverhead({...overhead, aveArt: e.target.value })}
          />  
      </td>
    </tr>
    <tr>
      <td  className='p-3'>
      Overhead/Month
      </td>
      <td>
        <textarea 
          id="overheadMonth" 
          name="overheadMonth"
          rows="3" cols="10"
          placeholder = '200€'
          className='bg-black text-white'
           value={(parseInt(overhead.rent) || 0) + (parseInt(overhead.software) || 0) + (parseInt(overhead.utilities) || 0) + (parseInt(overhead.insurance) || 0)}
          onChange={e => setOverhead({...overhead, overheadMonth: e.target.value })}></textarea>
      </td>
    </tr>
    <tr>
      <td  className='p-3'>
      Overhead /Art work
      </td>
      <td>
        <textarea 
          id="overheadArtWork" 
          name="overheadArtWork"
          rows="3" cols="10"
          placeholder = '1.43€'
          className='bg-black text-white'
          value={((parseInt(overhead.rent) || 0) + (parseInt(overhead.software) || 0) + (parseInt(overhead.utilities) || 0) + (parseInt(overhead.insurance) || 0))  / overhead.aveArt || 0}
          onChange={()=> console.log('hi from overheadArtWork')}>         
        </textarea>
      </td>
    </tr>
  </tbody>
      </table>
  </div>
</div>
    </div>

    
  )
}
