import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a person'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userChatInfo">
          <span>ZerOOnE</span>
        </div>
      </div>
    </div>
  )
}

export default Search
