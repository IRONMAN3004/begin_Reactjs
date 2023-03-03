import { useState,useEffect } from 'react'

const PreviewAvatar = () =>{
    const[showImage, setImage] = useState();
    
      useEffect(() =>{
        // console.log(showImage.preview)
        return ()=> {
          showImage && URL.revokeObjectURL(showImage.preview);
        }
    },[showImage])

    const handleChange = (e) =>{
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file);
        console.log(file);
    }

    return(
        <>
           <input 
             type="file"
             onChange={handleChange}
           />   

           {showImage && <img src={showImage.preview} alt={'lỗi rồi'}></img> }   
        </>
    )
 } 
 
export default PreviewAvatar;