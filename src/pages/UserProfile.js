import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, Dimensions,Platform } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Icon } from 'native-base';
import Header from '../components/Header';

const text = "This is User Profile .There are a couple of ways to style your elements in React Native You can use the style property to add the styles inline. However, this is not the best practice because it can be hard to read the code.In this chapter, we will use the Stylesheet for styling";
const email = "email@email.com";
const name = "FirstName LastName";
const ministry = "Ministry";
export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
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
        return (
            <View style={styles.LPContainer}>
             <View style={styles.statusBarBackground}> 
                </View>
                <View>
                        <Header
                        title ="User Profile"/>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ padding: 25, alignItems: 'center' }}>
                            <View style={{ alignItems: 'center' }}>
                                <View>
                                    <Image source={require('../../assets/dp.jpeg')} style={{ alignItems: 'center', height: cardHeight * 3, width: cardHeight * 3, borderRadius: cardHeight * 1.5 }} />
                                </View>
                                <Text style={{ fontWeight: 'bold', paddingTop: 10,paddingBottom : 8, fontSize: 15 }}>{name}</Text>
                                <Text style={{paddingTop: 5,paddingBottom : 5,paddingLeft : 15,paddingRight : 15, fontSize: 15, backgroundColor: '#1A5961', color: '#ffffff'}}>{ministry}</Text> 
                            </View>
                            <View>
                                {/* <View style={{flexDirection:'row' , padding:10}} >
                                        <Text>Media </Text>
                                        <Text style={{textAlign:'right'}}>{email}</Text>
                                </View> */}
                                <Text style={{ paddingTop: 40, paddingBottom: 10,borderBottomWidth : 2, borderBottomColor : '#1A5961',color : 'black', fontWeight : 'bold',  }}>Email</Text>
                                <Text style={{textAlign:'left', paddingTop : 10}}>{email}</Text>
                                {/*Text style={{ paddingTop: 40, paddingBottom: 10, color : 'black', fontWeight : 'bold',  }}>Bio</Text>*/}
                                <Text style={{ fontSize: 15, backgroundColor: '#FAFAFA', padding: 15 }}>{text}</Text>
                            </View>
                        </View>
                    </ScrollView>
            </View>
        )
    }
}
let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
      },
    LPContainer: {
        flex: 1,
        // alignItems: 'center',
        flexDirection: 'column',
    },
    LPcardContainer: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor : 'green'
    },
})
