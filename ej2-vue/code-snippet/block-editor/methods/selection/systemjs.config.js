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
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-interactive-chat": "syncfusion:ej2-interactive-chat/dist/ej2-interactive-chat.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js", 
        "@syncfusion/ej2-blockeditor": "syncfusion:ej2-blockeditor/dist/ej2-blockeditor.umd.min.js", 
        "@syncfusion/ej2-vue-base": "syncfusion:ej2-vue-base/dist/ej2-vue-base.umd.min.js",
        "@syncfusion/ej2-vue-interactive-chat": "syncfusion:ej2-vue-interactive-chat/dist/ej2-vue-interactive-chat.umd.min.js",
        "@syncfusion/ej2-vue-inputs": "syncfusion:ej2-vue-inputs/dist/ej2-vue-inputs.umd.min.js",
        "@syncfusion/ej2-vue-navigations": "syncfusion:ej2-vue-navigations/dist/ej2-vue-navigations.umd.min.js",
        "@syncfusion/ej2-vue-blockeditor": "syncfusion:ej2-vue-blockeditor/dist/ej2-vue-blockeditor.umd.min.js"
    }
});

System.import('index.js');
