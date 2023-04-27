import React, { useState } from 'react'
import UserNavBar from '../components/UserNavBar'
import MyDetails from '../components/MyDetails'
import CheckMail from '../components/CheckMail'
import CheckWebsites from '../components/CheckWebsites'
import GiveFeedback from '../components/GiveFeedback'
const UserHomePage = () => {
  
  
  const [comp, setComp] = useState('mydetails')
  return (
    <div>
    <UserNavBar comp={comp} setComp={setComp}/>
    <div className="userHomePage-components">
     {
      {
        'mydetails':<MyDetails/>,
        'checkMail':<CheckMail/>,
        'checkWebsites':<CheckWebsites/>,
        'giveFeedback':<GiveFeedback/>
      }[comp]
     }
    </div>
    </div>
  )
}

export default UserHomePage
