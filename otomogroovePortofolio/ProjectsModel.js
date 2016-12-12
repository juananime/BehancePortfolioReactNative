import React, {PropTypes, Component } from 'react';

import {

} from 'react-native';

const Realm = require('realm');

class Project {}

Project.schema = {
    name: 'Project',
    primaryKey: 'id',
    properties: {
        title: 'string',
        name:'string',
        coverImage:'string',
        id:'int'
    },
};

const realm = new Realm({schema: [Project]});

export default class ProjectsModel extends Component {



    constructor(props) {
        super(props);

    }


    componentDidMount() {


    }

    static initModel(){
        console.log("FRFRF");
        let projects = realm.objects('Project');
        console.log("XSXS:1: "+projects.length );
        realm.write(()=>{
            realm.deleteAll();
        });

        // Query

        console.log("XSXS2:: "+projects.length );
    }

    static getProjects(){

        return realm.objects('Project');
    }

    static parseProject(data){

        console.log("CDCDC::: "+data.id);
       // let realm = new Realm({schema: [Project]});

        realm.write(() => {
            realm.create('Project', { id:data.id, name: data.name ,coverImage:data.covers.original , title: data.name});
        });
    }
}