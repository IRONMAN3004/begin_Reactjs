import React, { useState, useRef ,useEffect} from "react";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  
  const prevNameRef = useRef("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (name !== "" && email !== "" && name !== prevNameRef.current) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    prevNameRef.current = name;
  }, [name, email]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}

export default SignupForm;
/* 
   Ví dụ, khi bạn có một form đăng ký và muốn kiểm tra xem 
   liệu người dùng đã nhập đầy đủ thông tin hay chưa trước 
   khi cho phép họ đăng ký, bạn có thể sử dụng hook useRef 
   để lưu trữ giá trị trước đó của trạng thái và so sánh 
   với giá trị trạng thái mới.
*/