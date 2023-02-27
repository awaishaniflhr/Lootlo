import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Switch, StatusBar, FlatList, SafeAreaView, } from 'react-native'
import React, {useState} from 'react'



const DATA = [
      {
        name: "Iida Niskanen",
        email: "iida.niskanen@gmail.com",
        position: "Sales Manager",
        photo: "../../assets/object.png"
    },
    {
      id: '02',
      title: 'Second Item',
    },
    {
      id: '03',
      title: 'Third Item',
    },
    {
      id: '04',
      title: 'Fourth Item',
    },
  ];

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image source={require('../../assets/object.png')}  style={{height:80, width:80}}></Image>
    </View>
  );

const Dashboard = ({navigation}) => {


  return (
    <View style={styles.signinContainer}>

        <View style={styles.textcontainer}>
            <Text style={styles.signinTitle}>Welcome Foody!</Text>
        </View>

        {/* <View style={styles.searchContainer}>
            <View style={styles.inputViewEmail}>
                
                <TextInput style={styles.inputText} />
            </View>
        </View>*/}
        <View style={styles.inputViewEmailOrignal}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/search.png')}
                    style={{width: 20, height: 20, marginTop:14,}}
                    resizeMode= {'contain'}
                />
            </TouchableOpacity>
            
            <TextInput style={styles.inputText}
            placeholder="Find Your Food" 
            placeholderTextColor="#9D9D9D"/>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/setting.png')}
                    style={{width: 20, height: 20, marginTop:14, marginStart:8,}}
                    resizeMode= {'contain'}
                />
            </TouchableOpacity>
        </View>

        {/* flatlist start here */}
            <SafeAreaView style={styles.container}>
            <Text style={styles.signinTitle}>Nearby Place</Text>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item title={item.name} />}
                    // renderItem={({item}) => <Item title={item.email} />}
                    keyExtractor={item => item.id}
                    Image source={require("../../assets/object.png")} 
                />
            </SafeAreaView>

        {/* flatlist ends here */}
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    signinContainer:{
        backgroundColor: '#FFFFFF',
        padding: 20,
        flex: 1,
      },

      textcontainer:{
        marginTop:40,
        marginStart:10,

      },
      signinBodyContainer:{
        backgroundColor: '#darkgrey',
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
      inputViewEmail:{

      },
      inputViewEmailOrignal:{
        width:"100%",
        backgroundColor:'#E8F0FF',
        borderRadius:25,
        flexDirection: 'row',
        height:50,
        marginBottom:15,
        borderRadius:15,
        marginTop: 20,
        paddingStart:30,
      },
      inputViewEmail:{
        width:"100%",
        backgroundColor:'#FFFFFF',
        borderRadius:25,
        height:50,
        marginBottom:15,
        borderRadius:15,
        borderWidth:1,
        borderColor:'#5461FA',
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        width:"75%",
        color:"grey",
        fontFamily: 'Poppins',
        marginStart:10,
        fontSize:17,
      },
      item: {
        backgroundColor: '#E8F0FF',
        padding: 20,
        marginVertical: 8,
        borderRadius:15,
      },
      title: {
        fontSize: 32,
      },
})