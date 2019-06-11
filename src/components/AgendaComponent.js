import React , { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Divider } from "react-native-elements";


let dimensions = Dimensions.get("window");
let nameMargin = Math.round((dimensions.height * 0.8) / 15);
let cardHeight = Math.round((Dimensions.get("window").height * 1) / 15);

const Agenda = (props) =>{
    return (
      <View style={styles.containerbox}>
      <View style={{ marginRight: nameMargin * 0.6, width:'40%'}}>
            <Text style={{fontWeight: "800",fontSize: cardHeight / 3.2, lineHeight : cardHeight / 2.8,paddingLeft: nameMargin * 0.6, paddingBottom : nameMargin * 0.3, paddingTop : nameMargin * 0.6, paddingRight : nameMargin * 0.2 }}>{props.date}</Text>
            <Text style = {{paddingLeft: nameMargin * 0.6,}}>{props.time}</Text>
      </View>
      <View style={{width:2,backgroundColor:'grey', marginBottom : nameMargin * 0.2, marginTop : nameMargin * 0.6}}></View>
      <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: nameMargin * 0.6}}>
      <Text style={{fontWeight: "800",fontSize: cardHeight / 3.2, lineHeight : cardHeight / 2.8,paddingLeft: nameMargin * 0.1, paddingBottom : nameMargin * 0.2, paddingTop : nameMargin * 0.6, paddingRight : nameMargin * 0.6}} >{props.description}</Text>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
    containerbox:{
        backgroundColor: '#f9f9f9', 
        
        flexDirection:'row',
        minHeight : cardHeight * 1.5
    }
})

export default Agenda;