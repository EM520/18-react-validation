import {useState} from "react"
import logo from './logo.svg';
import './App.css';
import validator from 'validator'

export default function App() {
  const [first,setFirst] = useState('')
  const [firstError,setFirstError] = useState('')

  const [email,setEmail] = useState('')
  const [emailError,setEmailError] = useState('')

  const [userName,setUserName] = useState('')
  const [userNameError,setUserNameError] = useState('')

  const [password,setPassword] = useState('')
  const [passwordError,setPasswordError] = useState('')

  const [confirmPassword,setConfirmPassword] = useState('')
  const [confirmPasswordError,setConfirmPasswordError] = useState('')


  const [website,setWebsite] = useState('')
  const [websiteError,setWebsiteError] = useState('')

  // const app=do


   function handleSubmit(e){
    e.preventDefault()
    if (first ===''){
      setFirstError('Cannot be blank')
    }else{
      setFirstError('')
    }
    if (validator.isEmail(email)) {
      setEmailError('')
    }else {
      setEmailError('Please enter a valid Email')
    }
    
    if (userName ===''){
      setUserNameError('Cannot be blank')
    }else{
      setUserNameError('')
    }
    if (password ===''){
      setPasswordError('Cannot be blank')
    }else{
      setPasswordError('')
    }
    if (confirmPassword ===''){
      setConfirmPasswordError('Cannot be blank')
    }else{
      setConfirmPasswordError('')
    }
    if(confirmPassword !==password ){
      setConfirmPasswordError('Must match password')
    }else{
      setConfirmPasswordError('')
    }
    if (validator.isURL(website)){
      setWebsiteError('')
    }else{
      setWebsiteError('Please enter a valid URL')
    }
    if(first===''||userName ===''||password ===''||confirmPassword ===''||website ===''){
      alert ('NEED TO FILL OUT THE FORM!')
      
    }
  

  // function resetForm(){
  //   setFirst('')
  //   setEmail('')
  //   setUserName('')
  //   setPassword('')
  //   setConfirmPassword('')
  //   setWebsite('')
  // }

  return (
    <div className="App">

     <h1>Profile Form - All fields required</h1>

     <form onSubmit={handleSubmit}>

        <label 
        htmlFor="name" className={firstError ? 'text-label-red' : 'text-label'}>Name { - firstError}
        </label> 

        <input 
        // required
        id='name' 
        type='text'
        placeholder="Michael"
        onChange={(e)=>setFirst(e.target.value)}>
        </input>

        <label 
        htmlFor="email" className={emailError ? 'text-label-red' : 'text-label'}>Email { - emailError}
        </label> 

        <input
        id='email' 
        type='email'
        placeholder="email@test.com"
        onChange={(e)=>setEmail(e.target.value) }>
        </input>

        <label 
        htmlFor="userName" className={userNameError ? 'text-label-red' : 'text-label'}>Username { - userNameError}
        </label> 

        <input
        id='userName' 
        type='text'
        placeholder="myusername"
        onChange={(e)=>setUserName(e.target.value)}>
        </input>


        <label 
        htmlFor="password" className={passwordError ? 'text-label-red' : 'text-label'}>Password { - passwordError}
        </label> 

        <input
        id='password' 
        type='password'
        placeholder="...."
        onChange={(e)=>setPassword(e.target.value)}>
        </input>

        <label 
        htmlFor="confirmPassword" className={confirmPasswordError ? 'text-label-red' : 'text-label'}>Confirm Password { - confirmPasswordError }
        </label> 

        <input
        id='confirmPassword' 
        type='password'
        placeholder="Confirmed password - Can not be blank"
        onChange={(e)=>setConfirmPassword(e.target.value)}>
        </input>

        <label 
        htmlFor="website" className={websiteError ? 'text-label-red' : 'text-label'}>Website { - websiteError }
        </label> 

        <input
        id='website' 
        type='text'
        placeholder="Website - Please enter a valid url"
        onChange={(e)=>setWebsite(e.target.value)}>
        </input>

        <button type='submit'>Submit</button>   

      </form >

      <div className="sumitScreen">
          <h2 > Thank You </h2> 
          <p>Your profile has been updated(but not really)</p>
        </div>
    </div>
  )
}

}
