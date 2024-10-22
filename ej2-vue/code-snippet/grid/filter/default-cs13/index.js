
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);
Vue.prototype.$eventHub = new Vue();

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div id="message"></div>
        <ejs-grid ref="grid" :dataSource="data" height="272px" :created="created">
           <e-columns>
                <e-column
                field="OrderID" headerText="Order ID" textAlign="Right" width="100" isPrimaryKey="true"
                ></e-column>
                <e-column
                field="CustomerID" headerText="Customer ID" width="120"
                ></e-column>
                <e-column
                field="ShipCity" headerText="Ship City" width="100"
                ></e-column>
                <e-column
                field="ShipName" headerText="Ship Name" width="100" :template="columnTemplate"
                ></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

data() {
    return {
        data: data,
        columnTemplate: function(){
            return {
                template: Vue.component("columnTemplate", {
                    template: `<button v-on:click="click()">button</button >`,
                    data: function () {
                        return {
                            data: {},
                    };
                    },
                    methods: {
                        click: function () {
                            this.$eventHub.$emit("detail", this.data.index);
                        },
                    },
                }),
            };
        },
    };
},
methods:{
    created() {
        this.$eventHub.$on("detail", (event) => {
        document.getElementById("message").innerText="passed value:" + event;
        });
    },
}

});