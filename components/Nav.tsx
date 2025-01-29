import React from 'react'

const Nav = () => {
  return (
    <div className="navbar bg-base-100 max-w-md mx-auto rounded-md mt-2">
  <div className="navbar-start tooltip" data-tip="HemoHeros">
    <a href="" className='btn btn-ghost'>💉</a>
  </div>

  <div className='navbar-center'>
    <a className="btn btn-ghost text-xl">HemoHeros</a>
  </div>

  
  <div className="navbar-end">
    <div className='tooltip' data-tip="Learn">
    <a className="btn">📕</a>
    </div>

  </div>
</div>
  )
}

export default Nav