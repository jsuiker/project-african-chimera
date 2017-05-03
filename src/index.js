
import React from 'react'
import { Component } from 'react-native'
import { Provider } from 'react-redux'

// import { app } from './modules'
import { owner, user, investor } from './modules'

import createStore from './createStore'

const store = createStore()

const Main = () => {
  return (
    <Provider store={store}>
      <user.App />
    </Provider>
  )
}

export default Main