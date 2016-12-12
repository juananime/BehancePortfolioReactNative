/**
 * Created by juanjimenez on 07/12/2016.
 */
import React, {Component} from 'react';
import {
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

const backSymbol = '<';

const drawerStyles = {
    drawer: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 3,
    }
}
let counter = 0;
export default class Application extends Component {

    constructor(props, context) {
        super(props, context);
        this.drawerNavMenuButtonClick = this.drawerNavMenuButtonClick.bind(this);
        this.state = {
            drawerType: 'overlay',
            openDrawerOffset: 0,
            closedDrawerOffset: 0,
            panOpenMask: .9,
            panCloseMask: .1,
            relativeDrag: false,
            panThreshold: .25,
            tweenHandlerOn: true,
            tweenDuration: 350,
            tweenEasing: 'linear',
            disabled: false,
            tweenHandlerPreset: null,
            acceptDoubleTap: true,
            acceptTap: true,
            acceptPan: true,
            tapToClose: true,
            negotiatePan: true,
            rightSide: true,
        };
    }

    componentDidMount() {
        console.log('Application  mounted');
    }

    onSectionChanged(section) {
        console.log('onSectionChanged  ::: ' + section);
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
    }


    render() {

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
                     main: { opacity:(2-ratio)/2 }
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
                <Navigator

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
                                     <TouchableHighlight onPress={() => this.openDrawer()}style={styles.navBarRight} >
                                         <Image source={require('./img/btn-slider.imageset/btn-slider.png')} />

                                       </TouchableHighlight>
                                 )
                                 },
                                Title: (route, navigator, index, navState) =>
                                 {
                                    return (
                                        <Text style={styles.navBarText}>{route.title}</Text>
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
        backgroundColor: '#000000cc',
    },
    navBarText:{
        color:'#ffffff',
        width:200,

    },

})