import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image,Platform } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import Toast, { DURATION } from 'react-native-easy-toast';
import AsyncStorage from '@react-native-community/async-storage';
import LoginButton from '../components/LoginButton';
import tabImg1 from '../../assets/logouticon.png';
import CancelButton from '../components/CancelButton';
import HeaderDrawer from '../components/HeaderDrawer'

const text = "Are you sure want to Logout ?";

export default class LogoutPage extends Component {
    constructor(props){
        super(props);

    }
    Logout = async () => {
        try {
          const value = await AsyncStorage.removeItem('token');
          if (value === null) {
            this.props.navigation.navigate('Login');
          }
        } catch (error) {
          console.log(error)
        }
      };
    render() {
        return (
            <View>
             <View style={styles.statusBarBackground}>
                </View>
                <HeaderDrawer title = "Logout"/>
                <View style={styles.scene} >

                    <View style={styles.ImageCover}>
                        <Image source={tabImg1} style={styles.tabImg} resizeMode="contain" />
                    </View>
                    <View style={styles.TextCover}>
                        <Text style={styles.tabText}>{text}</Text>
                    </View>

                </View>
                <View style={styles.SendMsgBtnCover}>
                    <TouchableOpacity style={styles.SPTO}
                        onPress={()=>this.Logout()}>
                        <LoginButton buttonText={"Logout"} />
                    </TouchableOpacity>
                    <Toast ref="toast"
                        style={{ backgroundColor: '#1d1438' }}
                        position='top'
                        opacity={0.8}
                        textStyle={{ color: 'white', fontSize: 15, }} />
                </View>
                <View style={styles.SendMsgBtnCover2}>
                    <TouchableOpacity style={styles.SPTO}
                        onPress = {() => this.props.navigation.navigate('Home')}>
                        <CancelButton buttonText={"Cancel"} />
                    </TouchableOpacity>
                    <Toast ref="toast"
                        style={{ backgroundColor: '#1d1438' }}
                        position='top'
                        opacity={0.8}
                        textStyle={{ color: 'white', fontSize: 15, }} />
                </View>
            </View>





        )
    }
}

let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);
let carWidth = dimensions.width;

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
      },
    scene: {
        flex: 1,
    },

    scene: {
        height: cardHeight * 6,
    },

    ImageCover: {
        marginTop: cardHeight * 1,
        height: cardHeight * 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextCover: {
        paddingLeft: cardHeight / 2,
        paddingRight: cardHeight / 2,
        paddingBottom: cardHeight / 4,
        alignSelf: 'center'
    },
    tabText: {
        fontSize: (cardHeight / 3) - 1,
        color: '#727272',
        fontWeight: '400',
        lineHeight: ((cardHeight / 3) - 1) * 1.6,
        alignSelf: 'center'
    },
    tabImg: {
        height: cardHeight * 2.5,
    },
    ImageText: {
        marginTop: cardHeight * 0.3,
        fontSize: (cardHeight / 3) + 3,
        fontWeight: 'bold',
        color: '#3f3f3f',
    },

    CUPheaderContainer: {
        height: cardHeight * 3.5,
        backgroundColor: '#1A5961',
        flexDirection: 'column',

    },
    LPcardContainer: {
        flex: 8,
        flexDirection: 'row',
        backgroundColor: '#1A5961'
    },
    CUPFormContainer: {
        height: cardHeight * 9,
        flexDirection: 'column',
        marginLeft: cardHeight * 0.5,
        marginRight: cardHeight * 0.5,
        marginTop: cardHeight * 0.5,
        marginBottom: cardHeight * 0.5,



    },
    SPTO: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SendMsgBtnCover: {
        marginTop: cardHeight * 0.75,
        height: cardHeight * 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SendMsgBtnCover2: {
        height: cardHeight * 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputCover: {
        marginTop: cardHeight / 3,
        height: cardHeight,
        // borderWidth : 2,
    },
    CUPhmbrgrCover: {
        flex: 1,
        backgroundColor: '#1A5961',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    CUPTopTextCover: {
        flex: 1.8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    CUPheader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: cardHeight * 0.5,
    },
    SubtitleStyle: {
        fontSize: 14,
        color: '#a9a6a6',
        alignSelf: 'center'
    },
    FormLabel: {
        flex: 3,
        alignItems: 'stretch',
        height: cardHeight * 1,
        backgroundColor: 'green'
    }
})