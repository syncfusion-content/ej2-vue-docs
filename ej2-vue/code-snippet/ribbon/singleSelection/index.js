
import Vue from 'vue';
import { RibbonItemSize, RibbonGroupButtonSelection, RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
  <template>
  <ejs-ribbon>
  <e-ribbon-tabs>
    <e-ribbon-tab header="Home">
      <e-ribbon-groups>
        <e-ribbon-group header="Paragraph">
          <e-ribbon-collections>
            <e-ribbon-collection>
              <e-ribbon-items>
                <e-ribbon-item type="GroupButton" :allowedSizes="size" :groupButtonSettings="groupButtonSingle"></e-ribbon-item>
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
data: function () {
  return {
    size: RibbonItemSize.Medium,
      groupButtonSingle: { 
      selection: RibbonGroupButtonSelection.Single, 
      items: [
        {iconCss: 'e-icons e-align-left', selected: true, content: 'Align Left'},
        {iconCss: 'e-icons e-align-center',content: 'Align Center'}, 
        {iconCss: 'e-icons e-align-right',content: 'Align Right'}, 
        {iconCss: 'e-icons e-justify',content: 'Justify'}
      ]
    },
  };
}
});