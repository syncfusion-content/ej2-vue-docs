
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(SplitterPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='splitter' ref='splitterObj' width='600px' height='200px'>
        <e-panes>
            <e-pane content='#left-pane-content' min='60px' size ='200px'></e-pane>
            <e-pane content='#middle-pane-content'  min='60px' size ='200px'></e-pane>
            <e-pane content='#last-pane-content'  min='60px' size ='200px'></e-pane>
        </e-panes>
    </ejs-splitter>

    <!-- pane contents -->
    <div id="left-pane-content" style="display: none;">
        <div>Left pane<div id='panetext'>size: 25%</div>
            <div id='panetext'>min: 60px</div>
        </div>
    </div>

    <div id="middle-pane-content" style="display: none;">
        <span>Middle pane<div id="panetext">size: 50%</div>
            <div id="panetext">min: 60px</div>
        </span>
    </div>

    <div id="last-pane-content" style="display: none;">
        <span>Right pane<div id="panetext">size: 25%</div>
            <div id="panetext">min: 60px</div>
        </span>
    </div>
</div>
`,

    name: 'app',
    data () {
        return { }
    }

});