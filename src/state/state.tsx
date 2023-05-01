import React from 'react';
import reactLogo from '../../src/assets/images/React.png'
import {v1} from 'uuid';

export const state = {
    skills: [
        { id: v1(),logo: reactLogo,name: "JavaScript", description: "A programming language for the web" },
        { id: v1(),logo: reactLogo,name: "React", description: "A JavaScript library for building user interfaces" },
        { id: v1(),logo: reactLogo,name: "Redux", description: "A Predictable State Container for JS Apps" },
    ],
    projects: [
        { id: v1(),logo: reactLogo,name: "Social Network", description: "Social Network with React / Redux" },
        { id: v1(),logo: reactLogo,name: "Todolist", description: "Todolist with React / Redux" },
    ],
}