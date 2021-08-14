import React from 'react'
import {View, Text , ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

const Login = () => {
    return (
        <ScrollView style = {styles.container}>
            <View  style = {styles.loginContainer} >
                <Text style = {styles.logintext}>Log in</Text>
            </View>

            <View style = {styles.inputContainer}>
                <TextInput
                    style = {styles.input} 
                    placeholder = 'Username'
                />

                <View style = {styles.line}></View>

                <TextInput
                    style = {styles.input} 
                    placeholder = 'Password'
                />

                <View style = {styles.line}></View>

                <TouchableOpacity>
                    <Text style = {styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.button}>
                    <Text>Log in</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.signupContainer}>
                <Text>Don't have account? 
                   
                </Text>

                <TouchableOpacity >
                    <Text style = {styles.signupText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            

           
            
        </ScrollView>
     
    )
}

export default Login

const styles = StyleSheet.create({
    container : {
        margin : 20,
       
    },

    loginContainer : {
        paddingLeft : 40,
        marginVertical : 40,
        flex : 0.2
    },

    logintext : {
        color : '#711be4',
        fontSize : 35,
        fontWeight : '600'
        
    },

    inputContainer : {
       marginVertical : 10
    },

    input : {
        marginHorizontal : 40,
        fontSize : 16,
        fontWeight : '500',
    },

    line : {
        width : '75%',
        height : 2,
        backgroundColor : '#711be4',
        marginHorizontal : 40,
        marginTop : 8,
        marginVertical : 40
        
    },

    forgotPassword : {
        alignSelf : 'flex-end',
        marginHorizontal : 40,
        color : '#7EC8E3'
    },

    buttonContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 50
    },

    button : {
        justifyContent : 'center',
        alignItems : 'center',
        width : '80%',
        height : 60,
        borderRadius : 15,
        backgroundColor : '#711be4' 
    },

    signupContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },

    signupText : {
        justifyContent : 'center',
        alignItems : 'center',
        color : '#711be4',
        fontWeight : '500'
    }
})