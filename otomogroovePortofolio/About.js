/**
 * Created by juanjimenez on 07/12/2016.
 */

import React,{Component} from 'react';
import {

    AppRegistry,

    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    componentDidMount() {
        console.log('About menu mounted');


    }
    render() {
        return (
            <View style={styles.mainView}>




            </View>
        );

    }
}

var styles= StyleSheet.create({
    mainView: {
        flex: 1,

        backgroundColor: '#000000'

    },
    menuItemText:{


        fontWeight: '100',
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
        color: '#FFFFFF',

        fontFamily: 'OpenSans-Light'
    }

})