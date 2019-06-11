import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation"

import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, TouchableOpacity, Dimensions,Platform } from 'react-native'
import tabImg1 from "../../assets/date.png";
import Header from '../components/Header'

import img0 from '../../assets/LogisticalInformation/1_1.png'
import img1 from '../../assets/LogisticalInformation/2_2.png'
import img2 from '../../assets/LogisticalInformation/3_3.png'
import img3 from '../../assets/LogisticalInformation/4_4.png'
import img4 from '../../assets/LogisticalInformation/5_5.png'
import img5 from '../../assets/LogisticalInformation/6_6.png'
import img6 from '../../assets/LogisticalInformation/7_7.png'
import img7 from '../../assets/LogisticalInformation/8_8.png'
import img8 from '../../assets/LogisticalInformation/9_9.png'
import img9 from '../../assets/LogisticalInformation/10_10.png'
import img10 from '../../assets/LogisticalInformation/11_11.png'
import img11 from '../../assets/LogisticalInformation/12_12.png'
import img12 from '../../assets/LogisticalInformation/13_13.png'
import img13 from '../../assets/LogisticalInformation/14_14.png'

var text0 = <React.Fragment><Text style = {{fontSize : 17}}><Text style={{fontWeight : 'bold'}}>The Maldives Partnership Forum (MPF 2019) will be held on Monday, 17 June 2019, and Tuesday, 18 June 2019.</Text>
    {"\n"}
    {"\n"}
    The Minister of Foreign Affairs His Excellency Abdulla Shahid, and the Minister of
    Finance His Excellency Ibrahim Ameer, will host a welcome reception for the delegates
    of MPF 2019 on Sunday, 16 June 2019, from 2000 – 2130 hrs.
    {"\n"}
    {"\n"}
    The President His Excellency Ibrahim Mohamed Solih will host an official reception for
    the delegates of MPF 2019 on Monday, 17 June 2019, from 2000-2130 at Kurumba
    Maldives Resort.
    </Text></React.Fragment>;
var text1 = <Text style = {{fontSize : 17}}>The meeting will take place in Bouganvilla Conference Hall at Kurumba Maldives Resort, which is 15 minutes by speed boat from Male’.</Text>
var text2 = <Text style = {{fontSize : 17}}>VIP courtesies will be extended to all delegates at the rank of Ambassador and above. Other delegates may request the assistance of MPF 2019 welcome desk placed at the arrival hall of Velana International Airport.</Text>
var text3 = <Text style = {{fontSize : 17}}>Opportunities for bilateral meetings with government officials can be arranged on request. The Ministry of Foreign Affairs will assist in arranging such meetings. Kindly forward requests via email to MPF 2019 Secretariat at (MPFmeetings@foreign.gov.mv)</Text>
var text4 = <Text style = {{fontSize : 17}}>The dress code for MPF 2019 on 17 and 18 June is shirt and tie for gents and appropriate formal dress/national dress for ladies.{"\n"}
                                            {"\n"}
                                            The dress code for MPF 2019 on 17 and 18 June is shirt and tie for gents and appropriate formal dress/national dress for ladies. The dress code for the rest of the events can be smart casual.
                                            {"\n"}
                                            {"\n"}
                                            However, the dress code for the opening ceremony of MPF 2019 will be suit and tie.
                                            </Text>
var text5 = <Text style = {{fontSize : 17}}>The delegates will receive visa upon arrival.</Text>
var text6 = <Text style = {{fontSize : 17}}>The plenary sessions will focus on addressing the Government’s vision and proposals for delivering on that vision. There will be opportunity for partners to make interventions during these sessions. Delegates are requested to limit their interventions to no more than 2 minutes, to allow time for other speakers. Delegates may intervene from the floor, or inscribe on the speakers list for the plenary sessions via email to MPF 2019 Secretariat (mpfsecretariat@foreign.gov.mv).
                                            {"\n"}
                                            {"\n"}
                                            Delegates are also encouraged to provide feedback and/or express interest in partnering with the Maldives in meeting the developmental challenges outlined in the background papers for the plenary sessions, as well as in the project profiles.Delegations are also advised to inform the national focal points (Ministry of Foreign Affairs and Ministry of Finance) of any interest they may have in supporting projects if there is any interest in project areas before the beginning of MPF 2019. Bilateral and Multilateral partners are required to inform the Ministry of Foreign Affairs whereas Multilateral financial institutions are required to inform the Ministry of Finance.</Text>
