import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, ScrollView, Image,Platform, } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { Fonts } from '../fonts/fonts';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import gallery from "../../assets/logo_1.png";
import HeaderDrawer from '../components/HeaderDrawer'


const text1 = "";



let devWidth = Dimensions.get('window').width
let cardHeight = Math.round((Dimensions.get("window").height * 1) / 15);
export default class AboutPage extends Component {

    constructor(props) {
        super(props);

        this.data1 = {
            GridViewItems: [
                { key: 'One' },
                { key: 'Two' },
                { key: 'Three' },
                { key: 'Four' },
                { key: 'Five' },
                { key: 'Six' },
                { key: 'Seven' },
                { key: 'Eight' },
                { key: 'Nine' },
                { key: 'Ten' },
                { key: 'Eleven' },
                { key: 'Twelve' },
                { key: 'Thirteen' },
                { key: 'Fourteen' },
                { key: 'Fifteen' },
                { key: 'Sixteen' },
                { key: 'Seventeen' },
                { key: 'Eighteen' },
                { key: 'Nineteen' },
                { key: 'Twenty' }
            ]
        }
    }

    state = {
        index: 0,
        routes: [

            { key: 'first' },
            // { key: 'second', },

        ],
    };

    render() {
        return (
          <View style={{ flex: 1 }}>
           <View style={styles.statusBarBackground}>
                </View>
            <HeaderDrawer title="About us" />
            <ScrollView>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  backgroundColor: "white"
                }}
              >
                <View style={{ flex: 0.05 }} />
                <View style={{ flex: 0.9 }}>
                  <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                      first: FirstRoute
                      // second: SecondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    // initialLayout={{ width: (devWidth * 0.9) }}
                    renderTabBar={props => (
                      <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: "#1A5961" }}
                        style={{
                          backgroundColor: "white",
                          paddingTop: cardHeight / 3
                        }}
                        renderIcon={props => getTabBarIcon(props)}
                        // tabStyle={styles.bubble}
                        labelStyle={styles.noLabel}
                      />
                    )}
                  />
                </View>
                <View style={{ flex: 0.05 }} />
              </View>
            </ScrollView>
          </View>
        );
    }
}


const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'white' }]} >
        <ScrollView>
            <View style={styles.ImageCover}>
                <Text style={styles.ImageText}>Investing in a Resilient and Sustsainable Maldives</Text>
            </View>
            <View style={styles.TextCover}>
                <Text style={styles.tabText}>The Maldives Partnership Forum 2019 seeks to expand on the Government’s Jazeera Raajje (Island Nation) concept. The theme of the forum, “Investing in a Resilient and Sustainable Maldives” will discuss the Government’s development priorities, and seek partnership and investment for the development agenda and plans. This is the fourth edition of the Maldives Partnership Forum, with the last one held in 2009.
                          The Forum will provide a platform for discussion between the Government of the Maldives and its bilateral and multilateral partners to consider themes ranging from inclusive, and sustainable development – blue economy, decentralization, to improving social outcomes and judicial reform. Through the MPF 2019 the Government of Maldives wishes to:
{"\n"}
{"\n"}
                      <Text style = {{ marginLeft: cardHeight / 3,
        }}>
                    {'\u2022'} Inform development partners of the new directions and policies of the government with a view to partner in the implementation of national development priority programmes.
{"\n"}

                    {'\u2022'} Brief partners on the political and socio-economic situation of the country.
{"\n"}

                    {'\u2022'} Identify areas of common interest with a view to facilitate longer-term partnerships.
{"\n"}

                    {'\u2022'} Establish and nurture long-term strategic partnerships with key bilateral and multilateral development partners.</Text>
{"\n"}
{"\n"}

                   <Text style = {{textAlign : 'center', fontWeight : 'bold'}}>The forum will focus on the following thematic areas.</Text>
                    {"\n"}
{"\n"}

                    <Text style = {{ marginLeft: cardHeight / 3,
        }}>
                    {'\u2022'} New strategic direction of the Government: Introduction to Jazeera Raajje.
                    {"\n"}

                   {'\u2022'} Blue economy: Addressing inclusivity and sustainability in economic development.
                    {"\n"}

                   {'\u2022'} Establish and nurture long-term strategic partnerships with key bilateral and multilateral development partners.
                    {"\n"}

                   {'\u2022'} Enhancing social outcomes: Investing in healthcare, education and housing.
                   </Text>
                    {"\n"}
{"\n"}The Maldives Partnership Forum will provide an opportunity for all participants to announce new partnerships and collaboration on projects, with the Government of Maldives and relevant agencies.              
MPF 2019 is organised jointly by the President’s Office, the Ministry of Foreign Affairs, the Ministry of Finance, the Ministry of Economic Development, and the Ministry of National Planning and Infrastructure</Text>
            </View>
        </ScrollView>
    </View>
);
// const SecondRoute = () => (
//     <View style={[styles.scene, { backgroundColor: "white" }]} >
//         <ScrollView >
//             <FlatList
//                 data={[{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '10' }, { key: '11' }, { key: '12' },]}
//                 renderItem={({ item }) => (
//                     <View style={styles.GridViewBlockStyle}>
//                         <Image
//                             source={gallery}
//                             style={{ width: "95%", height: 120, }}
//                         />
//                     </View>
//                 )}
//                 numColumns={3}
//             />
//         </ScrollView>
//     </View>
// );


const getTabBarIcon = (props) => {

    const { route } = props

    if (route.key === 'first') {

        return <Text style={{ alignSelf: 'flex-start' }} resizeMode="contain">About the Forum</Text>

    } else if (route.key === 'second') {

        return <Text style={{ alignSelf: 'flex-end' }} resizeMode="contain">Partners</Text>

    }
}




const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "#1A5961",
  },
  LPContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  LPcardContainer: {
    flex: 1,
    flexDirection: "row"
    // backgroundColor : 'green'
  },
  scene: {
    flex: 1
  },

  ImageCover: {
    height: cardHeight * 3,
    alignItems: "center",
    justifyContent: "center"
  },
  TextCover: {
    paddingLeft: cardHeight / 4,
    paddingRight: cardHeight / 4,
    paddingBottom: cardHeight / 2,
    // textAlign: 'right',
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    textAlign: "center"
  },
  tabText: {
    fontSize: cardHeight / 3 - 0.5,
    color: "#727272",
    fontWeight: "400",
    lineHeight: (cardHeight / 3 - 1) * 2,
    textAlign: "center"
  },
  tabImg: {
    height: cardHeight * 2.5
  },
  ImageText: {
    fontSize: cardHeight / 3 + 3,
    fontWeight: "bold",
    color: "#3f3f3f",
    //flex:1,
    alignSelf: "center",
    textAlign: "center"
  },
  GridViewBlockStyle: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    width: "30%"
  }
});
