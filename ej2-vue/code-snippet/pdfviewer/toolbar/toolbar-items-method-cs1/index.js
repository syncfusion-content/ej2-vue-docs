
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <button v-on:click="showToolbarClicked">ShowToolbar</button>
        <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :documentPath="documentPath"
          :documentLoad="documentLoad"
          :resourceUrl="resourceUrl"
          :serviceUrl="serviceUrl">
        </ejs-pdfviewer>
    </div>
`,

  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib",
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    showToolbarClicked: function (args) {
      viewer.toolbar.showToolbarItem(["OpenOption"],false);
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
    },
  }

});