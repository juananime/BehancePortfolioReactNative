/**
 * Created by juanjimenez on 07/12/2016.
 */
import React, {Component} from "react";
import {TouchableHighlight, AppRegistry, Image, ListView, StyleSheet, Text, View} from "react-native";

var ResponsiveImage = require('react-native-responsive-image');

export default class SideMenu extends Component {
    constructor(props) {
        super(props);

    }
    onPressTitle(section){
        console.log('>>>'+section);

        this.props.onSectionChanged(section);
        this.props.closeDrawer();


    }

    componentDidMount() {
        console.log('Side menu mounted');


    }
    render() {
        return (
            <View style={styles.mainView}>
                <View style={{flex: 1, backgroundColor: 'white',justifyContent: 'center',
                alignItems: 'center',}} >
                    <Image style={styles.image} source={require('./img/logo3.png')}/>
                </View>
                <View style={{flex: 1, backgroundColor: 'black'}} >


                </View>
                <View style={{flex: 3, backgroundColor: 'black'}} >
                    <TouchableHighlight onPress={() => this.onPressTitle('1')}  >
                        <View style={styles.menuItem}>
                            <Image source={require('./img/btn-back-schedule.imageset/btn-back-schedule.png')}  style={styles.backArrowImage} />
                            <Text style={styles.menuItemText}>
                                PROJECTS
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.onPressTitle('1')}  >
                        <View style={styles.menuItem}>
                            <Image source={require('./img/btn-back-schedule.imageset/btn-back-schedule.png')} style={styles.backArrowImage}/>
                            <Text style={styles.menuItemText}>
                                ABOUT
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{flex:0.2, backgroundColor: 'black'}}>


                </View>
            </View>
        );

    }
}
var styles = StyleSheet.create({
    image:{

        flex:1,
        resizeMode: 'contain',
        margin:10,
    },
    backArrowImage:{
        margin:20,
    },
    mainView: {
        flex: 1,

        backgroundColor: '#313836'

    },
    menuItem: {

        flexDirection:'row',



    },

    menuItemText:{
        fontFamily: 'Verdana',
        fontWeight: '100',
        fontSize: 35,
        textAlign: 'right',
        margin: 10,
        color: '#FFFFFF'
    }
});