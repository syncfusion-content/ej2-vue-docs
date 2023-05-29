
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

var demoVue = Vue.component("demo", {
  template: `
    <div id="tooltipContent"><p><strong>Environmentally friendly</strong> or <strong>environment-friendly</strong>, <i>(also referred to as eco-friendly, nature-friendly, and green)</i> are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.</p></div>`,
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
    <ejs-tooltip id='tooltip' :content='content' target='#target'>
        <p>A green home is a type of house designed to be  <a id="target"><u>environmentally friendly</u></a>
          and sustainable. And also focuses on the efficient use of "energy, water, and building materials." As green homes
          have become more prevalent we have also seen the emergence of green affordable housing.
        </p>
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