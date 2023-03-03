import { useState } from 'react'
import Content from './Content_mount'

const Mouted = () => {
   const [mouted , setMouted] = useState(false)

   const handleClick = () =>{
      setMouted(!mouted);
   }
   return(
    <>
      <button onClick={handleClick}>Click me</button>
     {mouted ? <Content/> : ''}
    </>
   )
}

export default Mouted;