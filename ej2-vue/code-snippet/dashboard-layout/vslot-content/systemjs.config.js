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
        "syncfusion:": "https://cdn.syncfusion.com/ej2/28.2.3/"
    },
    map: {
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        vue: "https://unpkg.com/vue@2.6.14/dist/vue.min.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-layouts/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-vue-base": "syncfusion:ej2-vue-base/dist/ej2-vue-base.umd.min.js",
        "@syncfusion/ej2-vue-layouts": "syncfusion:ej2-vue-layouts/dist/ej2-vue-layouts.umd.min.js"
    }
});

System.import('index.js');