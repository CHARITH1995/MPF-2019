import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, TouchableOpacity, Dimensions,Platform, Linking } from 'react-native'
import pdf from "../../assets/pdf1.png";
import download from "../../assets/download.png";
let dimensions = Dimensions.get("window");
let nameMargin = Math.round((dimensions.height * 0.8) / 15);
import Header from '../components/Header';
import axios from 'axios';

export default class ThematicPapersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            papers: [],
            files: [{
                id: 0,
                name: '',
                uri: ''
            }]
        }
    }

    componentDidMount = () => {
        axios.get('https://mpf.gov.mv/wp-json/wp/v2/media')
            .then(response => {
                this.setState({ papers: response.data });
                this.state.papers.map(paper => {
                        this.state.files = {
                            id:paper.id,
                            name:paper.slug,
                            uri:paper.source_url
                        }
                    this.state.papers.push(this.state.files);
                });
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Header title="Thematic Papers" />
                <ScrollView style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10, marginBottom: cardHeight / 3 }}>
                    {
                        this.state.papers.map((item) =>
                            <View key={item.id} style={styles.item}>
                                 <View style={{flex:1 , flexDirection: 'row' }}>
                                    <View style={{ padding: 15, backgroundColor: '#1A5961' }}>
                                        <Image source={pdf} style={styles.image} resizeMode="contain" />
                                    </View>
                                    <Text style={{ marginLeft: 10, alignSelf: 'center', fontWeight: 'bold' }}>{item.slug}</Text>
                                </View>
                                <View style={{  alignSelf: 'flex-end', flexDirection: 'row-reverse' }}>
                                    <View>
                                        <TouchableOpacity onPress={() => Linking.openURL(item.source_url)} >
                                            <Text style={{ fontWeight: '100' }}>View More</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    {/* </ScrollView> */}
                </ScrollView>
            </View>

        )
    }
}

let cardHeight = Math.round((dimensions.height * 1) / 15);


const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        padding: 10,
        margin: 5,
        backgroundColor: "#efefef",
        height: 100,
        elevation: 5,
        marginBottom: 10,

    },
    image: {
        height: 40,
        width: 40,
    },
    image2: {
        height: 40,
        width: 40,
        alignSelf: 'center',
    }
});