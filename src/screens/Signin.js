import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Switch } from 'react-native'
import React, {useState} from 'react'

const Signin = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.signinContainer}>

        <View style={styles.textcontainer}>
            <Text style={styles.signinTitle}>SIGN IN</Text>
            <Text style={styles.signinText}>Complete this setup for best adjustment.</Text>
        </View>

        <View style={styles.signinBodyContainer}>
            <View style={styles.inputViewEmail}>
            <Text style={styles.emailText}>Your Email</Text>
                    <TextInput style={styles.inputText} />
            </View>
            <View style={styles.inputViewPassword}>
            <Text style={styles.passwordText}>Password</Text>
                    <TextInput style={styles.inputText} />
            </View>
{/* Switch Start here */}
            <View style={styles.rememberSection}>
                <Switch
                    trackColor={{false: '#767577', true: '#FE724C'}}
                    thumbColor={isEnabled ? '#FE724C' : '#FFFFFF'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    // style={{flex:0.25}}
                />
                <Text style={styles.rememberText}>Remember Me</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Forgotpassword')}> 
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
{/* Switch Ends here */}
              <TouchableOpacity style={styles.signincontinuebtn} onPress={() => navigation.navigate('Dashboard')}>
                  <Text style={styles.signincontinuebtntext}>SIGN IN</Text>
              </TouchableOpacity>

        </View>  

              <TouchableOpacity style={styles.signinfacebookbtn} >
                  <Text style={styles.signinfacebookbtntext}>SIGN IN WITH FACEBOOK</Text>
              </TouchableOpacity>
              <View style={styles.donthaveaccount}>
                  <Text style={styles.accountText}>I don't have an account?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                      <Text style={styles.signupText}>Sign Up</Text>
                  </TouchableOpacity>

              </View>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
    signinContainer:{
        backgroundColor: '#E8F0FF',
        padding: 20,
        alignItems: 'center',
        flex: 1,
      },
      skipimg:{
        
      },
      textcontainer:{
        marginTop:40,
        marginStart:10,

      },
      signinBodyContainer:{
        backgroundColor: '#FFFFFF',
        marginTop:20,
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
      forgotText:{
        color: 'grey',
        fontSize: 14,
        marginTop:5,
        marginEnd: 0,
        marginStart:65,
        fontWeight: 600,
        
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