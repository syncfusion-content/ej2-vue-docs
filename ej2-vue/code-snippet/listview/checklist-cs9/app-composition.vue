<template>
  <div class="control-section">
    <div id='flat-list'>
      <!-- ListView element -->
      <ejs-listview id='List' ref='list' :dataSource='data' :fields='fields' :height="height" :template="demotemplate"
        :groupTemplate="grouptemplate">
      </ejs-listview>
    </div>
  </div>
</template>
<style>
.count {
  float: right;
}

#List {
  display: block;
  margin: auto;
  border: 1px solid;
  border-color: #ccc;
  border-color: rgba(0, 0, 0, 0.12);
  width: 60%;
}

#List .settings {
  height: auto;
}

#List .e-list-item {
  height: auto;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
  border: 0.1px solid #ccc;
}

#List .e-list-header .e-text {
  font-family: sans-serif;
  font-size: 18px;
  line-height: 26px;
}

#List #content {
  margin: 3px;
}

#List .name {
  font-size: 12px;
  line-height: 25px;
}

#info {
  line-height: 20px;
  font-size: 12px;
}

#postImg {
  margin: 9px;
}

#postContainer {
  width: inherit;
  margin: auto;
  display: inline-flex;
}
</style>
<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";
import { createApp } from "vue";

var demoVue = createApp().component("demo", {
  template: `<div class="settings">
              <div id="postContainer">
                  <div id="postImg">
                      <img :src='data.image' style="height:35px;width:35px;border-radius:50%; border: 1px solid #ccc;" /></div>
                  <div id="content">
                      <div class="name">{{data.Name}}</div>
                      <div id="info">{{data.contact}}</div>
                  </div>
              </div>
          </div>`,
  data() {
    return {
      data: {}
    };
  }
});
var tempVue = createApp().component("demo", {
  template: `<div><span class="category">{{data.items[0].category}}</span> <span class="count"> {{data.items.length}} Item(s)</span></div>`,
  data() {
    return {
      data: {}
    };
  }
});

const data = [
  { Name: 'Nancy', contact: '(206) 555-985774', id: '1', image: 'https://ej2.syncfusion.com/demos/src/grid/images/1.png', category: 'Experience' },
  { Name: 'Janet', contact: '(206) 555-3412', id: '2', image: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png', category: 'Fresher' },
  { Name: 'Margaret', contact: '(206) 555-8122', id: '4', image: 'https://ej2.syncfusion.com/demos/src/grid/images/4.png', category: 'Experience' },
  { Name: 'Andrew ', contact: '(206) 555-9482', id: '5', image: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', category: 'Experience' },
  { Name: 'Steven', contact: '(71) 555-4848', id: '6', image: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png', category: 'Fresher' },
  { Name: 'Michael', contact: '(71) 555-7773', id: '7', image: 'https://ej2.syncfusion.com/demos/src/grid/images/6.png', category: 'Experience' },
  { Name: 'Robert', contact: '(71) 555-5598', id: '8', image: 'https://ej2.syncfusion.com/demos/src/grid/images/7.png', category: 'Fresher' },
  { Name: 'Laura', contact: '(206) 555-1189', id: '9', image: 'https://ej2.syncfusion.com/demos/src/grid/images/8.png', category: 'Experience' },
];
const fields = { text: 'Name', groupBy: 'category' };
const height= '350px';
const demotemplate = () => {
  return { template: demoVue }
};
const grouptemplate = () => {
  return { template: tempVue }
};

</script>