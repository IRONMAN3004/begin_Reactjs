import { useRef, useEffect,useState } from "react";

const UseRefAddEvent = () =>{
    const [count,setCount] = useState(0);
    const[render,setRender] = useState(false)
    const myRef = useRef(null);
    const countRef = useRef(0);

    useEffect(()=>{
        // myRef tham chiếu đến thẻ button phí dưới(lúc này console.log(myRef.current) sẽ là thẻ button)
        //nên  muốn gán cái gì thì phải myRef . thuộc tính current   (myRef.curent tương đưuong với <button>Click</button>)
        //như vd này mình gán cho button 1 event Click
        const handleClick = () =>{
            // setCount(count+1)
            countRef.current++
        }

        myRef.current.addEventListener("click", handleClick);
        return () => {
            myRef.current.removeEventListener("click", handleClick);
          };
    },[countRef.current]) // },[click])
    return (
        <>
          <p>Number of render: {countRef.current}</p>
          <button 
          ref={myRef}
          onClick={()=>{setRender(!render)}} 
          /* 
          à đoạn này mục đích để set lại State để component render lại
          thì mới lọt vào useEffect đưuojc
          tức là setState lại cho click
          */
          //mount và unmount nhu này để khi mount và un mount đều tăng giá trị
          >
            Click
          </button>
        </>
      );
    };
export default UseRefAddEvent;

// tức là lần render lần đầu tiên nó in ra 0 rồi mình onClick thì sao nó vào đc useEffect so sánh cái 
//countRef.current thế nào để biết thay đổi thì mới vào đc useEffect
//Bình thường add event thì ông có cho vào useEffect ko
/*
Trong component Appp, một state click được tạo ra với giá trị khởi tạo là false. 
Khi người dùng click vào nút "Click", giá trị của state click sẽ được thay đổi 
bằng cách sử dụng hàm setClick. Khi click thay đổi, component MyComponent sẽ 
re-render và số lần render sẽ được tăng thêm một. Kết quả sẽ hiển thị số lần 
render component MyComponent.
*/