import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, TouchableOpacity, Dimensions,Platform } from 'react-native'
import dp from '../../assets/dp.jpeg'
import president from '../../assets/president.jpg'
import foreign from "../../assets/foreign.jpg";
import finance from "../../assets/finance.jpg";

import download from "../../assets/download.png";
let dimensions = Dimensions.get("window");
let nameMargin = Math.round((dimensions.height * 0.8) / 15);

import Header from '../components/Header'
export default class PanelistListPage extends Component {
    state = {
        names: [
            {
                'name': 'His Excellency Ibrahim Mohamed Solih', 'id': 1, 'dept': 'President of the Maldives Republic of Maldives', 'pos': 'President', 'image': president, 'bio': 'President Ibrahim Mohamed Solih was first elected as the MP for Faadhipolhu (Lhaviyani atoll) in 1994. In 2004, following the start of the Maldives’ democratic reform process, \n\nPresident Solih became one of the first founders and one of the original 42 signatories of the Maldivian Democratic Party. When the party was set up in exile in Sri Lanka in 2003, he was a member of the MDP advisory board. \n\nPresident Solih played an integral role in the country’s reform process, driving change from within the Parliament during the special constituent assembly(Special Majlis) established in 2004 to formulate the Maldives’ first democratic constitution.He served on the drafting committee of the new Constitution.This democratic constitution resulted in the separation of powers, the guaranteeing of fundamental rights and led to the country’s first multi-party, democratic Presidential election in 2008. In January 2005, President Solih was one of the first individuals to contest for Parliament and win as a candidate endorsed by the still not yet formally registered Maldivian Democratic Party. \n\nFollowing the constitutional reform process and remapping of Parliamentary constituencies, President Solih became the MP for Hinnavaru in 2009, his home constituency. He was the MDP Parliamentary Group leader since 2011 until his assumption of presidential office, serving as the majority leader from 2012 to 2013 and the minority leader in 2018. President Solih led the MDP Government’s challenging legislative agenda, which included the introduction of progressive taxation, universal health insurance, and decentralisation in a Parliament where the MDP Government did not have a working majority.He served as the head of the Parliament’s oversight committee on the national budget under the MDP Government and on the Public Finances Account Committee for 10 years. \n\nMaldivian Democratic Party \n\nIn addition to being one of the original signatories of the Maldivian Democratic Party and serving as the Parliamentary Group leader, President Solih also served as the chief negotiator representing the MDP during any occasions requiring political dialogue with the Government, such as following former President Mohamed Nasheed’s arrest in 2015. Since the arrest and exile of political leaders, he has worked to maintain a united opposition.He became the leader of the Joint Opposition’s Parliamentary Group in 2017 and is also a member of the MDP National Council and National Executive Council. \n\nPre – Parliament \n\nPrior to entering the Parliament, President Solih worked at state broadcaster, Television Maldives during the late 1980s.In 1990, President Solih worked with former President Mohamed Nasheed on a current affairs magazine, Sangu, where he was a member of the editorial board.Sangu was raided and unlawfully shut down by the government in 1990, and several of its members were arrested.An ardent sportsman, President Solih is married to Fazna Ahmed, an education specialist.They have two children, a son and daughter, aged 21 and 23 respectively.' },
            {
                'name': 'Honourable Abdulla Shahid  ', 'id': 2, 'dept': 'Ministry of foreign Affairs', 'pos': 'Minister', 'image': foreign, 'bio': 'Honourable Abdulla Shahid is one of the senior most politicians in the Maldives, with a long and distinguished career in both the Executive and the Legislative branches of the country. \n\nHe started his career as a Foreign Service officer in the Maldives Foreign Ministry in 1983 and rose rapidly through the lower and middle management levels to being appointed Director, International Affairs in charge of the multilateral desk of the Ministry in 1993. \n\nRecognizing his many skills, talents and administrative capabilities the then President appointed Shahid as Executive Secretary to the President of the Maldives(Chief of Staff) in 1995. He held the post for over 10 years, reflecting the trust and confidence placed in him by the President, and the high degree of distinction and diligence with which he executed his responsibilities. \n\nAbdulla Shahid’s career in the Executive branch of the Maldives government gained further momentum in mid - 2005 when he was appointed the Minister of State for Foreign Affairs and, just two years later, the Minister of Foreign Affairs.The appointment occurred at a time of sweeping political change in the country following the introduction of a new democratic constitution. \n\nAs Foreign Minister, he streamlined the work of the Ministry and widened the diplomatic reach of the Maldives by opening up new resident diplomatic missions.His efforts enhanced the image of the country despite formidable challenges facing a country in the early stages of a tumultuous democratic transition.Serving concurrently in the Executive as well as the Legislative branch as an elected MP at the time, Shahid vigorously advocated for human rights, good governance, rights of the parliamentarians, and measures to halt global warming and climate change.He attended numerous meetings of the UN, the Commonwealth, and the Organization for Islamic Cooperation, the SAARC and the Non-aligned Movement at times as a member and often as the head of the Maldives delegation. \n\nHon.Abdulla Shahid’s initial entry into domestic politics dates back to his appointment as a Member of the President to the Constitutional Assembly in 1994 and to being appointed to thePeople’s Majlis the following year as President’s Member.He was later elected as MP for the Vaavu Atoll constituency for two consecutive five - year terms in 2000 and 2005. Subsequently, he contested in the first multi - party parliamentary elections in 2009 and secured the seat for Keyodhoo constituency.In the parliamentary elections of 2014, he succeeded in winning a seat from Male’, the capital of the Maldives. \n\nHon.Abdulla Shahid was elected Speaker of the People’s Majlis on 29 May 2009, creating history as the first ever elected Speaker, confirming the confidence of his fellow parliamentarians in his leadership and oratory skills, sagacity and diplomatic prowess.He earned the respect and admiration of fellow MPs by skillfully steering the work of the Majlis amid vigorous and not seldom rancorous debates while protecting and promoting the rights and privileges of MPs and the legislature. \n\nDuring his tenure as Speaker of the Majlis, Hon.Shahid also served as the President of the Association of SAARC Speakers and Parliamentarians Conference.In addition, he was also a member of the Executive Committee of the Commonwealth Parliamentary Association, having held earlier the membership of the Standing Committee of Commonwealth Speakers and Presiding Officers Conference.  \n\nHon.Abdulla Shahid has been a leading and prominent voice of the Opposition movement both at home and abroad, calling for political and judicial reform during the last five years, even spending some jail time for his relentless political activism.He has played a key role in his capacity as the Chair of the Foreign Relations Committee of the Maldivian Democratic Party as well as the Joint Opposition group, bringing to the attention of the international community the many injustices, rampant corruption and the extra-legal activities and practices of President Yameen’s government, both in and out of parliament. \n\nFollowing the successful presidential campaign of 2018, Hon.Abdulla Shahid was appointed the Chair of the Transition Committee of President-elect Hon.Ibrahim Mohamed Solih. \n\nBorn in Male’ in May 1962, Hon.Abdulla Shahid is married to Aishath Suiza.They have 3 children, 2 sons and a daughter.'  },
            {
                'name': 'Mr. Ibrahim Ameer  ', 'id': 3, 'dept': 'Ministry of Finance', 'pos': 'Minister', 'image': finance, 'bio': 'On 17th November 2018, Mr. Ibrahim Ameer sworn in as the Minister of Finance, Republic of Maldives. \n\nMr.Ameer has worked as an Assistant Manager at the Central Bank of Maldives, Maldives Monetary Authority(MMA) from April 2008 till June 2011. During his tenure in MMA, he guided the Research Division in conducting economic analysis of different sectors of the Maldivian economy; and led preparation of Economic Bulletins and Review papers published by MMA.Moreover, while working at MMA, he worked as a part-time lecturer for Economics and Microeconomics in different colleges of Male’. \n\n In addition, he served the private sector as a General Manager of ADK Trade and Shipping Pvt.Ltd from 28th October 2014 till 7th February 2015.He worked as a Business Consultant / Analyst from 4th May 2015 till he took charge of office as the Minister of Finance. \n\nMr.Ameer is the Deputy Chairman of the Economic Committee of Maldivian Democratic Party(MDP) and he was also the Chairman of Finance and Treasury Committee formed during the transition period after Elections 2018. Mr.Ameer obtained his Bachelor’s Degree in International Economics(Hons) from Multimedia University in 2007 and later was awarded with a Fulbright Scholarship to complete his Master’s Degree in Economics in 2013 from the University of Nebraska Omaha. \n\nHe has previously worked as a Commerce/Economics Teacher (Resources) in Muhibbuddin School, S. Hithadhoo from June 2003 till September 2003. Afterwards, during November 2003 he joined the Maldivian Chamber of Commerce as an Accounts Officer and worked there till 2004. \n\nBorn on 04th February 1984. He is married with two sons.'
            }
        ]
    }

