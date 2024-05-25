<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='sportsData' :footerTemplate='footerTemplate' :open='onPopupOpen'
        :select='updateDataCount' placeholder="Select a game"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";

let footerVue = createApp().component("footerTemplate", {
  template: `<span class='foot'></span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-multiselect": MultiSelectComponent
  },
  data() {
    var data = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return {
      sportsData: data,
      footerTemplate: function (e) {
        return {
          template: footerVue
        }
      }
    }
  },
  methods: {
    updateDataCount: function () {
      var remainingDatasCount = document.querySelectorAll('.e-list-item').length - document.querySelectorAll('.e-hide-listitem').length;
      if (remainingDatasCount !== 0) {
        document.querySelector('.foot').innerText = "Total list item: " + (remainingDatasCount - 1);
      }
    },
    onPopupOpen: function (e) {
      e.popup.element.querySelector('.foot').innerText = "Total list item: " + (5 - document.querySelectorAll('.e-chips-collection .e-chips').length);
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

.foot {
  text-indent: 1.2em;
  display: block;
  font-size: 15px;
  line-height: 40px;
  border-top: 1px solid #e0e0e0;
}
</style>
