import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ContactItem from '../components/ContactItem'

const ContactsList = () => {
    const contacts = [
       {
           name : 'Claire Browne',
           number : '91734556633',
           image : require('../../assets/claire.png')
       },

       {
           name : 'Neil Melendez',
           number: '917399349939',
           image : require('../../assets/melendez.jpg')
       },

       {
        name : 'Shaun Murphy',
        number: '917399339539',
        image : require('../../assets/shaun.jpg')
    },

    {
        name : 'Audrey Lim',
        number: '917399839939',
        image : require('../../assets/audrey.jpg')
    },

    {
        name : 'Morgan Reznick',
        number: '917399839909',
        image : require('../../assets/morgan.jpg')
    },

    {
        name : 'Alex Park',
        number: '917399831939',
        image : require('../../assets/park.jpg')
    },

    {
        name : 'Aaron Glassman',
        number: '917392839939',
        image : require('../../assets/glassman.jpeg')
    }
       
    ]
    return (
        <View style = {styles.container}>
            <FlatList 
                data = {contacts}
                renderItem = {({item}) => {
                    return (
                        <ContactItem 
                            name = {item.name}
                            number = {item.number}
                            image = {item.image}
                        />
                    );
                }}
                keyExtractor = {(item) =>item.number}
                />
        </View>
    )
}

export default ContactsList

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})
