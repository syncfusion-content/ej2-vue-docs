<template>
  <div id="app">
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
      :beforeServiceInvoke="beforeServiceInvoke"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        url: 'https://services.syncfusion.com/vue/production/api/pivot/post',
        mode: 'Server',
        expandAll: true,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }
        ],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' }],
        filters: []
      },
      height: 350
    }
  },
  methods: {
    // Attach an Authorization header before each server call
    beforeServiceInvoke: function (args) {
      const token = this.getAuthToken(); // obtain securely at runtime

        args.internalProperties = args.internalProperties || {};
        args.internalProperties.headers = {
            ...(args.internalProperties.headers || {}),
            'Authorization': `Bearer ${token}`
        };
    },
    getAuthToken: function() {
      // Retrieve and return a valid auth token securely
      return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    }
  },
  provide: {
    pivotview: []
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";</style>