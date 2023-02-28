
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { FormValidator } from '@syncfusion/ej2-inputs';

Vue.use(RichTextEditorPlugin);

;
new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id='container'>
        <br>
        <form id="myForm" >
          <ejs-richtexteditor name="name" id="name" v-model="name" :blur="blur"></ejs-richtexteditor>
          <span style='color: red' v-for="error in errors">{{ error }}</span>
          <p>
    <button id="validateSubmit" class="sample-btn e-control e-btn" type="button" data-ripple="true">Submit</button>
          <button id="reset-btn" class="sample-btn e-control e-btn" type="reset" data-ripple="true">Reset</button>
  </p>
      </form>
    </div>
  </div>
`,

  data:{
    errors:[],
    name:null,
  },
  methods:{
    blur: function(){
      if(this.name) return true;
      this.errors = [];
      if(!this.name) this.errors.push("value required.");
    }
  },
  provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor]
    }

});