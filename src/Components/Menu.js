import React from "react"
import { View,Text,StyleSheet,ScrollView} from "react-native"
import { DrawerItems } from "react-navigation-drawer"

export default props =>{
    return(
        <ScrollView>
            <View>
                <Text style={styles.texto}> Collective</Text>
            </View>
            <DrawerItems {...props}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    texto:{
        fontSize:50,
        color:'purple'
    }
})