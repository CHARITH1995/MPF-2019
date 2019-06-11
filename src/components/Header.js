import React, { Component } from 'react';
import { Left, Right } from 'native-base';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style = {styles.HeaderCover}>
                        <View style = {styles.HeaderBtnCover}>
                        <Icon
                            style={{ paddingTop: 25,paddingLeft : 25, paddingBottom : 10, alignSelf: 'flex-start', color: '#ffffff' }}
                            onPress={() =>this.props.navigation.goBack()}
                            name="md-arrow-round-back" size={24} />
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
        // backgroundColor : 'green',
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
    HeaderText : {
        color : 'white',
        fontWeight: 'bold',
        // marginTop: cardHeight * 0.75,
        fontSize: Math.round(cardHeight/1.7),
        marginLeft: 25,
    },
})

export default withNavigation(Header);