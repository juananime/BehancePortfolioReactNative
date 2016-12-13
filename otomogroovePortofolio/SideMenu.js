/**
 * Created by juanjimenez on 07/12/2016.
 */
import React, {Component} from "react";
import {TouchableHighlight, Dimensions ,AppRegistry, Image, ListView, StyleSheet, Text, View} from "react-native";

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
                            <Image source={require('./img/icon-photo.imageset/icon-photo.png')}  style={styles.iconImage} />
                            <Text style={styles.menuItemText}>
                                PROJECTS
                            </Text>

                        </View>

                    </TouchableHighlight>
                    <View style={{height:1, backgroundColor:'white', }} />
                    <TouchableHighlight onPress={() => this.onPressTitle('2')}  >
                        <View style={styles.menuItem}>
                            <Image source={require('./img/icon-services.imageset/icon-services.png')} style={styles.iconImage}/>
                            <Text style={styles.menuItemText}>
                                ABOUT
                            </Text>

                        </View>
                    </TouchableHighlight>
                    <View style={{height:1, backgroundColor:'white', }} />
                </View>
                <View style={{flex:0.2, backgroundColor: 'black'}}>
                    <Text style={styles.footer}>
                        Powered by React Native v0.39

                    </Text>

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
    iconImage:{
        margin:10,
    },
    mainView: {
        flex: 1,

        backgroundColor: '#313836'

    },
    menuItem: {

        flexDirection:'row',
        marginLeft:40,
        width:Dimensions.get('window').width,

    },
    footer:{

        fontSize: 12,
        textAlign: 'center',
        margin: 10,
        color: '#CCCCCC',

        fontFamily: 'OpenSans-Light'
    },
    menuItemText:{


        fontWeight: '100',
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
        color: '#FFFFFF',

        fontFamily: 'OpenSans-Light'
    }
});