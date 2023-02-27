
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-button ref="toggleBtn" cssClass='e-flat' iconCss='e-btn-sb-icon e-play-icon' isToggle=true v-on:click.native='btnClick'>Play</ejs-button>
`,

  methods : {
    btnClick: function(event) {
      if (this.$refs.toggleBtn.$el.classList.contains('e-active')) {
        this.$refs.toggleBtn.content = 'Play';
        this.$refs.toggleBtn.iconCss = 'e-btn-sb-icon e-play-icon';
      } else {
        this.$refs.toggleBtn.content = 'Pause';
        this.$refs.toggleBtn.iconCss = 'e-btn-sb-icon e-pause-icon';
      }
    }
  }

});