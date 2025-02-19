<template>
  <div class="control-section">
    <div id = 'flat-list'>
    <!-- ListView element -->
    <ejs-listview id='sample-list-flat' ref='list' :dataSource='data' :fields='fields' :template='datatemplate' :actionComplete='onComplete' >
    </ejs-listview>
    </div>
   <ejs-button id="btn" v-on:click.native="onClick">Add Item</ejs-button>
  </div>
</template>
<style>
 #sample-list-flat {
  margin: 40px auto;
  max-width: 500px;
}

#btn {
  margin:40px auto;
  display:block;
}

#sample-list-flat .delete-icon::after {
  color: black;
  content: "\e7e9";
  float: right;
  cursor: pointer;
  padding-top: 13px;
}
</style>
<script>

import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import {createApp} from 'vue';

var demoVue = createApp().component("demo", {
  template: `<div class='text-content'> {{data.text}} span class = 'e-icons delete-icon'></span> </div>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
name: "App",
components: {
"ejs-listview":ListViewComponent,
"ejs-button":ButtonComponent
},

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
        onComplete: function() {
            let iconEle = document.getElementsByClassName("delete-icon");
            //Event handler to bind the click event for delete icon
            Array.from(iconEle).forEach((element) => {
                element.addEventListener("click", this.deleteItem.bind(this));
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
}
</script>