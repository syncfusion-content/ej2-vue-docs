
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

var emojiTemplate = Vue.component("emptyTemplate", {
  template: `<span v-if='data.index==0' class='angry emoji'>😡</span>
             <span v-else-if='data.index==1' class='disagree emoji'>🙁</span>
             <span v-else-if='data.index==2' class='neutral emoji'>😐</span>
             <span v-else-if='data.index==3' class='agree emoji'>🙂</span>
             <span v-else class='happy emoji'>😀</span>`,
  data() {
    return {
        data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-rating id="rating" value="4" :emptyTemplate="emptyTemplate" :enableSingleSelection="true" :enableAnimation="false" ></ejs-rating>
    </div>
`,

    data() {
        return {
            emptyTemplate: function(e) {
                return {
                    template: emojiTemplate
                }
            }
        }
    };

});