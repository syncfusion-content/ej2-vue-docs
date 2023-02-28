
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { MultiSelect, TaggingEventArgs } from '@syncfusion/ej2-dropdowns';

Vue.use(MultiSelectPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-multiselect id='multiselect' :value='colorValues' :tagging='tagging' :dataSource='colorsData' mode="Box" placeholder="Favorite Colors" :fields='fields'></ejs-multiselect>
    </div>
  </div>
`,

  data (){
    return {
      colorsData: [
        { Color: 'Chocolate', Code: '#75523C' },
        { Color: 'CadetBlue', Code: '#3B8289' },
        { Color: 'DarkOrange', Code: '#FF843D' },
        { Color: 'DarkRed', Code: '#CA3832' },
        { Color: 'Fuchsia', Code: '#D44FA3' },
        { Color: 'HotPink', Code: '#F23F82' },
        { Color: 'Indigo', Code: '#2F5D81' },
        { Color: 'LimeGreen', Code: '#4CD242' },
        { Color: 'OrangeRed', Code: '#FE2A00' },
        { Color: 'Tomato', Code: '#FF745C' }
      ],
      colorValues : ['#75523C', '#4CD242', '#FF745C'],
      fields : { text: 'Color', value: 'Code' }
    }
  },
  methods: {
        tagging: function(e) {
           var msObject = document.getElementById("multiselect").ej2_instances[0];
          e.setClass(e.itemData[msObject.fields.text].toLowerCase());
        }
    }

});