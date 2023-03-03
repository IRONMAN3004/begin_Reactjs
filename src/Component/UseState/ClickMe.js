import {useState} from 'react'
import ChatApp from '../useEffect_Fake_Chat_App.js/chatApp'

const Mounted = () =>{

    const [show,setShow] = useState(false);

    const handleShow = () =>{
        setShow(!show);
    }
  return(
   <>
    <button onClick={handleShow}>Click me</button>
    {show && <ChatApp/>}
   </>
  )
}


export default Mounted;