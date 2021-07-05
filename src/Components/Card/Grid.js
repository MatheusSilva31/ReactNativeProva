import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './Card'
import Img from '../../../assets/img/cart.jpg'





export default props => {
    return (
        <>
        
        <View style={styles.container}>
           <Card img={Img} title="Card title that wraps to a new line" 
           subtitle="TeThis is a longer card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.ste"/>   
        </View>

        <View style={styles.container}>
           <Card img={Img} title="Card title " 
           subtitle="This card has supporting text below as a natural lead-in to additional
           content.
         "/>   
        </View>

        <View style={styles.container}>
           <Card img={Img} title="Card title" 
           subtitle="This is another card with title and supporting text below. This card has
           some
           additional content to make it slightly taller overall."/>   
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },container1: {
    
    }

})