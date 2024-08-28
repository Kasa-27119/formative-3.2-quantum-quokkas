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
    /**COMMENTS / UPDATES /TODO
     * Not fully done html fucntionality for app.jsx 
     * as we will need to add in user reltated functionailty once its added to previous files
     *  */ 
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Home/>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App
