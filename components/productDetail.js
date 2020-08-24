import React, { useEffect } from "react";
import { globalstyles } from "../globalstyles/styles";
import { View, Text, StyleSheet } from "react-native";

export default function ProductComponent(props){

    console.log(props.route.params.product);
    const product = props.route.params.product;
    return(
        <View style={globalstyles.containerStyle}>
            <Text style={globalstyles.headerStyle}>Product Details!</Text>
            <View style={globalstyles.containerStyle}>
                <Text style={styles.detail}> Product Name : {product.name}</Text>
                <Text style={styles.detail}>Product Category : {product.category}</Text>
                <Text style={styles.detail}> Product Stock : {product.quantity}</Text>
                <Text style={styles.detail}> Product Description : {product.description}</Text>
                <Text style={styles.detail}> Product Color : {product.color}</Text>
                <Text style={styles.detail}> Product Size : {product.size}</Text>
                <Text style={styles.detail}> Product Rating : {product.rating}</Text>
                <Text style={styles.detail}> Product Replenisment Value: {product.replenishment_value}</Text>
                <Text style={styles.detail}> Product Reorder Value : {product.replenishment_value}</Text>

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 5
    },
    detail:{
        padding:5,
        fontWeight:500
    }
})