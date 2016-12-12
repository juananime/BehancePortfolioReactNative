/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {PropTypes, Component } from 'react';

import {
    Dimensions,
    TouchableHighlight,
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import GridView from 'react-native-grid-view'
import ProjectsModel from  './ProjectsModel'


var API_KEY = 'OXf3O560Fx9oHdUWjy48t7hhId8NgRZN';
var API_URL = 'https://api.behance.net/v2/users/juananime/projects';

var PARAMS = '?client_id=' + API_KEY;
var REQUEST_URL = API_URL + PARAMS;
var MOVIES_PER_ROW = 3;




export default class ProjectsView extends Component {
    static propTypes = {




    }
    constructor(props) {
        super(props);


        this.renderItem = this.renderItem.bind(this);
        this.state = {
            dataSource: null,
            loaded: false,
        }
    }


    componentDidMount() {
        ProjectsModel.initModel();
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
                var items=[];

                var projectsLenght = data.length;
                for (var i = 0; i < projectsLenght; i++) {

                   // items.push(projectItem);

                    ProjectsModel.parseProject(data[i]);


                }


                this.setState({
                        dataSource:ProjectsModel.getProjects(),
                        loaded:true,
                    }
                )
                return responseData;
            }).catch(function(err) {
            console.error(err);
        }).done();


    }

    onPorjectDetailSelected(item){

        console.log(item.title);
        this.props.onForward({name:'ProjectDetail',id:item,title:item.title});
    }


    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View style={styles.mainViewContainer}>

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

                <Text>
                    Loading Projects...
                </Text>
            </View>
        );
    }

    renderItem(item) {
        return (
            <TouchableHighlight onPress={ ()=> this.onPorjectDetailSelected(item)} key={item.id}>
                <View style={styles.thumbnail} >


                    <Image
                        source={{uri: item.coverImage}}
                        style={styles.thumbnail}
                    />

                </View>


            </TouchableHighlight>
        )
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
        width: Dimensions.get('window').width/3,
        height: Dimensions.get('window').width/3,
        backgroundColor: 'black',

    },
    listView: {
        flex: 1,
        paddingTop: 70,
        backgroundColor: 'black',
    },
});

