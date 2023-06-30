import { 
  Route, 
  Routes

} from 'react-router-dom';
import Login from './features/auth/Login.jsx';
import Main from './features/auth/Main.jsx';
import Register from './features/auth/Register.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Layout from './components/Layout.jsx'

import 'react-toastify/dist/ReactToastify.css'
import ForgetPassword from './features/auth/ForgetPassword.jsx';
import Profile from './features/user/Profile.jsx';
import EditProfile from './features/user/EditProfile.jsx';
import Contact from './features/page/Contact.jsx';
import ListLotto from './features/page/ListLotto.jsx';



const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />} >
      <Route index={true} path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      {/* Private Routes */}
      <Route path='' element={<PrivateRoute />} >
        <Route path='/main' element={<Main />} />
        <Route path='/profile' element={<Profile /> } />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/listlotto' element={<ListLotto />} />
      </Route>
    </Route>
    </Routes>
  )

}
export default App
