import React from "react"
import { View,Text,StyleSheet,Button } from "react-native"

import Header from '../Components/Header'
import Titulo from "../Components/Titulo"
export default props =>{
    return(
        <View style={styles.container}>
            <Header navigation={props.navigation}/>
            <Titulo home="false"  titulo="Content Block"></Titulo>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})