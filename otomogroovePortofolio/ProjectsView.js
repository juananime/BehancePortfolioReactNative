/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
var ResponsiveImage = require('react-native-responsive-image');
import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import GridView from 'react-native-grid-view'

var API_KEY = 'OXf3O560Fx9oHdUWjy48t7hhId8NgRZN';
var API_URL = 'https://api.behance.net/v2/users/juananime/projects';
var PAGE_SIZE = 25;
var PARAMS = '?client_id=' + API_KEY;
var REQUEST_URL = API_URL + PARAMS;
var MOVIES_PER_ROW = 3;

class Project extends Component {
    render() {
        return (
            <View style={styles.movie} >


                <Image
                    source={{uri: this.props.project}}
                    style={styles.thumbnail}
                />

            </View>
        );
    }
}

export default class ProjectsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            loaded: false,
        }
    }

    componentDidMount() {
        console.log('XSXXSXXS');
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL, {
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


                var data = responseData.projects;
                var images=[];

                var projectsLenght = data.length;
                for (var i = 0; i < projectsLenght; i++) {
                    images.push(data[i].covers.original);
                    console.log('fff:: '+data[i].covers.original);
                }


                this.setState({
                        dataSource:images,
                        loaded:true,
                    }
                )
                return responseData;
            }).catch(function(err) {
            console.error(err);
        })
            .done();


    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View style={styles.mainViewContainer}>
                <ResponsiveImage source={require('./img/logo3.png')} initWidth="320" initHeight="200"/>
                <GridView
                    items={this.state.dataSource}
                    itemsPerRow={MOVIES_PER_ROW}
                    renderItem={this.renderItem}
                    style={styles.listView}
                />
            </View>
        );
    }

    renderLoadingView() {
        return (
            <View>
                <ResponsiveImage source={require('./img/logo3.png')} initWidth="320" initHeight="150"/>
                <Text>
                    Loading Projects...
                </Text>
            </View>
        );
    }

    renderItem(item) {
        return <Project project={item} />
    }
}

var styles = StyleSheet.create({
    mainViewContainer:{
        backgroundColor:'#FFFFFF',

        flexDirection:'column',
        flex: 1,
        justifyContent: 'center',

    },
    project: {
        height: 150,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    imageLogo:{
        width:350,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 10,
        marginBottom: 8,
        width: 90,
        textAlign: 'center',
    },

    thumbnail: {
        width: 150,
        height: 150,

    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});

