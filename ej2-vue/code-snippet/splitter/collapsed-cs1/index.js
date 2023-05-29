
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(SplitterPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='splitter' ref='splitterObj'  width='600px' height='200px'>
        <e-panes>
            <e-pane content='Left Pane' size ='200px' :collapsible=true></e-pane>
            <e-pane :collapsed=true content='Middle Pane' size ='200px' :collapsible=true></e-pane>
            <e-pane content='Right Pane' size ='200px' :collapsible=true></e-pane>
        </e-panes>
    </ejs-splitter>
</div>
`,

    name: 'app',
    data () {
        return { }
    }

});