import React from 'react'
import './Auth.css'

const Auth = ({type}) => {
  return (
    <div className="auth">
        <div className="auth__body">
            {type === 'login' && <p>Login</p>}
            {type === 'register' && <p>Register</p>}
            <form>
                
               {type === "register" && <input className="auth__input" type='text' placeholder='Name'/>}
                <input className="auth__input" type='text' placeholder='Email'/>
                <input className="auth__input"  type='password' placeholder='Password'/>
                {type === "register" && <input className="auth__input" type='password' placeholder='Confirm Password'/>}
                <button className="auth__submit__btn" type="submit">Submit</button>

            </form>

        </div>
        
    </div>
  )
}

export default Auth