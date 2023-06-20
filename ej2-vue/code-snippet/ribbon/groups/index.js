
import Vue from 'vue';
import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
      <e-ribbon-tab header="Insert">
        <e-ribbon-groups>
          <e-ribbon-group header="Tables">
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>
`,
});