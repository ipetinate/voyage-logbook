import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// Material UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { makeStyles } from '@material-ui/core'
// React Hook Form
import { useForm, Controller } from 'react-hook-form'
// App Resources
import LocalStorageService from '../../services/local-storage.service'
import SwapiService from '../../services/swapi.service'
// Dictionaries
import Endpoints from '../../dictionaries/endpoints.dictionary'
import LOCAL_STORAGE_KEY from '../../dictionaries/local-storage.dictionary'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  }
}))

const defaultValues = {
  description: '',
  planet: {}
}

export default function AddPlanets () {
  const classes = useStyles()
  const localStorageService = new LocalStorageService()
  const swapiService = new SwapiService()

  const KEY = LOCAL_STORAGE_KEY.get('KEY')
  const ENDPOINT = Endpoints.get('PLANETS')

  const { control } = useForm({ defaultValues })

  // Dados do Formulário de Plano
  const [description, setDescription] = useState('')
  const [planet, setPlanet] = useState({})

  // Planos d Diário de bordo
  const [data, setData] = useState([])
  useEffect(() => {
    setData({ description, planets })
  }, [description, planet])

  // Planos d Diário de bordo
  const [plans, setPlans] = useState([])
  useEffect(() => {
    setPlans(localStorageService.read(KEY) || [])
  }, [])

  // Planetas da API
  const [planets, setPlanets] = useState([])
  useEffect(() => {
    (async () => {
      const data = await swapiService.getAll(ENDPOINT)
      setPlanets(data)
    })()
  }, [])

  // Operações com itens da lista
  const handleDeletePlan = (item) => {
    setPlans(plans.filter(x => x !== item))
    savePlans(plans)
  }

  const savePlans = (plansList) => {
    if (!plansList || plansList.length > 0) {
      localStorageService.create(KEY, plansList)
    }
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Controller
            as={TextField}
            fullWidth
            autoComplete='off'
            color='secondary'
            name='description'
            label='Descrição'
            control={control}
            onChange={([input]) => setDescription(input.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputLabel id='planet'>Planeta</InputLabel>
          <Controller
            as={
              <Select
                fullWidth
                id='planet'
                label='Planeta'
                labelId='Planet'
                color='secondary'
              >
                {
                  planets.map((planet, index) =>
                    <MenuItem key={index} value={planet}>{planet.name}</MenuItem>
                  )
                }
              </Select>
            }
            onChange={([selected]) => setPlanet(selected.target.value)}
            control={control}
            name='planet'
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
            onClick={() => savePlans(data)}
          >
            Adicionar
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          {
            plans ? plans.map(
              (x, index) => (
                <Paper key={index} className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={11} sm={11} zeroMinWidth>
                      <Typography>
                        Planeta: {x.name}
                      </Typography>
                      <Typography>
                        Descrição: {x.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <IconButton edge='start' color='inherit' aria-label='open drawer'>
                        <DeleteForeverIcon onClick={() => handleDeletePlan(x)} color='primary' />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              )
            ) : null
          }
        </Grid>
      </Grid>
    </>
  )
}

AddPlanets.propTypes = {
  handleEditPlan: PropTypes.func
}


// Dados do Formulário de Plano
const [description, setDescription] = useState('')
const [planet, setPlanet] = useState({})

// Dados do Formulário de Plano
const [formData, setFormData] = useState({})
useEffect(() => {
  setFormData({ description, planet })
  console.log(formData)
  // eslint-disable-next-line
}, [description, planet])


import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// Material UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { makeStyles } from '@material-ui/core'
// App Resources
import LocalStorageService from '../../services/local-storage.service'
import SwapiService from '../../services/swapi.service'
// Dictionaries
import Endpoints from '../../dictionaries/endpoints.dictionary'
import LOCAL_STORAGE_KEY from '../../dictionaries/local-storage.dictionary'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  }
}))

export default function AddPlanets () {
  const classes = useStyles()
  const localStorageService = new LocalStorageService()
  const swapiService = new SwapiService()

  const KEY = LOCAL_STORAGE_KEY.get('KEY')
  const ENDPOINT = Endpoints.get('PLANETS')

  const [planets, setPlanets] = useState([])
  const [plans, setPlans] = useState([])

  const [description, setDescription] = useState('')
  const [planet, setPlanet] = useState({})

  useEffect(() => {
    setPlans(localStorageService.read(KEY) || [])
  }, [])

  useEffect(() => {
    (async () => {
      const data = await swapiService.getAll(ENDPOINT)
      setPlanets(data)
    })()
  }, [])

  const deletePlan = (item) => {
    setPlans(plans.filter(x => x !== item))
    savePlans(plans)
  }

  const savePlans = (plansList) => {
    if (!plansList || plansList.length > 0) {
      localStorageService.create(KEY, plansList)
    }
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            autoComplete='off'
            color='secondary'
            name='description'
            label='Descrição'
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
          <Button
            variant='contained'
            color='primary'
            onClick={() => savePlans([...plans, { description, planet }])}
          >
            Adicionar
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          {
            plans ? plans.map(
              (plan, index) => (
                <Paper key={index} className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={11} sm={11} zeroMinWidth>
                      <Typography>
                        Planeta: {plan.name}
                      </Typography>
                      <Typography>
                        Descrição: {plan.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <IconButton edge='start' color='inherit' aria-label='open drawer'>
                        <DeleteForeverIcon onClick={() => deletePlan(plan)} color='primary' />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              )
            ) : null
          }
        </Grid>
      </Grid>
    </>
  )
}

AddPlanets.propTypes = {
  handleEditPlan: PropTypes.func
}


// -----------------------------------------

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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          {/* {plans.map((x, index) => <PlanItem key={index} planet={x.planet} description={x.description} />)} */}
        </Grid>
      </Grid>
    </>
  )
}
