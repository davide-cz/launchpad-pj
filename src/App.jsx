import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LaunchGrid from './components/LaunchGrid'

function App() {

  return (
    <>
      <div className='bg-slate-400 h-screen w-full flex justify-center align-middle'>
        <LaunchGrid/>
      </div>
    </>
  )
}

export default App
