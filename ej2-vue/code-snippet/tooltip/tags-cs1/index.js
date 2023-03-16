
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { TooltipPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(ButtonPlugin);
Vue.use(TooltipPlugin);

var demoVue = Vue.component("demo", {
  template: `
    <div id="tooltip" ref="content">
        <h2>HTML Tags</h2>
            Through templates, <b><span style="color:#e3165b">tooltip content</span></b> can be loaded with <u><i> inline HTML, images, iframe, videos, maps </i></u>. A title can be added to the content
    </div>`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
   <div id='app'>
        <ejs-tooltip target='#title' cssClass='e-tooltip-css' ref="tooltipTitle" position='BottomCenter' opensOn='Click' ref="tooltip" :content="content">
            <div id="container">
                <div id="tooltipContent">
                    <div class="content">
                        <ejs-button class="text" id="title">HTML(With Title)</ejs-button>
                    </div>
                </div>
            </div>
        </ejs-tooltip>
    </div>
`,

  data: function() {
    return {
        content: function () {
            return { template : demoVue}
        }
    };
  }

});