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
            <View>
            <Text style={globalstyles.textStyle}>Products Details!</Text>
            </View>
            <TextInput style={globalstyles.inputSearchBoxStyle} placeholder="search product" onChangeText={value => search(value)}></TextInput>
            <View>
        <Button style={{width:"10"}} onPress={() => { navigation.navigate('AddProduct', { id:products[products.length-1].id+1}) }} title="Add Product" />
        </View>
            {
            products.map(p=>{
                return (
                    <View key={p.id} style={globalstyles.containerStyle}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Product', { product: p }) }}>
                      <Text style={mystyles.listitem}>{p.name}</Text>
                      {/* <Text style={mystyles.listitem}>{p.unitPrice}</Text> */}
                    </TouchableOpacity>
                    </View>
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
    listitem:{
      marginTop:20,
      fontSize:30,
      backgroundColor:'goldenrod',
      padding:20,
      color:'purple'
    }
  })