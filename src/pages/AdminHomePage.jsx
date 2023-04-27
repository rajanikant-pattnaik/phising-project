import React, { useState } from 'react'
import AdminNavBar from '../components/AdminNavBar'
import { AddToBlacklist, Feedback, UserDetails, ViewList } from '../components/AdminComponents'

const AdminHomePage = () => {
  const [comp, setComp] = useState('userdetails')
  return (
    <div>
    <AdminNavBar comp={comp} setComp={setComp}/>
    <div className="userHomePage-components">
     {
      {
        'userdetails':<UserDetails/>,
        'addBlacklist':<AddToBlacklist/>,
        'viewList':<ViewList/>,
        'feedback':<Feedback/>
      }[comp]
     }
    </div>
    </div>
  )
}


export default AdminHomePage
