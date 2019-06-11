import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image,Platform } from 'react-native';

import Header from '../components/Header'

const header1 = <Text style = {{fontSize : 17, fontWeight : 'bold', borderBottomWidth : 2, borderBottomColor : '#1A5961', marginBottom : 20, paddingBottom : 10}} >Governance</Text>
const text1 = <Text style = {{fontSize : 15}}>The Maldives is a young democracy attempting to build on considerable economic and human development gains, while simultaneously countering challenges posed by deep socio-economic, environmental and political issues.</Text>
const header2 = <Text style = {{fontSize : 17, fontWeight : 'bold',borderBottomWidth : 2, borderBottomColor : '#1A5961',marginBottom : 20, paddingBottom : 10}} >Social</Text>
const text2 = <Text style = {{fontSize : 15}}>The Maldives has huge potential that it yet to be fully realised – a rapidly expanding economy, a demographic dividend with educated young people, improving infrastructure and institutions, and growing physical and digital connectivity.</Text>
const header3 = <Text style = {{fontSize : 17, fontWeight : 'bold',borderBottomWidth : 2, borderBottomColor : '#1A5961',marginBottom : 20, paddingBottom : 10}} >Economic</Text>
const text3 = <Text style = {{fontSize : 15}}>The Maldives is an island nation, surrounded by the ocean. The economy, and well-being of the country is tied to the health and wealth of the natural environment, and primarily the ocean, which accounts for approximately 99% of Maldivian territory.</Text>

export default class OverviewPage extends Component {
    render() {
        return (
            <View style = {{ flex : 1, paddingBottom : 25}} >
             <View style={styles.statusBarBackground}> 
                </View>
                <Header title = "Overview"/>
                <ScrollView style = {styles.ContentCover}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('OMore',{posNo : 0, headerText : 'Governance'})}>
                        <View style = {styles.sectionCover}>
                            {header1}
                            {text1}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('OMore',{posNo : 1, headerText : 'Social'})}>
                        <View style = {styles.sectionCover}>
                            {header2}
                            {text2}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('OMore',{posNo : 2, headerText : 'Economic'})}>
                        <View style = {styles.sectionCover}>
                            {header3}
                            {text3}
                        </View>
                    </TouchableOpacity>
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
   ContentCover : {
       flex : 1,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
        paddingBottom : 20
   },
   sectionCover : {
       flex : 1,
       paddingLeft : 20,
       paddingRight : 20,
       paddingTop : 20,
       paddingBottom : 20,
       backgroundColor: "white",
       shadowColor: '#7c7c7c',
        shadowOffset: { width: 5, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 3,
       marginBottom : 25
   }
})