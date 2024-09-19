import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="width: max(50%, 500px); margin: 30px auto;">
    <br>
    <ejs-aiassistview id='aiAssistView' ref="aiassist">
      <ejs-views>
        <ejs-view type="Assist" name="Prompt" view-template="viewTemplate">
          <template v-slot:viewTemplate="">
            <div class="view-container"><h3>Prompt view content</h3></div>
          </template>
        </ejs-view>
        <ejs-view type="Custom" name="Response" view-template="viewTemplate2">
          <template v-slot:viewTemplate2="">
            <div class="view-container"><h3>Response view content</h3></div>
          </template>
        </ejs-view>
      </ejs-views>
    </ejs-aiassistview>
  </div>
`,

  data: function () {
    return {
    }
  }
});