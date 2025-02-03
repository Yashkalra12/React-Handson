import { useState, useCallback,useRef} from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
  const [length,setlength]=useState(8);
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed, setCharAllowed]=useState(false)
  const [password, setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null);

  const passwordGenrator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstyuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*{}<>~"

    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random() * str.length+1)
      pass+=str.charAt(char); 
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenrator()
  },[length,numberAllowed,charAllowed,passwordGenrator])

  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500' ><h1 className='text-white text-center my-3'>PassWord Generator</h1>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white'
    placeholder="Password"
    readOnly 
    ref={passwordRef}/>
    <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'><input type="range" min={6} max={200} value={length} className='cursor-painter'
    onChange={(e)=>{setlength(Number(e.target.value))}} /><label>Length: {length}</label></div>
    <div className='flex items-center gap-x-1'><input 
    type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={() => {
      setnumberAllowed((prev) => !prev);
    }} />
    <label>Numbers</label>
    </div>
    
    <div className='flex items-center gap-x-1'>
      <input 
    type="checkbox"
    defaultChecked={charAllowed}
    id="characterInput"
    onChange={() => {
      setCharAllowed((prev) => !prev);
    }} />
    <label>Characters</label>
    </div>
  </div>
  </div>
    </>
  )
}

export default App
