
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);



new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' placeholder='Select a game' :dataSource='sportsData' :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
`,

  data (){
    return {
        sportsData: [
          { Id: 'game1', Game: 'Badminton' },
          { Id: 'game2', Game: 'Football' },
          { Id: 'game3', Game: 'Tennis' }
        ],
        fields: { text: 'Game', value: 'Id' },
    }
  }

});