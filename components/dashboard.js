import React from "react";
import { globalstyles } from "../globalstyles/styles";
import { View, Text } from "react-native";

export default function DashboardComponent(){
    return(
        <View style={globalstyles.containerStyle}>
            <Text style={globalstyles.textStyle}>I am at Dashboard Page!</Text>
        </View>
    )
}