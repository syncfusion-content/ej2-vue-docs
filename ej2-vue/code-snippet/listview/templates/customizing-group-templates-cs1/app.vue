


<template>
  <div class="control-section">
    <div id = 'flat-list'>
      <!-- ListView element -->
      <ejs-listview id='List' ref='list' :dataSource='data' :fields='fields' :template="demoTemplate" :groupTemplate="groupTemplate" cssClass='e-list-template' width='350px'>
      </ejs-listview>
    </div>
  </div>
</template>
<style>

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
  }
  #List .e-list-header .e-text {
      font-family: sans-serif;
      font-size: 18px;
      line-height: 26px;
  }
</style>
<script>
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);
var demoVue = Vue.component("demo", {
  template:
  `<div class="e-list-wrapper e-list-multi-line e-list-avatar">
    <img class="e-avatar e-avatar-circle" :src='data.image' style="background:#BCBCBC" />
    <span class="e-list-item-header">{{data.Name}}</span>
    <span class="e-list-content">{{data.contact}}</span>
  </div>`,
  data() {
    return {
      data: {}
    };
  }
});
var tempVue = Vue.component("demo", {
  template:
  `<div>
    <span class="category">{{data.items[0].category}}</span>
    <span class="count"> {{data.items.length}} Item(s)</span>
  </div>`,
  data() {
    return {
      data: {}
    };
  }
});
export default {
  data: function() {
    return {
        data: [
        { Name: 'Nancy', contact:'(206) 555-985774', id: '1', image: 'https://ej2.syncfusion.com/demos/src/grid/images/1.png',  category: 'Experience'},
        { Name: 'Janet', contact: '(206) 555-3412', id: '2', image: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png', category: 'Fresher' },
        { Name: 'Margaret', contact:'(206) 555-8122', id:'4', image: 'https://ej2.syncfusion.com/demos/src/grid/images/4.png', category: 'Experience' },
        { Name: 'Andrew ', contact:'(206) 555-9482', id: '5', image: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', category: 'Experience'},
        { Name: 'Steven', contact:'(71) 555-4848', id: '6', image: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png', category: 'Fresher' },
        { Name: 'Michael', contact:'(71) 555-7773', id: '7', image: 'https://ej2.syncfusion.com/demos/src/grid/images/6.png', category: 'Experience' },
        { Name: 'Robert', contact:'(71) 555-5598', id: '8', image: 'https://ej2.syncfusion.com/demos/src/grid/images/7.png', category: 'Fresher' },
        { Name: 'Laura', contact:'(206) 555-1189', id: '9', image: 'https://ej2.syncfusion.com/demos/src/grid/images/8.png', category: 'Experience' },
        ],
        fields: {text: 'Name', groupBy: 'category'},
        demoTemplate: function () {
            return { template : demoVue};
        },
        groupTemplate: function () {
            return { template : tempVue};
        },
    };
  },
}
</script>



