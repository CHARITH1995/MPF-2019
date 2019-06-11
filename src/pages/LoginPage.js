import React, { Component } from 'react'
import axios from 'axios';
import { DrawerActions } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import Toast, { DURATION } from 'react-native-easy-toast'
import localStorage from '../../services/localStorage'
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
            username: null,
            password: null,
            message: '',
            jwt: '',
            showAlert: '',
        }

    }

    // showAlert = () => {
    //     this.setState({
    //         showAlert: true,
    //     });
    // };

    // hideAlert = () => {
    //     this.setState({
    //         showAlert: false,
    //         message:''
    //     });
    // };

    componentDidMount() {
        SplashScreen.hide();
    }
    handleLogin = () => {
        axios.post('https://mpf.gov.mv/wp-json/jwt-auth/v1/token', {
            "username": this.state.username,
            "password": this.state.password
        }).then(response => {
            if (response.data.token) {
                localStorage.saveItem('token',response.data.token);
                this.route();
                this.setState({
                    username:'',
                    password:'',
                    message:'successfully logged In'
                })
            }
        }).catch(err => {
            this.setState({
                username:'',
                password:'',
                message:' Error!! '
            })
        });
        //this.showAlert();
    }

    route = () => {
        this.props.navigation.navigate('Home');
    }


    render() {
        if(localStorage.loadJWT.value !=null){
            return(
                this.props.navigate.navigation('Home')
            )
        }else{
            return(
                <View style={styles.LPContainer}>
                {/* <Alert show ={this.state.showAlert}
                msg ={this.state.message}
                hide = {this.hideAlert}
                /> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.LPheaderContainer} >
                        <View style={styles.LPhmbrgrCover}>
                        </View>
                        <View style={styles.LPTopTextCover}>
                            <Text style={styles.LPheader}>Welcome</Text>
                        </View>
                    </View>
                    <View style={styles.LPcardContainer} >
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 5 }}>
                            <Form>
                                <Item floatingLabel last >
                                    <Label>Username</Label>
                                    <Input style={styles.inputCover} value={this.state.username} onChangeText={(username) => this.setState({ username })} />
                                </Item>
                                <Item floatingLabel last >
                                    <Label>Password</Label>
                                    <Input style={styles.inputCover} secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                                </Item>
                            </Form>
                            <View style={styles.loginBtnCover}>
                                <TouchableOpacity style={styles.SPTO}
                                    onPress={() => this.props.navigation.navigate('Home')}>
                                    <LoginButton buttonText={"Login"} />
                                </TouchableOpacity>
                                <Toast ref="toast"
                                    style={{ backgroundColor: '#1d1438' }}
                                    position='top'
                                    opacity={0.8}
                                    textStyle={{ color: 'white', fontSize: 15, }} />
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