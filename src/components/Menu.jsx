import { View, Image } from 'react-native'
import { useState } from 'react'

export default function Menu () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View>
      <Image
        style={{
          width: 40,
          height: 40
        }}
        source={require('../icons/menu.png')}
      />
    </View>
  )
}
