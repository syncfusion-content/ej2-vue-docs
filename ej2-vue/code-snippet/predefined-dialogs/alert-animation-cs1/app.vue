<template>
  <div class="predefinedDialogs">
    <ejs-button id="alertDlgBtn" v-on:click="alertBtnClick" cssClass="e-danger">Alert</ejs-button>
  </div>
</template>
<script>
import { DialogUtility } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent
  },
  data: function () {
    return {};
  },
  methods: {
    alertBtnClick: function () {
      DialogUtility.alert({
        title: 'Low battery',
        width: '250px',
        animationSettings: { effect: 'Zoom' },
        content: '10% of battery remaining'
      });
    }
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

.predefinedDialogs {
  height: 100%;
  min-height: 350px;
}
</style>