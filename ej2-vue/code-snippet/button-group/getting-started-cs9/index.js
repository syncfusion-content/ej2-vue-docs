
import Vue from 'vue';
import { ButtonPlugin  } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <form>
        <div class='e-btn-group'>
            <input type="radio" id="male" name="gender" value="male" checked/>
            <label class="e-btn" for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female"/>
            <label class="e-btn" for="female">Female</label>
            <input type="radio" id="transgender" name="gender" value="transgender"/>
            <label class="e-btn" for="transgender">Transgender</label>
        </div>
        <ejs-button isPrimary='true'>Submit</ejs-button>
    </form>
  </div>
`,

  name: 'app'

});