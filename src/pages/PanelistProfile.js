import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, Dimensions,Platform } from 'react-native'
import Header from '../components/Header';
import president from "../../assets/president.jpg";
import foreign from "../../assets/foreign.jpg";
import finance from "../../assets/finance.jpg";

import profileImg from '../../assets/dp.jpeg'

// const text = "There are a couple of ways to style your elements in React Native You can use the style property to add the styles inline. However, this is not the best practice because it can be hard to read the code.In this chapter, we will use the Stylesheet for styling";
// const email ="prasanna.charith32@gmail.com";
// const name = "Ali Ibrahim";
// const ministry = "Minister Of Tourism";

let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);

export default class PanelistProfile extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount (){
        
    //     fetch("https://www.patpat.lk/api/customer.php?", {
    //             method: "post",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body:JSON.stringify(user)
    //         }).then(function (response) {
    //             return response.json();
    //         }).then((details) => {
    //            this.setState({
    //                userData:details
    //            })
    //         })
    // }
    render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    const bio = navigation.getParam('bio');
    const dept = navigation.getParam('dept');
    const pos = navigation.getParam('pos');
    const image = navigation.getParam('image');
        return (
            <View style={styles.LPContainer}>
             <View style={styles.statusBarBackground}> 
                </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                <Header title="Speaker Profile"/>
                    </View>
                    <View>
                        <View style={{ padding: 25 , alignItems: 'center' }}>
                            <View style={{ alignItems: 'center'}}>
                                <View style = {{ alignItems : 'center' }}>
                                    <Image source={image} style ={{height:cardHeight*5 ,width:cardHeight * 4.5}} resizeMode="contain" />
                                </View>
                                <Text style={{ fontWeight: 'bold', paddingTop: 20,paddingBottom : 12, fontSize: 18 }}>{name}</Text>
                                <Text style={{paddingTop: 5,paddingBottom : 5,paddingLeft : 15,paddingRight : 15, fontSize: 15, backgroundColor: '#1A5961', color: '#ffffff'}}>{pos}</Text>         
                            </View>
                            <View>
                                <Text style = {{paddingTop:40 ,fontSize:15, paddingBottom:10, color : 'black', fontWeight : 'bold', borderBottomWidth : 2, borderBottomColor : '#1A5961' }}>Bio</Text>
                                <Text style ={{ fontSize:15,paddingTop:20,alignSelf:'center' }}>{bio}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
      },
    LPContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    LPcardContainer: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor : 'green'
    },
})
