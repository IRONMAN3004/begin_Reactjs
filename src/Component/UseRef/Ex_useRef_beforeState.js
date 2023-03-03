import React, { useState, useRef ,useEffect} from "react";

const Counter = () =>{
    const[count,setCount] = useState(0)
    const prevRef = useRef()

    useEffect(()=>{
        console.log(count);
        prevRef.current = count;
    },[count])

    const Previous_count = prevRef.current;
   // console.log(Previous_count)
   /* 
   Trong ví dụ này, useRef được sử dụng để lưu trữ giá trị trước đó của biến count, 
   thông qua việc gán giá trị mới cho thuộc tính current của ref trong useEffect
   Sau đó, giá trị trước đó được truy xuất thông qua prevCountRef.current và
    được hiển thị ra màn hình.
   */
    return(
        <>
          <p>Current count: {count}</p> 
          {/* //<p>{`Curent: ${count}`}</p> */}
          {prevRef != undefined 
          && (
          <p>Previous count: {Previous_count}</p>
          )}

          <button
            onClick={() => {setCount(count+1)}}
          >Click</button>
        </>
    )
}

export default Counter;