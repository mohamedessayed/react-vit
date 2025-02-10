import React from 'react'

export default function Container({children}) {
    
  return <>
  <h1>container</h1>
  <div className="container">
    {children}
  </div>
  </>
}
