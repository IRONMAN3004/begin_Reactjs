import { useState } from 'react'

const data = [
    {
      id: 1,
      name: "HTML & CSS",
    },
    {
      id: 2,
      name: "JAVASCRIPT",
    },
    {
      id: 3,
      name: "PHP",
    },
  ];

  const Radio=() =>{
    const [radioo, setRadio] = useState();
    return(
        <>
        {
            data.map((item,index) =>(
                   <div key={item.id}>
                    <input
                     type="radio"
                     checked={ radioo=== item.id}//
                     onChange={()=>setRadio(item.id)}
                   />{item.name}
                   </div>
            ))
        }
        
        </>
    )
  }
  export default Radio;