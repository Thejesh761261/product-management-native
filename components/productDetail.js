import React, { useEffect } from "react";
import { globalstyles } from "../globalstyles/styles";
import { View, Text, StyleSheet,Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ProductComponent(props){

    console.log(props.route.params.product);
    const product = props.route.params.product;
    return(
        <View style={styles.card}>
            <Text style={styles.header}><b>Product Details of {product.name}!</b></Text>
            <View style={globalstyles.containerStyle}>
                <ScrollView>
                <Text style={styles.detail}> <b>Product Name :</b> {product.name}</Text>
                <Text style={styles.detail}><b>Product Category :</b> {product.category}</Text>
                <Text style={styles.detail}> <b>Product Stock : </b>{product.quantity}</Text>
                <Text style={styles.detail}><b>Product Description : </b> {product.description}</Text>
                <Text style={styles.detail}> <b>Product Color :</b> {product.color}</Text>
                <Text style={styles.detail}> <b>Product Size :</b> {product.size}</Text>
                <Text style={styles.detail}> <b>Product Rating :</b> {product.rating}</Text>
                <Text style={styles.detail}> <b>Product Replenisment Value:</b> {product.replenishment_value}</Text>
                <Text style={styles.detail}> <b>Product Reorder Value :</b> {product.replenishment_value}</Text>
                <View style={styles.buttons}>
                <Button title="Edit" />
                <Button title="Delete" />
                </View>
                </ScrollView>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 5
    },
    detail:{
        fontSize:15,
        padding:5,
        fontWeight:500
    },
    b1: {
        color:'pink'
    },
    header:{
        fontSize:20,
        color:'purple'
    },
    container:{
        padding: 20,
        flex:1,
        backgroundColor:'lightgrey'

    },
    buttons:{
        
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    bt1:{
        width:10,
        display:'inline'
    },
    card: {
        borderWidth: 3,
        borderColor: 'grey',
        padding: 10,
       marginTop:10,
       marginBottom:10,
       elevation: 5,
       backgroundColor:"#fff"
      }

})