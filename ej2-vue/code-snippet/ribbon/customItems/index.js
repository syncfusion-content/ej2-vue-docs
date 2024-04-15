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
        <e-ribbon-group header="Templates">
        <e-ribbon-collections>
          <e-ribbon-collection>
            <e-ribbon-items>
              <e-ribbon-item type="Template" :itemTemplate="'customItem'">
                <template v-slot:customItem = "{data}">
                  <div v-bind:class="'custom-template ' + data.activeSize"><label for="fname">First name:</label><input type="text" id="fname" name="fname"/><br/><br/><label for="lname">Last name:</label><input type="text" id="lname" name="lname"/></div>
                </template>
            </e-ribbon-item>
            </e-ribbon-items>
          </e-ribbon-collection>
        </e-ribbon-collections>
      </e-ribbon-group>
      <e-ribbon-group header="Multimedia">
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