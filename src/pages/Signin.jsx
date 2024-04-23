import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function SignIn () {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 64,
          height: 64
        }}
        source={require('../icons/logo.png')}
      />
      <Text style={styles.title}>Welcome to Tracklorant</Text>
      <Text style={styles.paragraph}>Login with your Riot account to see stats, your match history, store and more.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
        <Image
          style={{
            width: 20,
            height: 20
          }}
          source={require('../icons/riot.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B242E',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#FEF7EE',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 10
  },
  paragraph: {
    color: '#8A8A8A',
    fontFamily: 'Roboto',
    fontWeight: '600',
    textAlign: 'center',
    width: '75%',
    paddingBottom: 35
  },
  button: {
    backgroundColor: '#E22F3C',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  }
})
