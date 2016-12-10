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

    saveProject(data){
       // let realm = new Realm({schema: [Project]});

        /**realm.write(() => {
            realm.create('Project', { id:data.id, name: data.name ,coverImage:data.coverImage});
        });**/
    }
}