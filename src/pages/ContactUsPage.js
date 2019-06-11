import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Dimensions,Platform } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon,Textarea } from 'native-base';
import Toast, { DURATION } from 'react-native-easy-toast';
import HeaderDrawer from '../components/HeaderDrawer'
import LoginButton from '../components/LoginButton';
import Mailer from 'react-native-mail';

export default class ContactUsPage extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            TO:''
        }
    }

    handleSendMsg = () => {
        Mailer.mail({
            subject:`${this.state.name}`,
            recipients: [this.state.To],
            body: `${this.state.address}`,
            isHTML: true,
          }, (error, event) => {
            Alert.alert(
              error,
              event,
              [
                {text: 'Ok', onPress: () => alert('OK: Email Error Response')},
                {text: 'Cancel', onPress: () => alert('CANCEL: Email Error Response')}
              ],
              { cancelable: true }
            )
          });
          this.setState({
              selected2: undefined,
            body:'',
            subject:'',
          })
        this.props.navigation.navigate('DashBoard');
      }

    //   handleName = (text) => {
    //     this.setState({ 
    //         subject: text,
    //     })
    // }

    // handleAddress = (text) => {
    //     this.setState({ 
    //         body: text,
    //     })
    // }

    render() {
        return (
            <View style = {{ flex : 1 }}>
             <View style={styles.statusBarBackground}> 
                </View>
                <HeaderDrawer title = "Contact Us" />
                <ScrollView style={styles.CUPFormContainer} showsVerticalScrollIndicator={false}>
                    <View style={{ height: cardHeight }}>
                        <Text style={styles.SubtitleStyle}>Get help us and support</Text>
                    </View>
                    <View style={{ height : cardHeight * 10 }}>
                        <View style={{ flexDirection: 'row', height : cardHeight * 7, backgroundColor: '#f3f3f3' }}>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 7 }}>
                                <Form>
                                    <Item floatingLabel last >
                                        <Label>Name</Label>
                                        <Input style={styles.inputCover} value={this.state.name} onChangeText={(name) => this.setState({ name })} />
                                    </Item>
                                    <Item floatingLabel last >
                                        <Label>Email</Label>
                                        <Input style={styles.inputCover} value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                                    </Item>
                                    <Textarea  style = {styles.input4} bordered placeholder="Message" />
                                </Form>
                            </View>
                            <View style={{ flex: 1 }}></View>
                        </View>
                        <View style={styles.SendMsgBtnCover}>
                            <TouchableOpacity style={styles.SPTO}
                                onPress={this.handleSendMsg}>
                                <LoginButton buttonText={"SEND MESSAGE"} />
                            </TouchableOpacity>
                            <Toast ref="toast"
                                style={{ backgroundColor: '#1d1438' }}
                                position='top'
                                opacity={0.8}
                                textStyle={{ color: 'white', fontSize: 15, }} />
                        </View>
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
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
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
        height : cardHeight * 15,
        flexDirection: 'column',
        marginLeft: cardHeight * 0.5,
        marginRight: cardHeight * 0.5,
        marginTop: cardHeight * 0.5,
        marginBottom: cardHeight * 0.5,



    },
    SPTO: {
        height: cardHeight * 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SendMsgBtnCover: {
        marginTop: cardHeight * 0.75,
        height: cardHeight * 3,
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
        fontSize: 36,
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
    },
    input4 : {
        backgroundColor : '#f3f3f3',
        borderBottomWidth : 0,
        borderTopWidth : 0,
        borderLeftWidth : 0,
        borderRightWidth : 0,
        height : cardHeight * 3,
        marginTop : 20,
    },
})
