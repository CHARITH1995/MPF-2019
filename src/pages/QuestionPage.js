import React, { Component } from 'react'
import { StyleSheet,Text, View,Dimensions, Image,TouchableOpacity,ScrollView,Platform } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Picker, Textarea } from 'native-base';
import { Button } from 'react-native-elements';
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/Ionicons';
import Mailer from 'react-native-mail';

export default class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined,
          body:'',
          subject:'',
          To:"mpf2019@foreign.gov.mv"
        };
      }


      handleEmail = () => {
        Mailer.mail({
          subject:this.state.subject,
          recipients: [this.state.To],
          body: `${this.state.body} sector is ${this.state.selected2}`,
          isHTML: true,
        }, (error, event) => {
          Alert.alert(
            error,
            event,
            [
              {text: 'Ok', onPress: () => alert('OK: Email Error Response')},
              {text: 'Cancel', onPress: () => alert('CANCEL: Email Error Response')}
            ],
            { cancelable: true }
          )
        });
        this.setState({
            selected2: '',
          body:'',
          subject:'',
        })
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }

      handleSubject = (text) => {
        this.setState({ 
            subject: text,
        })
    }

    handleBody = (text) => {
        this.setState({ 
            body: text,
        })
    }

    render() {
        return (
            <View style = {{ flex  : 1}}>
             <View style={styles.statusBarBackground}> 
                </View>
                <Header title = "Questionnaire"/>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle = {styles.BodyCover}>
                    <View style = {styles.FormCover}>
                        <View style = {styles.FormContain}>
                            <Form>
                            <Item inlineLabel last  style = {styles.input1}>
                                <Label style = {{ fontSize : 15.5 }}>To</Label>
                                <Input value={this.state.To}/>
                            </Item>
                            <Item picker>
                            <Picker style = {styles.input2}
                                mode="dropdown"
                                iosIcon={<Icon name="md-arrow-down"/>}
                                style={{ width: undefined }}
                                placeholder="Select Attribute"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                    <Picker.Item label="Sector" value="key0" />
                                    <Picker.Item label="Economic" value="key1" />
                                    <Picker.Item label="Social" value="key2" />
                                    <Picker.Item label="Governance" value="key3" />
                            </Picker>
                            </Item>
                            <Textarea onChangeText={this.handleSubject.bind(this)} value = {this.state.subject} style = {styles.input3} bordered placeholder="Subject" />
                            <Textarea onChangeText={this.handleBody.bind(this)} value = {this.state.body}  style = {styles.input4} bordered placeholder="Message" />
                            </Form>
                        </View>
                    </View>
                    <View style = {styles.BtnCover}>
                        <View style = {{ flex : 1, justifyContent : 'center', }}>
                            <Button buttonStyle = {styles.leftBtn} title="Back" onPress={()=>this.props.navigation.navigate('Home')}/>
                        </View>
                        <View style = {{ flex : 1, justifyContent : 'center', }}>
                        <Button buttonStyle = {styles.RightBtn} title="Next" onPress={this.handleEmail}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
      },
    BodyCover : {
        height : cardHeight * 12,
        flexDirection : 'column',
    },
    FormCover : {
        height : cardHeight * 8,
        alignItems : 'center',
        justifyContent : 'center'
    },
    BtnCover : {
        height : cardHeight * 5,
        flexDirection : 'row',
    },
    FormContain : {
        height : cardHeight * 8,
        width : '85%',
    },
    input1 : {
        marginTop : cardHeight / 3,
        marginBottom : cardHeight / 3,
    },
    input3 : {
        marginTop : cardHeight ,
        marginBottom : cardHeight / 3,
        backgroundColor : '#efefef',
        borderBottomWidth : 0,
        borderTopWidth : 0,
        borderLeftWidth : 0,
        borderRightWidth : 0,
        height : cardHeight * 1.5
    },
    input4 : {
        backgroundColor : '#efefef',
        borderBottomWidth : 0,
        borderTopWidth : 0,
        borderLeftWidth : 0,
        borderRightWidth : 0,
        height : cardHeight * 2.5
    },
    input2 : {
        marginRight : 25,
    },
    leftBtn : {
        height : cardHeight * 2/3,
        backgroundColor : '#c6c6c6',
        width : '60%',
        alignSelf : 'flex-end',
        marginRight : 5
    },
    RightBtn : {
        height : cardHeight * 2/3,
        backgroundColor : '#1A5961',
        width : '60%',
        alignSelf : 'flex-start',
        marginLeft : 5
    }
});