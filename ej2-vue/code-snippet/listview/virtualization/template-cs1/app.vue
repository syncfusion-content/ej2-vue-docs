<template>
    <div class="control-section">     
      <ejs-listview id='ui-list' ref="list" :dataSource='listData' :showHeader='header' :fields='fields' :headerTitle='title'
          :height='height' :cssClass='cssClass' :enableVirtualization='enableUi' :template="'gTemplate'">
              <template v-slot:gTemplate="{ data }">
                  <div class="e-list-wrapper e-list-avatar" >
                      <span :class="['e-avatar e-avatar-circle ' + data.icon + ' showUI']" v-if="data.imgUrl == undefined">{{ data.icon }}</span>
                      <span :class="['e-avatar e-avatar-circle ' + data.icon + ' hideUI']" v-if="data.imgUrl !== undefined">{{ data.icon }}</span> 
                      <img :class="['e-avatar e-avatar-circle showUI']" :src="data.imgUrl" v-if="data.imgUrl !== undefined" />
                      <img :class="['e-avatar e-avatar-circle hideUI']" :src="data.imgUrl" v-if="data.imgUrl == undefined" />
                      <span class="e-list-content">{{ data.name }}</span>
                  </div>
              </template>
          </ejs-listview>
    </div>
  </template>
  
  <script>
  
  import { ListViewComponent, Virtualization } from "@syncfusion/ej2-vue-lists";
  
  let listData = [];
  
  export default {
  name: "App",
  components: {
  "ejs-listview":ListViewComponent
  },
  
      beforeCreate: function() {
  listData = [
      { name: 'Nancy', icon: 'N', id: '0', },
      { name: 'Andrew', icon: 'A', id: '1' },
      { name: 'Janet', icon: 'J', id: '2' },
      { name: 'Margaret', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/margaret.png', id: '3' },
      { name: 'Steven', icon: 'S', id: '4' },
      { name: 'Laura', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/laura.png', id: '5' },
      { name: 'Robert', icon: 'R', id: '6' },
      { name: 'Michael', icon: 'M', id: '7' },
      { name: 'Albert', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/albert.png', id: '8' },
      { name: 'Nolan', icon: 'N', id: '9' }
  ];
  
  for (let i = 10; i <= 1000; i++) {
      let index = parseInt((Math.random() * 10).toString());
      listData.push({ name: listData[index].name, icon: listData[index].icon, imgUrl: listData[index].imgUrl, id: i.toString() });
  }
  },
    data: function() {
      return {
        listData: listData,     
        header: true,
        title: "Contacts",
        fields: { text: "name" },
        height: 330,
        cssClass:'e-list-template',
        enableUi: true,
      };
    },
    provide: {
      listview: [Virtualization]
    }
  }
  </script>
  <style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-lists/styles/material3.css";
  #app {
      color: #008cff;
      height: 40px;
      left: 30%;
  }
  
  #ui-list.e-listview {
          margin: auto;
          max-width: 325px;
          line-height: initial;
          border: 1px solid lightgray;
      }
  
      /* ListView header alignment */
  
      #ui-list.e-listview .e-list-header {
          height: 50px
      }
  
      #ui-list.e-listview .e-list-header .e-text {
          line-height: 18px
      }
  
      /* ListView template customization */
  
      #ui-list.e-listview .showUI {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
      }
      #ui-list.e-listview .hideUI {
          display: none;
      }
  
      #ui-list.e-listview .e-list-item {
          padding: 3px 0;
      }
  
      #ui-list.e-listview .R {
          background: lightgrey;
      }
  
      #ui-list.e-listview .M {
          background: pink;
      }
  
      #ui-list.e-listview .A {
          background: lightgreen;
      }
  
      #ui-list.e-listview .S {
          background: lightskyblue;
      }
  
      #ui-list.e-listview .J {
          background: orange;
      }
  
      #ui-list.e-listview .N {
          background: lightblue;
      }
  </style>