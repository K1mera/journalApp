import {ImageGallery} from '../components'

import {SaveOutlined} from '@mui/icons-material'
import {Button, Grid, TextField, Typography} from '@mui/material'


export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>July 28, 3150</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 1 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                Save
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                placeholder='title'
                label='Title'
                sx={{ border: 'none', mb: 1 }}
            />
            <TextField 
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder="What's new"
                
                minRows={ 5 }
            />
        </Grid>

        <ImageGallery />

    </Grid>
  )
}
