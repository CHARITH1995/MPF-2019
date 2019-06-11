import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, TouchableOpacity, Dimensions,Platform, } from 'react-native'
import tabImg1 from "../../assets/clock.png";
import Header from '../components/Header'

let dimensions = Dimensions.get("window");
let windowHeight = Math.round((dimensions.height * 1) / 15);
let cardHeight = Math.round((Dimensions.get("window").height * 1) / 15);
let nameMargin = Math.round((dimensions.height * 0.8) / 15);

import AgendaComponent from "../components/AgendaComponent";
import AgendaComponent2 from "../components/AgendaComponent2";

export default class AgendaPage extends Component {
    render() {
        return (
          <View style={styles.container}>
           <View style={styles.statusBarBackground}> 
                </View>
            <Header title="Annotated Agenda" />
            <ScrollView>
              <View
                style={{
                  flex: 2,
                  backgroundColor: "white",
                  marginTop: nameMargin * 0.8,
                  marginLeft: nameMargin * 0.6,
                  marginRight: nameMargin * 0.6,
                  marginBottom: nameMargin * 0.6
                }}
              >
                <View style={styles.ImageCover}>
                  <Image
                    source={tabImg1}
                    style={styles.tabImg}
                    resizeMode="contain"
                  />
                  <Text style={styles.ImageText}>
                    "INVESTIGATING IN A RESILIENT ANS SUSTAINABLE
                    MALDIVES" MALDIVES PARTNERSHIP FORUM
                  </Text>
                </View>
                <View style={styles.TextCover}>
                  <Text style={styles.tabText}>
                    17-18 JUNE 2019, MALDIVES
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 4,
                  backgroundColor: "white",
                  marginBottom: nameMargin * 0.4
                }}
              >
                <View>
                  <AgendaComponent
                    description="Welcome Reception co-hosted by the Minister of Foreign Affairs and the Minister of Finance."
                    time="2000 - 2130"
                    date="Sunday, 16 June 2019"
                  />
                  <AgendaComponent
                    description="Opening Session: Introduction to “Island Nation” (Jazeera Raajje)"
                    time="0900 - 0930"
                    date="Monday, 17 June 2019"
                  />
                  <AgendaComponent2 description="Recitation of the Holy Quran" />
                  <AgendaComponent2 description="Welcome Remarks by the His Excellency Abdulla Shahid, Minister of Foreign Affairs" />
                  <AgendaComponent2 description="Video Presentation: Jazeera Raajje (“Island Nation”) Policy Agenda" />
                  <AgendaComponent2 description="Inaugural Address by His Excellency Ibrahim Mohamed Solih, President of the Republic of Maldives" />
                  <AgendaComponent2 description="Remarks by the His Excellency Ibrahim Ameer, Minister of Finance" />
                  <AgendaComponent2 description="Group Photo with His Excellency Ibrahim Mohamed Solih, President of the Republic of Maldives" />

                  <AgendaComponent
                    description="Tea/Coffee break"
                    time="0930 - 1015"
                    date="Monday, 17 June 2019"
                  />
                  <AgendaComponent
                    description="Plenary Session 1: Macroeconomic and Fiscal Overview"
                    time="1015 - 1115"
                    date="Monday, 17 June 2019"
                  />
                  <AgendaComponent2 description="Presentation Government policies on public finances, investments and public expenditure reform" />
                  <AgendaComponent2 description="Q & A with moderated discussion Participants will be invited to intervene from the floor" />
                  <AgendaComponent2 description="Summary of Discussions" />

                  <AgendaComponent
                    description="Plenary Session 2: Blue Economy: Addressing inclusivity and sustainability in economic development"
                    time="1115 - 1245"
                    date="Monday, 17 June 2019"
                  />
                  <AgendaComponent2 description="Video Presentation Context Setting: Introduction of issues highlighted in thematic papers and key policy interventions" />
                  <AgendaComponent2 description="Presentation Key policy interventions, key projects and programme areas" />
                  <AgendaComponent2 description="Moderated Discussion Participants will be invited to intervene from the floor" />
                  <AgendaComponent2 description="Summary of Discussions" />

