import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(TreeViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class="control_wrapper">
        <ejs-treeview id='treeview' ref="treeview" :fields="fields" :nodeClicked='nodeclicked'>
            <ejs-button id="button1" cssClass="e-primary inline-element right" v-on:click="btnClick1" content="Add parent"></ejs-button>
            <ejs-button id="button2" cssClass="e-primary inline-element right" v-on:click="btnClick2" content="Add child"></ejs-button>        
        </ejs-treeview>
    </div>
  </div>
`,

  data () {
      var dataSource =  [
        { id: 1, name: 'Parent 1', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'Child 1' },
        { id: 3, pid: 1, name: 'Child 2' },
        { id: 4, pid: 1, name: 'Child 3' },
        { id: 7, name: 'Parent 2', hasChild: true },
        { id: 8, pid: 7, name: 'Child 1' },
        { id: 9, pid: 7, name: 'Child 2' },
        { id: 10, pid: 7, name: 'Child 3' },
    ];
    return {
        fields : { dataSource: dataSource, id: 'id', text: 'name', child: 'subChild' },
    }
  },
   methods: {
        btnClick1: function () {
            this.$refs.treeview.addNodes([
                { id: 12, name: 'New Parent' },
                { id: 13, pid: 12, name: 'New Child1' },
            ]);
        },
        btnClick2: function () {
            this.$refs.treeview.addNodes(
                [{ id: 11, name: 'New Child2', pid: 1 }],
                '1',
                null
            );
        },       
    }
});