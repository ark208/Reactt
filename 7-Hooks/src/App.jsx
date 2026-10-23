import React from 'react'
import { useState } from 'react'

const App = () => {

  const clicked = (e) => {
    e.preventDefault()
    console.log('Form Submitted by',title)
    setTitle('')
  }

  const [title, setTitle] = useState('');

  return (
    <div>
      <form onSubmit={(e) => {
        clicked(e)
      }}>
        <input className='border-2 m-1 border-gray-700 bg-gray-500 rounded px-2 py-1 text-white' type="text" 
        placeholder='Enter name'
        value = {title}
        onChange={
          (e) => {
            setTitle(e.target.value)
          }
        }
        onSubmit={() => {
          clicked()
        }}
        />
        <button 
          className='m-1 bg-gray-600 rounded px-2 py-1 text-white'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
