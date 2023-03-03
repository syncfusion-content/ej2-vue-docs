
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
         ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath"
            :enableToolbar="false">
        </ejs-pdfviewer>
    </div>
`,

  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
      documentPath:"PDF_Succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]}


});