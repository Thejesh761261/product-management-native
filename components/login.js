import React, { useState } from "react";
import { View, Text, TouchableOpacity,TextInput, StyleSheet } from "react-native";
import Axios from "axios";

export default function LoginComponent({navigation}){
    
    const[email,setEmail]=useState('');
    const[pwd,setPwd]=useState('');
    const[loginError,setError]=useState(false);
    let emailChange=(value)=>{
    
        setEmail(value)
    }
    let pwdChange=(value)=>{
        setPwd(value)
    }
    const submit=()=>{
        console.log(email)
       if(email!==''&&pwd!==''){
        Axios.get('http://localhost:3000/login?id='+email).then(response=>{
                   if(pwd===response.data[0].password){
                    navigation.navigate('Products')
                }     
        },
        error=>{
            setError(true);
        })
       }
      
    }   
    return(
        
    
        <View style={styles.containerStyle}>
   
            <Text style={styles.textStyle}>Product Inventory System</Text>
            <Text style={styles.textStyle}>Login</Text>
           
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email Address" 
            placeholderTextColor="black"
            onChangeText={emailChange}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
          secureTextEntry
            style={styles.inputText}
            placeholder="password" 
            placeholderTextColor="black"
            onChangeText={pwdChange}
            />
        </View>
       
            <TouchableOpacity style={styles.lgnbutton}
                              onPress={()=>submit()}      >
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
        </View>
    )
    }

    const styles = StyleSheet.create({
        textStyle:{
            fontWeight:"bold",
            fontSize:25,
            color:"purple",
            marginBottom:40
        },
        inputView:{
            width:"80%",
            backgroundColor:"white",
            height:50,
            marginBottom:20,
            padding:20,
            justifyContent:"center"
        },
        inputText:{
            height:100,
            color:"black"
        },
        lgnbutton:{
            width:"80%",
            backgroundColor:"grey",
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:20,
            marginBottom:10
        },
        button:{
            color:"white",
            fontSize:20,
        },
        containerStyle:{
            flex: 1,
            backgroundColor: '',
            alignItems: 'center',
            justifyContent: 'center',    
        }
    })