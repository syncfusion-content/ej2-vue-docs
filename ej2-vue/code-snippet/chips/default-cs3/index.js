
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew" leadingIconCss='andrew'></e-chip>
            <e-chip text="Janet" leadingIconCss='janet'></e-chip>
            <e-chip text="Laura" leadingIconCss='laura'></e-chip>
            <e-chip text="Margaret" leadingIconCss='margaret'></e-chip>
        </e-chips>
    </ejs-chiplist>
`,



});