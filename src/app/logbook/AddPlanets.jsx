import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// Material UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { makeStyles } from '@material-ui/core'
// App Components
import PlanForm from './PlanForm'
// App Resources
import LocalStorageService from '../../services/local-storage.service'
// Dictionaries
import LOCAL_STORAGE_KEY from '../../dictionaries/local-storage.dictionary'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor: '#313131',
    marginTop: '5px',
    marginBottom: '5px'
  }
}))

export default function AddPlanets () {
  const classes = useStyles()

  const localStorageService = new LocalStorageService()
  const KEY = LOCAL_STORAGE_KEY.get('KEY')

  const [plans, setPlans] = useState([])

  useEffect(() => {
    setPlans(localStorageService.read(KEY) || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    savePlansLocal(plans)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plans])

  const deletePlan = (item) => {
    setPlans(plans.filter(x => x !== item))
  }

  const savePlansLocal = (plansList) => {
    if (!plansList || plansList.length > 0) {
      localStorageService.create(KEY, plansList)
    }
  }

  const addPlan = (plan) => {
    setPlans([...plans, plan])
  }

  return (
    <>
      <PlanForm
        onSubmit={
          ({ description, planet }) => addPlan({ description, planet })
        }
      />
      <Grid test-id='add-planet' container spacing={3}>
        <Grid item xs={12} sm={12}>
          {
            plans.map((plan, index) =>
              <Paper key={index} className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={10} sm={11} zeroMinWidth>
                    <Typography>
                      Descrição: {plan.description}
                    </Typography>
                    <Typography>
                      Planeta: {plan.planet.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={1}>
                    <IconButton edge='start' color='inherit' aria-label='open drawer'>
                      <DeleteForeverIcon onClick={() => deletePlan(plan)} color='primary' />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            )
          }
        </Grid>
      </Grid>
    </>
  )
}

AddPlanets.propTypes = {
  handleEditPlan: PropTypes.func
}
