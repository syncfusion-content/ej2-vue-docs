
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(DropDownListPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:0 auto; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' ref="dropdownObj" :dataSource='sportsData' :fields='fields' placeholder='Select a game'></ejs-dropdownlist>
    </div>
    <div style='padding: 50px 0'>
      <button id='first' class="e-control e-btn" v-on:click="remove"> Remove 0th item</button>
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
      fields : { text: 'Game', value: 'Id' }
    }
  },
  methods: {
        remove: function (event) {
            if(this.$refs.dropdownObj.getItems().length > 1) {
                this.$refs.dropdownObj.getItems()[0].remove();
                this.$refs.dropdownObj.dataSource.splice(0, 1);
            } else {
              this.sportsData = [];
            }
        }
    }

});