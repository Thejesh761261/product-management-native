import React, { useState, useEffect } from "react";
import { globalstyles } from "../globalstyles/styles";
import { View, Text,TextInput ,StyleSheet,Button} from "react-native";
import axios from 'axios';
import Home from '../components/home';
import { useIsFocused } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";


export default function ContactComponent({navigation}){

    const [products,setProducts] = useState([]);
    const [tempProducts,setTempProducts] = useState([]);
    const isFocused = useIsFocused();
 
  useEffect(() => {
    axios.get('http://localhost:3000/products')
        .then(res => {
            console.log(res.data);
            setProducts(res.data);
            setTempProducts(res.data);
            console.log(products);
            
        })
  }, [isFocused]);

    // useEffect(()=>{
    //     axios.get('http://localhost:3000/products')
    //     .then(res => {
    //         console.log(res.data);
    //         setProducts(res.data);
    //         setTempProducts(res.data);
    //         console.log(products);
            
    //     })
    // },[])

    

    const search = (value) => {
        if (value === '' || value === undefined || value === null)
          setProducts(tempProducts)
        else {
    
          let filterdData = products.filter(data => {
            return Object.values(data).join(" ").toLowerCase().match(event.target.value.toLowerCase())
          })
    
          if (filterdData.length === 0)
            setProducts(tempProducts)
          else
            setProducts(filterdData)
        }
      }

    return(
        
        <ScrollView>
            {/* <View>
            <Text style={globalstyles.textStyle}>Products Details!</Text>
            </View> */}
            <TextInput style={globalstyles.inputSearchBoxStyle} placeholder="search product" onChangeText={value => search(value)}></TextInput>
            <View>
        <Button onPress={() => { navigation.navigate('AddProduct', { id:products[products.length-1].id+1}) }} title="Add Product"  />
        </View>
            {
            products.map(p=>{
                return (
                   
                    <TouchableOpacity onPress={() => { navigation.navigate('Product', { product: p }) }}>
                    <View key={p.id} style={mystyles.card} >
                    
                      <Text style={mystyles.listitem1}>{p.name}</Text>
                      <Text style={mystyles.listitem2}>Unit Price: {p.unitPrice}</Text>
                    </View>
                    </TouchableOpacity>
                   
                   
            )
            })
        
        }
        </ScrollView>
    )
}


const mystyles = StyleSheet.create({
    maincontainer:{
      backgroundColor:'pink',
      flex:1,
      //alignItems:'center',
      //justifyContent:'center'
    },
    listitem1:{
      marginTop:20,
      fontSize:30,
      padding:10,
      color:'purple'
    },
    listitem2:{
        marginTop:10,
        fontSize:20,
        padding:10,
        color:'purple'
      },
    containerStyle:{
        backgroundColor:'goldenrod',
        margin:15,
        padding:10,

    },
    card: {
        borderWidth: 3,
        borderColor: 'grey',
        padding: 10,
       margin:10,
       elevation: 5,
       backgroundColor:"white"
      }
  })