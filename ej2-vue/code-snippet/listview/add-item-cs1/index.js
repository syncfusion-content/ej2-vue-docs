
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ListViewPlugin);
Vue.use(ButtonPlugin);
var demoVue = Vue.component("demo", {
  template: `<div class='text-content'> {{data.text}} <span class = 'delete-icon'></span> </div>`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <div id = 'flat-list'>
    <!-- ListView element -->
    <ejs-listview id='sample-list-flat' ref='list' :dataSource='data' :fields='fields' :template='datatemplate' :actionComplete='onComplete' >
    </ejs-listview>
    </div>
   <ejs-button id="btn" v-on:click.native="onClick">Add Item</ejs-button>
  </div>
`,

  data: function() {
    return {
        data: [
          { text: "Hennessey Venom", id: "1", icon: "delete-icon" },
          { text: "Bugatti Chiron", id: "2", icon: "delete-icon" },
          { text: "Bugatti Veyron Super Sport", id: "3", icon: "delete-icon" },
          { text: "Aston Martin One- 77", id: "4", icon: "delete-icon" },
          { text: "Jaguar XJ220", id: "list-5", icon: "delete-icon" },
          { text: "McLaren P1", id: "6", icon: "delete-icon" }
        ],
        fields: { text: 'text', iconCSS: 'icon' },
        datatemplate: function () {
                return { template : demoVue}
            }
    };
  },
   methods: {
        deleteItem: function(args){
            args.stopPropagation();
            let liItem = args.target.parentElement.parentElement;
            this.$refs.list.removeItem(liItem);
            this.onComplete();
        },
        onComplete: function(args) {
            let iconEle = document.getElementsByClassName("delete-icon");
            var _this =this;
            //Event handler to bind the click event for delete icon
            Array.from(iconEle).forEach(function(element) {
                element.addEventListener("click", _this.deleteItem.bind(_this));
            });
        },
        onClick: function(){
            let data = {
                    text: "Koenigsegg - " + (Math.random() * 1000).toFixed(0),
                    id: (Math.random() * 1000).toFixed(0).toString(),
                    icon: "delete-icon"
                };
            this.$refs.list.addItem([data]);
        }
    }

});