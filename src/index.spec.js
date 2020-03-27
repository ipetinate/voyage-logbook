/* eslint-env jest */
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './app/App'
import NotFound from './app/components/NotFound'

describe('Index', () => {
  test.skip('Renderização completa da aplicação', () => {
    const history = createMemoryHistory()
    const { container, getByText, getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    )

    expect(container.innerHTML).toMatch('Olá, seja bem vindo ao gerador de relatórios para Diário de Bordo de viagem.')

    fireEvent.click(getByText(/Criar Relatório/i))

    expect(getByTestId('add-planet')).toBeTruthy()
  })

  test.skip('Deve mostrar a página de Não Encontrado caso navegue para uma rota desconhecida', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    const { getByRole } = render(
      <Router history={history}>
        <NotFound />
      </Router>
    )
    expect(getByRole('heading')).toHaveTextContent('404 Not Found')
  })
})
