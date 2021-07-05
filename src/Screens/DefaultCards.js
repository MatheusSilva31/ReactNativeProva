import React from "react"
import { View,Text,StyleSheet,Button, ScrollView } from "react-native"

import Header from '../Components/Header'
import Titulo from "../Components/Titulo"
import Grid from "../Components/Card/Grid"

export default props =>{
    return(
        <ScrollView>
        <View style={styles.container}>
            <Header navigation={props.navigation}/>
            <Titulo home="false"  titulo="Card Collmns"></Titulo>
            
                <Grid></Grid>
            
           
            <Text>tela1</Text>
            <Button title='ir para tela2 ' onPress={()=>props.navigation.navigate('PricingTable')}  />
            <Button title='ir pra home' onPress={()=>props.navigation.navigate('Dashboard')}  />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})