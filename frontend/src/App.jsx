// Imports
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import './App.css'

// Page Imports
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import SingleProject from './pages/SingleProject'

// component Imports
import Navbar from './components/Navbar'
import Footer from './components/Footer'

/** CONTENTS OF APP.JSX
 * Imports (2 -13) Page Imports (6-9) component imports (12-13)
 * App.jsx htmml (23 -)
 * 
 */

const App = () => {
  const {user} = useAuthContext();

  return (

    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>
            <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
            <Route path='/signup' element={!user ? <SignUp/> : <Navigate to='/'/>}/>
            <Route path="/:id" element={user ? <SingleWorkout/> : <Navigate to="/login"/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
