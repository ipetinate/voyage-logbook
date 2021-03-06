import React, { useEffect, useState } from 'react'
// Material UI
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import { makeStyles } from '@material-ui/core/styles'
// App Resources
import LocalStorageService from '../../services/local-storage.service'
// Dictionaries
import LOCAL_STORAGE_KEY from '../../dictionaries/local-storage.dictionary'

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

const CheckPlan = () => {
  const classes = useStyles()

  const localStorageService = new LocalStorageService()
  const KEY = LOCAL_STORAGE_KEY.get('KEY')

  const [plans, setPlans] = useState([])

  useEffect(() => {
    setPlans(localStorageService.read(KEY) || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12}>
        <Typography variant='h6' gutterBottom>
          Plano do Diário de Bordo
        </Typography>
        <List disablePadding>
          {
            plans.map((plan) => (
              <List
                key={plan}
                component='nav'
                aria-labelledby='nested-list-subheader'
                className={classes.list}
              >
                <ListItem button>
                  <ListItemIcon>
                    <LabelImportantIcon />
                  </ListItemIcon>
                  <ListItemText primary={plan.description + ' em ' + plan.planet.name} />
                </ListItem>
              </List>
            ))
          }
        </List>
      </Grid>
    </Grid>
  )
}

export default CheckPlan
