import React from 'react'

const AdminNavBar = ({comp,setComp}) => {
  return (
    <>
    <div className="topnav">
    <li onClick={()=>setComp('userdetails')}>User Details</li>
    <li onClick={()=>setComp('addBlacklist')}>Add to Blacklist</li>
    <li onClick={()=>setComp('viewList')}>View List</li>
    <li onClick={()=>setComp('feedback')}>Feedback</li> 
    <li onClick={()=>setComp('logOut')}>LogOut</li>
  </div>
    </>
  )
  };

export default AdminNavBar
