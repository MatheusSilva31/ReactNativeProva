import React from "react"
import { View,Text,StyleSheet,Button } from "react-native"

import Header from '../Components/Header'
import Titulo from "../Components/Titulo"
export default props =>{
    return(
        <View style={styles.container}>
            <Header navigation={props.navigation}/>
            <Titulo home="false"  titulo="Content Block"></Titulo>
            <Text>content</Text>
            <Button title='ir para tela2 ' onPress={()=>props.navigation.navigate('PricingTable')}  />
            <Button title='ir pra home' onPress={()=>props.navigation.navigate('Dashboard')}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})