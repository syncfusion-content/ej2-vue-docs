<template>
    <div id="app">
      <ejs-grid :dataSource="data" height=310 width='auto' :rowTemplate='rowTemplate' >
        <e-columns>
            <e-column field='Employee Image' headerText='Employee Image' width='150' textAlign='Center'></e-column>
            <e-column field='Employee Details' headerText='Employee Details' width='300' textAlign='Left'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script setup>
import { createApp } from 'vue';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { Internationalization } from '@syncfusion/ej2-base';
const app = createApp();

let instance = new Internationalization();
      const data = employeeData;
      const rowTemplate = function () {
        return { template : app.component('rowTemplate',{
        template: `<tr>
        <td class="rowphoto">
            <img :src="image" :alt="altImage" />
        </td>
        <td class="details">
            <table class="CardTable" cellpadding="3" cellspacing="2">
                <colgroup>
                    <col width="50%">
                    <col width="50%">
                </colgroup>
                <tbody>
                    <tr>
                        <td class="CardHeader">First Name </td>
                        <td>{{data.FirstName}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Last Name</td>
                        <td>{{data.LastName}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Title</td>

                        <td>{{data.Title}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Birth Date</td>
                        <td>{{format(data.BirthDate)}} </td>
                    </tr>
                    <tr>
                        <td class="CardHeader">Hire Date</td>
                        <td>{{format(data.HireDate)}} </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>`,
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
              return './images/' + this.data.EmployeeID + '.png';
            },
            altImage: function() {
              return this.data.EmployeeID;
            }
          }
        })}
      }
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";

  .rowphoto img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
    }

    @media screen and (max-width: 600px) and (min-width: 320px) {
        .rowphoto img {
            width: 50px;
            height: 50px;
        }
    }

    @media screen and (max-width: 800px) and (min-width: 600px) {
        .rowphoto img {
            width: 70px;
            height: 70px;
        }
    }

    .rowphoto,
    .details {
        border-color: #e0e0e0;
        border-style: solid;
    }

    .rowphoto {
        border-width: 1px 0px 0px 0px;
        text-align: center;
    }

    .details {
        border-width: 1px 0px 0px 0px;
        padding-left: 18px;
    }

    .e-bigger .details {
        padding-left: 25px;
    }

    .e-device .details {
        padding-left: 8px;
    }

    .details > table {
        width: 100%;
    }

    .CardHeader {
        font-weight: bolder;
    }

    td {
        padding: 2px 2px 3px 4px;
    }
</style>