import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation-drawer';

import { Left, Right } from 'native-base';
import { Text, View, StyleSheet, Dimensions, Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import HeaderImg from '../../assets/Header.png'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style = {styles.HeaderCover}>
                        <View style = {styles.HeaderBtnCover}>
                        {/* <Icon
                            style={{ padding: 25, alignSelf: 'flex-start', color: '#ffffff' }}
                            onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            name="md-menu" size={30} /> */}
                             <TouchableOpacity style = {{  paddingTop: 25,paddingLeft : 25, paddingBottom : 10,}} onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                                <Image source = {HeaderImg} style={styles.HeaderImg} resizeMode="contain"/>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.HeaderheadingCover}>
                            <Text style = {styles.HeaderText}>{this.props.title}</Text>
                        </View>
                </View>
        )
    }
}

let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);

const styles = StyleSheet.create({
    HeaderCover : {
        backgroundColor: '#1A5961',
        minHeight: cardHeight * 2.05,
        
    },
    HeaderBtnCover : {
        minHeight: cardHeight * 0.8,
    },
    HeaderheadingCover : {
        minHeight: cardHeight * 1.25,
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
    },
    HeaderImg : {
        alignSelf: 'flex-start', height : 30, width : 20,
    },
    HeaderText : {
        color : 'white',
        fontWeight: 'bold',
        // marginTop: cardHeight * 0.75,
        fontSize: Math.round(cardHeight/1.7),
        marginLeft: 25,

    },
})

export default withNavigation(Header);