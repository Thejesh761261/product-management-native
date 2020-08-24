import React from "react";
import { globalstyles } from "../globalstyles/styles";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeComponent({navigation}){

    const details= {
        name:'OBB',
        location:'Chennai',
        id:'1'
    }

    return(
        <View style={globalstyles.containerStyle}>
            <Text style={globalstyles.textStyle}>I am at home!</Text>
            <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('Contact')}}      >
                <Text>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('Products')}}      >
                <Text>Products</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('AddProduct')}}      >
                <Text>Add Product</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('Dashboard')}}      >
                <Text>Product Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}