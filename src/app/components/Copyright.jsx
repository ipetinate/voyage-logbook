import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Copyright () {
  return (
    <Typography className='over' variant='body2' color='textSecondary' align='center'>
      <Link className='over' target='_black' color='inherit' href='https://linkedin.com/in/ipetinate'>
        Feito com <span role='img' aria-label='Heart'>💙</span> por Isac Petinate
      </Link>
      <br />
      {'Copyright © 2020'}
    </Typography>
  )
}
