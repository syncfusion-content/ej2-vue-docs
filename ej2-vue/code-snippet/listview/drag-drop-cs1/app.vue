<template>
    <div id="sample">
      <ejs-treeview id='element' :fields='fields' allowDragAndDrop='true' :nodeDragging='onDragStop'
        :nodeDragStop='onDragStop'></ejs-treeview>
    </div>
  </template>
  
  <script>
  
  import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
  
  
  
  export default {
    name: "App",
    components: {
      "ejs-treeview": TreeViewComponent
    },
    data: function () {
      var data = [
        { text: 'Hennessey Venom', id: 'list-01' },
        { text: 'Bugatti Chiron', id: 'list-02' },
        { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
        { text: 'SSC Ultimate Aero', id: 'list-04' },
        { text: 'Koenigsegg CCR', id: 'list-05' },
        { text: 'McLaren F1', id: 'list-06' },
        { text: 'Aston Martin One- 77', id: 'list-07' },
        { text: 'Jaguar XJ220', id: 'list-08' },
        { text: 'McLaren P1', id: 'list-09' },
        { text: 'Ferrari LaFerrari', id: 'list-10' },
      ];
      return {
        fields: { dataSource: data, id: 'id', text: 'text' },
      };
    },
    methods: {
      onDragStop: function (args) {
        //Block the Child Drop operation in TreeView
        let draggingItem = document.getElementsByClassName("e-drop-in");
        if (draggingItem.length == 1) {
          draggingItem[0].classList.add('e-no-drop');
          args.cancel = true;
        }
      }
    }
  }
  </script>
  <style>
  #sample {
    display: block;
    max-width: 280px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
  }
  
  #element.e-treeview .e-ul {
    padding: 0;
  }
  
  #element.e-treeview .e-list-item {
    padding: 0 16px;
  }
  
  #element.e-treeview .e-text-content {
    padding: 0;
  }
  
  #element.e-treeview .e-fullrow {
    height: 36px;
  }
  
  #element.e-treeview .e-list-text {
    line-height: 34px;
  }
  
  #element.e-treeview .e-list-item:last-child {
    margin-bottom: 9px;
  }
  
  #element.e-treeview .e-list-item:first-child {
    margin-top: 9px;
  }
  </style>