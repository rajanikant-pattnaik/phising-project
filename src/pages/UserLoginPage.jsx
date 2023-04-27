import React from 'react'

const UserLoginPage = () => {
  return (
    <div>
     <form >
     <label htmlFor="email">email</label>
     <input type="text" placeholder='email' name="email" />
     <label htmlFor="password">password</label>
     <input type="password" placeholder='password' name="password" />
     <button>submit</button>
     </form>
    </div>
  )
}

export default UserLoginPage
