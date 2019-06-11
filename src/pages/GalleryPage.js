import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, TouchableOpacity, Dimensions,Platform } from 'react-native'

import image1 from "../../assets/Gallery/gallery(1).jpg";
import image2 from "../../assets/Gallery/gallery(2).jpg";
import image3 from "../../assets/Gallery/gallery(3).jpg";
import image4 from "../../assets/Gallery/gallery(4).jpg";
import image5 from "../../assets/Gallery/gallery(5).jpg";
import image6 from "../../assets/Gallery/gallery(6).jpg";
import image7 from "../../assets/Gallery/gallery(7).jpg";
import image8 from "../../assets/Gallery/gallery(8).jpg";
import image9 from "../../assets/Gallery/gallery(9).jpg";
import image10 from "../../assets/Gallery/gallery(10).jpg";
import image11 from "../../assets/Gallery/gallery(11).jpg";
import image12 from "../../assets/Gallery/gallery(12).jpg";
import image13 from "../../assets/Gallery/gallery(13).jpg";
import image14 from "../../assets/Gallery/gallery(14).jpg";
import image15 from "../../assets/Gallery/gallery(15).jpg";
import image16 from "../../assets/Gallery/gallery(16).jpg";
import image17 from "../../assets/Gallery/gallery(17).jpg";
import image18 from "../../assets/Gallery/gallery(18).jpg";
import image19 from "../../assets/Gallery/gallery(19).jpg";
import image20 from "../../assets/Gallery/gallery(20).jpg";
import image21 from "../../assets/Gallery/gallery(21).jpg";
import image22 from "../../assets/Gallery/gallery(22).jpg";
import image23 from "../../assets/Gallery/gallery(23).jpg";
import image24 from "../../assets/Gallery/gallery(24).jpg";
import image25 from "../../assets/Gallery/gallery(25).jpg";
import image26 from "../../assets/Gallery/gallery(26).jpg";
import image27 from "../../assets/Gallery/gallery(27).jpg";
import image28 from "../../assets/Gallery/gallery(28).jpg";
import image29 from "../../assets/Gallery/gallery(29).jpg";
import image30 from "../../assets/Gallery/gallery(30).jpg";
import image31 from "../../assets/Gallery/gallery(31).jpg";
import image32 from "../../assets/Gallery/gallery(32).jpg";
import image33 from "../../assets/Gallery/gallery(33).jpg";
import image34 from "../../assets/Gallery/gallery(34).jpg";
import image35 from "../../assets/Gallery/gallery(35).jpg";
import ViewImage from '../components/imageViewer';
import HeaderDrawer from '../components/HeaderDrawer'

let dimensions = Dimensions.get("window");
let windowHeight = Math.round((dimensions.height * 1) / 15);

export default class GalleryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          GridViewItems: [
            { key: "1", image: image1 },
            { key: "2", image: image2 },
            { key: "3", image: image3 },
            { key: "4", image: image4 },
            { key: "5", image: image5 },
            { key: "6", image: image6 },
            { key: "7", image: image7 },
            { key: "8", image: image8 },
            { key: "9", image: image9 },
            { key: "10", image: image10 },
            { key: "11", image: image11 },
            { key: "12", image: image12 },
            { key: "13", image: image13 },
            { key: "14", image: image14 },
            { key: "15", image: image15 },
            { key: "16", image: image16 },
            { key: "17", image: image17 },
            { key: "18", image: image18 },
            { key: "19", image: image19 },
            { key: "20", image: image20 },
            { key: "21", image: image21 },
            { key: "22", image: image22 },
            { key: "23", image: image23 },
            { key: "24", image: image24 },
            { key: "25", image: image25 },
            { key: "26", image: image26 },
            { key: "27", image: image27 },
            { key: "28", image: image28 },
            { key: "29", image: image29 },
            { key: "30", image: image30 },
            { key: "31", image: image31 },
            { key: "32", image: image32 },
            { key: "33", image: image33 },
            { key: "34", image: image34 },
            { key: "35", image: image35 },
          ],
          showAlert:false,
          image:''
        };
    }
    showAlert = (imageName) => {
      this.setState({
          showAlert: true,
          image:imageName
      });
  };

  hideAlert = () => {
      this.setState({
          showAlert: false,
      });
  };
    render() {
        return (
          <View style={styles.container}>
           <View style={styles.statusBarBackground}> 
                </View>
          <HeaderDrawer title = "Gallery" />
            <View style={{ marginTop: windowHeight * 0.4, padding: 10, marginBottom: windowHeight * 0.8 }}>
              <Text style={{ alignSelf: "center" }}>
                MALDIVES PARTNERSHIP FORUM
              </Text>
              <View style={{ marginTop: windowHeight * 0.4, marginBottom: windowHeight * 3.2 }}>
                <ScrollView >
                  <FlatList
                    data={this.state.GridViewItems}
                    renderItem={({ item }) => (
                      <TouchableOpacity style={styles.GridViewBlockStyle}  onPress={this.showAlert.bind(this , item.image)}>
                        <Image
                          source={item.image}
                          style={{ width: '95%', height: 170 }}
                        />
                      </TouchableOpacity>
                    )}
                    numColumns={2}
                  />
                </ScrollView>
                <ViewImage
                    msg={this.state.image}
                    show={this.state.showAlert}
                    hide={this.hideAlert}
                />
              </View>
            </View>
            </View>
        )
        }

    }
let cardHeight = Math.round((dimensions.height * 1) / 15);

const styles = {
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "#1A5961",
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  container: {
    /*justifyContent: 'center',
    alignItems: 'center',
    padding: 10,*/
    flex: 1,
    flexDirection:'column'
  },
  GridViewBlockStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: '47%'
  }
};