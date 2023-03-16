
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import { PanePropertiesModel } from '@syncfusion/ej2-layouts';

Vue.use(SplitterPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='splitter' ref='splitterObj'  width='700px' height='200px'>
        <e-panes>
            <e-pane content ='Pane 1' size ='300px'></e-pane>
            <e-pane content ='Pane 2' size ='300px'></e-pane>
        </e-panes>
    </ejs-splitter>
    <div class="addBtn">
      <button id='addButton' class="e-btn" v-on:click = 'addPane'>Add Pane</button>
    </div>
</div>
`,

  name: 'app',
    data () {
    return {
    }
  },
  methods: {
    addPane: function () {
         this.$refs.splitterObj.$el.ej2_instances[0].addPane({
      size: '200px',
      content: 'New Pane',
      min: '30px',
      max: '250px',
      }, 1);
    }
}

});