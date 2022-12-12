import { Routes, Route } from 'react-router-dom'

import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import Home from './components/pages/Home'

const Router = () => (
    <Routes>
      <Route path='/login' element={<SignIn />} />

      <Route path='/signup' element={<SignUp />} />

      <Route path='/home' element={<Home /> } />
    </Routes>
)

export default Router