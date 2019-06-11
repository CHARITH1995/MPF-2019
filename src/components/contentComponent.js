import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView, Linking,Platform,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import tabImg2 from '../../assets/check-out.png';
import tabImg1 from '../../assets/locationcheckin.png';


let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);


export default class contentComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked:false
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
             <View style={styles.statusBarBackground}> 
                </View>
                {/* {
                    this.state.clicked ? (
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={()=>this.setState(state => ({ clicked : !state.clicked }))}>
                            <View style={{ alignItems: 'center', margin: 20 }}>
                                    <Image source={tabImg2} style={{ height: cardHeight * 2.5, marginBottom: 5 }} resizeMode="contain"/>
                                    <Text style={{ fontSize: 18, marginTop: 2 }}>Checkout</Text>
                                </View>
                        </TouchableOpacity>
                    ) : (
                            <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={()=>this.setState(state => ({ clicked : !state.clicked }))} >
                                <View style={{ alignItems: 'center', margin: 20 }}>
                                <Image source={tabImg1} style={{ height: cardHeight * 2.5, marginBottom: 5 }} resizeMode="contain"/>
                                <Text style={{ fontSize: 18, marginTop: 2 }}>CheckIn</Text>
                            </View>
                            </TouchableOpacity>
                        )
                } */}
                <ScrollView>
                    <View>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={() => navigate('Home')} style ={{
                            backgroundColor:navigate.state === 'Home '?'#000':'#fff'
                        }}>
                            <View style={{ margin: 13, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize : cardHeight/3 }}>Home</Text>
                                <Icon name="ios-arrow-forward" style={{ fontSize : cardHeight/3 + 3, }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={() => navigate('About')}>
                            <View style={{ margin: 13, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ fontSize : cardHeight/3}}>About</Text>
                                <Icon name="ios-arrow-forward" style={{ fontSize : cardHeight/3 + 3, }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={() => navigate('Publications')}>
                            <View style={{ margin: 13, flexDirection: 'row', justifyContent: 'space-between',  }}>
                                <Text style={{ fontSize : cardHeight/3 }}>Downloads and Publications</Text>
                                <Icon name="ios-arrow-forward" style={{ fontSize : cardHeight/3 + 3, }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={() => navigate('Projects')}>
                            <View style={{ margin: 13, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ fontSize: cardHeight / 3 }}>Projects</Text>
                                <Icon name="ios-arrow-forward" style={{ fontSize: cardHeight / 3 + 3, }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={() => Linking.openURL('http://www.finance.gov.mv/publications/statistical-releases/monthly-economic-indicators')}>
                            <View style={{ margin: 13, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ fontSize: cardHeight / 3 }}>Economics Indicators</Text>
                                <Icon name="ios-arrow-forward" style={{ fontSize: cardHeight / 3 + 3, }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={() => navigate('Contact')}>
                            <View style={{ margin: 13, flexDirection: 'row', justifyContent: 'space-between',  }}>
                                <Text style={{ fontSize : cardHeight/3 }}>Contact</Text>
                                <Icon name="ios-arrow-forward" style={{ fontSize : cardHeight/3 + 3, }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={() => navigate('Gallery')}>
                            <View style={{ margin: 13, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ fontSize : cardHeight/3 }}>Gallery</Text>
                                <Icon name="ios-arrow-forward" style={{ fontSize : cardHeight/3 + 3, }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={() => Linking.openURL('https://mpf.gov.mv/privacy-policy/')}>
                            <View style={{ margin: 13, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ fontSize: cardHeight / 3 }}>Privacy Policy</Text>
                                <Icon name="ios-arrow-forward" style={{ fontSize: cardHeight / 3 + 3, }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0.2)'} onPress={() => navigate('Logout')}>
                            <View style={{ margin: 13, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ fontSize : cardHeight/3 }}>Logout</Text>
                                <Icon name="ios-arrow-forward" style={{ fontSize : cardHeight/3 + 3, }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 36 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "white",
      },
})
