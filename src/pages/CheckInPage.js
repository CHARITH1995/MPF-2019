import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import Toast, { DURATION } from 'react-native-easy-toast';
import LoginButton from '../components/LoginButton';
import tabImg1 from '../../assets/locationcheckin.png';
import HeaderDrawer from '../components/HeaderDrawer'

const text = "Do you want a check In ?";

export default class CheckInPage extends Component {
    render() {
        return (
            <View>
            
               <HeaderDrawer title = "Check In"/>
               <ScrollView>
                <View style={styles.scene} >
                   
                        <View style={styles.ImageCover}>
                            <Image source={tabImg1} style={styles.tabImg} resizeMode="contain" />
                            <Text style={styles.ImageText}>Check In To Forum</Text>
                        </View>
                        <View style={styles.TextCover}>
                            <Text style={styles.tabText}>{text}</Text>
                        </View>
                    
                </View>
                <View style={styles.SendMsgBtnCover}>
                            <TouchableOpacity style={styles.SPTO}
                                onPress={this.handleSendMsg}>
                                <LoginButton buttonText={"Check In"} />
                            </TouchableOpacity>
                            <Toast ref="toast"
                                style={{ backgroundColor: '#1d1438' }}
                                position='top'
                                opacity={0.8}
                                textStyle={{ color: 'white', fontSize: 15, }} />
                        </View>
                </ScrollView>
            </View>





        )
    }
}

let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);
let carWidth = dimensions.width;

const styles = StyleSheet.create({
    scene: {
        flex: 1,
      },

      scene: {
        height: cardHeight * 7,
      },

    ImageCover : {
        marginTop: cardHeight * 1,
        height : cardHeight * 4,
        alignItems : 'center',
        justifyContent : 'center'
    },
    TextCover : {
        paddingLeft : cardHeight/2,
        paddingRight : cardHeight /2,
        paddingBottom : cardHeight/2,
        alignSelf: 'center'
    },
    tabText : {
        fontSize : (cardHeight/3) - 1,
        color : '#727272',
        fontWeight : '400',
        lineHeight : ((cardHeight/3) - 1) * 1.6,
        alignSelf: 'center'
    },
    tabImg : {
        height : cardHeight * 2.5,
    },
    ImageText : {
        marginTop : cardHeight * 0.3,
        fontSize : (cardHeight/3) + 3,
        fontWeight : 'bold',
        color : '#3f3f3f',
    },

    CUPheaderContainer: {
        height: cardHeight * 2.5,
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