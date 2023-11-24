import React from 'react'
import NavBar from './Components/NavBar'
import './App.css'
import Banner from './Components/Banner'
import RowPost from './Components/RowPost'
import { action, comedy, originals } from './Urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action'  isSmall/>
      <RowPost url={comedy} title='Comedy Movies'  isSmall/>
    </div>
  )
}

export default App