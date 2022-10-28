import React, { useState } from 'react'
import Add from '../img/AddAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const storageRef = ref(storage, displayname);

    const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
  (error) => {
    setErr(true);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res.user,{
        displayName:displayname,
        photoURL:downloadURL
      })
      await setDoc( doc (db , "users" , res.user.uid),{
        uid: res.user.uid,
        displayname,
        email,
        photoURL:downloadURL,
      });
      await setDoc(doc (db, "userChat", res.user.uid),{})
      navigate("/");
    });
  }
);
  }
  catch(err){
    setErr(true)
  }


  
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Filebase Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='User name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='password'/>
                <input style={{display: 'none'}} type='file' id='file'/>
                <label htmlFor="file">
                    <img src={Add} />
                    <span>Add a photo</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You do have a account? Login</p>
        </div>
    </div>
  )
}

