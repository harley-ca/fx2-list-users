import React from 'react'
import User from '../data/User'
import Nav from './Nav'
import Footer from './Footer'
import UserDetails from './User'
import ListUsers from './ListUsers'

const App = () => {
  return (
    <div >
      <Nav />
      <ListUsers />
      <Footer />
    </div>
  )
}

export default App
