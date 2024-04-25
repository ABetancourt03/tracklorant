import { View, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Ranking () {
  return (
    <View style={styles.container}>
      <Header text='Ranking' />

      <View style={styles.content} />

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
