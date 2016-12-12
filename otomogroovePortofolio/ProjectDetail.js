/**
 * Created by juanjimenez on 07/12/2016.
 */


import React,{PropTypes, Component} from 'react';
import {
    Dimensions,
    Image,
    ListView,
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
var API_KEY = 'OXf3O560Fx9oHdUWjy48t7hhId8NgRZN';
var API_URL = 'https://api.behance.net/v2/projects/';
import GridView from 'react-native-grid-view'
import ProjectsModel from  './ProjectsModel'
var PARAMS = '?client_id=' + API_KEY;

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.state = {
            loaded:false,
            dataResponse:null,
            images:null,


        }
    }
    static propTypes = {
        data : PropTypes.object,


    }

    fetchData() {
        fetch(API_URL+this.props.data.id.toString()+PARAMS, {
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

            var data = responseData.project.modules;
            //var images=[];

            var projectsLenght = data.length;
            for (var i = 0; i < projectsLenght; i++) {

                // items.push(projectItem);

                //ProjectsModel.parseProject(data[i]);
                if(data[i].type == 'image'){
                    console.log('rrttt:: '+data[i].src);
                    //images.push(data[i]);
                    ProjectsModel.parseImage(data[i]);
                }



            }


            this.setState({
                    loaded:true,
                    dataResponse:responseData.project,
                    dataSource:ProjectsModel.getImagesForProjectID(this.props.data.id),
                }
            )
            return responseData;
        }).catch(function(err) {
            console.error(err);
        }).done();


    }
    renderItem(item) {
        return (

                <View key={item.id}>


                    <Image
                        source={{uri: item.url}}
                        style={styles.thumbnail}
                    />

                </View>



        )
    }

    componentDidMount() {


        this.fetchData();


    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }


        return (
            <View style={styles.mainView}>
                <View style={{flex: 0.7, backgroundColor: 'black'}} />
                <View style={{flex: 2, backgroundColor: 'black'}} >

                    <Image
                        source={{uri:this.props.data.coverImage }}
                        style={styles.base64}

                    />

                </View>
                <View style={{flex: 0.5, backgroundColor: 'black'}} >
                    <Text style={styles.descriptionText}>
                        {this.state.dataResponse.description}
                    </Text>
                </View>
                <View style={{flex: 3, }} >
                    <GridView
                        items={this.state.dataSource}
                        itemsPerRow={2}
                        renderItem={this.renderItem}
                        style={styles.listView}
                    />


                </View>
            </View>
        );


    }
    renderLoadingView(){
        return (
            <View style={styles.mainView}>
                <View style={{flex: 0.5, backgroundColor: 'black'}} />
                <View style={{flex: 2, backgroundColor: 'black'}} >


                </View>
                <View style={{flex: 3, backgroundColor: 'black'}} >
                    <Text>

                    </Text>
                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    mainView: {
        flex: 1,

        backgroundColor: 'black'

    },
    base64: {
        flex: 1,

        resizeMode: 'contain',
    },
    descriptionText: {
        fontSize: 13,
        fontWeight: 'normal',
        color:'#FFFFFF',
        margin: 10,
        textAlign: 'center',

    },
    imageList: {
        width: Dimensions.get('window').width/2,
        resizeMode: 'contain',
        flex: 1,
    },
    listView: {
        flex: 1,


    },
    thumbnail: {
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').width/2,
        padding:20,
        backgroundColor: 'black',

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