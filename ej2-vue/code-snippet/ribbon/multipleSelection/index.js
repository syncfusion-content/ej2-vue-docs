
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
                <e-ribbon-item type="GroupButton" :allowedSizes="size" :groupButtonSettings="groupButtonMultiple"></e-ribbon-item>
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
    groupButtonMultiple: {
      selection: RibbonGroupButtonSelection.Multiple, 
      items: [{ iconCss: 'e-icons e-bold', content: 'Bold', selected: true}, 
      {iconCss: 'e-icons e-italic', content: 'Italic'}, 
      {iconCss: 'e-icons e-underline', content: 'Underline'}, 
      {iconCss: 'e-icons e-strikethrough', content: 'Strikethrough'}, 
      {iconCss: 'e-icons e-change-case', content: 'Change Case'}
      ]
    }
  };
}
});