import {Google} from '@mui/icons-material'
import {Link as RouterLink} from 'react-router-dom'
import {Button, Grid, Link, TextField, Typography} from '@mui/material'
import React from 'react'
import {AuthLayout} from '../layout/AuthLayout'

export const SignUpPage = () => {
  return (
    <AuthLayout title='Sign up'>
      <form>
        <Grid container>
          <Grid item xs={12}
            sx={{mt: 2}}>
            <TextField
              label="Full name"
              type='text'
              placeholder='John Doe'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}
            sx={{mt: 2}}>
            <TextField
              label="Email"
              type='email'
              placeholder='abc@mail.com'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}
            sx={{mt: 2}}>
            <TextField
              label="Password"
              type='password'
              placeholder='******'
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={12}>
              <Button
                variant='contained'
                fullWidth
              >
                Create account
              </Button>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
              >
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid> */}
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
