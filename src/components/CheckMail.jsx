import React, { useState } from 'react'
import { validDomain } from '../constant/fetchAPI'

const CheckMail = () => {
  const [data, setdata] = useState('')
  const [value, setvalue] = useState(null)

     const handleClick=async()=>{
      const res=await validDomain(data);
      console.log(res);
      setvalue(res);
     }
  return (
    <div className='user-check'>
    <label htmlFor="email">Enter email</label>
    <input type="email" placeholder='email' name="email" onChange={(e)=>setdata(e.target.value)}/>
    <button className='btn' onClick={handleClick}>Check</button>
    {
      value!==null?(
        <div className="url-data">
          <p>valid-{value.valid===true?"true":"false"}</p>
          <p>block-{value.block===true?"true":"false"}</p>
          <p>domain-{value.domain}</p>
          <p>text-{value.text}</p>
          <p>reason-{value.reason}</p>
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

export default CheckMail
