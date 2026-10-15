import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 rounded-4xl overflow-hidden relative shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent id={props.id} tags={props.tag}/>
    </div>
    
  )
}

export default RightCard
