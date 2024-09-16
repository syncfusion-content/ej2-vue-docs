import Vue from 'vue';
import { AIAssistViewPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView'></ejs-aiassistview>
  </div>
`,

  data () {
    return {
    }
  }

});