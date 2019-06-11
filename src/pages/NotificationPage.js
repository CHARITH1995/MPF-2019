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
  Dimensions, Platform
} from "react-native";
import axios from "axios";
import pdf from "../../assets/pdf1.png";
import download from "../../assets/download.png";
let dimensions = Dimensions.get("window");
let nameMargin = Math.round((dimensions.height * 0.8) / 15);
import Header from "../components/Header";
import Notification from "../components/Notification";
var striptags = require('striptags');

export default class NotificationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      papers: [],
      files: [{
        id: 0,
        name: '',
      }],
      showAlert: false,
      notify: ''
    };
  }
  componentDidMount = () => {
    axios.get('https://mpf.gov.mv/wp-json/wp/v2/notification')
      .then(response => {
        this.setState({ papers: response.data });
      })
      .catch(function (error) {
        console.log(error)
      });
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
          <ScrollView >
            {
              this.state.papers.map((item, index) => (
                <TouchableOpacity onPress={this.showAlert.bind(this, striptags(item.content.rendered))}>
                <View key={item.id} style={styles.item}>
                    <View style={{ flex:1 , flexDirection: "row" }}>
                      <View>
                        <Icon
                          style={{ color: '#1A5961', alignSelf: 'center', marginLeft: 15 }}
                          name="md-alert" size={35} />
                      </View>
                      <View style={{justifyContent:'center' , alignSelf:'center' , paddingLeft:'5%'}}><Text style={{textAlign:'center',fontWeight:'300',fontSize:20}}>{item.title.rendered}</Text></View>
                    </View>
                </View>
                  </TouchableOpacity>
              ))}
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
