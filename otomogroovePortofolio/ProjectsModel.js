import React, {PropTypes, Component } from 'react';

import {

} from 'react-native';

const Realm = require('realm');

class Project {}
class ProjectImage{}

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
ProjectImage.schema = {
    name: 'ProjectImage',
    primaryKey: 'id',
    properties: {
        url: 'string',
        id:'int',
        projectID:'int'
    },
};


const realm = new Realm({schema: [Project,ProjectImage]});

export default class ProjectsModel extends Component {



    constructor(props) {
        super(props);

    }


    componentDidMount() {


    }

    static initModel(){

        let projects = realm.objects('Project');
        console.log("XSXS:1: "+projects.length );
        realm.write(()=>{
            realm.deleteAll();
        });

        // Query


    }

    static parseImage(data){
        realm.write(() => {
            realm.create('ProjectImage', { id:data.id, url: data.src, projectID:data.project_id },true);
        });

    }
    static getProjects(){

        return realm.objects('Project');
    }

    static getImagesForProjectID(id){

        let images = realm.objects('ProjectImage').filtered('projectID == $0', id);
        console.log("CDCDC::: "+images.length);
        return  images;
    }

    static parseProject(data){


       // let realm = new Realm({schema: [Project]});

        realm.write(() => {
            realm.create('Project', { id:data.id, name: data.name ,coverImage:data.covers.original , title: data.name});
        });
    }
}