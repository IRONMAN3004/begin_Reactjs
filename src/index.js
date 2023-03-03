import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Component/App';
// import Checkbox from './Component/checkbox_id_filter';
// import Checkbox from './Component/handle_checkbox';
// import Radio from './Component/radiobutton';
// import Checkbox from './Component/mounted';
// import Example from './Component/Vidu_input';
// import Mouted from './Component/mounted';
// import App from './Component/useEffect';
// import Contents from './Component/useEffect_dependencies';
// import ComponentB from './Component/Transmit_fromB_to_A/component_B'
// import UseLayoutEffect from './Component/useLayoutEffect/UseLayoutEffect';
// import UseRef_2 from './Component/UseRef/useRef_Vd2';
  //  import UseRefAddEvent from './Component/UseRef/useRef_addEventListener';
  // import SignupForm from './Component/UseRef/Ex_useRef';
  // import Counter from './Component/UseRef/Ex_useRef_beforeState';
  // import Reducer from './Component/UseReducer/useReducer';
  import StateClosure from './Component/UseState/staleClosure';


// import Appp from './Component/UseRef/useRef';
// import Showcontent from './Component/useEffect_preview_avatar/app_preview';

// import Mounted from './Component/ClickMe'
import reportWebVitals from './reportWebVitals';

// const handleChange = (data) => {
// console.log(data);
// }

//CUSTOM Event
  // function emitComment (id){
  //   setInterval(() => {
  //       window.dispatchEvent(
  //         new CustomEvent(`nameEvenet-${id}`,{
  //         detail:`dữ liệu từ course-${id} `,
  //       }))
  //   },2000)
  // }
  // emitComment(1);
  // emitComment(2);
  // emitComment(3);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <ComponentB onData ={handleChange}></ComponentB> */}

     <StateClosure/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
