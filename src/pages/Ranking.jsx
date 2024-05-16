import { useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, StyleSheet, Image, Text } from 'react-native'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

import { RIOT_API_KEY } from '@env'

const act = '4539cac3-47ae-90e5-3d01-b3812ca3274e'
const url = `https://latam.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${act}?size=100&startIndex=0&api_key=${RIOT_API_KEY}`

export default function Ranking () {
  const [ranking, setRanking] = useState([])

  const getRanking = async () => {
    const res = await fetch(url)
    const data = res.json()

    setRanking(data)
  }

  useEffect(() => {
    getRanking()
  }, [])

  return (
    <View style={styles.container}>
      <Header text='Leaderboard'>
        <Image
          style={{
            width: 48,
            height: 48
          }}
          source={require('../icons/logo.png')}
        />
      </Header>

      <SafeAreaView style={styles.content}>
        <FlatList
          data={ranking}
          renderItem={({ item }) => <Text>{item.gameName}</Text>}
          keyExtractor={item => item.puuid}
        />
      </SafeAreaView>

      <Navigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B242E'
  },
  content: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  text: {
    color: '#FEF7EE',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
