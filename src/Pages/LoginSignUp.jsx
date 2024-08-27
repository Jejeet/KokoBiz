import React from 'react'
import Button from '../Components/Button/Button'
import './CSS/LoginSignup.css'
import {useForm} from "react-hook-form"
import { DevTool } from '@hookform/devtools'

const LoginSignUp = () => {
 const form = useForm()
 const{register,control,handleSubmit} = form;

const onSubmit =()=>{

}

  return (
    <div className='loginsignup'>
      <form className="loginsignup-container" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' {...register('username')}  />
          <input type="email" placeholder='enter your email address' {...register('email')}/>
          <input type="password"  placeholder='Password' {...register('password')}/>
        </div>
        <Button size="medium" type='submit'>Continue</Button>
      
        <p className="loginsignup-login"> Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
         <span className='check'></span>
          <input type="checkbox" name='checkbox' id='' {...register('checkbox')}/>
          <label>By continuing, I agree to the terms of use & privacy policy.</label>
         
        </div>
      </form>
      <DevTool control={control}/>
    </div>
  )
}

export default LoginSignUp