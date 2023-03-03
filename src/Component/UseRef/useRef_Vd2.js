import {useState,useRef} from 'react'

// Chúng ta cần để ý là trong một ứng dụng React, không nhất thiết phải 
// re-render lại component khi chúng ta cập nhật một giá trị. Hãy xem ví dụ bên dưới dùng useRef
const UseRef_2 = () =>{
   const[message,setMessage] = useState(0);
   
   const xxx = useRef();
   const sendMessage = () =>{
    xxx.current = message;
    if(xxx.current > 3 ){
            console.log('HIHI dừng lại thôi')
            // console.log(xxx.current)
            setMessage(0)
        }
        // console.log(`${message} fn`)
        console.log(xxx.current) 
     setMessage((prev) => (prev+1))
   }
   console.log(`${message} hihi`)
    return(
         <>
          <input onChange = {(e) => setMessage(e.target.value)} value={message} ref ={xxx}/>

       <button onClick={sendMessage}>Send</button>
         </>
    )
}

export default UseRef_2;

// import React, {useRef, useState} from 'react'
// const MessageInputComponent = () => {
//  const [message, setMessage] = useState("")
//  const sentMessage = useRef(0);
 
//  const sendMessage = () => {
//     if(sentMessage.current === 3){
//       return alert("Message Limit Reached")
//     }
    
//     sentMessage.current += 1
//    //code to handle sending message
//  }
 
//  return(
//    <div>
//      <input onChange = {(e) => setMessage(e.target.value)} value={message}/>
//      <button onClick={sendMessage}>Send</button>
//    </div>
//  )
// }
// export default MessageInputComponent