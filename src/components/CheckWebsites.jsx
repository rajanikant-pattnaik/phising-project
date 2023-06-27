import React, { useEffect, useState } from 'react'
import {addURL, getAllURL} from './BlakListServices';

const CheckWebsites = () => {
  const [url, seturl] = useState('');
  const [array, setarray] = useState([])
  useEffect(() => {
    getList();
  }, [])
  const getList=async()=>{
    const data=await getAllURL();
    console.log(data.docs);
    setarray(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}

  const handleClick=async(e)=>{
    e.preventDefault();
    const newURL={
      url,
      set:false
    }
    let n=array.length;
    for(let i=0;i<n;i++){
      if(array[i].url===url){
        alert("Already there in the database");
        seturl('')
        return;
      }
    }
    console.log(newURL);
    try {
      await addURL(newURL)
    } catch (error) {
      alert(error);
    }
    seturl('')
  }
  const clickcheck=(e)=>{
    e.preventDefault();
    let n=array.length;
    for(let i=0;i<n;i++){
      if(array[i].url===url){
        if(array[i].set===true)alert('IT is blacklisted');
        else alert('IT is requested for to be  blacklisted')
        seturl('')
        return;
      }
    }
  }
  return (
    <div className='user-check'>
     <label htmlFor="url">Enter URL</label>
     <input type="text" placeholder='url' name="url"  value={url} onChange={(e)=>seturl(e.target.value)}/>
     <button className='btn' onClick={clickcheck}>Check</button>
     <button className='btn' onClick={handleClick}>add to list</button>
    </div>
  )
}

export default CheckWebsites

