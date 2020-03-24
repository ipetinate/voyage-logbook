import React from 'react'
// React Router
import { Link } from 'react-router-dom'
// Styles
import './App.css'
// Files/Images
import spaceship from '../assets/icons/spaceship.svg'
// Material UI
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Voyage Logbook Reports</h3>
        <p >
          Olá, seja bem vindo ao gerador de relatórios para Diário de Bordo de viagem.
        </p>
        <img src={spaceship} className="App-logo" alt="logo" />
        <Button
          component={Link}
          to="/new-logbook"
          variant="contained"
          color="primary"
        >
          Criar relatório &nbsp;
          <AddIcon />
        </Button>
      </header>
    </div>
  )
}

export default App
