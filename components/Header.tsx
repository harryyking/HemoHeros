import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <nav className="navbar bg-black">
      <div className='navbar-start'>
        <a className="btn btn-ghost text-xl">Another Step</a>
      </div>

      <div className='navbar-end gap-4'>
      <ul className="menu menu-horizontal px-2 rounded-box">
        <li><a>Case Studies</a></li>
        <li><a>Templates</a></li>
      </ul>

      <Button>Book A Call</Button>

      </div>
    </nav>
  )
}

export default Header