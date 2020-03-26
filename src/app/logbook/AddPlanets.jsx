import React, { useEffect, useState, createRef } from 'react'
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

export default function AddPlanets () {
  const classes = useStyles()
  const localStorageService = new LocalStorageService()
  const swapiService = new SwapiService()

  const KEY = LOCAL_STORAGE_KEY.get('KEY')
  const ENDPOINT = Endpoints.get('PLANETS')

  const descriptionInput = createRef()
  const planetSelect = createRef()

  const { register, handleSubmit, control } = useForm()

  const [description, setDescription] = useState({})
  const [planet, setSelectedPlanet] = useState([])

  const [planets, setPlanets] = useState([])
  const [plans, setPlans] = useState([])

  useEffect(() => {
    setPlans(localStorageService.read(KEY) || [])
  }, [])

  useEffect(() => {
    (async () => {
      const data = await swapiService.getAll(ENDPOINT)
      setPlanets(data)
    })()
  }, [])

  useEffect(() => {
    register({ name: 'planets' }, { required: true })
    register({ name: 'description', type: 'text' })
  }, [register])

  const handleSubmitPlan = () => {
    setPlans([...plans, { description, planet }])
    handleAddPlan(plans)
  }

  const handleDeletePlan = (item) => {
    setPlans(plans.filter(x => x !== item))
    handleAddPlan(plans)
  }

  const handleAddPlan = (plansList) => {
    if (!plansList || plansList.length > 0) {
      localStorageService.create(KEY, [...plansList])
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Controller
              as={TextField}
              fullWidth
              required
              autoComplete='off'
              color='secondary'
              id='description'
              label='Descrição'
              name='description'
              value={description}
              inputRef={descriptionInput}
              onChange={([value]) => setDescription(value)}
              control={control}
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
                  labelId='planet'
                  color='secondary'
                  value={planet}
                  inputRef={planetSelect}
                  onChange={([selected]) => setSelectedPlanet('planet', selected.target.value)}
                >
                  {
                    planets.map((planet, index) =>
                      <MenuItem key={planet.name} value={planet}>{planet.name}</MenuItem>
                    )
                  }
                </Select>
              }
              name='planet'
              defaultValue=''
              control={control}
            />
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
