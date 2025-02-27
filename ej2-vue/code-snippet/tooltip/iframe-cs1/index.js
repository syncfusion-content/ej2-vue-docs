
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
import { TooltipPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(TooltipPlugin);


new Vue({
	el: '#app',
	template: `
   <div id='app'>
        <ejs-tooltip target='#iframeContent' cssClass='e-tooltip-css' ref="tooltipTitle" :position='position' :enableHtmlSanitizer='enableHtmlSanitizer' :opensOn='opensOn' :content='content'>
            <div id='container'>
                <div id="tooltipContent">
                    <div class="content">
                        <ejs-button cssClass="text" id="iframeContent" cssClass='e-outline' isPrimary=true>Embedded Iframe</ejs-button>
                    </div>
                </div>
            </div>
        </ejs-tooltip>
    </div>
`,

  data: function() {
    return {
      position: 'BottomCenter',
      opensOn: 'Click',
      enableHtmlSanitizer:false,
      content: '<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard"></iframe>'
    };
  },
  methods: {
  }

});