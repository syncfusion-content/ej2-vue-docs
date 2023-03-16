
    import Vue from 'vue';
    import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";

    Vue.use(SkeletonPlugin);

    
new Vue({
	el: '#app',
	template: `
    <div>
        <ejs-skeleton height='15px'></ejs-skeleton>
    </div>
`,

        data: function () {
            return {};
        }
    
});