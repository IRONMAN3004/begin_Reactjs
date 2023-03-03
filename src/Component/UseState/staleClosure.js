import {useState,useEffect} from 'react'

const StateClosure = () =>{
    const[closure,setClosure] = useState(0);
     
    useEffect(
        ()=>{
           setInterval(()=>{
             setClosure(closure + 1)
           }) 
        }
    )
   

    return(
        <>
           <p>{closure}</p>
           <button>Click me</button>
        </>
    )
}

export default StateClosure;