import { Route, Routes } from 'react-router-dom'
import { LoginFormDemo } from '../components/LogIn'
import { VerifyOtpForm } from '../components/Otp'
import { SignupFormDemo } from '../components/Register'


function App() { 

  return (    
    <div className=''> 
      <Routes>
        <Route path='/login' element={<LoginFormDemo/>}></Route>
        <Route path='/otp' element={<VerifyOtpForm/>}></Route>
        <Route path='/' element={<LoginFormDemo/>}></Route>
        <Route path='/register' element={<SignupFormDemo/>}></Route>
      </Routes>
    </div> 
  )
}

export default App
