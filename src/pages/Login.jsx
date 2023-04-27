import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='login-class'>
    <div className="login-class-txt">
    <p className="txt-1">PHISING</p>
    <p className="txt-2">ALERT</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat ullam a quidem mollitia voluptas nostrum cumque hic rerum, nulla ut accusantium sint eaque eius ab nam, earum illum repudiandae fugiat illo beatae? Voluptas, perspiciatis? Explicabo!</p>
    </div>
    <div className="login-class-btn">
    <button className="btn" onClick={()=>navigate('/adminLogin')}>AdminLogin</button>
    <button className='btn' onClick={()=>navigate('/userLogin')}>UserLogin</button>
    </div>
    </div>
    </>
  )
}

export default Login
