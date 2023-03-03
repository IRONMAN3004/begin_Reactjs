// // Với hook useState, bạn có thể lưu trữ bất cứ kiểu dữ liệu nào bạn muốn, bao gồm cả mảng và đối tượng. Ví dụ, nếu bạn muốn lưu trữ một mảng các phần tử, bạn có thể làm như sau:
// Bạn có thể sử dụng hook useState nhiều lần trong cùng một component để quản lý nhiều trạng thái khác nhau. Ví dụ, bạn có thể sử dụng một hook useState để quản lý trạng thái của form, một hook khác để quản lý trạng thái của danh sách, và một hook nữa để quản lý trạng thái của modal.

// Để sử dụng hook useState, bạn cần cung cấp cho nó một giá trị ban đầu, và hook sẽ trả về một mảng gồm hai phần tử: giá trị hiện tại của trạng thái và một hàm để cập nhật trạng thái đó. Bạn có thể sử dụng giá trị hiện tại của trạng thái để render UI, và sử dụng hàm để cập nhật trạng thái khi cần thiết
// // javascript
// // Copy code
// // import React, { useState } from 'react';

// // function Example() {
// //   // Declare a state variable called "items" with an initial value of an empty array
// //   const [items, setItems] = useState([]);

// //   // Function to add a new item to the array
// //   const addItem = item => {
// //     setItems([...items, item]);
// //   };

// //   return (
// //     <div>
// //       <ul>
// //         {items.map(item => (
// //           <li key={item}>{item}</li>
// //         ))}
// //       </ul>
// //       <button onClick={() => addItem('Item ' + (items.length + 1))}>
// //         Add item
// //       </button>
// //     </div>
// //   );
// // }