import { useReducer } from "react";

// useReducer

// InitState: 0
// Actions: Thực hiện logic
// Reducer: Tạo ra reducer
// Dispatch: Kích hoạt actions

const reducer = (state,action) =>{
    // console.log("hi")
    switch(action.type){
        case "Up":{
            return {count: state.count+1}
        };
        case "Down":{
            return {count: state.count-1}
        };
        default:
            return state;
    }
}

const Reducer = () =>{
   
    const[state,dispatch] = useReducer(reducer,{count:0})

    const up = () => {
        dispatch(
            {
                type:'Up'
            }
        );
    }

    const down = () => {
        dispatch({
            type:'Down'
        });
    }

    return(
        <>
          <p>Count: {state.count}</p>

          <button
          onClick={up}
          >Up
          </button>

          <button
          onClick={down}
          >Down
          </button>

        </>
    )
}

export default Reducer;