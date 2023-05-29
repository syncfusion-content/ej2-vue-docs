
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew" avatarText= 'A'></e-chip>
            <e-chip text="Janet" avatarText= 'J'></e-chip>
            <e-chip text="Laura" avatarText= 'L'></e-chip>
            <e-chip text="Margaret" avatarText= 'M'></e-chip>
        </e-chips>
    </ejs-chiplist>
`,



});