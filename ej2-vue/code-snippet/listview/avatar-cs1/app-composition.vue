<template>
  <div id="sample">
     <ejs-listview id='List' :dataSource='data' :fields='fields' :template='template' width="350px" showHeader='true' headerTitle='Contacts' sortOrder='Ascending'></ejs-listview>
  </div>
</template>

<script setup>

import { ListViewComponent as EjsListview} from "@syncfusion/ej2-vue-lists";
import { createApp } from "vue";

var demoVue = createApp().component("demo", {
template: `
  <div class="settings">
      <span :class="['e-avatar e-avatar-circle']" v-if="data.avatar !== ''">{{data.avatar}}</span>
      <span :class="[data.pic + ' e-avatar e-avatar-circle']" v-if="data.pic !== '' "> </span>
      <div id="content">
      <div class="name">{{data.text}}</div>
      <div id="info">{{data.contact}}</div>
      </div>
  </div>`,
data() {
  return {
    data: {}
  };
}
});


   const data = [
{
  text: "Jenifer",
  contact: "(206) 555-985774",
  id: "1",
  avatar: "",
  pic: "pic01"
},
{ text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: "" },
{
  text: "Isabella",
  contact: "(206) 555-8122",
  id: "4",
  avatar: "",
  pic: "pic02"
},
{
  text: "William ",
  contact: "(206) 555-9482",
  id: "5",
  avatar: "W",
  pic: ""
},
{
  text: "Jacob",
  contact: "(71) 555-4848",
  id: "6",
  avatar: "",
  pic: "pic04"
},
{ text: "Matthew", contact: "(71) 555-7773", id: "7", avatar: "M", pic: "" },
{
  text: "Oliver",
  contact: "(71) 555-5598",
  id: "8",
  avatar: "",
  pic: "pic03"
},
{
  text: "Charlotte",
  contact: "(206) 555-1189",
  id: "9",
  avatar: "C",
  pic: ""
}
];
 const fields = {text: 'text'};
 const template =  () => {
              return { template : demoVue};
          };

</script>

<style>
#List {
margin: 0 auto;
border: 1px solid #ccc;
}

#List .e-list-item {
height: 60px;
cursor: pointer;
}

#List .e-list-header .e-text {
font-family: sans-serif;
font-size: 18px;
line-height: 16px;
}

#List #content {
margin: 0;
}

#List .e-list-header{
background: rgb(2, 120, 215);
color: white;
}

#List #info,
#List .name {
font-size: 14px;
margin: 0 60px;
line-height: 20px;
}

#List .name {
padding-top: 8px;
font-weight: 500;
}

.pic01 {
background-image: url("https://ej2.syncfusion.com/demos/src/grid/images/1.png");
}

.pic02 {
background-image: url("https://ej2.syncfusion.com/demos/src/grid/images/3.png");
}

.pic03 {
background-image: url("https://ej2.syncfusion.com/demos/src/grid/images/5.png");
}

.pic04 {
background-image: url("https://ej2.syncfusion.com/demos/src/grid/images/2.png");
}

#List .e-avatar {
position: absolute;
margin-top: 8px;
font-size: 14px;
}

#List .e-list-item:nth-child(1) .e-avatar {
background-color: #039be5;
}

#List .e-list-item:nth-child(2) .e-avatar {
background-color: #e91e63;
}

#List .e-list-item:nth-child(6) .e-avatar {
background-color: #009688;
}

#List .e-list-item:nth-child(8) .e-avatar {
background-color: #0088;
}

</style>