import React from 'react'
const Card = (props) => {
//   console.log(props.user);
  return (
    
    <div className='parent'>
          <div className="card">
            <img src={props.img} alt="" srcset="" />
            <h1>{props.user}, <br />{props.age}</h1>
            <p>{props.p}</p>
            <a href={props.link} target="_blank">
  <button>View Profile</button>
</a>

          </div>
          
        </div>
  )
}

export default Card
