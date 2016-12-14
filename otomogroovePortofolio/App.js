/**
 * Created by juanjimenez on 07/12/2016.
 */
import React, {Component} from 'react';
import {
    Dimensions,
    TouchableHighlight,
    Navigator,
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Drawer from 'react-native-drawer';

import ProjectsView from './ProjectsView';
import  ProjectDetail from './ProjectDetail';
import SideMenu from './SideMenu';
import About from './About';


const drawerStyles = {
    drawer: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 3,
    }
}




export default class Application extends Component {

    constructor(props, context) {
        super(props, context);
        this.drawerNavMenuButtonClick = this.drawerNavMenuButtonClick.bind(this);
        this.renderNavigator = this.renderNavigator.bind(this);
        this.state = {
            drawerType: 'static',
            openDrawerOffset:100,
            closedDrawerOffset:0,
            panOpenMask: .0,
            panCloseMask: .0,
            relativeDrag: false,
            panThreshold: .25,
            tweenHandlerOn: false,
            tweenDuration: 350,
            tweenEasing: 'linear',
            disabled: false,
            tweenHandlerPreset: null,
            acceptDoubleTap: false,
            acceptTap: false,
            acceptPan: false,
            tapToClose: false,
            negotiatePan: false,
            rightSide: true,
            navigator:null,
        };
    }

    renderNavigator(){
        return(
            <Navigator

                ref="mainNavigator"

                navigationBar={
                     <Navigator.NavigationBar
                        initialRoute={{statusBarHidden: true}}
                         routeMapper={
                             {
                                LeftButton: (route, navigator, index, navState) =>
                                {
                                    if(index > 0){
                                    return (
                                         <TouchableHighlight onPress={() => navigator.pop()}style={styles.navBarLeft} >

                                             <Image source={require('./img/btn-back-schedule.imageset/btn-back-schedule.png')} />

                                          </TouchableHighlight>
                                    )
                                    }else{
                                        return;
                                    }
                                },
                                RightButton: (route, navigator, index, navState) =>
                                 { return (
                                      <TouchableHighlight onPress={() => this.drawer.open()} style={styles.navBarRight}>
                                          <Image source={require('./img/btn-slider.imageset/btn-slider.png')} />

                                           </TouchableHighlight>
                                  )
                                  },
                                Title: (route, navigator, index, navState) =>
                                 {
                                    return (
                                        <Text numberOfLines={1} style={styles.navBarText}>{route.title}</Text>
                                        );
                                 },

                             }
                         }
                         style={styles.navBar}

                        />
                    }

                drawerType={this.state.drawerType}
                setParentState={this.setStateFrag.bind(this)}
                openDrawer={this.openDrawer.bind(this)}
                openDrawerOffset={this.state.openDrawerOffset}
                closedDrawerOffset={this.state.closedDrawerOffset}
                panOpenMask={this.state.panOpenMask}
                panCloseMask={this.state.panCloseMask}
                relativeDrag={this.state.relativeDrag}
                panStartCompensation={this.state.panStartCompensation}
                tweenHandlerOn={this.state.tweenHandlerOn}
                disabled={this.state.disabled}
                panThreshold={this.state.panThreshold}
                tweenEasing={this.state.tweenEasing}
                tweenHandlerPreset={this.state.tweenHandlerPreset}
                animation={this.state.animation}
                noopChange={this.noopChange.bind(this)}
                acceptTap={this.state.acceptTap}
                acceptDoubleTap={this.state.acceptDoubleTap}
                acceptPan={this.state.acceptPan}
                tapToClose={this.state.tapToClose}
                negotiatePan={this.state.negotiatePan}
                rightSide={this.state.rightSide}



                initialRoute={{
                        name: 'Projects',
                        title:'Otomogroove works',
                         }}
                renderScene={ this.renderScene }
            />
        )
    }

    componentDidMount() {
        console.log('Application  mounted');
    }

    onSectionChanged(section) {
        console.log('onSectionChanged  ::: ' + section);
        switch (section){
            case 1:
               // this.refs.mainNavigator.pop();
                //this.state.navigator.pop();
               // console.log(this.state.navigator)
                this.refs.mainNavigator.replaceAtIndex({
                    name: 'Projects',
                    title:'Otomogroove works',
                },0);
                break;

            default:
               // this.refs.mainNavigator.pop();
                this.refs.mainNavigator.replaceAtIndex({
                    name:'About',
                    title:'About Otomogroove',
                },0);
                break;
        }
    }

    noopChange() {
        this.setState({
            changeVal: Math.random()
        })
    }

    openDrawer() {
        this.drawer.open()
    }

    drawerNavMenuButtonClick(){
        console.log('edededex');
        this.openDrawer();
    }

    setStateFrag(frag) {
        this.setState(frag);
    }

    renderScene(route, navigator) {
        if (route.name == 'Projects') {
            return <ProjectsView
                // Function to call when a new scene should be displayed
                onForward={(data) => {
                   console.log('rere:: '+data.id);
                    navigator.push({
                     name: 'ProjectDetail',
                     data: data.id,
                     title:data.title,

              });
            }}


            />
        }
        if (route.name == 'ProjectDetail') {
            return <ProjectDetail
                data={route.data}
            />
        }
        if(route.name == 'About'){
            return <About
                data={route.data}
            />
        }
    }


    render() {
        this.state.navigator = this.renderNavigator();

        var sideMenu =
            <SideMenu
                onSectionChanged={(section) => {
                this.onSectionChanged(section);
                }}
                closeDrawer={() => {
                this.drawer.close();
                }}
            />
        return (

            <Drawer
                ref={c => this.drawer = c}
                type={this.state.drawerType}
                animation={this.state.animation}
                openDrawerOffset={this.state.openDrawerOffset}
                closedDrawerOffset={this.state.closedDrawerOffset}
                panOpenMask={this.state.panOpenMask}
                panCloseMask={this.state.panCloseMask}
                relativeDrag={this.state.relativeDrag}
                panThreshold={this.state.panThreshold}
                content={sideMenu}
                styles={drawerStyles}
                disabled={this.state.disabled}
                tweenHandler={(ratio) => ({
                     main: { }
                })}
                tweenDuration={this.state.tweenDuration}
                tweenEasing={this.state.tweenEasing}
                acceptDoubleTap={this.state.acceptDoubleTap}
                acceptTap={this.state.acceptTap}
                acceptPan={this.state.acceptPan}
                tapToClose={this.state.tapToClose}
                negotiatePan={this.state.negotiatePan}
                changeVal={this.state.changeVal}
                side={this.state.rightSide ? 'right' : 'left'}
            >
                {this.state.navigator}
            </Drawer>
        );
    }
}
var styles = StyleSheet.create({
    navBarLeft: {
        padding:15,

    },
    navBarRight: {
        padding:15,


    },
    navBar: {
        backgroundColor: '#202423cc',
        alignItems:'center',
        justifyContent:'center'
    },
    navBarText:{
        padding:15,
        color:'#ffffff',
        width:Dimensions.get('window').width/1.5,
       fontFamily: 'OpenSans-Light'


    },

})