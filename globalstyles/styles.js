import { StyleSheet } from "react-native";


export const globalstyles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    },
    containerStyle:{
        padding: 20,
        flex:1
    },
    touchButtonContainer:{
        backgroundColor: 'pink',
        padding:10,
        margin:20,
        borderRadius:5
    },
    inputSearchBoxStyle: {
        padding: 12,
        margin:5,
        backgroundColor: 'white',
        borderColor: '#ced4da',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    inputBoxStyle: {
        padding: 12,
        margin:5,
        backgroundColor: 'white',
        borderColor: '#ced4da',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    headerStyle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    inputBoxStyle: {
        padding: 12,
        margin:5,
        backgroundColor: 'white',
        borderColor: '#ced4da',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    pickerStyle:{
        padding: 8,
        margin:5,
        backgroundColor:'white',
        borderColor: '#ced4da',
        borderStyle: 'solid',
        borderWidth: 1,
       borderRadius: 6
    },
    textinvalidInput: {
        borderColor: 'red',
        padding: 12,
        margin:5,
        backgroundColor: 'white',
       borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    textInvalid:{
        color:'red',
        margin:5
    },
    success:{
        color:'green',
        margin:5
    },
    hidden:{
        display : 'none'
    },
    addProd: {
        color: 'green',
        backgroundColor: 'transparent',
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1,
        margin: 5,
        padding: 10,
        fontWeight: "bold",
        textAlign: "center"
    },
    addProduct:{
        color: 'white',
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1,
        margin: 5,
        padding: 10,
        fontWeight: "bold",
        textAlign: "center",
        width:50
    }
})