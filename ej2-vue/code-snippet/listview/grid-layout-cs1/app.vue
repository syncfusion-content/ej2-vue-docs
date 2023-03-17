

<template>
  <div id="sample">
    <ejs-listview id='element' :dataSource='data' :template='listTemplate'>
    </ejs-listview>
  </div>
</template>
<style>
#element {
    display: block;
    max-width: 303px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}

#element .e-list-item {
    height: 100px;
    width: 100px;
    float: left;
    padding: 0;
}

#listImage {
    width: 55px;
    height: 55px;
    margin-left: 20px;
    margin-top: 20px;

}
</style>
<script>
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";

Vue.use(ListViewPlugin);

var listVue = Vue.component("demo", {
  template: `<img id="listImage" src="./apple.png" alt="apple" />`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  data: function() {
         return {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    listTemplate: function () {
      return { template : listVue}
    },
  };
}
}
</script>


