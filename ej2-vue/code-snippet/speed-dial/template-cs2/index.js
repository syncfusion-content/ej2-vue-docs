
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SpeedDialPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
    <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
    <ejs-speeddial id='speeddial'  openIconCss='e-icons e-edit' content="Edit" :popupTemplate="popupTemplateContent" cssClass='popupSpeedDial' target='#targetElement'>
      <template v-slot:popupTemplateContent>
        <div>
          <div class="speeddial-form">
              <p>Here you can customize your code.</p>
          </div>
        </div>
      </template>
    </ejs-speeddial>
  </div>
`,

  data() {
        return {
          popupTemplateContent:"<div><div class='speeddial-form'><p>Here you can customize your code.</p></div></div>"
        };
    }

});