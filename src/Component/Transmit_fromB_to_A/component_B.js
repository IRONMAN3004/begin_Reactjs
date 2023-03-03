import { useState } from 'react'

const ComponentB = ({onData}) =>{
   const str ="Dữ liệu trả về từ component B truyền lại cho component A";
   onData(str);
} 

//Khi mình muốn truyền dữ liệu từ Component B ngược lại cho component A thì mình xẽ cần 1 function để
//xử lý cái data ấy => do mình truyền vào prop onData 1 callback function mục đích để xử lý cái data 
//đưuojc truyền về
//nên giờ mình gọi onData tức đăng gọi cái callbackFunction đấy

export default ComponentB;
