<template>
  <div id="sample">
    <ejs-listview id='element' :dataSource='data' :template='listTemplate'>
    </ejs-listview>
  </div>
</template>
<script>

import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { createApp } from "vue";

const app = createApp();
var listVue = app.component("demoTemplate", {
  template: `<img id="listImage" src="https://ej2.syncfusion.com/documentation/code-snippet/listview/grid-layout-cs1/apple.png" alt="apple" />`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-listview": ListViewComponent
  },

  data: function () {
    return {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      listTemplate: function () {
        return { template: listVue }
      },
    };
  }
}
</script>
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