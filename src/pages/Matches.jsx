import { View, Text, Image, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Matches () {
  return (
    <View style={styles.container}>
      <Header>
        <Image
          style={{
            width: 48,
            height: 48
          }}
          source={require('../icons/logo.png')}
        />
      </Header>

      <View style={styles.content}>
        <Text style={styles.title}>Matches</Text>
      </View>

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
