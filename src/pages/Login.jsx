import React from 'react'
import Add from '../img/AddAvatar.png'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Filebase Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='password'/>
                <button>Login</button>
            </form>
            <p>Do not have a account? Register</p>
        </div>
    </div>
  )
}
