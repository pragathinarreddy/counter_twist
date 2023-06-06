import React, { useState } from 'react'

function Counter() {
    const[count,setCount] = useState(0)
    const[step,setStep] = useState(5)
    const[max,setMax] = useState(15)
    const handleClick = (step) => {
        setStep(step)
    }
    const handleMax = (max) => {
        setMax(max)
    }
    const handleIncrement = () => {
        setCount((count + step) > max ? count : (count + step))
    }
    const handleDecrement = () => {
        setCount(count - step)
    }
    const handleReset = () => {
        setCount(0)
    }
  return (
    <div className='flex'>

        <center >
        <h1>{count}</h1>
        <span>
        <h2>steps</h2>
        <div>
          {
            [5,10,15].map((each) => (
                <button onClick={()=> handleClick(each)} className={ `value ${step === each ? "active_class" :" "}`}>{each}</button>
            ))
          }
        </div>
        </span>
        
        <h2>Max value</h2>
        <div className='max'>
           {
            [15,100,200].map((val) =>(
                <button onClick={() => {handleMax(val)}} className={`value ${max === val ? "active_max" : ""}`}>{val}</button>
            ))
           }
        </div>

       
        <div className='buttons'>
            <button  onClick={() => handleIncrement()}className= 'button'>INCREMENT</button>
            <button onClick={() => handleDecrement()} className='button'>DECREMENT</button>
            <button onClick={() => handleReset()} className='button'>RESET</button>
        </div>



        </center>
            
        </div>
  )
}

export default Counter