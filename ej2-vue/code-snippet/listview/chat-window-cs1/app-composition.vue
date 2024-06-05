<template>
  <div class="control-section">
    <!-- ListView element -->
    <ejs-listview id='List' ref='listObj' :dataSource='data' :headerTitle='headerTitle' :template='Template'
      :showHeader='true' :fields='fields' :width='width'></ejs-listview>
    <div style="width: 350px;margin: 0 auto;"><input id="name" ref="textbox" style="width: 275px" class="e-input"
        type="text" placeholder="Type your message" />
      <ejs-button id="btn" style="float:right" v-on:click="btnClick">Send</ejs-button>
    </div>
  </div>
</template>

<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { createApp, ref } from "vue";

const listObj = ref(null);
const textbox = ref(null);
var demoVue = createApp().component("demo", {
  template: `<div class='settings' v-if='data.chat!="receiver"'>
     <div id='content'>
     <div class='name'>{{data.text}}</div>
           <div id='info'>{{data.contact}}</div>
           </div>
           <div id='image' v-if='data.avatar!=""'><span class='e-avatar img1 e-avatar-circle'>{{data.avatar}}</span></div>
           <div id='image'  v-if='data.avatar==""'><span :class="[data.pic + ' img1 e-avatar e-avatar-circle']"> </span></div>
           </div>
           <div class='settings' v-else>
           <div id='image2'  v-if='data.avatar!=""'><span class='e-avatar img2 e-avatar-circle'>{{data.avatar}}</span></div>
           <div id='image2'  v-if='data.avatar==""'><span :class="[data.pic +' img2 e-avatar e-avatar-circle']"> </span></div>
           <div id='content1'>
           <div class='name1'>{{data.text}}</div>
           <div id='info1'>{{data.contact}}</div>
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
    contact: "Hi",
    id: "1",
    avatar: "",
    pic: "pic01", chat: "sender"
  },
  { text: "Amenda", contact: "Hello", id: "2", avatar: "A", pic: "", chat: "receiver" },
  {
    text: "Jenifer",
    contact: "What Knid of application going to launch",
    id: "4",
    avatar: "",
    pic: "pic02", chat: "sender"
  },
  {
    text: "Amenda ",
    contact: "A knid of Emergency broadcast App",
    id: "5",
    avatar: "A",
    pic: "", chat: "receiver"
  },
  {
    text: "Jacob",
    contact: "Can you please elaborate",
    id: "6",
    avatar: "",
    pic: "pic04", chat: "sender"
  },
];
const fields = { text: "Name" };
const width = '350px';
const headerTitle = 'Chat';
const Template = () => {
  return {
    template: demoVue,
  };
}

const btnClick = () => {
  let value = textbox.value.value;
  listObj.value.addItem([{ text: "Amenda", contact: value, id: "2", avatar: "A", pic: "", chat: "receiver" }]);
  textbox.value.value = "";
}

</script>

<style>
#List {
  margin: 0 auto;
  border: 1px solid #ccc;
}

#List .e-list-item {
  height: auto;
  cursor: pointer;
}

#List .e-list-header .e-text {
  font-family: sans-serif;
  font-size: 18px;
  line-height: 26px;
}

#List #info,
#List .name {
  font-size: 11px;
  line-height: 20px;
}

#List .name {
  padding-top: 3px;
  font-weight: 500;
  padding-left: 150px;
}

#List #info {
  float: right;
  margin-right: 10px;
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

.img2.e-avatar {
  margin-left: 10px;
  margin-top: 7px !important;
  font-size: 13px;
}

#List #content1 {
  width: 200px;
  background-color: aliceblue;
  display: inline-block;
  margin: 5px;

}

#List #info1,
#List .name1 {
  font-size: 11px;
  line-height: 20px;
  margin-left: 10px;
}

#List .name1 {
  padding-top: 3px;
  font-weight: 500;
}

#List #content {
  margin: 5px;
  width: 200px;
  margin-left: 90px;
  background-color: aliceblue;
  display: inline-block
}

#image {
  float: right;
  display: inline-block;

}

#image2 {
  float: left;
  display: inline-block;

}

.img1.e-avatar {
  margin-right: 10px;
  margin: 5px;
  font-size: 13px;
}

.e-listview .e-list-item {
  padding: 0px !important;
}

.e-listview .e-list-header {
  color: white !important;
}

.e-listview .e-list-header {
  background: rgb(2, 120, 215) !important;
}

#List.e-listview .e-list-item.e-hover {
  background-color: transparent;
}
</style>