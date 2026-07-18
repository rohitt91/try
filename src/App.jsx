import React, { useState } from 'react'

const App = () => {
  const [num , setNum]= useState('');
  const submitHandler= (e)=>{
    e.preventDefault()
    console.log('submitted form by ', num);
    setNum('')
  }


  return (
   <>
   
   <form onSubmit={(e)=>{
     submitHandler(e)
   }}>
    <input type="text" 
    placeholder='enter your cute name '
    value={num}
    onChange={(e)=>{
     setNum(e.target.value);
    }}

    />
    <button>submit</button>
   </form>

   </>
  )
}

export default App
