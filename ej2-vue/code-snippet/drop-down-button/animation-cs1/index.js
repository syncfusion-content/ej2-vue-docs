import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-dropdownbutton 
        :items='items'
        :animationSettings="{ effect: 'SlideDown', duration: 800, easing: 'ease' }">
        Slide Down
      </ejs-dropdownbutton>
      <ejs-dropdownbutton 
        :items='items'
        :animationSettings="{ effect: 'FadeIn', duration: 800, easing: 'ease' }">
        Fade In
      </ejs-dropdownbutton>
      <ejs-dropdownbutton 
        :items='items'
        :animationSettings="{ effect: 'ZoomIn', duration: 800, easing: 'ease' }">
        Zoom In
      </ejs-dropdownbutton>
    </div>
  `,
  data() {
    return {
      items: [
        { text: 'Unread' },
        { text: 'Has Attachments' },
        { text: 'Categorized' },
        { separator: true },
        { text: 'Important' },
        { text: 'More Filters' }
      ]
    };
  }
});