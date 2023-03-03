import PreviewAvatar from './preview_avatar';
import {useState} from 'react'
const Showcontent = () =>{

    const [show,setShow] = useState(false);

    const handleShow = () =>{
        setShow(!show);
    }
  return(
   <>
    <button onClick={handleShow}>Click me</button>
    {show && <PreviewAvatar/>}
   </>
  )
}


export default Showcontent;