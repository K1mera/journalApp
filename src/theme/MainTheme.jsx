import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { themeApp } from './themeApp'

export const MainTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ themeApp }>
        <CssBaseline />

        { children }
    </ThemeProvider>
  )
}
