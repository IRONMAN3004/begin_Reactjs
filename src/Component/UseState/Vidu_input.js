import { useState } from 'react'

function Example() {
 const[value,setValue] = useState('');
    return (
        <div>
             {console.log(value)}
         <input
          type = "text"
          defaultValue = {value} 
          onChange ={e => setValue(e.target.value)}
          /> 
          <p>{value}</p>
        </div>
    );
}

export default Example;
