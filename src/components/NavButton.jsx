import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

export default function NavButton ({ text, children: icon, route }) {
  return (
    <TouchableWithoutFeedback>
      <Link to={route}>
        <View style={styles.navButtonContent}>
          {icon}
          <Text style={styles.navButtonText}>{text}</Text>
        </View>
      </Link>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  navButtonContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  navButtonText: {
    color: '#FFFDB9',
    fontWeight: 'bold',
    fontSize: 16
  }
})
