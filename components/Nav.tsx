import React from 'react'

const Nav = () => {
  return (
    <div className="navbar bg-base-100 max-w-md mx-auto rounded-md py-4">
  <div className="navbar-start tooltip" data-tip="HemoHeros">
    <a href="" className='btn btn-ghost'>💉</a>
  </div>

  <div className='navbar-center'>
    <a className="btn btn-ghost text-xl">HemoHeros</a>
  </div>

  
  <div className="navbar-end tooltip" data-tip="Learn">  
    <a className="btn">📕</a>

  </div>
</div>
  )
}

export default Nav