    render() {
        
        return (
            <View style = {{ flex : 1, flexDirection : 'column'}}>
                <View style={styles.statusBarBackground}>
                </View>
                <Header title = "Speakers"/>
                <View style={{ marginTop: nameMargin * 0.4, marginBottom: nameMargin * 0.8, padding: 10 }}>
                <ScrollView style={{}}>
                    {
                        this.state.names.map((item, index) => (
                            <TouchableOpacity key={item.id} style={styles.item} onPress = {() => this.props.navigation.navigate('PanelistProfile',{
                                name : item.name,
                                id : item.id,
                                dept : item.dept,
                                image : item.image,
                                pos : item.pos,
                                bio : item.bio
                            })}>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-start'}}>
                                    <Image source={item.image} style={styles.image} />
                                </View>
                                <View style={{flex:1,marginLeft : 20, padding : 0, flexWrap : 'wrap', alignItems : 'flex-start'}}>
                                        <Text style={{ fontWeight: 'bold', fontSize: cardHeight / 2.8, paddingTop:3, paddingRight:3, paddingBottom:3}}>{item.name}</Text>
                                        <Text style={{fontSize: cardHeight / 3.2, }}>{item.pos}</Text>
                                        <Text style={{fontSize: cardHeight / 3.2,}}>{item.dept}</Text>                       
                                </View>
                            </TouchableOpacity>
                    ))
                    }
                </ScrollView>
                </View>
            </View>
            
        )
    }
}

let cardHeight = Math.round((dimensions.height * 1) / 15);


const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
      },
  item: {
      borderRadius : 10,
    flex:1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "#f4f4f4",
    minHeight:100,
    elevation: 3,

  },
  image:{
      height:80,
      width:80,
      borderRadius : 40
  },
    image2: {
    height: 40,
    width: 40,
    alignSelf:'center',
       }
});