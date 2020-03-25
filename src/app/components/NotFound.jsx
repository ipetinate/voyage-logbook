import React from 'react'
// React Router
import { Link } from 'react-router-dom'
// Styles
import '../App.css'
// Files/Images
import spaceship from '../../assets/icons/spaceship.svg'
// Material UI
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const NotFound = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Desculpe não consegui encontrar a página. <span role='img' aria-label='Question emoji'>🤔</span></h3>
        <p>
          Fique tranquilo, utilize o botão abaixo para retornar a Página Inicial
        </p>
        <Button
          component={Link}
          to='/'
          variant='contained'
          color='primary'
        >
          <ArrowBackIcon />
          &nbsp; Voltar a página inicial
        </Button>
        <img src={spaceship} className='App-logo' alt='logo' />
      </header>
    </div>
  )
}

export default NotFound
