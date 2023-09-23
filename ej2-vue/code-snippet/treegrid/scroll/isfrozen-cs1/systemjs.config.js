System.config({
    transpiler: "typescript",
    typescriptOptions: {
        compilerOptions: {
            target: "umd",
            module: "commonjs",
            moduleResolution: "node",
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }
    },
    paths: {
        "syncfusion:": "https://cdn.syncfusion.com/ej2/20.3.56/"
    },
    map: {
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
vue: "https://unpkg.com/vue@2.6.14/dist/vue.min.js",
        "@syncfusion/ej2-base": "ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-data": "ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-popups": "ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "ej2-navigations/dist/ej2-navigations.umd.min.js",        
        "@syncfusion/ej2-dropdowns":"ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-notifications":"syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",
        "@syncfusion/ej2-lists": "ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-inputs": "ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-grids": "ej2-grids/dist/ej2-grids.umd.min.js",
        "@syncfusion/ej2-excel-export": "ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-pdf-export": "ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-file-utils": "ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-compression": "ej2-compression/dist/ej2-compression.umd.min.js",  
        "@syncfusion/ej2-calendars": "ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-vue-base": "ej2-vue-base/dist/ej2-vue-base.umd.min.js",
        "@syncfusion/ej2-vue-grids": "ej2-vue-grids/dist/ej2-vue-grids.umd.min.js",
        "@syncfusion/ej2-treegrid": "ej2-treegrid/dist/ej2-treegrid.umd.min.js",
        "@syncfusion/ej2-vue-treegrid": "ej2-vue-treegrid/dist/ej2-vue-treegrid.umd.min.js"
    }
});

System.import('index.js');