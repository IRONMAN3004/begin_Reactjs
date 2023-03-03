import {useEffect,useState,useRef} from 'react'

// -------------------------------
const Contents =()=>{
  const tabs = ['posts','comments','todos']

//   const[title, setTitle] = useState();
  const[posts, setPost] = useState();
  const[type,setType] = useState('comments')
  const[show, setShow] = useState(false)
//  console.log({Window});

// -------------------------------
  useEffect(()=> {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPost(posts);
        })
  },[type])


  // -------------------------------
  useEffect(() => {
    const handleScroll = () =>{
     if(window.scrollY >= 200){
        // Show
        setShow(true)
        console.log("hihi")
     }else{
        // Hide
        setShow(false)
     }
    }
     window.addEventListener('scroll', handleScroll)
     return () => {
       window.removeEventListener('scroll', handleScroll);
     }
   }, [])
 

   // -------------------------------
   const question1Ref = useRef(null);
   const question2Ref = useRef(null);

  const scrollToQuestion = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
   // -------------------------------
  return(
    <div>
        {
            tabs.map((tab) => (
                // <button key ={item}> mỗi phần tử trong mảng sẽ được ánh xạ thành một đối tượng JSX chứa một nút button.
            <button 
            key ={tab}
            style ={type === tab ? {
                color:"white",
                backgroundColor:"black"
            }:{}}
            onClick={() => {setType(tab)}}
            >
                {tab}
             </button>
            )
            )
        }
        
         <h2 ref={question1Ref} id="question1">
          What is Lorem Ipsum?
        </h2>

        <ul>
            { 
              posts && posts.map((item) => (
                <li key={item.id}>{item.title || item.name }</li>
                
            ))
            }
        </ul>
        {
          show && (
            <button
            style = {
              {
                backgroundColor:"pink",
                width:100,
                height:100,
                position:'fixed',
                right:20,
                bottom:20,

              }
            }

            onClick = {()=>{
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            >
              scroll
            </button>
          )
        }
        
        <div>
      <ul>
        <li>
          <button onClick={() => scrollToQuestion(question1Ref)}>Question 1</button>
        </li>
        <li>
          <button onClick={() => scrollToQuestion(question2Ref)}>Question 2</button>
        </li>
      </ul>
      <div>
       
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
      </div>
      <div>
        <h2 ref={question2Ref} id="question2">
          Why do we use it?
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Contents;