var text7 = <Text style = {{fontSize : 17}}>If participants arrange to stay at a hotel from the recommended list of hotels in Annex I,transportation will be provided between the accommodation venue, reception venues as well as the conference venue. However, if accommodation venue is different from the recommended list of hotels in Annex I, delegates are expected to arrange their own transportation between the accommodation venue and the conference venue.
                                            {"\n"}
                                            {"\n"}
                                            Participants are expected to cover air travel costs to the Maldives.
                                            </Text>
var text8 = <Text style = {{fontSize : 17}}>All the information relevant to MPF 2019 will be available at: www.foreign.gov.mv/mpf and www.mpf.gov.mv
                                            {"\n"}
                                            {"\n"}For inquiries on MPF 2019, please contact the following:</Text>
var text9 = <Text style = {{fontSize : 17}}>If delegations intend to sign any formal understanding with regard to any program or project, the signing event can be arranged on request. The request may be conveyed via email to MPF 2019 Secretariat (MPFsecretariat@foreign.gov.mv), or through a diplomatic note to the Ministry of Foreign Affairs.</Text>
var text10 = <Text style = {{fontSize : 17}}>The President of the Maldives, His Excellency Ibrahim Mohamed Solih will inaugurate the Maldives Partnership Forum 2019 at 0900 hrs on 17 June 2019 at Bouganvilla Conference Hall at Kurumba Maldives Resort. All participants are requested to be present at the venue at 0830 hrs.
                                            {"\n"}
                                            {"\n"}
                                            Local transportation will be provided to all participants travelling from Male’ to the conference venue.</Text>
var text11 = <Text style = {{fontSize : 17}}>Under President Ibrahim Mohamed Solih’s campaign to ban single use plastic, MPF 2019 will try to minimize the use of single-use plastic and paper. Delegates are encouraged to join the efforts to protect the country’s fragile environment.</Text>
var text12 = <Text style = {{fontSize : 17}}>Participants are expected to cover the cost of accommodation in the Maldives. For the convenience of the participants travelling from overseas, the participants are encouraged to make reservations at Kurumba Maldives Resort, where MPF 2019 will be held. 
                                            {"\n"}
                                            {"\n"}The list of recommended hotels is listed under Annex I.</Text>
var text13 = <Text style = {{fontSize : 17}}>Documentation for MPF 2019 including background papers and project profiles will be shared with the participants in advance. Participants are advised to refer to the website of MPF 2019 (www.mpf.gov.mv) , to obtain the latest versions of the documents. MPF
                                            {"\n"}
                                            {"\n"}2019 website can also be accessed via the Foreign Ministry’s website (www.foreign.gov.mv). All participants will receive user IDs and passwords to access MPF 2019 documents, via the MPF 2019 website.A conference App for mobile devices will be available for download three days prior to MPF 2019 from the App Store and Google Play Store. A link for the conference App will also be available on the conference website.</Text>


let dimensions = Dimensions.get("window");
let windowHeight = Math.round((dimensions.height * 1) / 15);
let cardHeight = Math.round((Dimensions.get("window").height * 1) / 15);


export default class LogisticalSubPage extends Component {
    constructor(){
        super();
        this.state = {
            imageSource : null,
            text : null
        }
    }
    componentDidMount(){
        var ImgArray = [img0,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13];
        var TextArray = [text0,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13];
        const { navigation } = this.props;
        var pgNo = (navigation.getParam('pgNo'));
        this.setState({
            imageSource : ImgArray[pgNo],
            text : TextArray[pgNo]
        })
    }


    render() {
        return (
            <View style = {{ flex : 1 }}>
             <View style={styles.statusBarBackground}>
                </View>
                <Header title = {this.props.navigation.getParam('headerText')} />
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.PageTop}>
                    <View style = {{ flex : 0.5}}></View>
                    <View style={styles.TopImgCover}>
                        <Image source = {this.state.imageSource} style={styles.TopImg} resizeMode="contain"/>
                    </View>
                    <View style = {{ flex : 0.5}}></View>
                </View>
                <View style={styles.PageBottom}>
                    <View style = {{ flex : 0.5}}></View>
                    <View style={styles.TextCover}>
                        <Text style = {{marginBottom : cardHeight/4}}>{this.state.text}</Text>
                    </View>
                    <View style = {{ flex : 0.5}}></View>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
      },
    PageTop : {
        flexDirection : 'row',
        height : cardHeight * 5,
    },
    TopImgCover : {
        flex : 10,
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomWidth : 2,
    },
    TopImg : {
        height : cardHeight *3,

    },
    PageBottom : {
        // flexDirection : 'row',
        flex : 1,
        flexDirection : 'row',
        marginTop : cardHeight/2,
        marginBottom : cardHeight/4,
        flexWrap : 'wrap',
    },
    TextCover : {
        flex : 6,
        flexWrap : 'wrap',
    }

})
