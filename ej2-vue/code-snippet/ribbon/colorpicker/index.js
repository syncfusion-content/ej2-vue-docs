
import Vue from 'vue';
import { RibbonItemSize, RibbonPlugin, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
import { provide } from "vue";
Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" :colorPickerSettings="colorPicker" >
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>
`,
provide: {
  ribbon: [RibbonColorPicker]
},
data: function () {
  return {
    colorPicker: {
      value: "#123456"
    }
  };
}
});