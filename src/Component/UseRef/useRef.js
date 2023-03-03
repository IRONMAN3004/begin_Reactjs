import { useState, useCallback, useRef, useEffect } from "react";

function MyComponent() {
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++; //thay vì dùng useState để ko bị re-render lại
  });

  return <p>Number of render: {renderCount.current}</p>;
}

export default function Appp() {
  const [click, setClick] = useState(false);

  return (
    <div className="Appp">
      <button onClick={() => setClick(!click)}>Click</button>
      <MyComponent />
    </div>
  );
}








// import { useState, useCallback, useRef, useEffect } from "react";
// import "./styles.css";

// function MyComponent() {
//   const preventClick = useRef(false);

//   return (
//     <div>
//       <button
//         type="button"
//         onClick={() => (preventClick.current = !preventClick.current)}
//       >
//         Click
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           if (preventClick.current) {
//             return;
//           }

//           alert("You are able to click");
//         }}
//       >
//         Will you be able to click?
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="App">
//       <MyComponent />
//     </div>
//   );
// }