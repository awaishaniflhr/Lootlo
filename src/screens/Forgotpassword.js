import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Switch } from 'react-native'
import React, {useState} from 'react'

const Forgotpassword = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.signinContainer}>

        <View style={styles.textcontainer}>
            <Text style={styles.signinTitle}>FORGOT PASSWORD</Text>
            <Text style={styles.signinText}>Enter your email or phone to request a password reset</Text>
        </View>

        <View style={styles.signinBodyContainer}>
            <View style={styles.inputViewEmail}>
            <Text style={styles.emailText}>Your Email</Text>
                    <TextInput style={styles.inputText} />
            </View>


              <TouchableOpacity style={styles.signincontinuebtn} onPress={() => navigation.navigate('Signin')}>
                  <Text style={styles.signincontinuebtntext}>SPEND NOW</Text>
              </TouchableOpacity>

        </View>  

              <View style={styles.donthaveaccount}>
                  <Text style={styles.accountText}>Having Problem?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                      <Text style={styles.signupText}>Need Help</Text>
                  </TouchableOpacity>

              </View>
    </View>
  )
}

export default Forgotpassword

const styles = StyleSheet.create({
    signinContainer:{
        backgroundColor: '#E8F0FF',
        padding: 20,
        flex: 1,
      },
      skipimg:{
        
      },
      textcontainer:{
        marginTop:40,
        marginStart:20,

      },
      signinBodyContainer:{
        backgroundColor: '#FFFFFF',
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 20,
      },

      signinTitle:{
        color:'#3A4F66',
        fontSize:22,
        fontWeight:700,

      },
      signinText:{
        color:'#171718',
        fontSize:16,
        fontWeight:700,
      },
      emailText:{
        color:'darkgrey',
        fontSize:16,
        fontWeight:500,
        marginStart:10,
        marginTop:20,
      },
      passwordText:{
        color:'darkgrey',
        fontSize:16,
        fontWeight:500,
        marginStart:10,
        marginTop:20,
      },
      inputText:{
        backgroundColor: '#E8F0FF',
        marginStart: 10,
        marginEnd: 10,
        marginTop: 10,
        width: 300,
        borderRadius: 15,
        paddingStart: 20,
        paddingEnd: 10,
        color: '#3A4F66'
      },
      rememberSection:{
        flexDirection: 'row',
        marginTop:15, 
        
      },
      rememberText:{
        color: 'darkgrey',
        
        fontSize: 14,
        marginTop:5,
      },

      signincontinuebtn:{
        width: 300,
        height: 50,
        marginTop:20,
        marginBottom: 25,
        backgroundColor: '#FE724C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
      signincontinuebtntext:{
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
      },
      signinfacebookbtn:{
        width: 300,
        height: 50,
        marginTop:40,
        marginBottom: 25,
        backgroundColor: '#4167B0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
      signinfacebookbtntext:{
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
      },
      donthaveaccount:{
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      accountText:{
        color: 'darkgrey',
        fontSize: 16,
      },
      signupText:{
        color: '#FE724C',
        fontSize: 18,
        marginStart: 7,
      }


})