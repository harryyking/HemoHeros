import React from 'react'
import { BookOpen } from 'lucide-react'

const Nav = () => {
  return (
    <div className="navbar bg-base-200 max-w-2xl mx-auto rounded-xl">
  <div className="navbar-start">
    <a href="" className='btn btn-ghost'>💉</a>
  </div>

  <div className='navbar-center'>
    <a className="btn btn-ghost text-xl">HemoHeros</a>
  </div>

  
  <div className="navbar-end" >  
    <a href="/learn" className="btn btn-ghost"><BookOpen className='w-5 h-5'/></a>

  </div>
</div>
  )
}

export default Nav