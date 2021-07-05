import React from "react"
import { View,Text,StyleSheet,ScrollView} from "react-native"
import { DrawerItems } from "react-navigation-drawer"

export default props =>{
    return(
        <ScrollView>
            <View>
                <Text>OLÁ MUNDO</Text>
            </View>
            <DrawerItems {...props}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})