import { Routes, Route } from 'react-router-dom'

import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import Home from './components/pages/Home'

const Router = () => (
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route path='/signup' element={<SignUp />} />

      <Route path='/home' element={<Home /> } />
    </Routes>
)

export default Router