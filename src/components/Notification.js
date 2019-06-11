import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image, Dimensions
} from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogButton, DialogFooter, DialogTitle } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/Ionicons';
let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);
let cardWidth = Math.round((dimensions.width * 1) / 15);

const ImageViewer = (props) => {
    return (
        <View>
            <Dialog
                visible={props.show}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                dialogTitle={<DialogTitle 
                    title="Notification !" />}
            >
                <DialogContent style={{
                        width: cardHeight * 7, height:'auto'
                    }} >
                    <View>
                        <TouchableOpacity onPress={props.hide.bind(this)} >
                        <View>
                        <Text style={{fontSize:20 , padding:10}}>{props.msg}</Text>
                        <View style={{ justiftyContent: "center", alignItems: "center", marign: 0 }}>
                        <Icon name='md-close' size={50} style={{color:'red'}} />
                        </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                </DialogContent>
            </Dialog>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '250%',
        height: '10%',
    },
    footer: {
        marginTop: '15%',
        marginBottom: '-8%'
    },
    msgtext: {
        marginTop: '2%',
        color: '#2E4053',
        fontSize: 15,
    },
});

export default ImageViewer;