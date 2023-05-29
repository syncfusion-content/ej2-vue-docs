

<template>
  <div class="predefinedDialogs">
    <ejs-button id="alertDlgBtn" v-on:click.native="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
  </div>
</template>

<style>
    @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}
.e-dialog.customClass {
  min-width: 300px;
  min-height: 200px;
}
</style>

<script>
import Vue from "vue";
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);
export default {
  data: function () {
    return {};
  },
  methods: {
    alertBtnClick: function () {
      DialogUtility.alert({
        title: "About syncfusion succinctly series",
        content: "The succinctly series was born in 2012.",
        cssClass: "customClass",
      });
    },
  },
}
</script>


