

<template>
  <div class="predefinedDialogs">
    <ejs-button id="promptDlgBtn" v-on:click.native="promptBtnClick" :isPrimary="true">Prompt</ejs-button>
  </div>
</template>

<style>
  @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
.predefinedDialogs {
  height: 100%;
  min-height: 350px;
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
    promptBtnClick: function () {
      DialogUtility.confirm({
        title: "Join chat group",
        width: "300px",
        content:'<p>Enter your name: </p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
        showCloseIcon: true,
        closeOnEscape: true
      });
    },
  },
}
</script>


