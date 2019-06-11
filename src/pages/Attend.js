import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image , TouchableOpacity,Platform } from 'react-native';
import Header from '../components/Header';

// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// import tabImg1 from '../../assets/locationcheckin.png'
// import tabImg2 from '../../assets/check-out.png'
// import tabImg3 from '../../assets/logouticon.png'
// import tabImg4 from '../../assets/edit.png'

import backgroundImg from '../../assets/MPF2019.png'

// const text = "This is User Profile .There are a couple of ways to style your elements in React Native You can use the style property to add the styles inline. However, this is not the best practice because it can be hard to read the code.In this chapter, we will use the Stylesheet for styling";
// const email = "prasanna.charith32@gmail.com";
// const name = "Ali Ibrahim";
// const ministry = "Minister Of Tourism";


let devWidth = Dimensions.get('window').width
let cardHeight = Math.round((Dimensions.get("window").height * 1) / 15);

// const FirstRoute = () => (
//     <View style={[styles.scene, { backgroundColor: 'white' }]} >
//     <ScrollView>
//         <View style = {styles.ImageCover}>
//             <Image source = {tabImg1} style={styles.tabImg} resizeMode="contain"/>
//             <Text style = {styles.ImageText}>Information</Text>
//         </View>
//         <View style = {styles.TextCover}>
//             <Text style = {styles.tabText}>{text}</Text>
//         </View>
//     </ScrollView> 
//     </View>
// );
// const SecondRoute = () => (
//     <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );
// const ThirdRoute = () => (
//     <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );
// const FourthRoute = () => (
//     <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );

// const getTabBarIcon = (props) => {

//     const {route} = props

//       if (route.key === 'first') {

//        return <Image source = {tabImg1} style={{ height : 30 }} resizeMode="contain"/>

//       } else if (route.key === 'second') {

//         return <Image source = {tabImg2} style={{ height : 30 }} resizeMode="contain"/>
 
//        } else if (route.key === 'third') {

//         return <Image source = {tabImg3} style={{ height : 30 }} resizeMode="contain"/>
 
//        } else if (route.key === 'fourth') {

//         return <Image source = {tabImg3} style={{ height : 30 }} resizeMode="contain"/>
 
//        }
// }

var text  = <Text style = {{fontSize : 17, textAlign : 'center',}}>The Maldives is, by many measures, a development success story.{"\n"}
            {"\n"}
            At the time of its independence in 1965, the Maldives was an under-developed country. Today, fifty-three years later, it is an upper middle-income country, with high economic, social and human development indicators. The per-capita gross national income doubled over the past ten years from $4460 in 2007 to $9760 in 2017 . The Human Development Index ranking of Maldives has increased steadily, from 0.539 in 1995, to 0.717 in 2017 an increase of 33%, ranking it 101 out of 189 countries and territories .
            {"\n"}
            {"\n"}
            The Maldives also is, at the same time, a country with many challenges.
            {"\n"}
            {"\n"}
            While high human development indicators indicate success, inequality persists. Spatial disparities between the capital Malé and other atolls, are further exacerbated by unequal resource allocation and gender disparity. Urban poverty is on the rise in the capital city of Malé, with the high cost of living, limited housing, and extremely high population density, driven by internal migration for education and medical care, as well as migration of foreign labour to sustain the boom in construction. These issues are coupled with growing social tensions such as violent extremism, gender-based violence, rising drug epidemic, and gang-related crimes. Investing in social outcomes such as in the areas of education, healthcare, and housing are necessary to avoid derailing on the development gains already made.
            {"\n"}
            {"\n"}
            These social issues are coupled with challenges due to climate change and environmental degradation. Over the next few years, rainfall and storm surges, and other climate-induced weather changes, and disasters, are expected to increase, making the low-lying islands of the Maldives increasingly more vulnerable to coastal erosion, salination of the fresh water lens, and other impacts on livelihoods and infrastructure.
            {"\n"}
            {"\n"}
            The Maldives is also a democracy in transition. A new constitution, that for the first time introduced separation of powers, a multi-party system and decentralization, and established independent institutions such as the Supreme Court, the Human Rights Commission, and the Anti-Corruption Commission, was adopted only a decade ago, in 2008. And thus, the development of independent, effective, inclusive institutions and processes, and the emergence of an informed and vocal civil society and an independent, professional media are in infancy stages. The rule of law, strong democratic values and responsibilities, values are in most part “foreign”, and a culture of impunity persists. Broad judicial reform, including reform of the criminal justice system, accountability and consolidation of democratic processes are crucial to resolving these issues and fulfilling the Maldives’ development goals.
            {"\n"}
            {"\n"}
            It is against this backdrop that the Government of President Ibrahim Mohamed Solih took office on 17 November 2018, promising equitable, inclusive, and sustainable growth, access to justice and the rule of law. The challenge facing the Government is to above all, sustain the development gains made, and to also consolidate them. This can be done through partnerships between the public and private sector, through cooperation between central and local authorities, and through the support of the civil society. It can also be done through partnerships with the international community: without which, the Maldives could fall into the “middle-income” trap.

            </Text>

export default class Attend extends Component {

    constructor(props) {
        super(props);
    }

    // state = {
    //     index: 0,
    //     routes: [

    //       { key: 'first' },
    //     //   { key: 'second',  },
    //     //   { key: 'third',  },
    //     //   { key: 'fourth',  },

    //     ],
    //   };

    render() {
        return (

            <View style = {{flex : 1}}>
             <View style={styles.statusBarBackground}> 
                </View>
                <Header title = "Why Maldives"/>
                <ScrollView>
                <View style = {styles.backgroundCover} >
                    <Image source = {backgroundImg} style={styles.backImg} resizeMode="contain"/>
                </View>
                <View style = {styles.textContainer}>
                {text}
                </View>
                </ScrollView>
            </View>

            // <View style = {{ flex : 1 }}>
            //     <Header title = "Why Maldives" />
            //     <View style = {{ flex : 1, flexDirection : 'row'}}>
            //     <View style = {{ flex : 0.05 }} ></View>
            //     <View style = {{ flex : 0.9 }} >
            //         <TabView
            //             navigationState={this.state}
            //             renderScene={SceneMap({
            //             first: FirstRoute,
            //             // second: SecondRoute,
            //             // third: ThirdRoute,
            //             // fourth: FourthRoute,
            //             })}
            //             onIndexChange={index => this.setState({ index })}
            //             // initialLayout={{ width: (devWidth * 0.9) }}
            //             renderTabBar={props =>
            //                 <TabBar
            //                     {...props}
            //                     indicatorStyle={{backgroundColor: '#1A5961'}}
            //                     style={{ backgroundColor: 'white', paddingTop : cardHeight/3 }}
            //                     renderIcon={
            //                         props => getTabBarIcon(props)
            //                     }
            //                     // tabStyle={styles.bubble}
            //                     labelStyle={styles.noLabel}
            //                 />
            //             }
            //         />
            //     </View>
            //     <View style = {{ flex : 0.05 }} ></View>
            //     </View>
            // </View>
           
        )
    }
}



const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
      },
    backgroundCover : {
        height : cardHeight * 4,
        justifyContent : 'center',
        alignItems : 'center'
    },
    backImg : {
        height : cardHeight * 3,
    },
    textContainer : {
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
        paddingBottom : 20
    }

})
