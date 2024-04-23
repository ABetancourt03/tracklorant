import { View, StyleSheet } from 'react-native'

export default function Header ({ children }) {
  return (
    <View style={styles.header}>
      {children}
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
  }
})
