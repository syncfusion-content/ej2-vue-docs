
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { DropDownButtonPlugin } from '@syncfusion/ej2-vue-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ColorPickerPlugin);
Vue.use(DropDownButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker :inline="true" :modeSwitcher="false" :change="onChange"></ejs-colorpicker>
    <ejs-dropdownbutton id="dropdownbtn" ref="ddb" target=".e-colorpicker-wrapper" iconCss="e-dropdownbtn-preview" :beforeClose="beforeDdbClose" :open="ddbOpen"></ejs-dropdownbutton>
</div>
`,

  methods: {
        onChange: function(args) {
          this.$refs.ddb.ej2Instances.element.children[0].style.backgroundColor = args.currentValue.rgba;
          this.closePopup();
        },
        ddbOpen: function(args) {
          args.element.querySelector('.e-cancel').addEventListener('click', this.closePopup);
        },
        beforeDdbClose: function(args) {
          args.element.querySelector('.e-cancel').removeEventListener('click', this.closePopup);
        },
        closePopup: function() {
          this.$refs.ddb.ej2Instances.toggle()
        }
  }

});