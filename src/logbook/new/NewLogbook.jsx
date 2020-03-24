import React from 'react'
// React Hook Form
import { useForm } from 'react-hook-form'
// Material UI
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import MoreIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import Link from '@material-ui/core/Link'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '100px'
  },
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}))

const NewLogbook = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.card}
        mt="2"
      >
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Criar relatório para Diário de Bordo.
            </Typography>
            <Grid onSubmit={handleSubmit(onSubmit)} container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Título"
                  fullWidth
                  autoComplete="title"
                  ref={register({ required: true })}
                />
                {errors.name && <span>Este campo é obrigatório!</span>}

              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="description"
                  name="description"
                  label="Descrição"
                  fullWidth
                  autoComplete="description"
                  ref={register}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" type="submit">
              Criar relatório
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
            </IconButton>
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
              <AddIcon />
            </Fab>
            <div className={classes.grow} />
            <IconButton edge="end" color="inherit" onClick={handleClick}>
              <MoreIcon />
            </IconButton>
          </Toolbar>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/">
              <MenuItem onClick={handleClose}>Página Inicial</MenuItem>
            </Link>
            <Link to="/about">
              <MenuItem onClick={handleClose}>Sobre</MenuItem>
            </Link>
          </Menu>
        </AppBar>
      </Grid>
    </React.Fragment>
  )
}

export default NewLogbook
