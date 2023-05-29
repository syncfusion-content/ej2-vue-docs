
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
        <ejs-speeddial id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' content='Edit' target='#targetElement' :items='items' :animation='animation'></ejs-speeddial>
    </div>
`,

        data() {
            return {
                items: [
                    { text: 'Cut', iconCss: 'e-icons e-cut' },
                    { text: 'Copy', iconCss: 'e-icons e-copy' },
                    { text: 'Paste', iconCss: 'e-icons e-paste' }
                ],
                animation: { effect: 'Zoom' }
            };
        }
    
});