import React from 'react'
import PropTypes from 'prop-types'
// Material UI
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import Link from '@material-ui/core/Link'
import MenuItem from '@material-ui/core/MenuItem'
import Zoom from '@material-ui/core/Zoom'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'
// Files/Images
import logo from '../../assets/icons/spaceship.svg'

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: '100px',
    padding: theme.spacing(2),
    flexGrow: 1
  },
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
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

function ScrollTop (props) {
  const classes = useStyles()
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}

const AppToolbar = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Grid>
        <AppBar position='static' color='primary' className={classes.appBar}>
          <Toolbar id='back-to-top-anchor'>
            <IconButton name='homeIconButton' to='/' component={Link} edge='start' color='inherit' aria-label='open drawer'>
              <Avatar src={logo} alt='Spaceship' />
            </IconButton>
            <Typography className={classes.title} variant='h6' noWrap>
              Voyage Logbook Reports
            </Typography>
            <div className={classes.grow} />
            <IconButton edge='end' color='inherit' onClick={handleClick}>
              <MoreIcon />
            </IconButton>
          </Toolbar>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to='/' name='homePageLink' onClick={() => handleClose}>Página Inicial</Link>
            <Link to='/about'>
              <MenuItem name='easterEggLink' onClick={() => handleClose}>Clique aqui! :D</MenuItem>
            </Link>
          </Menu>
        </AppBar>
      </Grid>
      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default AppToolbar
