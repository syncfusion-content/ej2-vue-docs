
import Vue from 'vue';
import { RatingPlugin  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <button id='btn' @click="visible">Visible</button>
        <ejs-rating id="rating" value="3" :visible="true" ref="rating"></ejs-rating>
    </div>
`,

    methods : {
        visible: function() {
            this.$refs.rating.visible = !this.$refs.rating.visible;
        }
    }

});