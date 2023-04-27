import React from 'react'

const UserNavBar = ({comp,setComp}) => {
  return (
   <>
   <div class="topnav">
   <li onClick={()=>setComp('mydetails')}>MyDetails</li>
   <li onClick={()=>setComp('checkWebsites')}>Check Websites</li>
   <li onClick={()=>setComp('checkMail')}>Check Mail</li>
   <li onClick={()=>setComp('giveFeedback')}>Give Feedback</li> 
   <li onClick={()=>setComp('logOut')}>LogOut</li>
 </div>
   </>
  )
}

export default UserNavBar
