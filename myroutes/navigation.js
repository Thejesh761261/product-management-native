import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "../components/home";
// import AboutComponent from "../components/about";
import { NavigationContainer } from "@react-navigation/native";
import ContactComponent from '../components/contact';
import ProductsComponent from '../components/products';
import ProductComponent from '../components/productDetail';
import AddProductComponent from '../components/addProduct';
import DashboardComponent from '../components/dashboard';
import LoginComponent from '../components/login';

const Stack = createStackNavigator()


function MyStackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inventory' 
             screenOptions={{
                gestureEnabled:true,
                headerStyle:{
                    backgroundColor:'wheat',
                    height:100
                },
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontFamily:'my-custom-font'
                }
                }} 
                           
                                headerMode='float'>
                {/* <Stack.Screen name="About" component={AboutComponent}></Stack.Screen> */}
                <Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
                <Stack.Screen name="Contact" component={ContactComponent}></Stack.Screen>
                <Stack.Screen name="Products" component={ProductsComponent}></Stack.Screen>
                <Stack.Screen name="Product" component={ProductComponent}></Stack.Screen>
                <Stack.Screen name="AddProduct" component={AddProductComponent}></Stack.Screen>
                <Stack.Screen name="Dashboard" component={DashboardComponent}></Stack.Screen>
                <Stack.Screen name="Inventory" component={LoginComponent}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator