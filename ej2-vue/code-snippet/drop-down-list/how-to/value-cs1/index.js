
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(DropDownListPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:0 auto; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' ref='dropdownObj' :value='dropDownValue' :dataSource='sportsData' :showClearButton='true' placeholder='Select a game'></ejs-dropdownlist>
    </div>
    <div style='padding: 50px'>
      <button id='button' class="e-control e-btn" v-on:click="onClick"> Set null to value property</button>
    </div>
  </div>
`,

  data (){
    return {
        dropDownValue: null,
        sportsData: ["American Football", "Badminton", "Basketball", "Cricket", "Football", "Golf", "Hockey", "Rugby", "Snooker", "Tennis"]
    }
  },
  methods: {
        onClick: function (event) {
            this.$refs.dropdownObj.ej2Instances.value = null;
            this.$refs.dropdownObj.dataBind();
        }
    }

});