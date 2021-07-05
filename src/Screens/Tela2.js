import React from "react"
import { View,Text,StyleSheet,Button } from "react-native"

import Header from "../Components/Header"

export default props =>{
    return(
        <View style={styles.container}>
            <Header navigation={props.navigation}/>
            <Text>tela2</Text>
            <Button title='ir para tela1' onPress={()=>props.navigation.navigate('Tela1')}  />
            <Button title='ir pra home' onPress={()=>props.navigation.navigate('Home')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})