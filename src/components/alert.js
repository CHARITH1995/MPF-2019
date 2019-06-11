import React from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, TouchableHighlight, Image , Dimensions
} from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogButton, DialogFooter, DialogTitle } from 'react-native-popup-dialog'
import Icon from 'react-native-vector-icons/Ionicons';
let dimensions = Dimensions.get("window");

let cardHeight = Math.round((dimensions.height * 1) / 15);
let cardWidth = Math.round((dimensions.width * 1) / 15);

const Alert = (props) => {
    return (
        <View>
            <Dialog
                visible={props.show}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                dialogTitle={<DialogTitle
                    title="Alert !" />}
                footer={
                    <DialogFooter >
                        <DialogButton
                            text="Dismiss"
                            onPress={props.hide.bind(this)}
                        />
                    </DialogFooter>
                }
            >
                <DialogContent styles={{
                    width: cardHeight * 7, height:'auto'
                }}>
                    <View>
                        <TouchableOpacity onPress={props.hide.bind(this)} >
                            <View>
                                <Text styles={{ fontSize: 30, padding: 10 }}>{props.msg}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </DialogContent>
            </Dialog>
        </View>
    )
}


export default Alert;