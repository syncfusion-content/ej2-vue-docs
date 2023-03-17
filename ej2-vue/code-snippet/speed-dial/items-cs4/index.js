
    import Vue from 'vue';
    import { SpeedDialPlugin } from "@syncfusion/ej2-vue-buttons";
    import { enableRipple } from '@syncfusion/ej2-base';

    enableRipple(true);
    Vue.use(SpeedDialPlugin);

    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <ejs-speeddial id='speeddial' content='Edit' target='#targetElement' :items='items'></ejs-speeddial>
    </div>
`,

        data() {
            return {
                items: [
                    { text: 'Cut', disabled: true },
                    { text: 'Copy' },
                    { text: 'Paste' }
                ]
            };
        }
    
});