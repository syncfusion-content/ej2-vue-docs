
    import Vue from 'vue';
    import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";

    Vue.use(SkeletonPlugin);

    
new Vue({
	el: '#app',
	template: `
    <div>
        <ejs-skeleton shape= 'Circle' width= "60px" cssClass= "e-customize"></ejs-skeleton>
    </div>
`,
 
});