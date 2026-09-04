import React from 'react'

const Card = (props) => {
  return (
    
      <div className="card">
        <img src={props.img} alt="img" />
          <h1>Hello {props.user}, {props.age}</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit </h2>
          <button>View Profile</button>
      </div>
  )
}

export default Card
