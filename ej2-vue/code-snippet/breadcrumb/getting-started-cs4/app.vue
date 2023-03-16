

<template>
<div>
<ejs-breadcrumb :enableNavigation='false' url="https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location" :beforeItemRender="beforeItemRenderHandler">
</ejs-breadcrumb>
</div>
</template>

<script>
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);

export default {
  data: function() {
        return {};
  },
  methods: {
    beforeItemRenderHandler: function(args) {
        if (args.item.text === 'bind-to-location') {
          args.item.text = 'location';
        }
    }
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

body {
    margin-top: 100px;
    text-align: center;
}
</style>


