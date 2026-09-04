import React from 'react'
import Card from './components/Card'
import './index.css'


const App = () => {
  return (
    <div className='parent'> 
      <Card user='Arnav' age={19} img='https://i.pinimg.com/736x/12/1e/ea/121eeae960c0de4100ca383eabae1020.jpg' />
      <Card user='Vanra' age={91} img='https://i.pinimg.com/1200x/35/e7/e6/35e7e6a6e1344ffff0ecb916f30da30b.jpg'/>
    </div>
  )
}

export default App


