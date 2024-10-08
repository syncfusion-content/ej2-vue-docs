
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons"
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
var message;
var persistedGridSettings;
new Vue({
    el: '#app',
    template: `
    <div id="app">
    <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
    <ejs-button id="add" style='margin:3px' cssClass="e-success" @click.native="save">Save</ejs-button>
    <ejs-button id="add" style='margin:3px' cssClass="e-danger" @click.native="restore">Restore</ejs-button>
    <ejs-grid ref="grid" id="Orders" :dataSource="data" :enablePersistence="true">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='125' textAlign='Right'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='170' :headerTemplate="'hTemplate'"></e-column>
        <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='170' :template="'columnTemplate'"></e-column>
      </e-columns>
      <template v-slot:hTemplate="{}">
        <ejs-button>HeaderTemplate</ejs-button>
      </template>
      <template v-slot:columnTemplate="{}">
        #template
      </template>
    </ejs-grid>
    </div>
`,
    data() {
        return {
            data: data,
            message: message
        };
    },
    methods: {
        save: function () {
            persistedGridSettings = JSON.parse(this.$refs.grid.ej2Instances.getPersistData());
            var gridColumns = Object.assign([], (this.$refs.grid.ej2Instances.getColumns()));
            persistedGridSettings.columns.forEach((persistedColumn) => {
                const column = gridColumns.find((col) => col.field === persistedColumn.field);
                if (column) {
                    persistedColumn.headerText = 'Text Changed';
                    persistedColumn.template = column.template;
                    persistedColumn.headerTemplate = column.headerTemplate;
                }
            });
            window.localStorage.setItem('gridOrders1', JSON.stringify(persistedGridSettings));
            this.$refs.grid.ej2Instances.setProperties(persistedGridSettings);
            this.message = 'Saved the headerText, template column, and headerTemplate properties in the persisted settings';
        },
        restore: function () {
            const savedSettings = window.localStorage.getItem("gridOrders1");
            if (savedSettings) {
                this.$refs.grid.ej2Instances.setProperties(JSON.parse(savedSettings));
                this.message = 'Restored the headerText, template column, and headerTemplate';
            } else {
                this.message = 'No saved settings found.';
            }
        }
    },
    provide: {
        grid: [Page]
    }

});