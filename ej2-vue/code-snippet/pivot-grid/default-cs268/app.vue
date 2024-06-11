<template>
    <div id="app">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :load="load" :height="height"
            :showFieldList="showFieldList"> </ejs-pivotview>
    </div>
</template >
<script>
import { PivotViewComponent, FieldList } from "@syncfusion/ej2-vue-pivotview";

var parentProp = {};
var dataSource;
function complexToFlatJson(data) {
    var flatArray = [];
    var flatObject = {};
    for (var index = 0; index < data.length; index++) {
        for (var prop in data[index]) {
            var value = data[index][prop];
            if (Array.isArray(value)) {
                for (var i = 0; i < value.length; i++) {
                    var childProp = [];
                    for (var inProp in value[i]) {
                        flatObject[inProp] = value[i][inProp];
                        var object = {
                            name: inProp,
                        };
                        childProp.push(object);
                    }
                    parentProp[prop] = childProp;
                }
            }
            else {
                flatObject[prop] = value;
            }
        }
        flatArray.push(flatObject);
        flatObject = {};
    }
    return flatArray;
}
function pivotData() {
    return [
        {
            CustomerID: 'VINET',
            Freight: 32.38,
            OrderDetails: [
                {
                    OrderID: 10248,
                    OrderDate: '1996-07-04T10:10:00.000Z',
                }
            ],
            ShipDetails: [
                {
                    ShipName: 'Vins et alcools Chevalier',
                    ShipAddress: "59 rue de l'Abbaye",
                    ShipCity: 'Reims',
                    ShipRegion: null,
                    ShipCountry: 'France',
                    ShippedDate: '1996-07-16T12:20:00.000Z',
                }
            ]
        },
        {
            CustomerID: 'GALED',
            Freight: 10.14,
            OrderDetails: [
                {
                    OrderID: 10366,
                    OrderDate: '1996-11-28T00:00:00.000Z',
                }
            ],
            ShipDetails: [
                {
                    ShippedDate: '1996-12-30T00:00:00.000Z',
                    ShipName: 'Galería del gastronómo',
                    ShipAddress: 'Rambla de Cataluña, 23',
                    ShipCity: 'Barcelona',
                    ShipRegion: null,
                    ShipCountry: 'Spain',
                }
            ]
        },
        {
            CustomerID: 'VAFFE',
            Freight: 13.55,
            OrderDetails: [
                {
                    OrderID: 10367,
                    OrderDate: '1996-12-02T00:00:00.000Z',
                }
            ],
            ShipDetails: [
                {
                    ShippedDate: '1996-12-30T00:00:00.000Z',
                    ShipName: 'Vaffeljernet',
                    ShipAddress: 'Smagsloget 45',
                    ShipCity: 'Århus',
                    ShipRegion: null,
                    ShipCountry: 'Denmark',
                }
            ]
        },
        {
            CustomerID: 'ERNSH',
            Freight: 101.95,
            OrderDetails: [
                {
                    OrderID: 10368,
                    OrderDate: '1996-11-29T00:00:00.000Z',
                }
            ],
            ShipDetails: [
                {
                    ShippedDate: '1996-12-30T00:00:00.000Z',
                    ShipName: 'Ernst Handel',
                    ShipAddress: 'Kirchgasse 6',
                    ShipCity: 'Graz',
                    ShipRegion: null,
                    ShipCountry: 'Austria',
                }
            ]
        },
        {
            CustomerID: 'SPLIR',
            Freight: 195.68,
            OrderDetails: [
                {
                    OrderID: 10369,
                    OrderDate: '1996-11-28T00:00:00.000Z',
                }
            ],
            ShipDetails: [
                {
                    ShippedDate: '1996-12-30T00:00:00.000Z',
                    ShipName: 'Split Rail Beer & Ale',
                    ShipAddress: 'P.O. Box 555',
                    ShipCity: 'Lander',
                    ShipRegion: 'WY',
                    ShipCountry: 'USA',
                },
            ]
        }
    ];
}

export default {
    name: "App",
    components: {
        "ejs-pivotview": PivotViewComponent
    },
    data() {
        return {
            dataSourceSettings: {
                expandAll: true,
                enableSorting: true,
                dataSource: pivotData(),
                columns: [{ name: 'OrderDetails' }],
                values: [{ name: 'Freight', caption: 'Units Sold' }],
                rows: [{ name: 'ShipDetails' }],
                valueSortSettings: { headerDelimiter: ' - ' },
                formatSettings: [{ name: 'Amount', format: 'C0' }]
            },
            height: 350,
            showFieldList: true
        }
    },
    methods: {
        load: function (args) {
            dataSource = JSON.parse(JSON.stringify(args.dataSourceSettings.dataSource));
            args.dataSourceSettings.dataSource = complexToFlatJson(dataSource);
            var rows = [];
            for (let i = 0; i < args.dataSourceSettings.rows.length; i++) {
                if (args.dataSourceSettings.rows[i].name in parentProp) {
                    rows = rows.concat(parentProp[args.dataSourceSettings.rows[i].name]);
                }
                else {
                    rows.push(args.dataSourceSettings.rows[i]);
                }
            }
            args.dataSourceSettings.rows = rows;
            var columns = [];
            for (let i = 0; i < args.dataSourceSettings.columns.length; i++) {
                if (args.dataSourceSettings.columns[i].name in parentProp) {
                    columns = columns.concat(parentProp[args.dataSourceSettings.columns[i].name]);
                }
                else {
                    columns.push(args.dataSourceSettings.columns[i]);
                }
            }
            args.dataSourceSettings.columns = columns;
        },
    },
    provide: {
        pivotview: [FieldList]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>