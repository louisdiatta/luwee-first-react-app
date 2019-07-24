import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header style={{ color: 'white', textAlign: 'center' }}>
      <h1>Messages</h1>
      <Link style={{ color: 'white' }} to="/">
        Accueil
      </Link>{' '}
      |{' '}
      <Link style={{ color: 'white' }} to="/about">
        A propos
      </Link>
    </header>
  )
}
