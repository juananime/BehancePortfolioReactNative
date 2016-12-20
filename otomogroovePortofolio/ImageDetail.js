/**
 * Created by juanjimenez on 07/12/2016.
 */
import React, {PropTypes, Component} from 'react';
import {
    Dimensions,
    TouchableHighlight,
    Navigator,
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
export default class ImageDetail extends Component {

    static propTypes = {
        data : PropTypes.object,


    }
    render() {


        return (

            <View style={styles.detailedView} >
                <View style={styles.topBar}>
                    <TouchableHighlight onPress={() => this.props.onClosedDetail() } style={styles.navBarRight}>
                        <Image source={require('./img/btn-close.imageset/btn-close.png')} />

                    </TouchableHighlight>

                </View>
                <Image style={styles.base64}
                       source={{uri: this.props.data.url}}

                />
            </View>
        );



    }
}

var styles =  StyleSheet.create({
    detailedView:{
        padding:15,
        paddingTop:60,
        backgroundColor:'black',
        flex: 1,


    },
    navBarRight: {
        padding:15,


    },
    base64: {
        flex: 3,

        resizeMode: 'contain',
    },
    topBar: {
        flex:0.5,

    }
})