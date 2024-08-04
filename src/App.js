import React from 'react'
import './app.css'
import Account from './Components/Account Section/Account'
import Body from './Components/Body Section/Body'
import Sidebar from './Components/Sidebar Section/Sidebar'

const App = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Body/>
      <Account/>
    </div>
  )
}

export default App