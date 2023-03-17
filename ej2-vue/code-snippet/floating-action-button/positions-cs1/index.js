
    import Vue from 'vue';
    import { FabPlugin } from "@syncfusion/ej2-vue-buttons";
    import { enableRipple } from '@syncfusion/ej2-base';

    enableRipple(true);
    Vue.use(FabPlugin);

    
new Vue({
	el: '#app',
	template: `
    <div>
        <div id="target" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To render Floating Action Button in TopLeft position -->
        <ejs-fab id="fab1" iconCss='fab-icons fab-icon-people' position='TopLeft' target='#target'></ejs-fab>
        <!-- To render Floating Action Button in TopCenter position -->
        <ejs-fab id="fab2" iconCss='fab-icons fab-icon-people' position='TopCenter' target='#target'></ejs-fab>
        <!-- To render Floating Action Button in TopRight position -->
        <ejs-fab id="fab3" iconCss='fab-icons fab-icon-people' position='TopRight' target='#target'></ejs-fab>
        <!-- To render Floating Action Button in MiddleLeft position -->
        <ejs-fab id="fab4" iconCss='fab-icons fab-icon-people' position='MiddleLeft' target='#target'></ejs-fab>
        <!-- To render Floating Action Button in MiddleCenter position -->
        <ejs-fab id="fab5" iconCss='fab-icons fab-icon-people' position='MiddleCenter' target='#target'></ejs-fab>
        <!-- To render Floating Action Button in MiddleRight position -->
        <ejs-fab id="fab6" iconCss='fab-icons fab-icon-people' position='MiddleRight' target='#target'></ejs-fab>
        <!-- To render Floating Action Button in BottomLeft position -->
        <ejs-fab id="fab7" iconCss='fab-icons fab-icon-people' position='BottomLeft' target='#target'></ejs-fab>
        <!-- To render Floating Action Button in BottomCenter position -->
        <ejs-fab id="fab8" iconCss='fab-icons fab-icon-people' position='BottomCenter' target='#target'></ejs-fab>
        <!-- To render Floating Action Button in BottomRight position -->
        <ejs-fab id="fab9" iconCss='fab-icons fab-icon-people' position='BottomRight' target='#target'></ejs-fab>
    </div>
`,

});