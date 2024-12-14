import Vue from 'vue';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SwitchPlugin);

new Vue({
    el: '#app',
    template: `
       <div>
            <ejs-switch id="switch1" :checked="true" @beforeChange="onBeforeChange"></ejs-switch>
       </div>
    `,
    methods: {
        onBeforeChange(args) {
            // Set cancel to true to prevent the switch state change
            args.cancel = true;
        }
    }
});