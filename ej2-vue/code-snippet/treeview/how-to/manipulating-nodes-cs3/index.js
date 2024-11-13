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
        <ejs-treeview id='treeview' ref="treeview" :fields="fields" :allowEditing='true'></ejs-treeview>
            <ejs-button id="button1" cssClass="e-primary inline-element right" v-on:click="btnClick1" content="Update node"></ejs-button>        
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
          this.$refs.treeview.updateNode('4', 'Node updated');
        },
    }
});