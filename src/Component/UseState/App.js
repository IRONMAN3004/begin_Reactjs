import {useState} from 'react'
import '../App.css';

//VD2 với set Stage với 
function App() {

  const [counter,setCounter] = useState(1);
  
 const handleClick = () =>{
    setCounter((prevCounter)=> prevCounter+1 )//trả lại state trước đó.
    setCounter((prevCounter)=> prevCounter+1 )
    setCounter((prevCounter)=> prevCounter+1 )
    // khác biệt khi dùng callback 
    // setCounter(counter+1 )
    // setCounter(counter+1 )
    // setCounter(counter+1 )
 }

  return(
    <div className="App" style={{padding:20 ,display:'flex', }}>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Nhấn</button>
    </div>
  );
}

export default App;

//VD1
// function App() {

//   const [counter,setCounter] = useState(1);
 
//   const handleIncrease = () => { setCounter(counter+1)}
 
//   const handleUncrease = () => { 
//     if(counter==0){
//      alert('Số lượng sản phẩm đã hết')
//     }else{
//       setCounter(counter-1)
//     }
//   }

//   return(
//     <div className="App" style={{padding:20 ,display:'flex', }}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease} style={{  height:20,width:20,margin: 'auto 0'}}>+</button>
//       <button onClick={handleUncrease} style={{  height:20,width:20,margin: 'auto 0'}}>-</button>
//     </div>
//   );
// }


//--ứng dụng callback khi chuyền là tham số của useState
//https://codesandbox.io/s/brave-mestorf-x60zs3?file=/src/App.js