import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import { StyleSheet } from 'react-native'

const Signup = () => {

    const [inputForm , setInputForm] = useState(
                                     {username: '', email : '', password : '', passwordAgain : ''})

    const handleonChange = (name, text)=>{
        setInputForm({...inputForm , [name] : text})
    }

    const handleSubmit = () => {
		console.log(inputForm);
	};

    return (
        <ScrollView style = {styles.container}>
            <View  style = {styles.signupContainer} >
                <Text style = {styles.signup}>Sign up</Text>
            </View>


            <View style = {styles.inputContainer}>
                <TextInput
                    style = {styles.input} 
                    placeholder = 'Username'
				    autoCorrect={false}
				    autoCapitalize="words"
				    onChangeText={(text) => {
					handleOnChange('username', text);
				    }}
				    value={inputForm.username}
                />

                <View style = {styles.line}></View>

                <TextInput
                    style = {styles.input} 
                    placeholder = 'Email'
                    autoCompleteType="email"
                    autoCorrect={false}
				    autoCapitalize="words"
				    onChangeText={(text) => {
					handleOnChange('email', text);
				    }}
				    value={inputForm.email}
                />

                <View style = {styles.line}></View> 

                <TextInput
                    style = {styles.input} 
                    placeholder = 'Password'
                    secureTextEntry={true}
				    autoCompleteType="password"
				    autoCapitalize="none"
				    autoCorrect={false}
				    onChangeText={(text) => {
					handleOnChange('password', text);
				    }}
				    value={inputForm.password}
                />

                <View style = {styles.line}></View>

                <TextInput
                    style = {styles.input} 
                    placeholder = 'Password again'
                    secureTextEntry={true}
				    autoCompleteType="password"
				    autoCapitalize="none"
				    autoCorrect={false}
				    onChangeText={(text) => {
					handleOnChange('password', text);
				    }}
				    value={inputForm.passwordAgain}
                />  

                <View style = {styles.line}></View>

            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.button}>
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.loginContainer}>
                <Text>You already have an account?
                   
                </Text>

                <TouchableOpacity  onPress={handleSubmit}>
                    <Text style = {styles.signupText}>Log in</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container : {
        margin : 20,
       
    },

    signupContainer : {
        paddingLeft : 40,
        marginVertical : 40,
        flex : 0.2
    },

    signup : {
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

    loginContainer : {
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
