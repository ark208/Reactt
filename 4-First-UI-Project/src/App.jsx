import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {

  const users =[
    {
      img: 'https://i.pinimg.com/736x/c5/c5/aa/c5c5aa092c5f50d60a2dff4cb01294a6.jpg',
      intro:'',
      tag:'Ooooo'
    },
    {
      img: 'https://i.pinimg.com/736x/bb/62/59/bb625992795184021c830cf66fe7b596.jpg',
      intro:'',
      tag:'Damn'
    },
    {
      img: 'https://i.pinimg.com/736x/81/8e/39/818e3925c44e52c98b8d403d54464564.jpg',
      intro:'',
      tag:'Kill me'
    }
  ]

  return (
    <div>
      <Section1 users = {users}/>
    </div>
  )
}

export default App
