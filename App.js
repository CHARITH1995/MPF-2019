import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ReactNativeAN from 'react-native-alarm-notification';

const fireDate = ReactNativeAN.parseDate(new Date(Date.now()));

const fireDate1 = '16-06-2019 19:50:00';
const fireDate2 = '17-06-2019 08:50:00';
const fireDate3 = '17-06-2019 09:20:00';
const fireDate4 = '17-06-2019 10:05:00';
const fireDate5 = '17-06-2019 11:05:00';
const fireDate6 = '17-06-2019 15:50:00';
const fireDate7 = '17-06-2019 14:20:00';
const fireDate8 = '17-06-2019 19:50:00';
const fireDate9 = '18-06-2019 08:50:00';
const fireDate10 = '18-06-2019 10:35:00';
const fireDate11 = '18-06-2019 11:05:00';
const fireDate12 = '18-06-2019 12:35:00';
const fireDate13 = '18-06-2019 14:20:00';

const alarmNotifData = {
  id: "0",                                  // Required
  title: "Welcome Reception co-hosted",               // Required
  message: "8.00 pm - 09.30 pm",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};

const alarmNotifData1 = {
  id: "1",                                  // Required
  title: "Welcome Reception co-hosted",               // Required
  message: "8.00 pm - 09.30 pm",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate1,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData2 = {
  id: "2",                                  // Required
  title: "Opening Session",               // Required
  message: "9.00 am - 9.30 am",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate2,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData3 = {
  id: "3",                                  // Required
  title: "Tea/Coffee break",               // Required
  message: "9.30 am - 10.15 am",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate3,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData4 = {
  id: "4",                                  // Required
  title: "Plenary Session 1",               // Required
  message: "10.15 am - 11.15 am",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate4,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData5 = {
  id: "5",                                  // Required
  title: "Plenary Session 2",               // Required
  message: "11.15 am - 12.45 am",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate5,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData6 = {
  id: "6",                                  // Required
  title: "Lunch",               // Required
  message: "1.00 pm - 2.30 pm",           // Required  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate6,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData7 = {
  id: "7",                                  // Required
  title: "Enhancing Social Outcome",               // Required
  message: "2.30 pm - 4.00 pm",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate7,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData8 = {
  id: "8",                                  // Required
  title: "Official dinner",               // Required
  message: "8.00 pm - 9.30 pm",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate8,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData9 = {
  id: "9",                                  // Required
  title: "Plenary Session 4",               // Required
  message: "9.00 am - 10.30 am",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate9,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData10 = {
  id: "10",                                  // Required
  title: "Tea/Coffee break",               // Required
  message: "10.45 am - 11.15 am",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate10,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData11 = {
  id: "11",                                  // Required
  title: "Plenary Session 5",               // Required
  message: "11.15 am - 12.45 pm",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate11,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData12 = {
  id: "12",                                  // Required
  title: "Lunch ",               // Required
  message: "12.45 pm - 2.30 pm",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate12,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};
const alarmNotifData13 = {
  id: "13",                                  // Required
  title: "Concluding session",               // Required
  message: "2.30 pm - 3.30 pm",           // Required
  channel: "my_channel_id",                     // Required. Same id as specified in MainApplication's onCreate method
  ticker: "My Notification Ticker",
  auto_cancel: true,                            // default: true
  vibrate: true,
  vibration: 100,                               // default: 100, no vibration if vibrate: false
  small_icon: "ic_launcher",                    // Required
  large_icon: "ic_launcher",
  play_sound: true,
  sound_name: null,                             // Plays custom notification ringtone if sound_name: null
  color: "#103F4F",
  schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
  tag: 'some_tag',
  fire_date: fireDate13,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: { foo: "bar" },
};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import AppContainer from './AppNavigation/AppNavigation'
import Test from '../partnershipForum/src/pages/GalleryPage';

const axios = require('axios');

export default class App extends Component{

  componentWillMount = () => {
    console.log("method runnig ");
    console.log(fireDate1);
    ReactNativeAN.scheduleAlarm(alarmNotifData);
    ReactNativeAN.scheduleAlarm(alarmNotifData1);
    ReactNativeAN.scheduleAlarm(alarmNotifData2);
    ReactNativeAN.scheduleAlarm(alarmNotifData3);
    ReactNativeAN.scheduleAlarm(alarmNotifData4);
    ReactNativeAN.scheduleAlarm(alarmNotifData5);
    ReactNativeAN.scheduleAlarm(alarmNotifData6);
    ReactNativeAN.scheduleAlarm(alarmNotifData7);
    ReactNativeAN.scheduleAlarm(alarmNotifData8);
    ReactNativeAN.scheduleAlarm(alarmNotifData9);
    ReactNativeAN.scheduleAlarm(alarmNotifData10);
    ReactNativeAN.scheduleAlarm(alarmNotifData11);
    ReactNativeAN.scheduleAlarm(alarmNotifData12);
    ReactNativeAN.scheduleAlarm(alarmNotifData13);
  }

// componentDidMount(){
//   axios.get('https://mpf.gov.mv/wp-json/wp/v2/posts')
//   .then(function (response) {
//     alert(JSON.stringify(response))
//   })
//   .catch(function (error) {
//     alert(error);
//   })
// }
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
