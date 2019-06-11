import React, { Component } from 'react'
import { DrawerActions } from 'react-navigation-drawer';

import { StyleSheet,Text, View, Button,Dimensions, Image,TouchableOpacity,Platform  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderImg from '../../assets/logoWhite.png'
import img0 from '../../assets/LogisticalInformation/1.png'
import img1 from '../../assets/LogisticalInformation/2.png'
import img2 from '../../assets/LogisticalInformation/3.png'
import img3 from '../../assets/LogisticalInformation/4.png'
import img4 from '../../assets/LogisticalInformation/5.png'
import img5 from '../../assets/LogisticalInformation/6.png'
import img6 from '../../assets/LogisticalInformation/7.png'
import img7 from '../../assets/LogisticalInformation/8.png'
import img8 from '../../assets/LogisticalInformation/9.png'
import img9 from '../../assets/LogisticalInformation/10.png'
import img10 from '../../assets/LogisticalInformation/11.png'
import img11 from '../../assets/LogisticalInformation/12.png'
import img12 from '../../assets/LogisticalInformation/13.png'
import img13 from '../../assets/LogisticalInformation/14.png'
import { ScrollView } from 'react-native-gesture-handler';
let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);

export default class LogisticalInfo extends Component {
    render() {
        return (
            <View style = {styles.DashBoard}>
             <View style={styles.statusBarBackground}>
                </View>
                <View style = {styles.HeaderCover}>
                        <View style = {styles.HeaderBtnCover}>
                            <Icon
                                style={{ padding: 25, alignSelf: 'flex-start', color: '#ffffff' }}
                                onPress={() =>this.props.navigation.goBack()}
                                name="md-arrow-round-back" size={24} />
                        </View>
                        <View style = {styles.HeaderImgCover}>
                            <Image source = {HeaderImg} style={styles.HeaderImg} resizeMode="contain"/>
                            <Text style = {styles.HeaderText}>Logistical Information</Text>
                        </View>
                </View>
                <ScrollView style = {styles.BodyCover}>
                    <View style = {styles.BtnOuterCover}>
                        <View style = {{ flex : 9, flexDirection : 'row'}}>
                            <View style = {{flex : 0.75}}></View>
                            <View style = {{flex : 15, flexDirection : 'column',}}>
                                <View style = {{flexDirection : 'row', minHeight : cardHeight * 2.5, }}>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub', {pgNo : 0, headerText : 'Date'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img0} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Date</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 1, headerText : 'Venue'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img1} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Venue</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 2, headerText : 'VIP Courtesies'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img2} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>VIP Courtesies</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{minHeight : cardHeight * 2.5, flexDirection : 'row',}}>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 3, headerText : 'Meeting'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img3} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Meeting</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 4, headerText : 'Dress Code'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img4} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Dress Code</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 5, headerText : 'Visa'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img5} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Visa</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{minHeight : cardHeight * 2.5, flexDirection : 'row',}}>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 6, headerText : 'Plenery Sessions'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img6} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Plenery Sessions</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 7, headerText : 'Travel Arrangement'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img7} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Travel Arrangement</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 8, headerText : 'Additional Information'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img8} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Additional Information</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{minHeight : cardHeight * 2.5, flexDirection : 'row'}}>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 9, headerText : 'Partnership Announcements'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img9} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Partnership Announcements</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 10, headerText : 'Openeing Ceremony'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img10} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Opening Ceremony</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style = {{flex : 1, flexDirection : 'column'}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo :11, headerText : 'Go Green'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img11} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Go Green</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = {{minHeight : cardHeight * 2.5, flexDirection : 'row', justifyContent : 'center'}}>
                                    <View style = {{flex : 1, flexDirection : 'column',  maxWidth : Math.round(dimensions.width/3)}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 12, headerText : 'Accomedation'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img12} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Accomedation</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style = {{flex : 1, flexDirection : 'column', maxWidth : Math.round(dimensions.width/3)}}>
                                        <TouchableOpacity style = {styles.SPTO} onPress = {() => this.props.navigation.navigate('LogSub',{pgNo : 13, headerText : 'Documentation'})}>
                                        <View style = {styles.BtnImgCover}>
                                            <Image source = {img13} style={styles.BtnImg} resizeMode="contain"/>
                                        </View>
                                        <View style = {styles.BtnTextCover}>
                                            <Text style = {styles.BtnText}>Documentation</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* <View style = {{flex : 0.1,}}></View> */}
                            </View>
                            <View style = {{flex : 0.75}}></View>
                        </View>
                        {/* <View style = {{ flex : 1 }}></View> */}
                    </View>
                </ScrollView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#103F4F",
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
        flex : 0.8, 
        justifyContent : 'flex-end',
        alignItems : 'center',
        
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
        fontSize : 21,
        color : 'white',
        // fontWeight : 'bold',
        marginTop : cardHeight/3
    },
    BtnImg : {
        height : cardHeight * 1.5/2.5,
    },
    BtnText : {
        color : 'white',
        textAlign : 'center',
        padding : Math.round(cardHeight / 7),
        fontSize : Math.round(cardHeight / 3.2),
        lineHeight : Math.round(cardHeight / 3),
    },
    SPTO : {
      flex : 1,
    //   justifyContent : 'center',
    //     alignItems : 'center',
    //     padding : 0
    },

    
  });
