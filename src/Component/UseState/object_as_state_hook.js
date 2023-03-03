const App = () => {
    const [userDetails, setUserDetails] = useState({
        myName: {
            firstName: 'John',
            lastName: 'Doe',
        },
        age: 20,
        hobby: 'Reading',
    });

    return (
        <div>
            <h1>
                Hello {userDetails.myName.firstName} {userDetails.myName.lastName},
            </h1>
            <p>
                {userDetails.age} || {userDetails.hobby}
            </p>
        </div>
    );
};