---
layout: post
title: Export in Vue Document editor component | Syncfusion
description: Learn here all about Export in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Export in Vue Document editor component

Document Editor exports the document into various known file formats in client-side such as Microsoft Word document (.docx), text document (.txt), and its own format called **Syncfusion Document Text (.sfdt)**.

We are providing two types of save APIs  as mentioned below.

|API name|Purpose|Code Snippet for Document Editor|Code Snippet for Document Editor Container|
|--------|---------|--------|---------|
|save(filename,FormatType):void<br>FormatType: Sfdt or Docx or Txt|Creates the document with specified file name and format type. Then, the created file is downloaded in the client browser by default.|this.$refs.documenteditor.save('sample', 'Sfdt')|this.$refs.documentEditorContainer.ej2Instances.documentEditor.save('sample', 'Sfdt')|
|saveAsBlob(FormatType):Blob|Creates the document in specified format type and returns the created document as Blob.<br>This blob can be uploaded to your required server, database, or file path.|this.$refs.documenteditor.saveAsBlob('Docx')|this.$refs.documentEditorContainer.ej2Instances.documentEditor.saveAsBlob('Docx')|

## SFDT export

The following example shows how to export documents in Document Editor as Syncfusion<sup style="font-size:70%">&reg;</sup> document text (.sfdt).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/export-cs1" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/export-container-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/export-container-cs1" %}

## Word export

The following example shows how to export the document as Word document (.docx).

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word](../document-editor/import/#why-the-document-pagination-differs-from-microsoft-word)

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/export-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/export-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/export-cs2" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/export-container-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/export-container-cs2" %}

## Template export

The following example shows how to export the document as Word Template (.dotx).

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word] (../document-editor/import/#why-the-document-pagination-differs-from-microsoft-word)

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/export-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/export-cs9" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/export-container-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/export-container-cs4" %}

## Text export

The following example shows how to export document as text document (.txt).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/export-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/export-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/export-cs3" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/export-container-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/export-container-cs3" %}

## Export as blob

Document Editor also supports API to store the document into a blob. Refer to the following sample to export document into blob in client-side.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <button v-on:click='exportBlob'>Save</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableWordExport='true' :enableSelection='true'
      :enableEditor='true' :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documenteditor = ref(null);
//Inject require modules.
provide('DocumentEditor', [SfdtExport, WordExport, Selection, Editor])

const exportBlob = function () {
  //Export the document as Blob object.
  documenteditor.value.saveAsBlob('Docx').then((exportedDocument: Blob) => {
    // The blob can be processed further
  });
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <button v-on:click='exportBlob'>Save</button>
    </div>
    <ejs-documenteditor ref="documenteditor" :enableSfdtExport='true' :enableWordExport='true' :enableSelection='true'
      :enableEditor='true' :isReadOnly='false' height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Selection, Editor, SfdtExport, WordExport } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditor: [SfdtExport, WordExport, Selection, Editor]
  },
  methods: {
    exportBlob: function () {
      //Export the document as Blob object.
      this.$refs.documenteditor.saveAsBlob('Docx').then((exportedDocument: Blob) => {
        // The blob can be processed further
      });
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

For instance, to export the document as Rich Text Format file, implement an ASP.NET MVC web API controller using DocIO library by passing the DOCX blob. Refer to the following code example.

```c#
    //API controller for the conversion.
    [HttpPost]
    public HttpResponseMessage ExportAsRtf()
    {
        System.Web.HttpPostedFile data = HttpContext.Current.Request.Files[0];
        //Opens document stream
        WordDocument wordDocument = new WordDocument(data.InputStream);
        MemoryStream stream = new MemoryStream();
        //Converts document stream as RTF
        wordDocument.Save(stream, FormatType.Rtf);
        wordDocument.Close();
        stream.Position = 0;
        return new HttpResponseMessage() { Content = new StreamContent(stream) };
    }
```

In client-side, you can consume this web service and save the document as Rich Text Format (.rtf) file. Refer to the following example.

```ts
function exportBlob() {
        documenteditor.saveAsBlob('Docx').then((exportedDocument: Blob) => {
            // The blob can be processed further
            let formData: FormData = new FormData();
            formData.append('fileName', 'sample.docx');
            formData.append('data', exportedDocument);
            //Send blob object to server.
            saveAsRtf(formData);
        });
});

function saveAsRtf(formData: FormData): void {
        let httpRequest: XMLHttpRequest = new XMLHttpRequest();
        httpRequest.open('POST', '/api/DocumentEditor/ExportAsRtf', true);
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200 || httpRequest.status === 304) {
                    if (!(!navigator.msSaveBlob)) {
                        navigator.msSaveBlob(httpRequest.response, 'sample.rtf');
                    } else {
                        let downloadLink: HTMLAnchorElement = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement;
                        download('sample.rtf', 'rtf', httpRequest.response, downloadLink, 'download' in downloadLink);
                    }
                } else {
                    console.error(httpRequest.response);
                }
            }
        }
        httpRequest.responseType = 'blob';
        httpRequest.send(formData);
}
//Download the rtf document.
function download(fileName: string, extension: string, buffer: Blob, downloadLink: HTMLAnchorElement, hasDownloadAttribute: Boolean): void {
        if (hasDownloadAttribute) {
            downloadLink.download = fileName;
            let dataUrl: string = window.URL.createObjectURL(buffer);
            downloadLink.href = dataUrl;
            let event: MouseEvent = document.createEvent('MouseEvent');
            event.initEvent('click', true, true);
            downloadLink.dispatchEvent(event);
            setTimeout((): void => {
                window.URL.revokeObjectURL(dataUrl);
                dataUrl = undefined;
            });
        } else {
            if (extension !== 'docx' && extension !== 'xlsx') {
                let url: string = window.URL.createObjectURL(buffer);
                let isPopupBlocked: Window = window.open(url, '_blank');
                if (!isPopupBlocked) {
                    window.location.href = url;
                }
            }
        }
}
```

## See Also

* [Feature modules](../document-editor/feature-module)
* [How to export the document as pdf](../document-editor/how-to/export-document-as-pdf).