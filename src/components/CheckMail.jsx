import React, { useEffect, useState } from 'react'
import { validDomain } from '../constant/fetchAPI'
import { addURL, getAllURL } from './BlakListServices'

const CheckMail = () => {
  const [data, setdata] = useState('')
  const [value, setvalue] = useState(null)
  const [url, seturl] = useState('');
  const [array, setarray] = useState([])
  const handleClickOn=async(e)=>{
    e.preventDefault();
    console.log(data);
    const res=await validDomain(data);
    console.log(res);
    setvalue(res);
    seturl(res.domain);
    console.log(url);
    setdata('');
   }
  useEffect(() => {
    getList();
  }, [])
  const getList=async()=>{
    const data=await getAllURL();
    console.log(data.docs);
    setarray(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}

  const handleAdd=async(e)=>{
    e.preventDefault();
    const newURL={
      url,
      set:false
    }
    let n=array.length;
    for(let i=0;i<n;i++){
      if(array[i].url===url){
        alert(`Already there in the database ${url}`);
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
    alert('Not in the database');
    // seturl('');
  }

     
  return (
    <div className='user-check'>
    <label htmlFor="email">Enter email</label>
    <input type="email" placeholder='email' name="email" value={data} onChange={(e)=>setdata(e.target.value)}/>
    <button className='btn' onClick={handleClickOn}>Check</button>
    {
      value!==null?(
        <div className="url-data">
          <p>domain-{value.domain}</p>
          <button className='btn' onClick={clickcheck}>Check Domain</button>
          <button className='btn' onClick={handleAdd}>ADD</button>
        </div>
      ):(
        <div className="url-data">
          <h1>No data</h1>
        </div>
      )
    }
    </div>
  )
}

export default CheckMail;
