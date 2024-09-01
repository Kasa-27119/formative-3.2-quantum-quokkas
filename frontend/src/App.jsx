// Imports
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
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

  return (

    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
