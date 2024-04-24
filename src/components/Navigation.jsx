import { View, Image, StyleSheet } from 'react-native'
import NavButton from './NavButton'

export default function Navigation () {
  return (
    <View style={styles.nav}>
      <NavButton text='Search' route='/search'>
        <Image
          style={styles.navButtonIcon}
          source={require('../icons/search.png')}
        />
      </NavButton>

      <NavButton text='Matches' route='/matches'>
        <Image
          style={styles.navButtonIcon}
          source={require('../icons/matches.png')}
        />
      </NavButton>

      <NavButton text='Ranking' route='/ranking'>
        <Image
          style={styles.navButtonIcon}
          source={require('../icons/ranking.png')}
        />
      </NavButton>

      <NavButton text='Store' route='/store'>
        <Image
          style={styles.navButtonIcon}
          source={require('../icons/store.png')}
        />
      </NavButton>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#18212A',
    width: '100%',
    height: 76,
    borderTopColor: '#FFFDB950',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  navButtonIcon: {
    width: 24,
    height: 24
  }
})
