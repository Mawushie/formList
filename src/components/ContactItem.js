import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {MaterialCommunityIcons, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons'

const ContactItem = ({name, number, image}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
                <Image source = {image} style = {styles.image}/>
            </View>

            <View style = {styles.detailsContainer}>
                <Text style = {styles.name} numberOfLines ={1}>
                    {name}
                </Text>

                <Text style = {styles.number}>{number}</Text>
            </View>

            <View style = {styles.iconsContainer}>
                <View>
                    <MaterialIcons name ='phone' size = {28} color = '#3bacfd' />
                </View>

                <View>
                    <MaterialCommunityIcons  name = 'message-processing' size = {28} color = '#3bacfd'/>
                </View>

                <View>
                    <SimpleLineIcons  name = 'options-vertical' size = {24} color = 'grey'/>
                </View>
            </View>
        </View>
    )
}

export default ContactItem

const styles = StyleSheet.create({
    container : {
        height : 100,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
    },

    imageContainer : {
        flex : 0.2,
        justifyContent : 'center',
        alignItems : 'center'
    },

    detailsContainer :{
        flex : 0.4,
        paddingLeft : 5
    },

    iconsContainer : {
        flex : 0.4,
        flexDirection : 'row',
        justifyContent : 'space-around'
    },

    image : {
        width : 55,
        height : 55,
        borderRadius : 55
    },

    name : {
        fontSize : 23,
        fontWeight : 'bold'
    },

    number : {
        color : '#0f0f0f',
        fontSize : 19
    }
})
