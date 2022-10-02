import React from 'react'
import Add from '../img/AddAvatar.png'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Filebase Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='User name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='password'/>
                <input style={{display: 'none'}} type='file' id='file'/>
                <label htmlFor="file">
                    <img src={Add} />
                    <span>Add a photo</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have a account? Login</p>
        </div>
    </div>
  )
}

