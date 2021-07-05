import React from "react"
import { View,Text,StyleSheet,TouchableOpacity,TextInput} from "react-native"
import  Icon  from "react-native-vector-icons/FontAwesome"

export default props =>{
    return(
        <View style={styles.container}>
           <TouchableOpacity onPress={()=>props.navigation.openDrawer()} >
               <Icon name='bars' size={30}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
                <Icon name='user-circle' size={30}/>
           </TouchableOpacity>
           {/* <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
                <Icon name='user' size={30}/>
           </TouchableOpacity> */}
           <View style={styles.container1}>
					<TextInput placeholder="Search here..." style={styles.input} />
					<TouchableOpacity>
						<Icon name='search' size={28} style={styles.icon} />
					</TouchableOpacity>
		    </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingTop:20,
    },
    container1:{
		
		flexDirection:'row',
		height:40,
		justifyContent:'center',
		backgroundColor: '#cecece',
		borderRadius: 8,
		paddingHorizontal: 10,
	},

	input: {
		backgroundColor: '#cecece',
		padding:5,
		width:300,	
	},
})