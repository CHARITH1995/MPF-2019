import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, Dimensions } from 'react-native';

let dimensions = Dimensions.get("window");

export default class LoginButton extends Component {
  render() {
    return (
      <View style = {styles.TBcardContainer}
          >
        <View style = {{flex : 2}}></View>
        <View style = {styles.TBbtn}>
          <View style = {styles.TBbtnCover}>
            <View style= {styles.TBTextContainer}>
                  <Text style= {styles.TBText}>{this.props.buttonText}</Text>
            </View>
          </View>
        </View>
        <View style = {{flex : 2}}></View>
      </View>
    )
  }
}

let cardHeight = Math.round((dimensions.height * 1) / 15);
let cardWidth = Math.round((dimensions.width * 6) / 10);

const styles = StyleSheet.create({
    
    TBcardContainer : {
    //   flex : 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height : cardHeight,
      width : cardWidth*2,
    },
    TBbtnCover : {
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
      backgroundColor : '#1A5961',
      borderRadius : cardHeight / 8,
      // shadowColor: '#000',
      // shadowOffset: { width: 0, height: 3 },
      // shadowOpacity: 0.8,
      // shadowRadius: 2,  
      // elevation: 3
    },
    TBbtn : {
      flex : 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    TBTextContainer : {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding : 10,
        // backgroundColor : 'blue'
    },
    TBText :{
      fontSize: 15,
      fontWeight: 'bold',
      color : 'white',
    }

       
  });