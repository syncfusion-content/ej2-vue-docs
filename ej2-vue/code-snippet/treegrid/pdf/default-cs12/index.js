import Vue from "vue";
import {
    TreeGridPlugin,
    Aggregate,
    Page,
    Toolbar,
    PdfExport
} from "@syncfusion/ej2-vue-treegrid";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { getObject } from "@syncfusion/ej2-grids";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { summaryData } from "./datasource.js";

Vue.use(TreeGridPlugin);

let listObj = null;
let selectedCategory = "Seafood";

const foods = [
    { food: "Seafood" },
    { food: "Dairy" },
    { food: "Edible" },
    { food: "Crystal" }
];


const footerTemplate = Vue.component("footerTemplate", {
    template: `
        <span>
            Count of
            <input type="text" id="customers" />
            : {{ data.Custom }}
        </span>
    `,
    data: function () {
        return {
            data: {}
        };
    }
});

new Vue({
    el: "#app",

    template: `
        <div class="col-lg-12 control-section">
            <div>
                <ejs-treegrid
                    ref="treegrid"
                    :dataSource="data"
                    childMapping="subtasks"
                    gridLines="Both"
                    :treeColumnIndex="1"
                    :allowPdfExport="true"
                    :dataBound="dataBound"
                    :toolbar="toolbarOptions"
                    :toolbarClick="toolbarClick"
                    :pdfAggregateQueryCellInfo="
                        pdfAggregateQueryCellInfo
                    "
                    :height="380"
                >
                    <e-columns>
                        <e-column
                            field="ID"
                            headerText="Order ID"
                            width="120"
                            textAlign="Left"
                        ></e-column>

                        <e-column
                            field="Name"
                            headerText="Shipment Name"
                            width="230"
                            clipMode="EllipsisWithTooltip"
                        ></e-column>

                        <e-column
                            field="shipmentDate"
                            headerText="Shipment Date"
                            width="150"
                            type="date"
                            format="yMd"
                            textAlign="Right"
                        ></e-column>

                        <e-column
                            field="category"
                            headerText="Category"
                            width="220"
                            minWidth="220"
                        ></e-column>

                        <e-column
                            field="units"
                            headerText="Units"
                            width="100"
                            textAlign="Right"
                            type="number"
                        ></e-column>

                        <e-column
                            field="unitPrice"
                            headerText="Unit Price($)"
                            format="C2"
                            width="100"
                            textAlign="Right"
                            type="number"
                        ></e-column>

                        <e-column
                            field="price"
                            headerText="Price($)"
                            width="140"
                            format="C2"
                            textAlign="Right"
                            type="number"
                        ></e-column>
                    </e-columns>

                    <e-aggregates>
                        <e-aggregate :showChildSummary="false">
                            <e-columns>
                                <e-column
                                    columnName="category"
                                    type="Custom"
                                    :customAggregate="customAggregateFn"
                                    :footerTemplate="footerTemp"
                                ></e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-treegrid>
            </div>
        </div>
    `,

    data: function () {
        return {
            data: summaryData,

            toolbarOptions: [
                "PdfExport"
            ],

            footerTemp: function () {
                return {
                    template: footerTemplate
                };
            }
        };
    },

    methods: {
        customAggregateFn: function (data) {
            const treeGrid = this.$refs.treegrid;

            if (
                treeGrid &&
                treeGrid.ej2Instances &&
                treeGrid.ej2Instances.grid
            ) {
                treeGrid.ej2Instances.grid.vueInstance = null;
            }

            const sampleData = data && data.result
                ? getObject("result", data)
                : data;

            let countLength = 0;

            if (Array.isArray(sampleData)) {
                sampleData.forEach(function (item) {
                    const category = getObject("category", item);

                    if (category === selectedCategory) {
                        countLength++;
                    }
                });
            }

            return countLength;
        },
        dataBound: function () {
            const treeGrid = this.$refs.treegrid;

            if (!isNullOrUndefined(listObj)) {
                listObj.destroy();
                listObj = null;
            }

            const inputElement = document.querySelector("#customers");

            if (!inputElement) {
                return;
            }

            listObj = new DropDownList({
                dataSource: foods,
                fields: {
                    value: "food"
                },
                placeholder: "Select a Category",
                width: "110px",
                value: selectedCategory,

                change: function (args) {
                    if (!isNullOrUndefined(args.value)) {
                        selectedCategory = args.value.toString();
                        treeGrid.refresh();
                    }
                }
            });

            listObj.appendTo(inputElement);
        },

        toolbarClick: function (args) {
            const treeGrid = this.$refs.treegrid;

            if (args.item.text === "PDF Export") {
                const exportProperties = {
                    pageOrientation: "Landscape"
                };

                treeGrid.pdfExport(exportProperties);
            }
        },

        pdfAggregateQueryCellInfo: function (args) {
            if (
                args.cell &&
                args.cell.column &&
                args.cell.column.headerText === "Category"
            ) {
                args.value =
                    "Count of " +
                    selectedCategory +
                    ": " +
                    args.row.data.category.Custom;
            }
        }
    },

    provide: {
        treegrid: [
            Aggregate,
            Page,
            Toolbar,
            PdfExport
        ]
    }
});