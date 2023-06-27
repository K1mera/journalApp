import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import {AuthLayout} from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from 'react';
import { checkingAuth, startGoogleSignIn, startLoginWithCredentials } from '../../store/auth'

export const LoginPage = () => {

  const dispatch = useDispatch();
  

  const { email, password, onInputChange, reset } = useForm({
    email: 'khimera@holly.com',
    password: '1214145'
  });

  const { status, errorMessage } = useSelector( state => state.auth )
  
  const isAuth = useMemo( () => status === 'checking', [status])

  // useEffect(() => {
  //   dispatch( checkingAuth )
  // }, [])
  

  const onSubmit = ( event ) => {
    event.preventDefault()
    // dispatch( checkingAuth() )
    dispatch( startLoginWithCredentials({ email, password }) )
    // console.log( status );
  }

  const onGoogleSign = () => {
    dispatch( startGoogleSignIn() )
    console.log('Google auth');
  }

  return (
    <AuthLayout title='Login'>
      <form 
        onSubmit={ onSubmit }
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={12}
            sx={{mt: 2}}>
            <TextField
              label="email"
              type='email'
              placeholder='abc@mail.com'
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid item xs={12}
            sx={{mt: 2}}>
            <TextField
              label="password"
              type='password'
              placeholder='******'
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid container spacing={2} sx={{mb: 0.2, mt: 1}} display={ !!errorMessage ? '' : 'none' }>
            <Grid 
                item 
                xs={12} 
                >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                disabled={ isAuth }
                fullWidth
                type='submit'
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                disabled={ isAuth }
                fullWidth
                onClick={ onGoogleSign }
              >
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container
            direction='row'
            justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/sign-up">
              Create an account
            </Link>
          </Grid>

        </Grid>

      </form>

    </AuthLayout>
        

    
  )
}
