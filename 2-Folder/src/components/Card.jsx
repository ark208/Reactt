import React from 'react'
import { Bookmark } from 'lucide-react'


const Card = (props) => {

    console.log(props)

  return (
    <div>
      <div className="card">

        <div>
          <div className="top">
          <img src="https://i.pinimg.com/736x/93/7c/2f/937c2fafab10049cffd56371b20d59fb.jpg" alt="" />
          <button>
            save <Bookmark size={12}/>
          </button>
        </div>

        <div className="centre">
          <h3>{props.member} <span>Episode {props.firstAppearanceEpisode}</span></h3>
          <h2>{props.beforeCrew}</h2>
          <div className='tag'>
            <h4>{props.nowInCrew}</h4>
            {/* <h4>{props.nowInCrew}</h4> */}
          </div>
        </div>
        </div>
        
        <div className="bottom">
          <div>
            <h3>{props.bounty}</h3>
            <p>{props.nicknames}</p>
          </div>
          <button>Check</button>
        </div>

      </div>
    </div>
  )
}

export default Card
