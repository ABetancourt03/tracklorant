import { View, Image, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Store () {
  return (
    <View style={styles.container}>
      <Header text='Store'>
        <Image
          style={{
            width: 48,
            height: 48
          }}
          source={require('../icons/logo.png')}
        />
      </Header>

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
  title: {
    color: '#FEF7EE',
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 25
  }
})
