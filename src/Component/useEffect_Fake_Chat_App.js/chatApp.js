import {useState,useEffect} from 'react'

const courses = [
  {
      id:1,
      name:'Reactjs Begin'
  },
  {
      id:2,
      name:'PHP Begin'
  },
  {
      id:3,
      name:'JAVASCRIPT Begin'
  }
]
const ChatApp = () =>{
  const [active,setActive] = useState(1)
    
  console.log('render');
  
    useEffect(()=>{
      console.log('mounted');
      const handleEmit = ({detail}) =>{
        console.log(detail);
      }
         window.addEventListener(`nameEvent-${active}`, handleEmit);

         return () =>{
          window.removeEventListener(`nameEvent-${active}`, handleEmit);
         }
    },[active])

    return(
        <>
        <ul>
          {
            courses.map((course) => (
              <li 
                key={course.id}
                // style = {
                //    active === course.id ? {color:'red'} : {color:'black'}
                // }

                style = {{
                    color : active === course.id ? 'red':'black'
                }}
                onClick = {() =>{setActive(course.id)} }
              >
                {course.name}
              </li>
            ))
          }
        </ul>
      </>
    )
}

export default ChatApp;