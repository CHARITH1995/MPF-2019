import React, { Component } from 'react'
import { DrawerActions } from 'react-navigation-drawer';

import { StyleSheet,Text, View, Button,Dimensions, Image,TouchableOpacity,Platform  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import CenterImg from '../../assets/questions.png';
import AsyncStorage from '@react-native-community/async-storage';
import whyImg from '../../assets/dashboard/why.png'
import speakerImg from '../../assets/dashboard/speaker.png'
import agendaImg from '../../assets/dashboard/agenda.png'
import paperImg from '../../assets/dashboard/papers.png'
import LogistiicalImg from '../../assets/dashboard/LInfo.png'
import panelImg from '../../assets/dashboard/panelist.png'
import HeaderImg from '../../assets/logoWhite.png'
import HeaderNavImg from '../../assets/Header.png'

export default class HomePage extends Component {
    render() {
        return (
            <View style = {styles.DashBoard}>
             <View style={styles.statusBarBackground}> 
                </View>
                <View style = {styles.HeaderCover}>
                        <View style = {styles.HeaderBtnCover}>
                            {/* <Icon
                                style={{ padding: 25, alignSelf: 'flex-start', color: '#ffffff' }}
                                onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                                name="md-menu" size={30} /> */}
                                 <TouchableOpacity style = {{ padding: 25,}} onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                                    <Image source = {HeaderNavImg} style={styles.HeaderNavImg} resizeMode="contain"/>
                                </TouchableOpacity>
                        </View>
                        <View style = {styles.HeaderImgCover}>
                            <Image source = {HeaderImg} style={styles.HeaderImg} resizeMode="contain"/>
                            <Text style = {styles.HeaderText}>Maldivian Partnership Forum 2019</Text>
                        </View>
                </View>
                <View style = {styles.BodyCover}>
                    <TouchableOpacity style = {styles.CenterImgCover} onPress = {() => this.props.navigation.navigate('Question')}>
                        <Image source = {CenterImg} style={styles.CenterImg} resizeMode="contain"/>
                        <Text style = {styles.centerText}>Ask questions from speakers</Text>
                    </TouchableOpacity>
                    <View style = {styles.BtnOuterCover}>
                        <View style = {{ flex : 9, flexDirection : 'row'}}>
                        <View style = {{flex : 0.75}}></View>
                        <View style = {{flex : 15, flexDirection : 'column', borderBottomWidth : 2, borderBottomColor : 'white', borderTopColor : 'white', borderTopWidth : 2}}>
                            <View style = {{flex : 1, flexDirection : 'row'}}>
                                <View style = {{flex : 1, flexDirection : 'column'}}>
                                    <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('Attend')}>
                                    <View style = {styles.BtnImgCover}>
                                        <Image source = {whyImg} style={styles.BtnImg} resizeMode="contain"/>
                                    </View>
                                    <View style = {styles.BtnTextCover}>
                                        <Text style = {styles.BtnText}>Why Maldives</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{flex : 1, flexDirection : 'column'}}>
                                    <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('PanelistList')}>
                                    <View style = {styles.BtnImgCover}>
                                        <Image source = {speakerImg} style={styles.BtnImg} resizeMode="contain"/>
                                    </View>
                                    <View style = {styles.BtnTextCover}>
                                        <Text style = {styles.BtnText}>Speakers</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{flex : 1, flexDirection : 'column'}}>
                                    <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('AgendaPage')}>
                                    <View style = {styles.BtnImgCover}>
                                        <Image source = {agendaImg} style={styles.BtnImg} resizeMode="contain"/>
                                    </View>
                                    <View style = {styles.BtnTextCover}>
                                        <Text style = {styles.BtnText}>Agenda</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style = {{flex : 1, flexDirection : 'row'}}>
                                <View style = {{flex : 1, flexDirection : 'column'}}>
                                    <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('ThematicPapersPage')}>
                                    <View style = {styles.BtnImgCover}>
                                        <Image source = {paperImg} style={styles.BtnImg} resizeMode="contain"/>
                                    </View>
                                    <View style = {styles.BtnTextCover}>
                                        <Text style = {styles.BtnText}>Thematic Papers</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{flex : 1, flexDirection : 'column'}}>
                                    <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogisticalInfo')}>
                                    <View style = {styles.BtnImgCover}>
                                        <Image source = {LogistiicalImg} style={styles.BtnImg} resizeMode="contain"/>
                                    </View>
                                    <View style = {styles.BtnTextCover}>
                                        <Text style = {styles.BtnText}>Logistical Information</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{flex : 1, flexDirection : 'column'}}>
                                    <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('Overview')}>
                                    <View style = {styles.BtnImgCover}>
                                        <Image source = {panelImg} style={styles.BtnImg} resizeMode="contain"/>
                                    </View>
                                    <View style = {styles.BtnTextCover}>
                                        <Text style = {styles.BtnText}>Overview</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <View style = {{flex : 0.1,}}></View> */}
                        </View>
                        <View style = {{flex : 0.75}}></View>
                        </View>
                        <View style = {{ flex : 1 }}></View>
                    </View>
                </View>
            </View>
        )
    }
}

let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#103F4F",
      },
    HeaderNavImg : {
        alignSelf: 'flex-start', height : 30, width : 20,
    },
    CenterImgCover : {
        // backgroundColor : 'blue',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    BtnOuterCover : {
        flex : 1.2,
        backgroundColor : '#1A5961',
    },
    BtnImgCover : {
        flex : 0.6, 
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    BtnTextCover : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        flexWrap : 'wrap',
        padding : 0,
        margin : 0
    },
    DashBoard : {
        flex : 1,
        flexDirection : 'column',
        backgroundColor : '#1A5961',
    },
    HeaderCover : {
        backgroundColor: '#103F4F',
        height: cardHeight * 3,
    },
    HeaderImgCover : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    HeaderBtnCover : {
        flex : 1,
    },
    HeaderImg : {
        height : cardHeight,
        marginTop : -(cardHeight * 1.2)
    },
    HeaderText : {
        marginTop : cardHeight/5,
        color : 'white',
        fontSize : 15
    },
    BodyCover : {
        flex : 4,
       
    },
    CenterImg : {
        height : cardHeight * 2.2,
        width : cardHeight * 2.2,
    },
    centerText : {
        fontSize : Math.round(cardHeight / 2.1),
        color : 'white',
        // fontWeight : 'bold',
        marginTop : cardHeight/3
    },
    BtnImg : {
        height : cardHeight * 1.5/3,
    },
    BtnText : {
        color : 'white',
        textAlign : 'center',
        padding : Math.round(cardHeight / 7),
        fontSize : Math.round(cardHeight / 3.2),
        lineHeight : Math.round(cardHeight / 2.6),
    },
    SPTO : {
      flex : 1,
    //   justifyContent : 'center',
    //     alignItems : 'center',
    //     padding : 0
    },

    
  });

