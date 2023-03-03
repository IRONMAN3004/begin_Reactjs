import { useState } from 'react'

const data = [
  {
    id: 1,
    name: "HTML & CSS",
  },
  {
    id: 2,
    name: "JAVASCRIPT",
  },
  {
    id: 3,
    name: "PHP",
  },
];

const Checkbox = () => {
  const [check, setCheck] = useState([]);

  const handleChange = (id) => {
    console.log(id)
    if (check.includes(id)) {
      setCheck(check.filter((value) => value !== id));
    } else {
      setCheck([...check, id]);
    }
  };

  // check.includes(id) : kiểm tra xem id có trong mảng check hay không
  // setCheck(check.filter((value) => value !== id)) : nếu id đã có trong mảng check thì xóa id đó ra khỏi mảng check
  // setCheck([...check, id]) : nếu id chưa có trong mảng check thì thêm id vào mảng check

  const handleRegister = () => {
    console.log(check.map((value) => ({ id: value })));
  };

  return (
   
   <>
    {console.log(check)}
   {data.map((item, index) => (
        <div key={index}>
        {/* {console.log(item)} */}
          <input
            type="checkbox"
            checked={check.includes(item.id)}  // true thì hiện tích còn false thì ko
            //hay nếu mảng checked này có chứa item.id thì nó sẽ đưuojc checked
            onChange={() => handleChange(item.id)} //mấu chốt chỗ này hàm check ban đầu rỗng và nó để lưu những item đã check
          />
          {console.log(check.includes(item.id))}  
          {item.name}
         </div>
      ))
      }
      <button onClick={handleRegister}>Đăng ký</button>
   </>
  );
}; 

//Khác với radio chackbox có thể chọn nhiều suy lưu nó vào trong cái mảng CHECKED = true thì mới đc tích

export default Checkbox;

/*
  import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {  //kiểm tra xem cái nào bằng nhau thì chỉ cần thay đổi(do dùng onChane nên checkBox nào mình ấn
                                      // vào nó gửi id của check bõ đó thôi rồi trong reducer mình kiểm tra xem trong  state hiện tại 
                                      // có cái nào bằng cái id của checkBox vừa onChange ko.)
                                      // thuộc tính complete để checked == true để hiển thị ra thôi
                                      //Còn như cách trên thì dùng 1 state để lưu nhưng item đã check
                                      // nếu cái chuyền vào đã tồn tại trong state đã check thì loại bỏ
                                      //Còn đây mình kiểm tra xem cái nào bằng nhau xét cho nó là true để dùng checked hiển thị

                                      //nếu nó ko tồn tại trả về state luôn có complete false
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);

              
*/