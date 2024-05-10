

<template>
  <ejs-spreadsheet
    :openUrl="openUrl"
    :allowOpen="true"
    :beforeOpen="beforeOpen"
  ></ejs-spreadsheet>
</template>

<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);
export default {
  data: () => {
    return {
      openUrl:
        "https://services.syncfusion.com/vue/production/api/spreadsheet/open",
    };
  },
  methods: {
    beforeOpen: function (args) {
      args.requestData["headers"] = {
        ...args.requestData,
        headers: { Authorization: "YOUR TEXT" },
      };
    },
  },
};
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css";
</style>


