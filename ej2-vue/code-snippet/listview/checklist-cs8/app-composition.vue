<template>
  <div id="sample">
    <ejs-listview id='List' :dataSource='data' headerTitle='Search engines' showHeader='true'
      :template='anchortemplate'>
    </ejs-listview>
  </div>
</template>
<style>
#List {
  max-width: 300px;
  margin: auto;
  border: 1px solid #dddddd;
  border-radius: 3px;
}

#List a {
  text-decoration: none;
}

#List .e-list-header {
  background: rgb(2, 120, 215);
  color: white;
  font-size: 19px;
  font-weight: 500;
}
</style>
<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";
import { createApp } from "vue";

var listVue = createApp().component("demo", {
  template: `<a target='_blank' v-bind:href='data.url'>{{data.name}}</a>`,
  data() {
    return {
      data: {}
    };
  }
});

const data = [
  { name: 'Google', url: 'https://www.google.com' },
  { name: 'Bing', url: 'https://www.bing.com' },
  { name: 'Yahoo', url: 'https://www.yahoo.com' },
  { name: 'Ask.com', url: 'https://www.ask.com' },
  { name: 'AOL.com', url: 'https://www.aol.com' },
]
const anchortemplate = () => {
  return { template: listVue };
}

</script>