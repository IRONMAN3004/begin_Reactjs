//Component hiển thị danh sách người dùng
const ShowUser = (props) => {
    //Lấy giá tri của props listUser
    const { listUser } = props;
   
    // Render ra list user
    // React.Fragment cho phép bọc JSX lại.
    // List Keys :  chỉ định key, giúp loại bỏ cảnh báo.
    return (
      <div>
        {listUser.map((user, index) => {
          return (
            <React.Fragment key={user.id}>
              <ul>
                <li>{user.name}</li>
                <li>{user.email}</li>
              </ul>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  export default ShowUser;