
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { Ajax } from '@syncfusion/ej2-base';

Vue.use(ListViewPlugin);


new Vue({
	el: '#app',
	template: `
   <div id="sample">
    <ejs-listview id='element' :dataSource='data' headerTitle='Settings' showHeader='true' :template='template'>
    </ejs-listview>
  </div>
`,

  data: function() {
    return {
      data: [
    { name: 'Network & Internet', id: '0', description: 'Wi-Fi, mobile, data usage, hotspot' },
    { name: 'Connected devices', id: '1', description: 'Bluetooth, cast, NFC' },
    { name: 'Battery', id: '2', description: '18% -4h 12m left' },
    { name: 'Display', id: '3', description: 'Wallpaper, sleep, font size' },
    { name: 'Sound', id: '4', description: 'Volume, vibration, Do Not Disturb' },
    { name: 'Storage', id: '5', description: '52% used - 15.48 GB free' }
],
    template:{}
    };
  },
  created: function() {
    let ajax = new Ajax('./template.html', 'GET', false);
    ajax.onSuccess = (e)=>{
    this.template = e;
    };
    ajax.send();
  }

});