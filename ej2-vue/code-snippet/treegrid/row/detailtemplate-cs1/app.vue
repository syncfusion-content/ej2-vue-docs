

<template>
<div id="app">
<ejs-treegrid :dataSource="data" childMapping='Children' height=317 width='auto' :treeColumnIndex='0' :detailTemplate='detailTemplate'>
    <e-columns>
      <e-column field='Name' headerText='First Name' width='180'></e-column>
      <e-column field='DOB' headerText = 'DOB' width='105' type='date' format='yMd'></e-column>
      <e-column field='Designation' headerText = 'Designation' width='180'></e-column>
      <e-column field='Country' headerText = 'Country' width='148'></e-column>
    </e-columns>
</ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, DetailRow } from "@syncfusion/ej2-vue-treegrid";
import { textdata } from "./datasource.js";
import { Internationalization } from '@syncfusion/ej2-base';

let instance = new Internationalization();

Vue.use(TreeGridPlugin);

export default {
  data: () => {
    return {
      data: textdata,
      detailTemplate: function () {
        return { template : Vue.component('detailTemplate',{
        template: `<div>
     <div style="position: relative; display: inline-block; float: left; font-weight: bold; width: 10%;padding:5px 4px 2px 27px;;">
        <img :src="image" alt="{{data.FullName}}"/>
    </div>
    <div style="padding-left: 10px; display: inline-block; width: 66%; text-wrap: normal;font-size:13px;font-family:'Segoe UI';">
        <div class="e-description" style="word-wrap: break-word;">
            <b>{{data.Name}}</b> was born on {{format(data.DOB)}}. Now lives at {{data.Address}}, {{data.Country}}. {{data.Name}} holds a position of <b>{{data.Designation}}</b> in our WA department, (Seattle USA).
        </div>
        <div class="e-description" style="word-wrap: break-word;margin-top:5px;">
            <b style="margin-right:10px;">Contact:</b>{{data.Contact}}
        </div>
    </div>
</div>`,
    data: function() {
            return {
              data: {}
            }
          },
          methods: {
    format: function(value) {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
  },
    computed: {
    image: function() {
      return '../../../../../treegrid/images/' + this.data.FullName + '.png';
    }
  }
  })}
      }
    };
  },
  provide: {
  treegrid: [DetailRow]
  }
}
</script>



