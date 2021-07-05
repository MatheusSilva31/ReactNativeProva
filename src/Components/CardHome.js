import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'


export default props => {

    return (
        <View style={styles.container}>
            <View style={styles.MainVIew}>
                <Icon name={props.IconName} size={60}/>
                <View style={styles.ViewText}> 
                    <Text style={styles.title} >{props.title} </Text>
                    <Text style={styles.subtitle}>{props.subtitle}</Text>
                </View>

             </View>
        </View>
  
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
     
       
        alignItems: 'center'
    },
    MainVIew:{
        width:"100%",
        height:100,
        flexDirection:'row',
        justifyContent:'space-between',
        
        marginTop:10,
        borderWidth:2,
        padding:5,
        paddingTop:14,
        marginBottom:5,
        margin:20
    },
    ViewText:{
        
        height:40,
        justifyContent:'space-around',
     
    },
   
    title: {
        fontSize: 20,
        
    }
})