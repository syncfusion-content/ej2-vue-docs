<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
            :layout='layout'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';

//Initialize nodes for diagram
let nodes = [
    { id: 'Project Management' },
    { id: 'R&D Team' },
    { id: 'Philosophy' },
    { id: 'Organization' },
    { id: 'Technology' },
    { id: 'Funding' },
    { id: 'Resource Allocation' },
    { id: 'Targeting' },
    { id: 'Evaluation' },
    { id: 'HR Team' },
    { id: 'Recruitment' },
    { id: 'Employee Relation' },
    { id: 'Production & Sales Team' },
    { id: 'Design' },
    { id: 'Operation' },
    { id: 'Support' },
    { id: 'Quality Assurance' },
    { id: 'Customer Interaction' },
    { id: 'Support and Maintenance' },
    { id: 'Task Coordination' },
];

//Initialize connectors for diagram
let connectors = [
    {
        id: 'Project Management-R&D Team',
        sourceID: 'Project Management',
        targetID: 'R&D Team',
    },
    {
        id: 'R&D Team-Philosophy',
        sourceID: 'R&D Team',
        targetID: 'Philosophy'
    },
    {
        id: 'R&D Team-Organization',
        sourceID: 'R&D Team',
        targetID: 'Organization',
    },
    {
        id: 'R&D Team-Technology',
        sourceID: 'R&D Team',
        targetID: 'Technology'
    },
    {
        id: 'R&D Team-Funding',
        sourceID: 'R&D Team',
        targetID: 'Funding'
    },
    {
        id: 'R&D Team-Resource Allocation',
        sourceID: 'R&D Team',
        targetID: 'Resource Allocation',
    },
    {
        id: 'R&D Team-Targeting',
        sourceID: 'R&D Team',
        targetID: 'Targeting'
    },
    {
        id: 'R&D Team-Evaluation',
        sourceID: 'R&D Team',
        targetID: 'Evaluation'
    },
    {
        id: 'Project Management-HR Team',
        sourceID: 'Project Management',
        targetID: 'HR Team',
    },
    {
        id: 'HR Team-Recruitment',
        sourceID: 'HR Team',
        targetID: 'Recruitment'
    },
    {
        id: 'HR Team-Employee Relation',
        sourceID: 'HR Team',
        targetID: 'Employee Relation',
    },
    {
        id: 'Project Management-Production & Sales Team',
        sourceID: 'Project Management',
        targetID: 'Production & Sales Team',
    },
    {
        id: 'Production & Sales Team-Design',
        sourceID: 'Production & Sales Team',
        targetID: 'Design',
    },
    {
        id: 'Production & Sales Team-Operation',
        sourceID: 'Production & Sales Team',
        targetID: 'Operation',
    },
    {
        id: 'Production & Sales Team-Support',
        sourceID: 'Production & Sales Team',
        targetID: 'Support',
    },
    {
        id: 'Production & Sales Team-Quality Assurance',
        sourceID: 'Production & Sales Team',
        targetID: 'Quality Assurance',
    },
    {
        id: 'Production & Sales Team-Customer Interaction',
        sourceID: 'Production & Sales Team',
        targetID: 'Customer Interaction',
    },
    {
        id: 'Production & Sales Team-Support and Maintenance',
        sourceID: 'Production & Sales Team',
        targetID: 'Support and Maintenance',
    },
    {
        id: 'Production & Sales Team-Task Coordination',
        sourceID: 'Production & Sales Team',
        targetID: 'Task Coordination',
    },
];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: nodes,
            connectors: connectors,
            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'OrganizationalChart',
            },
            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.annotations = [{ content: node.id }];
                node.width = 75; node.height = 40;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            },
        }
    },
    provide: {
        diagram: [HierarchicalTree, DataBinding]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
