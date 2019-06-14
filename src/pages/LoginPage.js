import React, { Component } from 'react'
import axios from 'axios';
import { DrawerActions } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import Toast, { DURATION } from 'react-native-easy-toast'
import AsyncStorage from '@react-native-community/async-storage';
import Hamburger from '../../assets/ham.png'
import LoginButton from '../components/LoginButton';
import Alert from '../components/alert';
// const LPcenterImage = require('../assets/LogoV.png');

export default class LoginPage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            drawerLockMode: 'locked-closed'
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
            jwt: '',
            showAlert: '',
            usernameValidate : false,
            pwValidate : false
        }

    }


    componentDidMount=()=> {
        SplashScreen.hide();
        this._retrieveData();
    }

    handleLogin = () => {
        if(this.state.username.length == 0 && this.state.password.length == 0){
            this.setState({usernameValidate : true,pwValidate : true})
        }else{
            if(this.state.username.length == 0){
                this.setState({usernameValidate : true})
            }else if(this.state.password.length == 0){
                this.setState({pwValidate : true})
            }else{
                this.setState({usernameValidate : false,pwValidate : false})
                axios.post('https://mpf.gov.mv/wp-json/jwt-auth/v1/token', {
                "username":this.state.username,
                "password":this.state.password
                // "username":"mpfguest",
                // "password":"mpf2019maldives"
                }).then(response => {
                    if (response.data.token) {
                        this._storeData(response.data.token);
                        this.setState({
                            username:'',
                            password:'',
                            message:'successfully logged In'
                        })
                        this.refs.toast.show('Login Succeed');
                    }
                }).catch(err => {
                    this.setState({
                        username:'',
                        password:'',
                        message:' Error!! '
                    })
                    this.refs.toast.show('Login Failed');
                });
    
            }
        }
    }

    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            this.props.navigation.navigate('Home');
          }
        } catch (error) {
          console.log(error)
        }
      };

    _storeData = async (data) => {
        try {
          await AsyncStorage.setItem('token',data);
          this.props.navigation.navigate('Home');
        } catch (error) {
          console.log("error")
        }
      };


    render() {
            return(
                <View style={styles.LPContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.LPheaderContainer} >
                        <View style={styles.LPhmbrgrCover}>
                        </View>
                        <View style={styles.LPTopTextCover}>
                            <Text style={styles.LPheader}>Welcome</Text>
                            <Toast ref="toast"
                                    style={{ backgroundColor: 'white', }}
                                    position='top'
                                    opacity={0.8}
                                    textStyle={{ color: '#1A5961', fontSize: 15,fontWeight : 'bold' }} />
                        </View>
                    </View>
                    <View style={styles.LPcardContainer} >
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 5 }}>
                            <Form>
                                <Item floatingLabel last >
                                    <Label>Username</Label>
                                    <Input style={styles.inputCover} value={this.state.username} onChangeText={(username) => this.setState({ username, usernameValidate : false })} />
                                </Item>
                                {this.state.usernameValidate ? (<Text style = {{ fontSize : 11, color : 'red' }}>The username field can not be empty</Text>) : (<Text></Text>)}
                                <Item floatingLabel last >
                                    <Label>Password</Label>
                                    <Input style={styles.inputCover} value={this.state.password} secureTextEntry={true} onChangeText={(password) => this.setState({ password, pwValidate : false })} />
                                </Item>
                                {this.state.pwValidate ? (<Text style = {{ fontSize : 11, color : 'red' }}>The password field can not be empty</Text>) : (<Text></Text>)}
                            </Form>
                            <View style={styles.loginBtnCover}>
                                <TouchableOpacity style={styles.SPTO}
                                    onPress={this.handleLogin}>
                                    <LoginButton buttonText={"Login"} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.LoginLinkCover}>
                                <Text style={styles.linkNorm}>Forgot Password ? <Text style={styles.linkHL}>Reset</Text></Text>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}></View>
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
        height: (Platform.OS === 'ios') ? 18 : 0,
        backgroundColor: "#1A5961",
    },
    LPContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    LPheaderContainer: {
        height: cardHeight * 3.5,
        backgroundColor: '#1A5961',
        flexDirection: 'column',
    },
    LPhmbrgrCover: {
        flex: 1,
        backgroundColor: '#1A5961',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    LPHam: {
        height: cardHeight * 0.5,
        width: cardHeight * 0.5,
        marginLeft: cardHeight * 0.3,
    },
    LPTopTextCover: {
        flex: 1.8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    LPcardContainer: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor : 'green'
    },
    LPheader: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: cardHeight * 0.5,
    },
    inputCover: {
        marginTop: cardHeight / 3,
        height: cardHeight,
        // borderWidth : 2,
    },
    loginBtnCover: {
        marginTop: cardHeight * 0.75,
        height: cardHeight * 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoginLinkCover: {
        height: cardHeight * 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    linkNorm: {
        color: '#1d1438',
        textAlign: 'center',
    },
    linkHL: {
        fontWeight: 'bold',
        color: '#1d1438',
        textAlign: 'center',
    },
    BottomTextCover: {
        marginTop: cardHeight * 1.6,
        marginBottom: cardHeight * 0.5,
        height: cardHeight * 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bottomText: {
        fontSize: 9,
        textAlign: 'center',
    },
    SPTO: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


});