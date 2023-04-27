import React, { useState } from 'react'
import {addURL} from './BlakListServices';

const CheckWebsites = () => {
  const [url, seturl] = useState('');

  const handleClick=async(e)=>{
    e.preventDefault();
    const newURL={
      url,
      set:false
    }
    console.log(newURL);
    try {
      await addURL(newURL)
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className='user-check'>
     <label htmlFor="url">Enter URL</label>
     <input type="text" placeholder='url' name="url" onChange={(e)=>seturl(e.target.value)}/>
     <button className='btn'>Check</button>
     <button className='btn' onClick={handleClick}>add to list</button>
    </div>
  )
}

export default CheckWebsites

