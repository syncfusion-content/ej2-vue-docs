<template>
  <div class="control-section">
    <div id = 'flat-list'>    
      <ejs-listview id='sample-list-flat' ref='list' :dataSource='data' :fields='fields' :template='datatemplate' :actionComplete='onComplete' >
      </ejs-listview>
    </div>
   <ejs-button id="btn" v-on:click="onClick">Add Item</ejs-button>
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
  content: "\\e7e9";
  float: right;
  cursor: pointer;
  padding-top: 13px;
}
</style>
<script setup>

import { ListViewComponent as EjsListview} from "@syncfusion/ej2-vue-lists";
import { ButtonComponent as EjsButton} from '@syncfusion/ej2-vue-buttons';
import { createApp, ref } from "vue";

var demoVue = createApp().component("demo", {
  template: `<div class='text-content'> {{data.text}} <span class = 'e-icons delete-icon'></span> </div>`,
  data() {
    return {
      data: {}
    };
  }
});

      const list=ref(null);
       const data = [
          { text: "Hennessey Venom", id: "1", icon: "delete-icon" },
          { text: "Bugatti Chiron", id: "2", icon: "delete-icon" },
          { text: "Bugatti Veyron Super Sport", id: "3", icon: "delete-icon" },
          { text: "Aston Martin One- 77", id: "4", icon: "delete-icon" },
          { text: "Jaguar XJ220", id: "list-5", icon: "delete-icon" },
          { text: "McLaren P1", id: "6", icon: "delete-icon" }
        ];
       const fields = { text: 'text', iconCSS: 'icon' };
       const datatemplate = () => {
                return { template : demoVue}
            };

       const deleteItem = (args) =>{
            args.stopPropagation();
            let liItem = args.target.parentElement.parentElement;
            list.value.removeItem(liItem);
            onComplete();
        };
       const onComplete = () => {
            let iconEle = document.getElementsByClassName("delete-icon");
            //Event handler to bind the click event for delete icon
            Array.from(iconEle).forEach(function(element) {
                element.addEventListener("click", deleteItem.bind());
            });
        };
       const onClick = () => {
            let data = {
                    text: "Koenigsegg - " + (Math.random() * 1000).toFixed(0),
                    id: (Math.random() * 1000).toFixed(0).toString(),
                    icon: "delete-icon"
                };
            list.value.addItem([data]);
        };

</script>