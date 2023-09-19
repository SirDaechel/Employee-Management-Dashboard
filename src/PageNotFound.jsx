import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {

  return (

    <div className='page_not_found'>

      <div className='page_not_found_cont'>

        <h1 className="page_not_found_txt">
          Page not found!
        </h1>

        <NavLink to={"/"} className="page_not_found_return"> Return to homepage</NavLink>

      </div>

    </div>

  )

}

export default PageNotFound