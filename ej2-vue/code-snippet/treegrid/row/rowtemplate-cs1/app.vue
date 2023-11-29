

<template>
<div id="app">
<ejs-treegrid :dataSource="data" childMapping='Children' height=275 :rowHeight = '83' width='auto' :treeColumnIndex='0' :rowTemplate='rowTemplate'>
            <e-columns>
                <e-column field='EmpID' headerText='Employee ID' width='180'></e-column>
                <e-column field='Name' headerText='Employee Name' width = '150'></e-column>
                <e-column field='Address' headerText = 'Employee Details' width='350'></e-column>
            </e-columns>
        </ejs-treegrid>
        </div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { textdata } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data: () => {
    return {
      data: textdata,
      rowTemplate: function () {
        return { template : Vue.component('rowTemplate',{
        template: `<tr>
    <td class="border" style='padding-left:18px;'>
        <div>{{data.EmpID}}</div>
                        </td>
                        <td class="border" style='padding: 10px 0px 0px 20px;'>
                            <div style="font-size:14px;">
                              {{data.Name}}
                                <p style="font-size:9px;">{{data.Designation}}</p>
                            </div>
                        </td>
                        <td class="border">
                            <div>
                                <div style="position:relative;display:inline-block;">
                                    <img :src="image" :alt="data.FullName" />
                                </div>
                                <div style="display:inline-block;">
                                    <div style="padding:5px;">{{data.Address}}</div>
                                    <div style="padding:5px;">{{data.Country}}</div>
                                    <div style="padding:5px;font-size:12px;">{{data.Contact}}</div>
                                </div>
                            </div>
                        </td>
                </tr>`,
                data: function() {
            return {
              data: {}
            }
          },
          computed: {
    image: function() {
      return '../../../../treegrid/images/' + this.data.FullName + '.png';
    }
  }
  })}
      }
    };
  }
}
</script>
<style>
 @import "../../node_modules/@syncfusion/ej2-vue-treegrid/styles/material.css";

  .border {
        border-color: #e0e0e0;
        border: 1px solid #e0e0e0;
        border-width: 1px 0px 0px 0px;
    }

    img {
        width: 60px;
        height: 60px;
        vertical-align: baseline;
        border-radius: 50px;
        margin-left: 20px;
        background-repeat: no-repeat;
    }
</style>



