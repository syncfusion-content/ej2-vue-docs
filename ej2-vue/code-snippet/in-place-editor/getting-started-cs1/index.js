
import Vue from 'vue';
import { InPlaceEditorPlugin } from '@syncfusion/ej2-vue-inplace-editor';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(InPlaceEditorPlugin);
Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <table class="table-section">
        <tr>
            <td>ShowButtons:</td>
            <td>
        <ejs-checkbox ref="checkObj" id="showbuttons" checked=true :change="onChange" :labelPosition="labelPosition" :label="label"></ejs-checkbox>
        </td>
    </tr>
    <tr>
        <td class="sample-td">Enter your name:</td>
        <td class="sample-td">
      <ejs-inplaceeditor ref="editObj" mode="Inline" :model="textModel" type="Text" value="Andrew" data-underline="false">
      </ejs-inplaceeditor>
      </td>
    </tr>
    </div>
`,

  name: 'app',
      data () {
        return {
            textModel: {
                placeholder: 'Enter Some Text'
            },
            labelPosition: 'Before',
            label: 'show',
        };
    },
    mounted: function() {
    this.editObj = this.$refs.editObj.ej2Instances;
    },
    methods: {
        onChange: function(args) {
        args.checked ? this.editObj.showButtons = true : this.editObj.showButtons = false
        }
    }

});