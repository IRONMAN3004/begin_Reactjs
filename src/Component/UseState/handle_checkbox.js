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

const Checkbox = () =>{
    const [check, setState] = useState([]);
    const handleChange =(id) =>{
       if(check.includes(id)){
        setState(check.filter(value_id => value_id !== id));
       }else{
        setState([...check,id]);
       }
    }

    // const handleChange =() =>{
        
    // }
  return(
    <>
        {data.map((item, index) => (
        <div key={index}>
        {/* {console.log(item)} */}
          <input
            type="checkbox"
            onChange={() => handleChange(item.id)} //mấu chốt chỗ ànu hàm chack ban đầu rỗng và nó để lưu những item đã check
            checked={check.includes(item.id)}  // true thì hiện tích còn false thì ko
          />
          {console.log(check.includes(item.id))}  
          {item.name}
         </div>
      ))
      }
    </>
  )
}

export default Checkbox;

