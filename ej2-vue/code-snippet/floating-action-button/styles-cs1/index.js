
    import Vue from 'vue';
    import { FabPlugin } from "@syncfusion/ej2-vue-buttons";
    import { enableRipple } from '@syncfusion/ej2-base';

    enableRipple(true);
    Vue.use(FabPlugin);

    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To render Floating Action Button with applied warning style -->
        <ejs-fab id='fab' iconCss= 'e-icons e-edit' cssClass= 'e-warning' target='#targetElement'></ejs-fab>
    </div>
`,

});