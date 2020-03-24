import React from 'react'
// React Router
import { Link } from 'react-router-dom'
// Styles
import '../App.css'
// Files/Images
import spaceship from '../../assets/icons/spaceship.svg'
// Material UI
import ArrowBack from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button'

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Voyage Logbook Reports</h3>
        <h5>v1.0.1</h5>
        <p>
          Feito com <span role="img" aria-label="Emoji de coração">❤️</span> e <span role="img" aria-label="Emoji de rostinho fofo">☺️</span> por <a href="https://linkedin.com/in/ipetinate">Isac Petinate</a>
        </p>
        <img src={spaceship} className="App-logo" alt="logo" />
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
        >
          <ArrowBack />
          &nbsp; Voltar para Página Inicial
        </Button>
      </header>
    </div>
  )
}

export default About
