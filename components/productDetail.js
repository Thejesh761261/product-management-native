import React, { useEffect } from "react";
import { globalstyles } from "../globalstyles/styles";
import { View, Text } from "react-native";

export default function ProductComponent(props){

    console.log(props.route.params.product);
    const product = props.route.params.product;
    return(
        <View style={globalstyles.containerStyle}>
            <Text style={globalstyles.textStyle}>ProductComponent!</Text>
            <View style={globalstyles.containerStyle}>
                <Text> Product Name : {product.name}</Text>
                <Text> Product Category : {product.category}</Text>
                <Text> Product Stock : {product.quantity}</Text>
                <Text> Product Description : {product.description}</Text>
                <Text> Product Color : {product.color}</Text>
                <Text> Product Size : {product.size}</Text>
                <Text> Product Rating : {product.rating}</Text>
                <Text> Product Replenisment Value: {product.replenishment_value}</Text>
                <Text> Product Reorder Value : {product.replenishment_value}</Text>

                
            </View>
        </View>
    )
}