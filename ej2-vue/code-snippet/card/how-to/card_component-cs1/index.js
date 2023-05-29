
import Vue from 'vue';
import { ListView } from '@syncfusion/ej2-lists';


new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div style="margin: 50px;">
            <!--element which is going to render the Card-->
            <div tabindex="0" class="e-card" id="basic">
                <div class="e-card-title">To-Do List</div>
                <div class="e-card-separator"></div>
                <div class="e-card-content">
                    <div id='element'></div>
                </div>
            </div>
        </div>
  </div>
`,

  name: 'app',
  data(){


  },mounted(){

//Initialize ListView component
var listviewInstance: ListView = new ListView({
    dataSource: [
    {  todoList: 'Pay Bills' },
    {  todoList: 'Call Chris' },
    {  todoList: 'Meet Andrew' },
    {  todoList: 'Visit Manager' },
    {  todoList: 'Customer Meeting' },
],
    //map the appropriate columns to fields property
    fields: { text: 'todoList' },
},"#element");
  }
  }

});