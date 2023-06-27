import {Google} from '@mui/icons-material'
import {Link as RouterLink} from 'react-router-dom'
import {Alert, Button, Grid, Link, TextField, Typography} from '@mui/material'
import { useMemo, useState } from 'react'
import { useForm } from '../../hooks'
import {AuthLayout} from '../layout/AuthLayout'
import { useDispatch, useSelector } from 'react-redux'
import { startSignUpWithCredentials } from '../../store/auth'

const formData = {
    email: '',
    password: '',
    displayName: ''
}



const formValidations = {
        email: [ (value) => value.includes('@'),'Email not valid.'],
        password: [ (value) => value.length >= 6, 'Password must be longer than 6 characters.'],
        displayName: [ (value) => value.length >= 2, 'Name must be longer than 2 characters.']
    }

export const SignUpPage = () => {

  const [formSub, setformSub] = useState(false)
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( state => state.auth );
  const checkingAuth = useMemo( () => status === 'authenticated', [status])

  const {
     formState, displayName, email, password, onInputChange,
     displayNameValid, passwordValid, emailValid, formValid 
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault()
    setformSub( true )

    if ( !formValid ) return

    dispatch( startSignUpWithCredentials(formState) )
    console.log( formState );
  }

  return (
    <AuthLayout title='Sign up'>
      <form 
        onSubmit={ onSubmit }
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={12}
            sx={{mt: 2}}>
            <TextField
              label="Full name"
              type='text'
              placeholder='John Doe'
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSub }
              helperText={ displayNameValid }
              />
          </Grid>
          <Grid item xs={12}
            sx={{mt: 2}}>
            <TextField
              label="Email"
              type='email'
              placeholder='abc@mail.com'
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSub }
              helperText={ emailValid }
              />
          </Grid>
          <Grid item xs={12}
            sx={{mt: 2}}>
            <TextField
              label="Password"
              type='password'
              placeholder='******'
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSub }
              helperText={ passwordValid }
            />
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid 
                item 
                xs={12} 
                display={ !!errorMessage ? '' : 'none' }>
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                disabled={ checkingAuth }
                type='submit'
                variant='contained'
                fullWidth
              >
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container
            direction='row'
            justifyContent='end'>
              <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Log in
            </Link>
          </Grid>

        </Grid>

      </form>

    </AuthLayout>



  )
}
