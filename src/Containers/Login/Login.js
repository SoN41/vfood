import React from 'react'
import './styles.css'
import Card from '../../Components/Card/Card'

const Login = () => {
  return (
    <div>
      <div>
        <h2 className='wtext'>Welcome <br /> Back!</h2>
        <div className='login'>
          <Card height={68} width={"95%"}>
          <h2>User Name</h2>
          </Card>
          <br />
          <br />
          <Card height={68} width={"95%"}>
          <h2>Password</h2>
          </Card>
        </div>
        <div className='outer'>
          <h2 className='sigin'>Sign in</h2>
          <button className='submit'>-&gt;</button>
          <div style={{ clear: 'both' }} />
        </div>
        <div className='outer'>
          <h2 className='signup'>
            <a href='./Containers/SignUp/SignUp.js'><h2>Sign Up</h2></a>
          </h2>
          <h4 className='forgot'>Forgot Password</h4>
        </div>
      </div>
    </div>
  )
}

export default Login
