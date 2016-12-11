/**
 * Created by juanjimenez on 07/12/2016.
 */


import React,{PropTypes, Component} from 'react';
import {
    Image,
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
var API_KEY = 'OXf3O560Fx9oHdUWjy48t7hhId8NgRZN';
var API_URL = 'https://api.behance.net/v2/projects/';

var PARAMS = '?client_id=' + API_KEY;


export default class ProjectDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            dataResponse:null

        }
    }
    static propTypes = {
        data : PropTypes.string,


    }

    fetchData() {
        fetch(API_URL+this.props.data.toString()+PARAMS, {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) =>
        {
            return response.json()
        }).then((responseData) => {




            console.log('xsxsx::'+ responseData.project.covers.original);
            this.setState({

                    loaded:true,
                    dataResponse:responseData.project

                }
            )
            return responseData;
        }).catch(function(err) {
            console.error(err);
        }).done();


    }

    componentDidMount() {


        this.fetchData();


    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        console.log('frfrfrf:: '+ this.state.dataResponse.covers.original);

        return (
            <View style={styles.mainView}>
                <View style={{flex: 0.5, backgroundColor: 'black'}} />
                <View style={{flex: 2, backgroundColor: 'gray'}} >

                    <Image
                        source={{uri:this.state.dataResponse.covers.original }}
                        style={styles.base64}

                    />

                </View>
                <View style={{flex: 3, backgroundColor: 'black'}} />
            </View>
        );


    }
    renderLoadingView(){
        return (
            <View style={styles.mainView}>
                <View style={{flex: 0.5, backgroundColor: 'black'}} />
                <View style={{flex: 2, backgroundColor: 'gray'}} >


                </View>
                <View style={{flex: 3, backgroundColor: 'black'}} />
            </View>
        );
    }
}
var styles = StyleSheet.create({
    mainView: {
        flex: 1,

        backgroundColor: '#313836'

    },
    base64: {
        flex: 1,

        resizeMode: 'contain',
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