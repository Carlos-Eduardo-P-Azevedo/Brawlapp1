import React, {Component} from"react"
import {View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from"react-native"

export default class Oquee extends Component{
    render(){
        return(<View style={styles.quadroPrincipal}><ImageBackground source={require("../assets/teladefundobrawl.png")} style={styles.background}>
        <Text style={styles.text}>O que é Brawl Starts?</Text>
        </ImageBackground></View>)
    }
} const styles=StyleSheet.create({quadroPrincipal:{
    flex: 1
}, background:{
    flex: 1,
    width: 400
}, text: {
    marginLeft: 40,
    marginTop: 50,
    fontSize: 18,
    fontFamily: "Arial"
}})