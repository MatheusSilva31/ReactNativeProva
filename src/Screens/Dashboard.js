import React from "react"
import { View,Text,StyleSheet,Button } from "react-native"
import Constants from 'expo-constants'


import Header from '../Components/Header'
import Titulo from "../Components/Titulo"
import CardHome from "../Components/CardHome"

export default props =>{
    return( 
        <View style={styles.container}>
            <Header navigation={props.navigation}/>
            <Titulo home="true"  titulo="Hi John,Welcome back!" Subtitulo="Very detailed & featured admin."></Titulo>
            
            <CardHome IconName="user" title='29.75 M' subtitle="Toral users"></CardHome>
            <CardHome IconName="eye" title='51.25 K' subtitle="dayly visitors"></CardHome>
            <CardHome IconName="cloud" title='166.89 M' subtitle="Downloads"></CardHome>
            <CardHome IconName="shopping-cart" title='1,250k' subtitle="Purchased"></CardHome>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight
    }
})