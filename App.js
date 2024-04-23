import { StatusBar } from 'expo-status-bar'
import { NativeRouter, Routes, Route } from 'react-router-native'

import Home from './src/pages/Home'
import SignIn from './src/pages/Signin'

export default function App () {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/signin' Component={SignIn} />
      </Routes>

      <StatusBar hidden />
    </NativeRouter>
  )
}
