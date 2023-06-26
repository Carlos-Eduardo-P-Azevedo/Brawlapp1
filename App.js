import React, {Component} from"react"
import {View, Text} from"react-native"
import {NavigationContainer} from "@react-navigation/native"
import {Header, createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "./screens/home";
import Geral from "./screens/geral";
import Oquee from "./screens/oqueebrawl";
const Stack = createStackNavigator();

function App(){
  return(<NavigationContainer><Stack.Navigator>
    <Stack.Screen name = "Tela principal" component={HomeScreen} options={{headerTitleAlign:"center"}}/>
    <Stack.Screen name = "Geral" component={Geral} options={{headerTitleAlign:"center"}}/>
    <Stack.Screen name = "O que é Brawl Stars" component={Oquee} options={{headerTitleAlign:"center"}}/>
    </Stack.Navigator></NavigationContainer>)
}
/*
export default class BrawlApp extends Component{
  render(){
    return(<View><HomeScreen/></View>);
  }
}*/

export default App;