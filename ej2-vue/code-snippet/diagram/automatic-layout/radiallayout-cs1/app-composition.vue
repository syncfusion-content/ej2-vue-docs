<template>
    <div id="app">
  
      <ejs-diagram id="diagram" :width='width' :height='height' :dataSourceSettings='dataSourceSettings'
        :snapSettings="snapSettings" :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
        :layout='layout'></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide } from "vue";
  import { DiagramComponent as EjsDiagram, RadialTree, DataBinding, SnapConstraints } from '@syncfusion/ej2-vue-diagrams';
  import { DataManager, Query } from "@syncfusion/ej2-data";
  
  //Initialize data
  let data = [
      {
          Id: 'parent',
          Name: 'Maria Anders',
          Designation: 'Managing Director'
      },
      {
          Id: '1',
          Name: 'Ana Trujillo',
          Designation: 'Project Manager',
          ReportingPerson: 'parent',
      },
      {
          Id: '2',
          Name: 'Lino Rodri',
          Designation: 'Project Manager',
          ReportingPerson: 'parent',
      },
      {
          Id: '3',
          Name: 'Philip Cramer',
          Designation: 'Project Manager',
          ReportingPerson: 'parent',
      },
      {
          Id: '4',
          Name: 'Pedro Afonso',
          Designation: 'Project Manager',
          ReportingPerson: 'parent',
      },
      {
          Id: '15',
          Name: 'Paul Henriot',
          Designation: 'Project Manager',
          ReportingPerson: 'parent',
      },
      {
          Id: '18',
          Name: 'Laura Callahan',
          Designation: 'Project Manager',
          ReportingPerson: 'parent',
      },
      {
          Id: '5',
          Name: 'Anto Moreno',
          Designation: 'Project Lead',
          ReportingPerson: '1',
      },
      {
          Id: '6',
          Name: 'Elizabeth Roel',
          Designation: 'Project Lead',
          ReportingPerson: '1',
      },
      {
          Id: '7',
          Name: 'Aria Cruz',
          Designation: 'Project Lead',
          ReportingPerson: '18',
      },
      {
          Id: '8',
          Name: 'Eduardo Roel',
          Designation: 'Project Lead',
          ReportingPerson: '18',
      },
      {
          Id: '9',
          Name: 'Howard Snyd',
          Designation: 'Project Lead',
          ReportingPerson: '2',
      },
      {
          Id: '10',
          Name: 'Daniel Tonini',
          Designation: 'Project Lead',
          ReportingPerson: '2',
      },
      {
          Id: '11',
          Name: 'Nardo Batista',
          Designation: 'Project Lead',
          ReportingPerson: '3',
      },
      {
          Id: '12',
          Name: 'Michael Holz',
          Designation: 'Project Lead',
          ReportingPerson: '3',
      },
      {
          Id: '13',
          Name: 'Kloss Perrier',
          Designation: 'Project Lead',
          ReportingPerson: '4',
      },
      {
          Id: '14',
          Name: 'Liz Nixon',
          Designation: 'Project Lead',
          ReportingPerson: '4',
      },
      {
          Id: '16',
          Name: 'Paula Parente',
          Designation: 'Project Lead',
          ReportingPerson: '15',
      },
      {
          Id: '17',
          Name: 'Matti Kenna',
          Designation: 'Project Lead',
          ReportingPerson: '15',
      }
  ];
  
  let items = new DataManager(data, new Query().take(7));
  
  const width = "1000px";
  const height = "590px";
  const snapSettings = { constraints: SnapConstraints.None };
  
  //Configures data source for Diagram
  const dataSourceSettings = {
    id: 'Id',
    parentId: 'ReportingPerson',
    dataSource: items,
  }
  
  //Uses layout to auto-arrange nodes on the Diagram page
  const layout = {
    //Sets layout type
    type: 'RadialTree',
    root: 'parent'
  }
  
  //Sets the default properties for nodes and connectors
  const getNodeDefaults = (node) => {
    node.width = 20; node.height = 20;
    return node;
  }
  const getConnectorDefaults = (connector) => {
    connector.type = 'Straight';
    connector.targetDecorator.shape = 'None';
    return connector;
  }
  
  provide('diagram', [RadialTree, DataBinding]);
  
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
  </style>