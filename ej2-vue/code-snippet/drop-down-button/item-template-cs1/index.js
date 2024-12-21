import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <ejs-dropdownbutton :items="items" :itemTemplate="'itemTemplate'">
      DropDownButton
      <template v-slot:itemTemplate="{ data }">
        <div>
          <span class="e-menu-icon" :class="data.iconCss"></span>
          <span class="custom-class">
            <a v-if="data.url" :href="data.url" target="_blank" rel="noopener noreferrer">{{ data.text }}</a>
            <span v-else>{{ data.text }}</span>
            <span v-if="data.description" class="description">{{ data.description }}</span>
          </span>
        </div>
      </template>
    </ejs-dropdownbutton>
  `,
  data() {
    return {
      items: [
        {
          text: 'Home',
          iconCss: 'e-icons e-home',
        },
        {
          text: 'Search',
          iconCss: 'e-icons e-search',
          url: 'http://www.google.com'
        },
        {
          text: 'Yes / No',
          iconCss: 'e-icons e-check-box'
        },
        {
          text: 'Text',
          iconCss: 'e-icons e-caption',
        },
        {
          separator: true
        },
        {
          text: 'Syncfusion',
          iconCss: 'e-icons e-mouse-pointer',
          url: 'http://www.syncfusion.com'
        }
      ]
    };
  }
});