/**
 * Created by juanjimenez on 07/12/2016.
 */

import React,{Component} from 'react';
import {
    Image,
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import MapView from 'react-native-maps';

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
            <View style={{flex: 1, backgroundColor: 'black'}} >

            </View>
            <View  style={{flex: 1.5, backgroundColor: 'white',justifyContent: 'center',
                alignItems: 'center',}} >

                <Image blurRadius={2} style={styles.image} source={require('./img/logo3.png')}/>

            </View>
            <View style={{flex: 3, backgroundColor: 'black'}}   >
                <Text style={styles.descriptionText} >
                    Otomo Groove is a digital software production entity.
                    The source of knowledge started back in 2003, when a curious guy known as Juananime,
                    thought that may be a good idea to learn all the things about digital technology.
                    Ever since then, the entity has been flowing amongst all sorts of digital levels.
                    From web to mobile, form mobile to front end, form front end to all receptors.

                </Text>
                <Text style={styles.quoteText}>
                    “All things change in a dynamic environment. Your effort to remain what you are is what limits you.”
                    -Puppet master (Ghost in the shell)
                </Text>
            </View>
            <View style={{flex: 3, backgroundColor:'black', padding:5, justifyContent:'center'}} >
                <MapView style={{flex: 1}}
                    initialRegion={{
      latitude: 51.528308,
      longitude: -0.3817765,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    }}
                />

            </View>
        </View>

        );

    }
}

var styles= StyleSheet.create({
    mainView: {
        flex: 1,

        backgroundColor: 'black'

    },
    map:{
      flex:1,
        backgroundColor: 'black',
    },
    image:{

        flex:1,
        resizeMode: 'contain',
        margin:10,
    },
    base64: {
        flex: 1,

        resizeMode: 'contain',
    },
    quoteText:{
        fontSize: 13,

        color:'#FFFFFF',
        margin: 10,
        textAlign: 'center',
        fontFamily: 'OpenSans-Italic'
    },
    descriptionText: {
        fontSize: 12,

        color:'#FFFFFF',
        margin: 10,
        textAlign: 'center',
        fontFamily: 'OpenSans'


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