import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React , { useEffect,useState} from 'react'

const Onboarding2 = ({navigation}) => {
  const [interrupt,setInterrupt] = useState(false)
  useEffect(()=>{
   if(!interrupt){
     setTimeout(()=>{
       navigation.navigate('Onboarding3')
     },3000)
   }
  },[])
 
  const onClick=()=>{
   setInterrupt(true)
     navigation.navigate('Onboarding3')
   
  }
  return (
    <View style={styles.Onboarding2Container}>
       <TouchableOpacity style={styles.skipimg}>
            <Image 
                source={require('../../assets/skip.png')} 
                style={{width: 41, height: 21, marginTop:10, marginEnd:10, }}
                resizeMode= {'contain'}
            />
        </TouchableOpacity>
        <View style={styles.Onboarding2BodyContainer}>
                <Image 
                    source={require('../../assets/Onboarding2ProfileImg.png')} 
                    style={{width: 310 , height: 344, marginTop:100, }}
                    resizeMode= {'contain'}
                />
            <Text style={styles.Onboarding2Title}>Onboarding 2</Text> 
            <Text style={styles.Onboarding2Text}>Loved the class! Such beautiful land and collective impact infrastructure social entrepreneur.</Text> 
                <Image 
                    source={require('../../assets/slider.png')} 
                    style={{width: 41, height: 21, marginTop:40, marginBottom:30, }}
                    resizeMode= {'contain'}
                />
            <TouchableOpacity style={styles.Onboarding2continuebtn} onPress={onClick}>
                <Text style={styles.Onboarding2continuebtntext}>CONTINUE</Text>
            </TouchableOpacity>
        </View>    
    </View>
  )
}

export default Onboarding2

const styles = StyleSheet.create({
    Onboarding2Container:{
        backgroundColor: '#FFFFFF',
        padding: 20,
        flex: 1,
      },
      skipimg:{
        
      },
      Onboarding2BodyContainer:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      Onboarding2Title:{
        color: '#171718',
        fontSize: 20,
        textAlign: 'center',
    
      },
      Onboarding2Text:{
        color: '#3A4F66',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
      },
      Onboarding2continuebtn:{
        width: 320,
        height: 50,
        backgroundColor: '#FE724C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
      Onboarding2continuebtntext:{
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
      }
})