import React from 'react'

const App = () => {

  const clicked = (val) => {
    console.log(val)
  }

  function inputchanging(elem) {
    console.log()
  }

  return (
    <div>


      {/* <div className='bg-orange-400 p-10'>
        <input 
      onClick={
        () => {
          console.log('Clicked')
        }
      }
      onChange={function(elem) {
        clicked(elem.target.value);
      }}
      type="placeholder"  
      placeholder='Enter Name'
      />
      </div> */}

      <div className='bg-gray-900 h-screen w-full ' 
      onChange={
        (elem) => {
          console.log(elem.pageX,elem.pageY,elem.screenX,elem.screenY)
      }}
      ></div>
      <div className='bg-gray-800 h-screen w-full '></div>
      <div className='bg-gray-700 h-screen w-full '></div>
    </div>
  )
}

export default App
