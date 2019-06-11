import React, { Component } from 'react';
import {
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import tabImg2 from '../assets/check-out.png';
import tabImg1 from '../assets/locationcheckin.png';
import { Dimensions , Image , TouchableOpacity , SafeAreaView , View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import LoginPage from '../src/pages/LoginPage';
import AboutPage from '../src/pages/AboutPage';
import NotificationPage from '../src/pages/NotificationPage';
import SplashPage from '../src/pages/SplashPage';
import HomePage from '../src/pages/HomePage';
import PanelistProfile from '../src/pages/PanelistProfile';
import UserProfile from '../src/pages/UserProfile';
import GalleryPage from '../src/pages/GalleryPage';
import Attend from '../src/pages/Attend';
import ThematicPapersPage from "../src/pages/ThematicPapersPage"
import QuestionsPage from '../src/pages/QuestionPage'
import LogisticalInfo from '../src/pages/LogisticalInfo'
import AgendaPage from "../src/pages/AgendaPage";
import LogisticalSubPage from '../src/pages/LogisticalSubPage'
import PanelistListPage from '../src/pages/PanelistListPage'
import CheckInPage from '../src/pages/CheckInPage'
import CheckOutPage from '../src/pages/CheckOutPage'
import LogoutPage from '../src/pages/LogoutPage'
import ContactUsPage from '../src/pages/ContactUsPage'
import PublicationsPage from '../src/pages/PublicationsPage'
import OverviewPage from '../src/pages/OverviewPage';
import OverviewMore from '../src/pages/OverviewMore';
import contendComponent from '../src/components/contentComponent';
import CenterImg from '../assets/questions.png';
import ProjectsPage from '../src/pages/ProjectsPage';
import PdfView from '../src/pages/pdfViewer';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomePage,
        },
        LogisticalInfo: {
            screen: LogisticalInfo
        },
        LogSub : {
            screen : LogisticalSubPage
        },
        ThematicPapersPage: {
            screen: ThematicPapersPage
        },
        ProjectsPage: {
            screen: ProjectsPage
        },
        Attend: {
            screen: Attend,
        },
        AgendaPage: {
            screen: AgendaPage,
        },
        PanelistList : {
            screen : PanelistListPage
        },
        PanelistProfile: {
            screen: PanelistProfile,
        },
        Question: {
            screen: QuestionsPage
        },
        Overview : {
            screen : OverviewPage
        },
        Overview : {
            screen : OverviewPage
        },
        OMore : {
            screen :OverviewMore
        },
        PdfView : {
            screen : PdfView
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            gesturesEnabled: false
            return {
                header: null
            };
        }
    },
);


const AppTabNavigator = createBottomTabNavigator({
    Home : {
        screen : HomeStack,
        navigationOptions: {
            tabBarLabel:null,
            tabBarIcon: ({ tintColor }) => (
              <Icon name='md-home' size={25} color="white" />
            )
          },
    },
    Notification : {
        screen : NotificationPage,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-notifications" size={25} color="white" />
              )
        }
    },
    Question : {
        screen :QuestionsPage,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <Image source = {CenterImg} style ={{height:25}}   resizeMode="contain"/>
              )
        }
    },
},{
    tabBarOptions : {
        showIcon : true,
        showLabel : false,
        style : {
            backgroundColor : '#1A5961'
        },
        activeBackgroundColor : '#103F4F'
    }
},{
        defaultNavigationOptions: ({ navigation }) => {   
            return {
                header: null,
            }
        }
    },)

const MainStackNavigator = createStackNavigator({
    AppTabNavigator
}, 
{
    defaultNavigationOptions: ({ navigation }) => {
        return {
            header: null
        };
    }
},
//{
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: <Icon
//                     style={{ paddingLeft: 10 }}
//                     onPress={() => navigation.openDrawer()}
//                     name="md-menu" size={30} />
//             }
//         }
//     }
)



// to hide the login from drawer  

class Hidden extends Component {
    render() {
        return (
            <View>

            </View>
        )
    }
}



const AppDrawerNavigator = createDrawerNavigator({
    Login: {
        screen: LoginPage,
    },
    Home: {
      screen: MainStackNavigator,
    //   navigationOptions: {
    //     drawerIcon: ({ tintColor }) => (
    //       <Icon name="ios-arrow-forward" style={{ fontSize: 24, color: tintColor ,alignItems: 'center'}} />
    //     )
    //   }
    },
    About: {
        screen: AboutPage,
        // navigationOptions: {
        //     drawerIcon: ({ tintColor }) => (
        //       <Icon name="ios-arrow-forward" style={{ fontSize: 24, color: tintColor }} />
        //     )
        //   }
    },
    CheckIn : {
        screen : CheckInPage,
        // navigationOptions: {
        //     drawerIcon: ({ tintColor }) => (
        //       <Image source ={tabImg1} style={{ height:cardHeight* 0.6 , width:cardHeight*0.5 }} />
        //     )
        //   }

    },
    CheckOut : {
        screen : CheckOutPage,
        // navigationOptions: {
        //     drawerIcon: ({ tintColor }) => (
        //         <Image source ={tabImg2} style={{ height:cardHeight* 0.6 , width:cardHeight*0.7 }} />
        //     )
        //   }
    },
    Publications : {
        screen : PublicationsPage,
        navigationOptions: {
            drawerLabel: 'Downloads and Publications'
          }
    },
    Projects: {
        screen: ProjectsPage,
        navigationOptions: {
            drawerLabel: 'Projects'
        }
    },
    Contact : {
        screen : ContactUsPage,
        // navigationOptions: {
        //     drawerIcon: ({ tintColor }) => (
        //       <Icon name="ios-arrow-forward" style={{ fontSize: 24, color: tintColor , alignItems: 'center' }} />
        //     )
        //   }
    },
    Gallery: {
        screen: GalleryPage,
        // navigationOptions: {
        //     drawerIcon: ({ tintColor }) => (
        //       <Icon name="ios-arrow-forward" style={{ fontSize: 24, color: tintColor }} />
        //     )
        //   }
    },
   
    Logout : {
        screen : LogoutPage,
        // navigationOptions: {
        //     drawerIcon: ({ tintColor }) => (
        //       <Icon name="ios-arrow-forward" style={{ fontSize: 24, color: tintColor }} />
        //     )
        //   }
    }
},
 {
    initialRouteName:'Login',
    contentComponent:contendComponent,
    drawerWidth: Dimensions.get('window').width / 1.5,
    drawerPosition: 'left',
    //useNativeAnimations : true,
    //drawerBackgroundColor : 'white',
    // contentOptions: {
    //   activeTintColor: 'white',
    //   activeBackgroundColor : '#1A5961',
    //   inactiveTintColor : 'black',
    //   itemsContainerStyle: {
    //   marginVertical: 0,
    //   },
    //   iconContainerStyle: {
    //     opacity: 1
    //   },
    //   itemStyle :{
    //     height : 50,
    //   }
    // }
}
);

let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);

export default AppContainer = createAppContainer(AppDrawerNavigator);