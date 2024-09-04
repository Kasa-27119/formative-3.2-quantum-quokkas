// Imports
import React from 'react'
import { CCircle } from 'react-bootstrap-icons'

/** CONTENT IN FOOTER.JSX
 * Imports (2)
 * Footer html (10-13)
 */

const Footer = () => {

  // Footer HTML Content
  return (
    <footer>
      <div className='left-footer-container'>
      <CCircle className='copyright-icon'/>
      <p>Created By Abbie, Kristen and Mere</p>
      </div>
     
      <div className='right-footer-container'>
        <p>This Website was made for educational purposes.</p>
        <p>Design's used in this website are from the students and credited in each post</p>
      </div>

      
    </footer>
  )
}

export default Footer
