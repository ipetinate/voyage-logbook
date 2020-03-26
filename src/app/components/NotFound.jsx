import React from 'react'
// React Router
import { Link } from 'react-router-dom'
// Styles
import '../App.css'
// Files/Images
import notFound from '../../assets/img/404.png'
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
          &nbsp; Voltar ao início
        </Button>
        <img src={notFound} alt='logo' />
      </header>
    </div>
  )
}

export default NotFound
