
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);


new Vue({
	el: '#app',
	template: `
    <ejs-chiplist id="chip" v-on:click="chipclick">
        <e-chips>
            <e-chip text="Send a text"></e-chip>
            <e-chip text="Set a remainder"></e-chip>
            <e-chip text="Read my emails"></e-chip>
            <e-chip text="Set alarm"></e-chip>
        </e-chips>
    </ejs-chiplist>
`,

  methods: {
    chipclick: function(e) {
      alert('you have clicked ' + e.text);
    }
  }

});