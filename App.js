import { StatusBar } from 'expo-status-bar'
import { NativeRouter, Routes, Route } from 'react-router-native'
import Home from './src/pages/Home'

export default function App () {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
      </Routes>

      <StatusBar hidden />
    </NativeRouter>
  )
}
