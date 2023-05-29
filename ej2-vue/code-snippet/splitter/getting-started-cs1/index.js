
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';

Vue.use(SplitterPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app" class="col-lg-12 control-section default-splitter">
    <ejs-splitter id='default-splitter' height='250px'>
        <e-panes>
            <e-pane content='Left Pane'></e-pane>
            <e-pane content='Middle Pane'></e-pane>
            <e-pane content='Right Pane'></e-pane>
        </e-panes>
    </ejs-splitter>
</div>
`,

  name: 'app',
    data () {
    return { }
  }

});