                  <AgendaComponent
                    description="Lunch"
                    time="1300 - 1430"
                    date="Monday, 17 June 2019"
                  />

                  <AgendaComponent
                    description="Enhancing Social Outcomes: Investing in healthcare, education, and housing"
                    time="1430 - 1600"
                    date="Monday, 17 June 2019"
                  />
                  <AgendaComponent2 description="Video Presentation Context Setting: Introduction of issues highlighted in thematic papers and key policy intervention" />
                  <AgendaComponent2 description="Presentation Key policy interventions, key projects and programme areas" />
                  <AgendaComponent2 description="Moderated Discussion Participants will be invited to intervene from the floor" />
                  <AgendaComponent2 description="Summary of Discussions" />

                  <AgendaComponent
                    description="Official dinner hosted by His Excellency Ibrahim Mohamed Solih, President of the Republic of Maldives"
                    time="2000 - 2130"
                    date="Monday, 17 June 2019"
                  />

                  <AgendaComponent
                    description="Plenary Session 4: Building Robust Institutions: Addressing Governance and Justice"
                    time="0900 - 1030"
                    date="Tuesday, 18 June 2019"
                  />
                  <AgendaComponent2 description="Video Presentation Context Setting: Introduction of issues highlighted in thematic papers and key policy interventions" />
                  <AgendaComponent2 description="Presentation Key policy interventions, key projects and programme areas" />
                  <AgendaComponent2 description="Moderated Discussion Participants will be invited to intervene from the floor" />
                  <AgendaComponent2 description="Summary of Discussions" />

                  <AgendaComponent
                    description="Tea/Coffee Break"
                    time="1045 - 1115"
                    date="Tuesday, 18 June 2019"
                  />

                   <AgendaComponent
                    description="Plenary Session 5: Partnering with the Private Sector for Development"
                    time="1115 - 1245"
                    date="Tuesday, 18 June 2019"
                  />
                  <AgendaComponent2 description="Presentation:A success story of Private Sector Collaboration" />
                  <AgendaComponent2 description="Moderated Discussion Participants will be invited to intervene from the floor" />
                  <AgendaComponent2 description="Summary of Discussions" />

                  <AgendaComponent
                    description="Lunch"
                    time="1245 - 1430"
                    date="Tuesday, 18 June 2019"
                  />

                  <AgendaComponent
                    description="Concluding Session: Summary of discussions"
                    time="1430 - 1530"
                    date="Tuesday, 18 June 2019"
                  />
                  <AgendaComponent2 description="Statement by His Excellency Ibrahim Ameer, Minister of Finance" />
                  <AgendaComponent2 description="Concluding remarks by His Excellency Abdulla Shahid, Minister of Foreign Affairs" />

                  <AgendaComponent
                    description="Side Events"
                    date="Tuesday, 18 June 2019"
                  />
                  <AgendaComponent2 description="Bilateral Meetings (on request throughout the Conference)" />
                  <AgendaComponent2 description="Signing of agreements (on request, throughout the Conference, or alternatively, at the end)" />
                  <AgendaComponent2 description="Business Interaction (details to be provided)" />                                  
                </View>
              </View>
            </ScrollView>
          </View>
        );
    }
}

const styles = {
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "#1A5961",
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  ImageCover: {
    height: cardHeight * 3,
    alignItems: "center",
    justifyContent: "center"
  },
  TextCover: {
    paddingLeft: cardHeight / 2,
    paddingRight: cardHeight / 2,
    paddingBottom: cardHeight / 2
  },
  tabText: {
    fontSize: cardHeight / 3,
    color: "#727272",
    fontWeight: "400",
    lineHeight: (cardHeight / 3 - 1) * 2,
    textAlign: "center"
  },
  tabImg: {
    height: cardHeight * 0.8,
    marginBottom : 20,
  },
  ImageText: {
    fontSize: cardHeight / 3 + 3,
    fontWeight: "bold",
    color: "#1A5961",
    alignSelf: "center",
    textAlign: "center",
  }
};
