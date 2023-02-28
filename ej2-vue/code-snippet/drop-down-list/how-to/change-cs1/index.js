
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(DropDownListPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:0 auto; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' ref='dropdown' :dataSource='sportsData' :fields='fields' :change='onChange' placeholder='Select a game'></ejs-dropdownlist>
    </div>
    <div style='margin: 50px'>
      <button id='button' class="e-control e-btn" v-on:click="onClick"> Set value dynamically</button>
    </div>
    <p style='margin: 5px' id='event'> </p>
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
        onClick: function (event) {
            this.$refs.dropdown.ej2Instances.value = 'game3';
        },
        onChange : function(args) {
            let element = document.createElement('p');
            if (args.isInteracted) {
                element.innerText = 'Changes happened by Interaction';
            } else {
                element.innerText = 'Changes happened by programmatic';
            }
            document.getElementById('event').append(element);
        }
    }

});