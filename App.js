import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { NativeRouter, Routes, Route } from 'react-router-native'

import Home from './src/pages/Home'
import SignIn from './src/pages/Signin'
import Search from './src/pages/Search'
import Matches from './src/pages/Matches'
import Ranking from './src/pages/Ranking'
import Store from './src/pages/Store'

export default function App () {
  return (
    <NativeRouter>
      <View style={{ backgroundColor: '#1B242E' }} />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/signin' Component={SignIn} />
        <Route path='/search' Component={Search} />
        <Route path='/matches' Component={Matches} />
        <Route path='/ranking' Component={Ranking} />
        <Route path='/store' Component={Store} />
      </Routes>

      <StatusBar hidden />
    </NativeRouter>
  )
}
