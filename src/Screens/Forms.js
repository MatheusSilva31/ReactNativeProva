import React from "react"
import { View,Text,StyleSheet,Button } from "react-native"

import Header from '../Components/Header'
import Titulo from "../Components/Titulo"
import Botao from '../Components/Botao';


import InputComponente from '../Components/InputComponente'

export default props =>{
    return(
        <View style={styles.container}>
              
            <Header navigation={props.navigation}/>
            <Titulo home="false" titulo="Forms" ></Titulo>
            
            <InputComponente titulo="email"name="email"/>
            <InputComponente titulo="Password"name="Password"/>
            <InputComponente titulo="Adress"name="1234 Main St"/>
            <InputComponente titulo="Adress 2"name="Apartment, Studio, or floor"/>
            <InputComponente titulo="City"name=""/>
            <InputComponente titulo="Zip"name=""/>
            
            <View style={styles.botao}>
                <Botao titulo="Sign In"></Botao>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    botao:{
        width:100,
        height:100,
        marginLeft:13,
    }
})