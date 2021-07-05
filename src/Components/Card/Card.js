import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Botao from '../Botao'

export default props => {

    return (
        <View style={styles.container}>
            <View style={styles.viewImage}>
            <Image source={props.img} style={styles.image}/>
            
           </View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>


        </View>
  
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        width: '100%',
        alignItems: 'center'
    },
    viewImage:{
        width: 100,
        height: 200,
    },
    image: {
        width: 100,
        height: 200,
    },
    title: {
        fontSize: 20,
        
    },
    subtitle: {
        fontSize:16,
        
    },

})