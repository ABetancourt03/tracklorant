import { View, Text, StyleSheet } from 'react-native'

export default function Header ({ children, text }) {
  return (
    <View style={styles.header}>
      {children}
      {text && <Text style={styles.title}>{text}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#18212A',
    height: 76,
    borderBottomColor: '#FFFDB950',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#FEF7EE',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
