import React, { useContext } from 'react'
import { CounterContext } from '../../Context/CounterContext'

export default function Footer() {
  
  const {count} = useContext(CounterContext);

  
  return <>
  <footer>
      <div className='p-5 bg-dark text-center text-light fs-4'>
          2025 &copy; reversed {count}
      </div>
  </footer>
  </>
}
