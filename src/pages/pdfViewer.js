import React from 'react';
import { StyleSheet, Dimensions, View,Platform } from 'react-native';
 
import Pdf from 'react-native-pdf';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class PDFExample extends React.Component {

    constructor(props){
        super(props);

    }
    render() {
        const { navigation } = this.props;
         const uri = navigation.getParam('uri');
         const source = {uri:uri,cache:true};
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (     
            <View style={styles.container}>
                <View>
                    <View style = {{flexDirection:'row'}}>
                    <Header title = "Papers"/>
            <TouchableHighlight onPress={() => Linking.openURL(uri)}>
                <Text>download</Text>
            </TouchableHighlight>
                    </View>       
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
                </View>
            </View>
        )
  }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
        backgroundColor: "#1A5961",
      },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});