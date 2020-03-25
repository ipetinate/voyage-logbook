import React from 'react'
// Material UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

export default function PlanItem (props) {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <Typography>
            Planeta: {props.planet.name}
          </Typography>
          <Typography>
            Descroção: {props.description}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <AddIcon />
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper}>xs</Paper>
      </Grid>
    </Grid>
  )
}
