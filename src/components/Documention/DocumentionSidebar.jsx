import React from 'react'
import { NavLink, Outlet } from 'react-router'

export default function DocumentionSidebar() {
  return <>

    <div className="container py-5">
      <div className="row">
        <div className="col-md-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className={({ isActive }) =>
                  isActive ? "text-danger nav-link" : "text-dark nav-link"
                } 
  to="/documention">Introduction</NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
              className={({ isActive }) =>
                isActive ? "text-danger nav-link" : "text-dark nav-link"
              } 
              to="/documention/get-strated">Get started</NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
              className={({ isActive }) =>
                isActive ? "text-danger nav-link" : "text-dark nav-link"
              } 
              to="/documention/demo">Demo</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  </>
}
