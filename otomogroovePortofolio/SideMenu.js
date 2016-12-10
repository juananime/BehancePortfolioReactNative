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
                <View style={{flex: 1, backgroundColor: 'skyblue'}} >


                </View>
                <View style={{flex: 3, backgroundColor: 'steelblue'}} >
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
                <View style={{flex:0.2}}>


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
    mainView: {
        flex: 1,

        backgroundColor: '#313836'

    },
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