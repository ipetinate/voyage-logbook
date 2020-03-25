import React, { useEffect, useState } from 'react'
// Material UI
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
// React Hook Form
import { useForm } from 'react-hook-form'
// App Components
import PlanItem from './PlanItem'
// App Resources
// import LocalStorageService from '../../services/local-storage.service'
import SwapiService from '../../services/swapi.service'
// Enums
import Endpoints from '../../dictionaries/endpoints.dictionary'

export default function AddPlanets () {
  const endpoint = Endpoints.get('PLANETS')
  // const localStorageService = new LocalStorageService()
  const swapiService = new SwapiService()

  const [description, setDescription] = useState({})
  const [planet, setSelectedPlanet] = useState({})
  const [planets, setPlanets] = useState([])
  const [plans, setPlans] = useState()

  useEffect(() => {
    (async () => {
      const data = await swapiService.getAll(endpoint)
      setPlanets(data)
    })()
  }, [])

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = () => {
    setPlans([...plans, { description, planet }])
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              required
              autoComplete='description'
              color='secondary'
              id='description'
              label='Descrição'
              name='description'
              onChange={e => setDescription(e.target.value)}
              ref={register({ required: true })}
            />
            {errors.planName && <span>Este campo é obrigatório!</span>}
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel id='planet'>Planeta</InputLabel>
            <Select
              fullWidth
              color='secondary'
              id='planet'
              label='Planeta'
              labelId='planet'
              name='planet'
              onChange={e => setSelectedPlanet(e.target.value)}
              ref={register({ required: true })}
            >
              {
                planets.map(planet =>
                  <MenuItem key={planet} value={planet}>{planet.name}</MenuItem>
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          {/* {plans.map(x => <PlanItem key={x} planet={x.planet} description={x.description} />)} */}
        </Grid>
      </Grid>
    </>
  )
}
