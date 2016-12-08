/**
 * Created by juanjimenez on 07/12/2016.
 */
import React,{Component} from 'react';
import {
    TouchableHighlight,
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

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
            <View>
                <TouchableHighlight onPress={() => this.onPressTitle('1')} style={styles.menuItem} >
                <Text style={styles.menuItemText}>
                    PROJECTS >
                </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.onPressTitle('2')} style={styles.menuItem} >
                    <Text style={styles.menuItemText}>
                        ABOUT >
                    </Text>
                </TouchableHighlight>
            </View>
        );

    }
}
var styles = StyleSheet.create({
    menuItem: {


        backgroundColor: '#313836'

    },

    menuItemText:{
        fontFamily: 'Verdana',
        fontWeight: '100',
        fontSize: 14,
        textAlign: 'left',
        margin: 10,
        color: '#FFFFFF'
    }
});