import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route path='/signup' element={<SignUp />} />
    </Routes>
  </BrowserRouter>
)

export default Router