
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(SplitterPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='splitter' ref='splitterObj'  width='700px' height='200px'>
        <e-panes>
            <e-pane content ='Pane 1' size ='300px'></e-pane>
            <e-pane content ='Pane 2' size ='300px'></e-pane>
            <e-pane content ='Pane 3' size ='300px'></e-pane>
        </e-panes>
    </ejs-splitter>
    <div class="removeBtn">
      <button id='removeButton' class="e-btn" v-on:click = 'removePane'>Remove Pane</button>
    </div>
</div>
`,

    name: 'app',
        data () {
        return {
        }
    },
    methods: {
        removePane: function () {
            this.$refs.splitterObj.removePane(1);
        }
    }

});