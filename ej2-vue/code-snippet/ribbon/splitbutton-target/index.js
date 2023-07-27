
import Vue from "vue";
import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
import { ListViewPlugin } from '@syncfusion/ej2-vue-lists';
Vue.use(RibbonPlugin);
Vue.use(ListViewPlugin );

new Vue({
  el: '#app',
  template: `
  <div>
    <ejs-ribbon>
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Table">
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="SplitButton" :splitButtonSettings="tableSettings">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
    <ejs-listview id='tableList' :dataSource='tableOptions' headerTitle='Table' showHeader='true'></ejs-listview>
  </div>
`,
data: function () {
  return {
    tableOptions: [
      { text: "Insert Table" }, 
      { text: "This device" }, 
      { text: "Convert Table" }, 
      { text: "Excel SpreadSheet" }
    ],
    tableSettings: {
      content: 'Table',
      iconCss: 'e-icons e-table',
      target: "#tableList"
    }
  };
}
});