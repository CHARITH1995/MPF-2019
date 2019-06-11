import React, { Component } from "react";
import { Text, View, Image, Button, TouchableOpacity } from 'react-native'
import Splash from "../../assets/splash.png";


export default class SplashPage extends Component {
    constructor(props){
        super(props);
    }
    handlePress = () => {
        this.props.navigation.navigate('Login');
      }
    render() {
        return (
            <View style={{ flex: 2, backgroundColor: '#1A5961', alignItems: 'center', justifyContent: 'center' }} >
                <Image source={require('../../assets/splash.png')}/>
                <TouchableOpacity style={{marginTop:'20%' ,backgroundColor: '#ffffff' , borderRadius:50 }} onPress={this.handlePress} >
                    <Text style={{alignItems: 'center', justifyContent: 'center', padding:15 , fontSize:30}} >Take me Tour</Text>
                </TouchableOpacity>
            </View>        
        )
    }
}
