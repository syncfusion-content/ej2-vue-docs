
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(SplitterPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='splitter' ref='splitterObj'  width='600px' height='200px'>
        <e-panes>
            <e-pane :collapsible=true content='Left Pane' size ='200px'></e-pane>
            <e-pane :collapsible=true content='Middle Pane' size ='200px'></e-pane>
            <e-pane :collapsible=true content='Right Pane' size ='200px'></e-pane>
        </e-panes>
    </ejs-splitter>
    <div style="margin: 10px">
        <ejs-button id='expand' v-on:click.native="expandClick">Expand</ejs-button>
        <ejs-button id='collapse' v-on:click.native="collapseClick">Collapse</ejs-button>
    </div>
</div>

`,

    name: 'app',
    data () {
        return { }
    },
    methods: {
        expandClick : function() {
            this.$refs.splitterObj.expand(0);
        },
        collapseClick : function() {
            this.$refs.splitterObj.collapse(0);
        }
    }

});