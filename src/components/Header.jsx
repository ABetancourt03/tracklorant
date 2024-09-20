import { View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import Menu from './Menu'

export default function Header ({ children, text }) {
  return (
    <View style={styles.header}>
      {children}
      {text && <Text style={styles.title}>{text}</Text>}
      <Menu />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#18212A',
    height: 76 + Constants.statusBarHeight,
    borderBottomColor: '#FFFDB950',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: Constants.statusBarHeight
  },
  title: {
    color: '#FFFDB9',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
