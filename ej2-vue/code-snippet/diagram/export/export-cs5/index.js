
import Vue from 'vue';
import { DiagramPlugin, Diagram, PrintAndExport, Rect } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(PrintAndExport);
Vue.use(DiagramPlugin);

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <button v-on:click="exportItems">Export</button>

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height'>
    </ejs-diagram>
    
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",

            // Function to handle the export button click
            exportItems: () => {
                const exportOptions = {};
                //Base64 data
                const base64 =
                    'data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAKrB4ADASIAAhEBAxEB/8QAHgABAAMBAQEBAQEBAAAAAAAAAAcICgkGAQUEAwL/xAA9EAEAAAYCAAIFCAsAAgIDAAAAAgMEBQYHAQgJeDc4V7fWFhk5WHeXmLYRExQVFxghlZbT1RIiCjEkQYH/xAAdAQEAAQUBAQEAAAAAAAAAAAAABwMEBQYIAgkB/8QASREBAAICAQEDAg4OCwEBAQAAAAIDAQQFEQYSEwchFBYXMTM0NjdRVXN0lNQiI1NUVmGRk7KztLXS0wgVMkFScZKVsdHwJCVC/9oADAMBAAIRAxEAPwDfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==';
                exportOptions.pageWidth = 1000;
                exportOptions.pageHeight = 800;
                exportOptions.bounds = new Rect(0, 0, 800, 800);
                diagramInstance.exportImage(base64, exportOptions);
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
