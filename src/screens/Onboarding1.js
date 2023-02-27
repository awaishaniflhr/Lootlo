import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React , { useEffect, useState} from 'react'

const Onboarding1 = ({navigation}) => {
  const [interrupt,setInterrupt] = useState(false)
 useEffect(()=>{
  if(!interrupt){
    setTimeout(()=>{
      navigation.navigate('Onboarding2')
    },3000)
  }
 },[])

 const onClick=()=>{
  setInterrupt(true)
    navigation.navigate('Onboarding2')
  
 }
  return (
    <View style={styles.Onboarding1Container}>
       <TouchableOpacity style={styles.skipimg}>
            <Image 
                source={require('../../assets/skip.png')} 
                style={{width: 41, height: 21, marginTop:10, marginEnd:10, }}
                resizeMode= {'contain'}
            />
        </TouchableOpacity>
        <View style={styles.Onboarding1BodyContainer}>
            <Image 
                    source={require('../../assets/Onboarding1ProfileImg.png')} 
                    style={{width: 310 , height: 344, marginTop:100, }}
                    resizeMode= {'contain'}
                />
        
            <Text style={styles.Onboarding1Title}>Onboarding 1</Text> 
            <Text style={styles.Onboarding1Text}>Loved the class! Such beautiful land and collective impact infrastructure social entrepreneur.</Text> 
                <Image 
                    source={require('../../assets/slider.png')} 
                    style={{width: 41, height: 21, marginTop:40, marginBottom:30, }}
                    resizeMode= {'contain'}
                />
            <TouchableOpacity style={styles.Onboarding1continuebtn} onPress={onClick}>
                <Text style={styles.Onboarding1continuebtntext}>CONTINUE</Text>
            </TouchableOpacity>
        </View>    
    </View>
  )
}

export default Onboarding1

const styles = StyleSheet.create({
    Onboarding1Container:{
        backgroundColor: '#FFFFFF',
        padding: 20,
        flex: 1,
      },
      skipimg:{
        
      },
      Onboarding1BodyContainer:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      Onboarding1Title:{
        color: '#171718',
        fontSize: 20,
        textAlign: 'center',
    
      },
      Onboarding1Text:{
        color: '#3A4F66',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
      },
      Onboarding1continuebtn:{
        width: 320,
        height: 50,
        backgroundColor: '#FE724C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
      Onboarding1continuebtntext:{
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
      }
})