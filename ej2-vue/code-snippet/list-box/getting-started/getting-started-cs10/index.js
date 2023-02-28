
import Vue from 'vue';
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(ListBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
        <ejs-listbox id="listbox" :dataSource='data'  ></ejs-listbox>
        <button id="additem" class="e-btn" v-on:click="additem">Add Items</button>
    </div>
  </div>
`,

  data (){
    return {
       data: [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
];
    }
  },
  methods:{
    additem: function(e){
        var items = ["Bugatti Veyron Super Sport", "SSC Ultimate Aero"]
        var listboxobj = document.getElementById("listbox").ej2_instances[0];
        if (!listboxobj.getDataByValue('Bugatti Veyron Super Sport')) {
        listboxobj.addItems([{ text: 'Bugatti Veyron Super Sport', id: 'list-03' }, { text: 'SSC Ultimate Aero', id: 'list-04' }]);
    }
  }

});