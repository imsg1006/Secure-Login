import { Route, Routes } from 'react-router-dom'
import { LoginFormDemo } from '../components/LogIn'
import { VerifyOtpForm } from '../components/Otp'
import { SignupFormDemo } from '../components/Register'
import { Welcome } from '../components/Welcome'
import { DashboardPage } from '../components/Dashboard'

function App() { 

  return (    
    <div className=''> 
      <Routes>
        <Route path='/login' element={<LoginFormDemo/>}></Route>
        <Route path='/otp' element={<VerifyOtpForm/>}></Route>
        <Route path='/' element={<LoginFormDemo/>}></Route>
        <Route path='/register' element={<SignupFormDemo/>}></Route>
        <Route path='/welcome' element={<Welcome/>}></Route>
        <Route path='/dashboard' element={<DashboardPage/>}></Route>
      </Routes>
    </div> 
  )
}

export default App
