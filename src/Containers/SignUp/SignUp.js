import React from 'react'
import './styles.css'
import Card from '../../Components/Card/Card'

const SignUp = () => {
  return (
    <div>
      <div className='ctext'>
        <h1>Create <br /> Account!</h1>
        <div className='login'>
          <Card height={68} width={253}>
          <h1>Name</h1>
          </Card>
          <br />
          <br />
          <Card height={68} width={253}>
          <h1>Email</h1>
            </Card>
          <br />
          <br />
          <Card height={68} width={253}>
          <h1 >Password</h1>
          </Card>
          <div className='btn'>
            <h2 className='sigup'>Sign Up</h2>
            <button>-&gt;</button>  
          </div>
          <div className='signin'>
            <a href='./Containers/Login/Login'><h1>Sign In</h1></a>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default SignUp