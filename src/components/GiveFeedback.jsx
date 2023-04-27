import React, { useState } from 'react'
import { addFeed } from './FeedbackServices';

const GiveFeedback = () => {
  const [feed, setfeed] = useState('');
  const handleClick=async(e)=>{
    e.preventDefault();
    const newFeed={
      feed
    }
    console.log(newFeed);
    try {
      await addFeed(newFeed)
    } catch (error) {
      alert(error);
    }
    setfeed('')
  }
  return (
    <div className='user-check'>
     <label htmlFor="feedback">Plz give your feedback</label>
     <input type="text" placeholder='feedback' name="feedback" value={feed} onChange={(e)=>setfeed(e.target.value)}/>
     <button className='btn' onClick={handleClick}>Give Feedback</button>
    </div>
  )
}

export default GiveFeedback
