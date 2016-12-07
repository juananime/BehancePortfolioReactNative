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
            <View>

                    <Text style={styles.menuItemText}>
                        ABOUT PAGE
                    </Text>


            </View>
        );

    }
}