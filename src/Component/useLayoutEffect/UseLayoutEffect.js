/* 
---Dối với useEffect
 1.Cập nhật lại state
  2.Cập nhật lại DOM(mutated)
   3. Render lại UI
    4.Gọi cleanup nếu dependency thay đổi 
     5.Gọi useEffect Callback

---Đối với useLayoutEffect
 1.Cập nhật lại state
  2.Cập nhật lại DOM 
   3.GỌi cleanup nếu denpendency thay đổi(sync)
    4.Gọi useLayoutEffect callback(sync)
     5.Render lại ui
*/

import {useState,useLayoutEffect,useEffect} from 'react'

const UseLayoutEffect = () => {
    const[count,setCount] = useState(1);
    console.log('1')

    useEffect(()=>{
        console.log('2')
        if(count>300)
            setCount(0)
         
    },[count])
    
    const handleClick = () => {
        // setCount((prev) => (prev+1))
        // setCount((prev) => (prev+1))
        console.log('3')
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)

        setCount(count+1)
        setCount(count+2)
        setCount(count+7)
    }
   
    return(
        <>
          <button onClick={handleClick}>{count}</button>
        </>
    )
}

export default UseLayoutEffect;