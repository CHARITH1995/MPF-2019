import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,Platform
} from "react-native";
import pdf from "../../assets/pdf1.png";
import download from "../../assets/download.png";
let dimensions = Dimensions.get("window");
let nameMargin = Math.round((dimensions.height * 0.8) / 15);
import Header from "../components/Header";
import Notification from "../components/Notification";

export default class NotificationPage extends Component {
 constructor(props){
   super(props);
   this.state = {
    names: [
      // { name: "Notification 1", id: 1 , notification:' We use rn-fetch-blob to handle file system access in this package, So you should install react-native-pdf and rn-fetch-blob Notice: rn-fetch-blob v0.10.14 has a bug, please use v0.10.13' },
      //   { name: "Notification 1", id: 2 , notification:' We use rn-fetch-blob to handle file system access in this package, So you should install react-native-pdf ande: rn-fetch-blob v0.10.14 has a bug, please use v0.10.13'},
      //   { name: "Notification 1", id: 3 , notification:'We use rn-fetch-blob to handle file system access in this package, So you should install react-native-pdf and rn-fetch-blob Notice: rn-fetch-blob v0.10.14 has a bug, please use v0.10.13'},
      //   { name: "Notification 1", id: 4 , notification:'sdada'},
      //   { name: "Notification 1", id: 5 , notification:'asdsadasdas'},
      //   { name: "Notification 1", id: 6 , notification:'asdadsadsa'},
      //   { name: "Notification 1", id: 7 , notification:'asdadadad'},
      //   { name: "Notification 1", id: 8 , notification:'asdadad'},
      //   { name: "Notification 1", id: 9 , notification:'aweqe'}
    ],
    showAlert:false,
    notify:''
  };
 }

  showAlert = notify => {
    this.setState({
      showAlert: true,
      notify: notify
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
      notify: ""
    });
  };
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
       <View style={styles.statusBarBackground}> 
                </View>
        <Header title="Notifications" />

        <View
          style={{
            marginTop: nameMargin * 0.8,
            marginBottom: nameMargin * 0.8,
            padding: 10
          }}
        >
          <Notification
            show={this.state.showAlert}
            msg={this.state.notify}
            hide={this.hideAlert.bind(this)}
          />
          <ScrollView style={{}}>
            {/*this.state.names.map((item, index) => (
              <View key={item.id} style={styles.item}>
                <TouchableOpacity onPress ={this.showAlert.bind(this,item.notification)}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Icon
                      style={{ color: '#1A5961', alignSelf: 'center',marginLeft : 15 }}
                      name="md-alert" size={35} />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    alignSelf: "flex-end",
                    flexDirection: "row-reverse"
                  }}
                />
              </View>
                ))*/}
          </ScrollView>
        </View>
      </View>
    );
  }
}

let cardHeight = Math.round((dimensions.height * 1) / 15);

const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "#1A5961",
  },
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        // padding: 10,
        margin: 5,
        backgroundColor: "#efefef",
        height: 60,
        elevation: 5,

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
