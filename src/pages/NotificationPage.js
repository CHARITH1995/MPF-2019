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
      names: [],
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
    var today = new Date();
    var startDate0 = new Date("06/11/2019 19:50:00");
    var startDate1 = new Date("06/16/2019 19:50:00");
    var startDate2 = new Date("06/17/2019 08:50:00");
    var startDate3 = new Date("06/17/2019 09:20:00");
    var startDate4 = new Date("06/17/2019 10:05:00");
    var startDate5 = new Date("06/17/2019 11:05:00");
    var startDate6 = new Date("06/17/2019 12:50:00");
    var startDate7 = new Date("06/17/2019 14:20:00");
    var startDate8 = new Date("06/17/2019 19:50:00");
    var startDate9 = new Date("06/18/2019 08:50:00");
    var startDate10 = new Date("06/18/2019 10:35:00");
    var startDate11 = new Date("06/18/2019 11:05:00");
    var startDate12 = new Date("06/18/2019 12:35:00");
    var startDate13 = new Date("06/18/2019 14:20:00");
    console.log("today: " + today + " day1 " + startDate0);
    if (Number(startDate0) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Welcome Reception co-hosted", id: 1, valid: true }]
      });

    }
    if (Number(startDate1) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Welcome Reception co-hosted", id: 1, valid: true }]
      });

    }
    if (Number(startDate2) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Opening Session", id: 2, valid: true }]
      });

    }
    if (Number(startDate3) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Opening Session", id: 2, valid: true }, { name: "Tea/Coffee break", id: 3, valid: true }]
      });

    }
    if (Number(startDate4) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Opening Session", id: 2, valid: true }, { name: "Tea/Coffee break", id: 3, valid: true },
        { name: "Plenary Session 1", id: 4, valid: true }]
      });

    }
    if (Number(startDate5) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Opening Session", id: 2, valid: true }, { name: "Tea/Coffee break", id: 3, valid: true },
        { name: "Plenary Session 1", id: 4, valid: true },
        { name: "Plenary Session 2", id: 5, valid: true }]
      });

    }
    if (Number(startDate6) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Opening Session", id: 2, valid: true }, { name: "Tea/Coffee break", id: 3, valid: true },
        { name: "Plenary Session 1", id: 4, valid: true },
        { name: "Plenary Session 2", id: 5, valid: true },
        { name: "Lunch", id: 6, valid: true }]
      });

    }
    if (Number(startDate7) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Opening Session", id: 2, valid: true }, { name: "Tea/Coffee break", id: 3, valid: true },
        { name: "Plenary Session 1", id: 4, valid: true },
        { name: "Plenary Session 2", id: 5, valid: true },
        { name: "Lunch", id: 6, valid: true },
        { name: "Enhancing Social Outcome", id: 7, valid: true }]
      });

    }
    if (Number(startDate8) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Opening Session", id: 2, valid: true }, { name: "Tea/Coffee break", id: 3, valid: true },
        { name: "Plenary Session 1", id: 4, valid: true },
        { name: "Plenary Session 2", id: 5, valid: true },
        { name: "Lunch", id: 6, valid: true },
        { name: "Enhancing Social Outcome", id: 7, valid: true },
        { name: "Official dinner", id: 8, valid: true }]
      });

    }
    if (Number(startDate9) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Plenary Session 4", id: 1, valid: true }]
      });

    }
    if (Number(startDate10) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Plenary Session 4", id: 1, valid: true },
        { name: "Tea/Coffee break", id: 2, valid: true }]
      });

    }
    if (Number(startDate11) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Plenary Session 4", id: 1, valid: true },
        { name: "Tea/Coffee break", id: 2, valid: true },
        { name: "Plenary Session 5", id: 3, valid: true }]
      });

    }
    if (Number(startDate12) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Plenary Session 4", id: 1, valid: true },
        { name: "Tea/Coffee break", id: 2, valid: true },
        { name: "Plenary Session 5", id: 3, valid: true },
        { name: "Lunch ", id: 4, valid: true }]
      });

    }
    if (Number(startDate13) < Number(today)) {
      this.setState({
        names: [...this.state.names, { name: "Plenary Session 4", id: 1, valid: true },
        { name: "Tea/Coffee break", id: 2, valid: true },
        { name: "Plenary Session 5", id: 3, valid: true },
        { name: "Lunch ", id: 4, valid: true },
        { name: "Concluding session", id: 5, valid: true }]
      });

    }
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
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View>
                        <Icon
                          style={{ color: '#1A5961', alignSelf: 'center', marginLeft: 15 }}
                          name="md-alert" size={35} />
                      </View>
                      <View style={{ justifyContent: 'center', alignSelf: 'center', paddingLeft: '5%' }}><Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 20 }}>{item.title.rendered}</Text></View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            }
            {this.state.names.map((item, index) => (
              <TouchableOpacity onPress={this.showAlert.bind(this, striptags(item.name))}>
              <View key={item.id} style={styles.item}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ padding: 15 }}>
                    <Icon
                      style={{ color: '#1A5961', alignSelf: 'center' }}
                      name="md-alert" size={35} />
                  </View>
                  <Text
                    style={{
                      marginLeft: 10,
                      alignSelf: "center",
                      fontWeight: "300",
                      fontSize: 20
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: "flex-end",
                    flexDirection: "row-reverse"
                  }}
                >
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
