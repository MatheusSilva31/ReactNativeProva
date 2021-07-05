import React from 'react';
import { TextInput,StyleSheet,Text,View   } from 'react-native';

export default (props)=>{
    return(
        <>
        <Text style={styles.estiloTexto} > {props.titulo}</Text>
        
        <View style={styles.estilo1} >
            <TextInput style={styles.estilo} placeholder={props.name}></TextInput>
        </View>
  
        </>
    )
}

const styles = StyleSheet.create({
    estilo:{
        width: '90%',
        height: 40,
        paddingLeft: 3,
        marginBottom: '3%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderBottomColor: 'grey',
    },
    estilo1:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:3,
    },
    estiloTexto:{
        marginLeft:13,
        marginBottom:2,
    }
})
