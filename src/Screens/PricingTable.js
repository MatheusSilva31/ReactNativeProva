import React from "react"
import { View,Text,StyleSheet,Button } from "react-native"

import Header from "../Components/Header"
import Titulo from "../Components/Titulo"

export default props =>{
    return(
        <View style={styles.container}>
            <Header navigation={props.navigation}/>
            <Titulo home="false"  titulo="Pricing tables"></Titulo>
            <Text>tela2</Text>
            <Button title='ir para tela1' onPress={()=>props.navigation.navigate('DefaultCards')}  />
            <Button title='ir pra home' onPress={()=>props.navigation.navigate('Dashboard')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})