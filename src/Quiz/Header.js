import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    {/* <a href="/"> Home </a>
                     */}
                     <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <a href="/contact"> Contact </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header