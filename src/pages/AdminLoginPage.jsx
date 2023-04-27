import React from 'react'

const AdminLoginPage = () => {
  return (
    <div className='user-check'>
     <form >
     <label htmlFor="email">email</label>
     <input type="text" placeholder='email' name="email" />
     <label htmlFor="password">password</label>
     <input type="password" placeholder='password' name="password" />
     <button className="btn">submit</button>
     </form>
    </div>
  )
}

export default AdminLoginPage
