
    import Vue from 'vue';
    import { SkeletonPlugin } from "@syncfusion/ej2-vue-notifications";

    Vue.use(SkeletonPlugin);

    
new Vue({
	el: '#app',
	template: `
    <div>
        <ul id="skeleton-list" class="e-card">
            <li>
                <div class='listProfile'>
                    <ejs-skeleton shape="Circle" width="40px" shimmerEffect='Pulse'></ejs-skeleton>
                </div>
                <div>
                    <ejs-skeleton width="60%" height='15px' shimmerEffect='Pulse'></ejs-skeleton><br>
                    <ejs-skeleton width="40%" height='15px' shimmerEffect='Pulse'></ejs-skeleton>
                </div>
            </li>
            <li>
                <div class='listProfile'>
                    <ejs-skeleton shape="Circle" width="40px" shimmerEffect='Pulse'></ejs-skeleton>
                </div>
                <div>
                    <ejs-skeleton width="60%" height='15px' shimmerEffect='Pulse'></ejs-skeleton><br>
                    <ejs-skeleton width="40%" height='15px' shimmerEffect='Pulse'></ejs-skeleton>
                </div>
            </li>
        </ul>
    </div>
`,

        data: function () {
            return {};
        }
    
});