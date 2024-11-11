
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
            rulerSettings: {
                showRulers: true
            }
        }
    }

});