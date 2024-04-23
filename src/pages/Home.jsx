import { View, Text, Image, StyleSheet } from 'react-native'

import Header from '../components/Header'
import { Link } from 'react-router-native'

export default function Home () {
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
        <Text style={styles.title}>Patch Notes</Text>
        <Link to='/signin'>
          <Text>SignIn</Text>
        </Link>
      </View>
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
  },
  logo: {
  }
})
