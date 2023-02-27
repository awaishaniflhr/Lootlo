import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React , { useEffect,useState} from 'react'

const Onboarding3 = ({navigation}) => {
  const [interrupt,setInterrupt] = useState(false)
  useEffect(()=>{
   if(!interrupt){
     setTimeout(()=>{
       navigation.navigate('Signin')
     },3000)
   }
  },[])
 
  const onClick=()=>{
   setInterrupt(true)
     navigation.navigate('Signin')
   
  }
  return (
    <View style={styles.Onboarding3Container}>
       <TouchableOpacity style={styles.skipimg} onPress={() => navigation.navigate('Signin')}>
            <Image 
                source={require('../../assets/skip.png')} 
                style={{width: 41, height: 21, marginTop:10, marginEnd:10, }}
                resizeMode= {'contain'}
            />
        </TouchableOpacity>
        <View style={styles.Onboarding3BodyContainer}>
                <Image 
                    source={require('../../assets/Onboarding3ProfileImg.png')} 
                    style={{width: 310 , height: 344, marginTop:50, }}
                    resizeMode= {'contain'}
                />
            <Text style={styles.Onboarding3Title}>Quick Food Delivery "Onboarding 3"</Text> 
            <Text style={styles.Onboarding3Text}>Loved the class! Such beautiful land and collective impact infrastructure social entrepreneur.</Text> 
                <Image 
                    source={require('../../assets/slider.png')} 
                    style={{width: 41, height: 21, marginTop:40, marginBottom:30, }}
                    resizeMode= {'contain'}
                />
            <TouchableOpacity style={styles.Onboarding3facebookbtn}>
                <Text style={styles.Onboarding3facebooktext}>SIGN IN WITH FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Onboarding3continuebtn} onPress={onClick}>
                <Text style={styles.Onboarding3continuebtntext}>CONTINUE</Text>
            </TouchableOpacity>
        </View>    
    </View>
  )
}

export default Onboarding3

const styles = StyleSheet.create({
    Onboarding3Container:{
        backgroundColor: '#FFFFFF',
        padding: 20,
        flex: 1,
      },
      skipimg:{
        
      },
      Onboarding3BodyContainer:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      Onboarding3Title:{
        color: '#171718',
        fontSize: 20,
        textAlign: 'center',
      },
      Onboarding3Text:{
        color: '#3A4F66',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
      },

      Onboarding3facebookbtn:{
        width: 320,
        height: 50,
        backgroundColor: '#4167B0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
      Onboarding3facebooktext:{
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
      },
      Onboarding3continuebtn:{
        width: 320,
        height: 50,
        marginTop:20,
        backgroundColor: '#FE724C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
      Onboarding3continuebtntext:{
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
      },
})