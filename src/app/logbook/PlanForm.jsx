import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// React Hook Form
import { useForm } from 'react-hook-form'
// Material UI
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
// App Resources
import SwapiService from '../../services/swapi.service'
// Dictionaries
import Endpoints from '../../dictionaries/endpoints.dictionary'

const PlanForm = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm()

  const swapiService = new SwapiService()
  const ENDPOINT = Endpoints.get('PLANETS')

  const [description, setDescription] = useState([])
  const [planet, setPlanet] = useState([])
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    (async () => {
      const data = await swapiService.getAll(ENDPOINT)
      setPlanets(data)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addPlan = () => onSubmit({ description, planet })

  return (
    <>
      <form onSubmit={handleSubmit(addPlan)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              autoComplete='off'
              color='secondary'
              name='description'
              label='Descrição'
              ref={register}
              onChange={e => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel id='planet'>Planeta</InputLabel>
            <Select
              fullWidth
              color='secondary'
              id='planet'
              name='planet'
              label='Planeta'
              labelId='Planet'
              ref={register}
              onChange={e => setPlanet(e.target.value)}
            >
              {
                planets.map((planet, index) =>
                  <MenuItem key={index} value={planet}>{planet.name}</MenuItem>
                )
              }
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' color='primary' type='submit'>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

PlanForm.propTypes = {
  onSubmit: PropTypes.func
}

export default PlanForm
