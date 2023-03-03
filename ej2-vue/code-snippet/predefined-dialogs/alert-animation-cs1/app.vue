

<template>
    <div class="predefinedDialogs">
        <ejs-button id="alertDlgBtn"  v-on:click.native="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
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
let dialogObj = undefined;
export default {
  data: function () {
    return {};
  },
  methods: {
    alertBtnClick: function () {
      dialogObj = DialogUtility.alert({
          title: 'Low battery',
          width: '250px',
          animationSettings: { effect: 'Zoom' },
          content: '10% of battery remaining'
      });
    }
  },
}
</script>


