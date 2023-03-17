
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
        <!-- To render Floating Action Button with icon and text -->
        <ejs-fab id='fab' iconCss='fab-icons fab-icon-people' content='Contacts' iconPosition='Right' target='#targetElement'></ejs-fab>
    </div>
`,

});