
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-chiplist id="chip" selection="Single">
        <e-chips>
            <e-chip text="Small"></e-chip>
            <e-chip text="Medium"></e-chip>
            <e-chip text="Large"></e-chip>
            <e-chip text="Extra Large"></e-chip>
        </e-chips>
    </ejs-chiplist>
`,

});