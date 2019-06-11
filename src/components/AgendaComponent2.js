import React , { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, TouchableOpacity, Dimensions } from 'react-native'


let dimensions = Dimensions.get("window");
let nameMargin = Math.round((dimensions.height * 0.8) / 15);
let cardHeight = Math.round((Dimensions.get("window").height * 1) / 15);

const Agenda2 = (props) =>{
    return (
      <View style={styles.containerbox}>
      <View style={{ marginRight: nameMargin * 0.6, width:'40%'}}>

      </View>
      <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: nameMargin * 0.6}}>
      <Text style = {{fontSize: cardHeight / 3.4, lineHeight : cardHeight / 3.1,
        paddingTop: nameMargin * 0.2, 
        paddingBottom: nameMargin * 0.4, 
        paddingLeft: nameMargin * 0.2, 
        paddingRight : nameMargin * 0.6, }}>{props.description}</Text>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
    containerbox:{
        backgroundColor: '#f9f9f9', 
        flexDirection:'row',
        minHeight : cardHeight,
        padding : 0,
        margin : 0
    }
})

export default Agenda2;