import React, {Component} from"react"
import {View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from"react-native"

export default class HomeScreen extends Component{
  render(){
    return(<View style={styles.quadroPrincipal}><ImageBackground source={require("../assets/teladefundobrawl.png")} style={styles.background}>
        <TouchableOpacity style={styles.stylebutton} onPress ={()=>{
            this.props.navigation.navigate("Geral")
        }}><Text>Geral</Text></TouchableOpacity></ImageBackground></View>);
  }
} const styles=StyleSheet.create({quadroPrincipal:{
    flex: 1
}, background:{
    flex: 1,
    width: 400
}, stylebutton:{
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 350,
    width: "60%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 4
}})