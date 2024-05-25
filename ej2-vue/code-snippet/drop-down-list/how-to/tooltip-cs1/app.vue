<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
            <ejs-dropdownlist id='Countries' ref='ddlObj' :created='onDropdownCreate' :dataSource='countryData' :fields='fields' :close='onClose' placeholder='Select a country'>
            </ejs-dropdownlist>
    </div>
  </div>
</template>
<script>

import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { TooltipComponent } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";




import { Tooltip } from '@syncfusion/ej2-popups';

export default {
name: "App",
components: {
"ejs-dropdownlist":DropdownlistComponent,

},
 data () {
    return {
      countryData: [
        { id: '1', text: 'Australia', content: 'National sports is Cricket' },
        { id: '2', text: 'Bhutan', content: 'National sports is Archery' },
        { id: '3', text: 'China', content: 'National sports is Table Tennis' },
        { id: '4', text: 'Cuba', content: 'National sports is Baseball' },
        { id: '5', text: 'India', content: 'National sports is Hockey' },
        { id: '6', text: 'Spain', content: 'National sports is Football' },
        { id: '7', text: 'United States', content: 'National sports is Baseball' }
      ],
      fields : { text: 'text', value: 'id' },
      tooltip: Tooltip
    }
  },
  methods: {
        onClose: function(e) {
            this.tooltip.close();
        },
        onBeforeRender : function(args) {
            var result = this.$refs.ddlObj.dataSource;
            var i;
            for (i = 0; i < result.length; i++) {
                if (result[i].text === args.target.textContent) {
                    this.tooltip.content = result[i].content;
                    this.tooltip.dataBind();
                    break;
                }
            }
        },
        onDropdownCreate:  function(args) {
            this.tooltip = new Tooltip({
            // default content of tooltip
                content: 'Loading...',
                // set target element to tooltip
                target: '.e-list-item',
                // set position of tooltip
                position: 'top center',
                // bind beforeRender event
                beforeRender: this.onBeforeRender
            });
            this.tooltip.appendTo('body');
        }
    }  
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>