import React from 'react'
import {MainRouter} from './router/MainRouter'
import {Router} from 'react-router-dom'
import {MainTheme} from './theme/MainTheme'

export const JournalApp = () => {
  return (
    <MainTheme>
        <MainRouter />
    </MainTheme>
  )
}
