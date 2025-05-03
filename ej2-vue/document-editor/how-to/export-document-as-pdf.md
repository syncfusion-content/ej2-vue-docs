---
layout: post
title: Export document as pdf in Vue Document editor component | Syncfusion
description: Learn here all about Export document as pdf in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Export document as pdf 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Export document as pdf in Vue Document editor component

In this article, we are going to see how to export the document as Pdf format. You can export the document as Pdf in following ways:

## Export the document as pdf in client-side

Use [`pdf export component`](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export) in application level to export the document as pdf using [`exportasimage`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#exportasimage) API. Here, all pages will be converted to image and inserted as pdf pages(works like print as PDF). There is one limitation we can’t search the text because we are exporting the pdf as image.

>Note: You can install the pdf export packages from this [`link`](https://www.npmjs.com/package/@syncfusion/ej2-pdf-export).

The following example code illustrates how to export the document as pdf in client-side.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button id='export' v-on:click="onClick">Export</button>
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import {
  PdfBitmap,
  PdfDocument,
  PdfPageOrientation,
  PdfPageSettings,
  PdfSection,
  SizeF
} from '@syncfusion/ej2-pdf-export';
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://services.syncfusion.com/vue/production/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

const onClick = function () {
  let pdfdocument = new PdfDocument();
  let count = container.value.ej2Instances.documentEditor.pageCount;
  container.value.ej2Instances.documentEditor.documentEditorSettings.printDevicePixelRatio = 2;
  let loadedPage = 0;
  for (let i = 1; i <= count; i++) {
    setTimeout(() => {
      let format = 'image/jpeg';
      // Getting pages as image
      let image = container.value.ej2Instances.documentEditor.exportAsImage(i, format);
      image.onload = function () {
        let imageHeight = parseInt(
          image.style.height.toString().replace('px', '')
        );
        let imageWidth = parseInt(
          image.style.width.toString().replace('px', '')
        );
        let section = pdfdocument.sections.add();
        let settings = new PdfPageSettings(0);
        if (imageWidth > imageHeight) {
          settings.orientation = PdfPageOrientation.Landscape;
        }
        settings.size = new SizeF(imageWidth, imageHeight);
        (section).setPageSettings(settings);
        let page = section.pages.add();
        let graphics = page.graphics;
        let imageStr = image.src.replace('data:image/jpeg;base64,', '');
        let pdfImage = new PdfBitmap(imageStr);
        graphics.drawImage(pdfImage, 0, 0, imageWidth, imageHeight);
        loadedPage++;
        if (loadedPage == count) {
          // Exporting the document as pdf
          pdfdocument.save(
            (container.value.ej2Instances.documentEditor.documentName === ''
              ? 'sample'
              : container.value.ej2Instances.documentEditor.documentName) + '.pdf'
          );
        }
      };
    }, 500);
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button id='export' v-on:click="onClick">Export</button>
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import {
  PdfBitmap,
  PdfDocument,
  PdfPageOrientation,
  PdfPageSettings,
  PdfSection,
  SizeF
} from '@syncfusion/ej2-pdf-export';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl: 'https://services.syncfusion.com/vue/production/api/documenteditor/',
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onClick: function () {
      let pdfdocument = new PdfDocument();
      let count = this.$refs.container.ej2Instances.documentEditor.pageCount;
      this.$refs.container.ej2Instances.documentEditor.documentEditorSettings.printDevicePixelRatio = 2;
      let loadedPage = 0;
      for (let i = 1; i <= count; i++) {
        setTimeout(() => {
          let format = 'image/jpeg';
          // Getting pages as image
          let image = this.$refs.container.ej2Instances.documentEditor.exportAsImage(i, format);
          image.onload = function () {
            let imageHeight = parseInt(
              image.style.height.toString().replace('px', '')
            );
            let imageWidth = parseInt(
              image.style.width.toString().replace('px', '')
            );
            let section = pdfdocument.sections.add();
            let settings = new PdfPageSettings(0);
            if (imageWidth > imageHeight) {
              settings.orientation = PdfPageOrientation.Landscape;
            }
            settings.size = new SizeF(imageWidth, imageHeight);
            (section).setPageSettings(settings);
            let page = section.pages.add();
            let graphics = page.graphics;
            let imageStr = image.src.replace('data:image/jpeg;base64,', '');
            let pdfImage = new PdfBitmap(imageStr);
            graphics.drawImage(pdfImage, 0, 0, imageWidth, imageHeight);
            loadedPage++;
            if (loadedPage == count) {
              // Exporting the document as pdf
              pdfdocument.save(
                (this.$refs.container.ej2Instances.documentEditor.documentName === ''
                  ? 'sample'
                  : this.$refs.container.ej2Instances.documentEditor.documentName) + '.pdf'
              );
            }
          };
        }, 500);
      }
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://services.syncfusion.com/vue/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Export document as pdf in server-side using Syncfusion<sup style="font-size:70%">&reg;</sup> DocIO

With the help of [`Synfusion DocIO`](https://help.syncfusion.com/file-formats/docio/word-to-pdf), you can export the document as Pdf in server-side. Here, you can search the text.

The following way illustrates how to convert the document as Pdf:

* Using [`serialize`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#serialize) API, convert the document as Sfdt and send it to server-side.

  The following example code illustrates how to convert the document to sfdt and pass it to server-side.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button id='export' v-on:click="onClick">Export</button>
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://services.syncfusion.com/vue/production/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

const onClick = function () {
  let http = new XMLHttpRequest();
  // Replace your running web service Url here
  http.open('POST', 'http://localhost:62869/api/documenteditor/ExportPdf');
  http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  http.responseType = 'json';
  //Serialize document content as SFDT.
  let sfdt = { content: container.value.ej2Instances.documentEditor.serialize() };
  //Send the sfdt content to server side.
  http.send(JSON.stringify(sfdt));
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button id='export' v-on:click="onClick">Export</button>
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl: 'https://services.syncfusion.com/vue/production/api/documenteditor/'
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onClick: function () {
      let http = new XMLHttpRequest();
      // Replace your running web service Url here
      http.open('POST', 'http://localhost:62869/api/documenteditor/ExportPdf');
      http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      http.responseType = 'json';
      //Serialize document content as SFDT.
      let sfdt = { content: this.$refs.container.ej2Instances.documentEditor.serialize() };
      //Send the sfdt content to server side.
      http.send(JSON.stringify(sfdt));
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://services.syncfusion.com/vue/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

* Using Save API in server-side, you can convert the sfdt to stream.
* Finally, convert the stream to Pdf using [`Syncfusion.DocIORenderer.Net.Core`](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) library.

  The following example code illustrates how to process the sfdt in server-side.

  ```c#
  [AcceptVerbs("Post")]
  [HttpPost]
  [EnableCors("AllowAllOrigins")]
  [Route("ExportPdf")]
  public void ExportPdf([FromBody]SaveParameter data)
  {
      // Converts the sfdt to stream
      Stream document = WordDocument.Save(data.content, FormatType.Docx);
      Syncfusion.DocIO.DLS.WordDocument doc = new Syncfusion.DocIO.DLS.WordDocument(document, Syncfusion.DocIO.FormatType.Docx);
      //Instantiation of DocIORenderer for Word to PDF conversion
      DocIORenderer render = new DocIORenderer();
      //Converts Word document into PDF document
      PdfDocument pdfDocument = render.ConvertToPDF(doc);
      // Saves the document to server machine file system, you can customize here to save into databases or file servers based on requirement.
      FileStream fileStream = new FileStream("sample.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite);
      //Saves the PDF file
      pdfDocument.Save(fileStream);
      pdfDocument.Close();
      fileStream.Close();
      document.Close();
  }
  ```

Get the complete working sample in this [`link`](https://github.com/SyncfusionExamples/Export-document-as-PDF-in-Document-Editor/).