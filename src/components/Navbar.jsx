import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Blacktalons</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar