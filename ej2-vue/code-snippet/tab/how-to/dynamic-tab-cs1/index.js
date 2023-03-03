
import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { Tab, TabComponent, SelectEventArgs } from '@syncfusion/ej2-navigations';
import { enableRipple, createElement } from '@syncfusion/ej2-base';
Vue.use(TabPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div id='tab1_content' style='display: none'>
            <ul>
                <li>Click on the "+" header to add dynamic tab items. </li>
                <li>It displays input elements to get the new tab information. </li>
                <li>Add details and click the "Add Tab" button to open the newly added tab.</li>
            </ul>
        </div>
        <div id='form-container' style='display: none'>
            <div class='e-float-input'>
                <input type='text' id='tab-title' required="" />
                <span class='e-float-line'></span>
                <label class='e-float-text'>Enter header title</label>
            </div>
            <br />
            <div class='e-float-input'>
                <textarea rows='5' type='text' id='tab-content' required=""></textarea>
                <span class='e-float-line'></span>
                <label class='e-float-text'>Enter content</label>
            </div>
            <br />
            <div class='btn-section'>
                <button id='btn-add' class='e-btn' v-on:click='btnClicked'>Add Tab</button>
                <br />
                <br />
                <span class='info'> * Title is mandatory to add a new Tab</span>
            </div>
        </div>
        <ejs-tab id='dynamic_tab' ref='TabInstance'  :selected= "tabSelected">
        <e-tabitems>
            <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
            <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
        <e-tabitems>
        </ejs-tab>
  </div>
`,

   name: 'app',
   data: function(){
        return {
          totalItems: 0,
          headerText0: { 'text': 'Tab1' },
          headerText1: { 'iconCss': 'e-add-icon' },

         content0: '#tab1_content',
         content1: '#form-container',
        }
  },

  mounted: function() {
    let addBtn = document.querySelectorAll(".e-ileft.e-icon");
    addBtn[0].setAttribute("title", "Add Tab");
  },

  methods:{
  tabSelected: function(args) {
    if (args.selectedIndex === document.querySelectorAll('#dynamic_tab .e-toolbar-item').length - 1) {
        document.getElementById('tab-title').value = '';
        document.getElementById('tab-content').value = '';
    }
 },
  btnClicked: function(e) {
    let title = document.getElementById('tab-title').value;
    let content = document.getElementById('tab-content').value;
    var tabObj = this.$refs.TabInstance.ej2Instances;
    let item =  { header: { text: title }, content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML };

    let totalItems = document.querySelectorAll('#dynamic_tab .e-toolbar-item').length;
    tabObj.addTab([item], totalItems-1);
  }
 }

});