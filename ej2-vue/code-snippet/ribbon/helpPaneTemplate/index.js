import Vue from 'vue';
import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
  <template>
  <ejs-ribbon id="ribbon" helpPaneTemplate="undoredo">
    <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
                <e-ribbon-group>
                    <e-ribbon-collections>
                        <e-ribbon-collection>
                            <e-ribbon-items>
                                <e-ribbon-item type="Button" :buttonSettings="cutButton"></e-ribbon-item>
                            </e-ribbon-items>
                        </e-ribbon-collection>
                    </e-ribbon-collections>
                </e-ribbon-group>
            </e-ribbon-groups>
        </e-ribbon-tab>
    </e-ribbon-tabs>
    <template v-slot:undoredo>
      <div class="helpPaneTemplate">
        <button class="action_btn"><label><span id="undo" class="e-icons e-undo"></span> Undo </label></button>
        <button class="action_btn"><label><span id="redo" class="e-icons e-redo"></span> Redo </label></button>
      </div>
    </template>
  </ejs-ribbon>
</template>
`,
data: function () {
  return {
    cutButton:  { iconCss: "e-icons e-cut", content: "Cut" }
  };
},
});