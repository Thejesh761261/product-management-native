import React from 'react';

import Navigator from './myroutes/navigation';



export default function App(){
  
  return (
   
     <Navigator />
   
  )
}





// import React, { useState } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';


// export default function App(){
// // [stateName, function-Who-Will-Change-This-State] = useState('intialValue')
//  const [friends, setFriends]   = useState([
//                                             {
//                                               name:'OBB',
//                                               key:'1',
//                                               location:'Chennai',
//                                               myid: '1'
//                                             },
//                                             {
//                                               name:'CAS',
//                                               key:'2',
//                                               location:'Bengaluru',
//                                               myid: '2'
//                                             },
//                                             {
//                                               name:'OWIOH',
//                                               key:'3',
//                                               location:'Japan',
//                                               myid: '3'
//                                             },
//                                             {
//                                               name:'BNP',
//                                               key:'4',
//                                               location:'Ahmedabad',
//                                               myid: '4'
//                                             },
//                                             {
//                                               name:'OBB',
//                                               key:'5',
//                                               location:'Chennai',
//                                               myid: '5'
//                                             },
//                                             {
//                                             name:'CAS',
//                                             key:'6',
//                                             location:'Bengaluru',
//                                             myid: '6'
//                                           },
//                                           {
//                                             name:'OWIOH',
//                                             key:'7',
//                                             location:'Japan',
//                                             myid: '7'
//                                           },
//                                           {
//                                             name:'BNP',
//                                             key:'8',
//                                             location:'Ahmedabad',
//                                             myid: '8'
//                                           },
//                                           {
//                                             name:'OBB',
//                                             key:'9',
//                                             location:'Chennai',
//                                             myid: '9'
//                                           },
//                                           {
//                                             name:'CAS',
//                                             key:'10',
//                                             location:'Bengaluru',
//                                             myid: '10'
//                                           },
//                                           {
//                                             name:'OWIOH',
//                                             key:'11',
//                                             location:'Japan',
//                                             myid: '11'
//                                           },
//                                           {
//                                             name:'BNPP',
//                                             key:'12',
//                                             location:'Ahmedabad',
//                                             myid: '12'
//                                           },
//                                       ])
 

//   const listItemPressed = (id) =>{
//     console.log(id);
//     setFriends((prevFriends)=>{
//       console.log(prevFriends)
//       //One with myid == id will be removed from friends state
//       let newFriends = prevFriends.filter(friend => friend.myid != id)
//       return newFriends
//     })

//   }

//   return (
//     <View style={mystyles.maincontainer}>
//      <FlatList 
//           //numColumns={2}
//           keyExtractor={item => item.myid}
//           data={friends}
//           renderItem={(f)=>{
//             console.log(f);
//             return (
//                     <TouchableOpacity onPress={()=>{listItemPressed(f.item.myid)}}>
//                       <Text style={mystyles.listitem}>{f.item.myid}.{f.item.name}</Text>
//                     </TouchableOpacity>
//             )
//           }}
//      />
        
//     </View>
//   )
// }

// const mystyles = StyleSheet.create({
//   maincontainer:{
//     backgroundColor:'pink',
//     flex:1,
//     //alignItems:'center',
//     //justifyContent:'center'
//   },
//   listitem:{
//     marginTop:20,
//     fontSize:65,
//     backgroundColor:'goldenrod',
//     padding:20,
//     color:'purple'
//   }
// })


// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>Thejesh First React Native application</Text>
//       <Text>Test mobile view</Text>
//       <Text>Changes made in new React app</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'skyblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
