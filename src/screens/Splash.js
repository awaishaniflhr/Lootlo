import { StyleSheet, Text, View, Image } from 'react-native'
import React , { useEffect} from 'react'

const Splash = ({navigation}) => {
  useEffect(() => { const timer = setTimeout(()=>{ navigation.navigate('Onboarding1')}, 3000);}, []);
  return (
    <View style={styles.lootloSplashContainer}>
      <Image 
      style={styles.logoimage}
      source={require('../../assets/logo.png')} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  lootloSplashContainer:{
    backgroundColor: '#FE724C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoimage:{}
})