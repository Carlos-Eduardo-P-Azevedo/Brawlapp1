import React, {Component} from"react"
import {View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from"react-native"

export default class Geral extends Component{
  render(){
    return(<View style={styles.quadroPrincipal}><ImageBackground source={require("../assets/teladefundobrawl.png")} style={styles.background}>
        <TouchableOpacity style={styles.stylebutton1} onPress={()=> this.props.navigation.navigate("O que é Brawl Stars")}><Text>O que é Brawl Stars?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.stylebutton2}><Text>Mecânicas</Text></TouchableOpacity>
        <TouchableOpacity style={styles.stylebutton3}><Text>Modo de progressão</Text></TouchableOpacity></ImageBackground></View>);
  }
} const styles=StyleSheet.create({quadroPrincipal:{
    flex: 1
}, background:{
    flex: 1,
    width: 400
}, stylebutton1:{
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 350,
    width: "60%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 4,
    fontFamily: "Arial"
}, stylebutton2:{
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    width: "60%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 4,
    fontFamily: "Arial"
}, stylebutton3:{
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    width: "60%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 4,
    fontFamily: "Arial"
}})