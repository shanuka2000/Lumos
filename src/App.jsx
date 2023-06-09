import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import background from './assets/background3.jpg'
import Banner from './components/Banner'
import TopSeller from './components/TopSeller'

function App() {

  return (
    <div className="App">
      {/* Navigation */}
      <Navigation />
      
      {/* Banner */}
      <Banner />
      
      {/* Top sale */}
      <TopSeller />

      {/* Categories */}
      {/* Link to shop */}
      {/* New Items */}
      {/* Story divs 2 */}
      {/* Footer */}
    </div>
  )
}

export default App
