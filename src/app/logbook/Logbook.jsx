import React, { useEffect, useState } from 'react'
// React Router DOM
import { Link } from 'react-router-dom'
// Material UI
import Step from '@material-ui/core/Step'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Stepper from '@material-ui/core/Stepper'
import StepLabel from '@material-ui/core/StepLabel'
import ArrowBack from '@material-ui/icons/ArrowBack'
import GetAppIcon from '@material-ui/icons/GetApp'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import { makeStyles } from '@material-ui/core/styles'
// App Components
import Copyright from '../components/Copyright'
import AppToolbar from '../components/AppToolbar'
import AddPlanets from './AddPlanets'
import CheckPlan from './CheckPlan'
// Services
import LocalStorageService from '../../services/local-storage.service'
// Dictionaries
import LOCAL_STORAGE_KEY from '../../dictionaries/local-storage.dictionary'
// Functions
import makeTextFile from '../../functions/make-text-file.function'
import makeJsonFile from '../../functions/make-json-file.function'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}))

const steps = ['Adicionar Planetas', 'Conferir Relatório']

const stepsDictionary = new Map([
  // eslint-disable-next-line react/jsx-key
  [0, <AddPlanets />],
  // eslint-disable-next-line react/jsx-key
  [1, <CheckPlan />]
])

function getStepContent(step) {
  if (stepsDictionary.has(step)) {
    return stepsDictionary.get(step)
  }
}

export default function Checkout() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const localStorageService = new LocalStorageService()
  const KEY = LOCAL_STORAGE_KEY.get('KEY')

  const [plans, setPlans] = useState([])

  useEffect(() => {
    setPlans(localStorageService.read(KEY) || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const handleTextToFile = () => {
    let text = '>> Planos | Diário de Bordo - Relatório << \n\n'
    plans.map(x => (text += `\n > ${x.description} em ${x.planet.name} \n`))
    return text
  }

  const handleTextFileDownload = () => {
    const text = handleTextToFile()
    return makeTextFile(text)
  }

  const handleJsonFileDownload = () => {
    return makeJsonFile(plans)
  }

  return (
    <>
      <CssBaseline />
      <AppToolbar />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
            Plano | Diário de Bordo
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <div>
                <Typography>
                  Muito obrigado por utilizar o Voyage Logbook Reports {'<3'}
                </Typography>
                <br />
                <Typography>
                  <TouchAppIcon />
                  &nbsp;&nbsp;Clique nos links abaixo para Exportar o relátorio
                  <br />
                  <Button
                    variant='contained'
                    color='primary'
                    href={handleTextFileDownload()}
                    download='plan-report'
                    style={{ margin: '20px 10px' }}
                  >
                    Exportar para TXT
                    <GetAppIcon />
                  </Button>
                  <Button
                    variant='contained'
                    color='secondary'
                    href={handleJsonFileDownload()}
                    download='plan-report'
                  >
                    Exportar para JSON
                    <GetAppIcon />
                  </Button>
                </Typography>
                <br />
                <Typography>
                  <Button component={Link} to='/'>
                    <ArrowBack />
                    Voltar ao Início
                  </Button>
                </Typography>
              </div>
            ) : (
                <>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Voltar
                      </Button>
                    )}
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Concluir' : 'Próximo'}
                    </Button>
                  </div>
                </>
              )}
          </>
        </Paper>
        <Copyright />
      </main>
    </>
  )
}
