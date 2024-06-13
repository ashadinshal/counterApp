import{ React,useState} from 'react'
import './in.css'

const Events = () => {
  const [count, setCount] = useState(0)

   function inc(){
    setCount(count+1)
   }
   function dec(){
    
    if(count==0){
     alert('minus me decrement nahi hoga so stop it please')
     
    }
    else{
      setCount(count-1)
    }
   
   }
   
      return (
    <>
    <div className='container'>
      <h1>{count}</h1>
      <div className='btn'>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
      </div>
  
    </div>
    
    </>
  )
}

export default Events