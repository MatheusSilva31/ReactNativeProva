import React from 'react'
import { Text,StyleSheet,   } from 'react-native'

export default (props)=>{

    if(props.home=="false"){
        return(
            <Text style={styles.estilo} >{props.titulo}</Text>
        )
    }else {
        return(
            <>
            <Text style={styles.estilo2} >{props.titulo}</Text>
            <Text>{props.Subtitulo}</Text>
            </>
        )

    }
    
  
}
   


const styles = StyleSheet.create({
    estilo:{
        marginVertical:10,
        marginHorizontal:5,
        color:"purple",
        fontWeight:"bold",
        fontSize:30,
        
    },
    estilo2:{
        marginVertical:10,
        marginHorizontal:5,
        color:"black",
        fontWeight:"bold",
        fontSize:30,
       

    },
    estilo3:{
        marginVertical:10,
        marginHorizontal:5,
        color:"black",
        fontSize:15,
        
        
    }
})