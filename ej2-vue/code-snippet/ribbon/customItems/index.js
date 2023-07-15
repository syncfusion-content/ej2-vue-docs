import Vue from "vue";
import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Template" :itemTemplate="'ribbonTemplate'">
                    <template v-slot:ribbonTemplate = "{data}">
                      <span v-bind:class="'ribbonTemplate ' + data.activeSize"><span class="e-icons e-video"></span><span class="text">Video</span></span>
                    </template>
                </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
`,
data: function () {
}
});