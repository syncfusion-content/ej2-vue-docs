import Vue from 'vue';
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ContextMenuPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <div id="target">Right click / Touch hold to open the ContextMenu</div>
      <ejs-contextmenu 
        target="#target" 
        :items="menuItems" 
        :enableScrolling="true" 
        @beforeOpen="beforeOpen"
      ></ejs-contextmenu>
    </div>
  `,
  data() {
    return {
      menuItems: [
        {
          text: 'View',
          items: [
            { text: 'Mobile' },
            { text: 'Desktop Smaller' },
            { text: 'Desktop Normal' },
            { text: 'Desktop Bigger Smaller' },
            { text: 'Desktop Bigger Normal' }
          ]
        },
        { text: 'Refresh' },
        { text: 'Paste' },
        { separator: true },
        { text: 'New' },
        { text: 'Personalize' }
      ]
    };
  },
  methods: {
    beforeOpen(args) {
      args.element.parentElement.style.height = '150px';
    }
  }
});