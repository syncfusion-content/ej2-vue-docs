<template>
  <div class="predefinedDialogs">
    <ejs-button id="confirmDlgBtn" v-on:click="confirmBtnClick" cssClass="e-success">Confirm</ejs-button>
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
    confirmBtnClick: function () {
      DialogUtility.confirm({
        title: 'Delete file',
        content: "Are you sure you want to permanently delete these items?",
        width: '300px',
        showCloseIcon: true,
        closeOnEscape: true
      });
    },
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