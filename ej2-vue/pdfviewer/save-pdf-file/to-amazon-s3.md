---
layout: post
title: Save PDF files to  AWS S3 in Vue Pdfviewer component | Syncfusion
description: Learn here how to Save PDF files to  AWS S3 in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Save PDF files to  AWS S3
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF file to AWS S3

PDF Viewer allows to save PDF file to AWS S3 using either the Standalone or Server-backed PDF Viewer. Below are the steps and a sample to demonstrate how to save PDF to AWS S3.

## Using Standalone PDF Viewer

To load a PDF file from AWS S3 in a PDF Viewer, you can follow the steps below.

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in Vue. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `src/App.vue` File in the Vue Project

1. Import the required namespaces at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import AWS from 'aws-sdk';
</script>

{% endhighlight %}
{% endtabs %}

2. Configures AWS SDK with the region, access key, and secret access key. This configuration allows the application to interact with AWS services like S3.

N> Replace **Your Region** with the actual Region of your AWS S3 account and **Your Access Key** with the actual Access Key of your AWS S3 account and **Your Security Access Key** with the actual Security Access Key of your AWS S3 account.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  AWS.config.update({
    region: '**Your Region**', // Update this your region
    accessKeyId: '*Your Access Key*', // Update this with your access key id
    secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
  }); 
</script>

{% endhighlight %}
{% endtabs %}

3. Configure a custom toolbar item for the download function to save a PDF file in Azure Blob Storage.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-pdfviewer 
    id="pdfViewer" 
    :resourceUrl="resourceUrl" 
    :toolbarClick="toolbarClick" 
    :created="loadPdfDocument" 
    :toolbarSettings="toolbarSettings">
  </ejs-pdfviewer>
</template>

<script>
  export default {
    data() {
      let toolItem1 = {
        prefixIcon: 'e-icons e-pv-download-document-icon',
        id: 'download_pdf',
        tooltipText: 'Download file',
        align: 'right'
      };

      return {
        resourceUrl: 'https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib',
        toolbarSettings: {
          toolbarItems: [ 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
        },
      };
    },

    methods: {
      toolbarClick: function (args) {
          if (args.item && args.item.id === 'download_pdf') {
            this.savePdfDocument();
          }
      },
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

4. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then, read the Blob using a FileReader to convert it into an ArrayBuffer, and upload the ArrayBuffer to AWS S3 using the putObject method of the S3 instance.

N> Replace **Your Bucket Name** with the actual Bucket name of your AWS S3 account and **Your Key** with the actual File Key of your AWS S3 account.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  methods: {
    savePdfDocument: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.saveAsBlob().then(function (value) {
        var reader = new FileReader();
        reader.onload = () => {
          const uint8Array = new Uint8Array(reader.result);
          const putObjectParams = {
            Bucket: '**Your Bucket Name**', 
            Key: '**Your Key**',
            Body: uint8Array,
            ContentType: 'application/pdf',
          };
          var s3= new AWS.S3();
          s3.putObject(putObjectParams, (err, data) => {
            if (err) {
              console.error('Error uploading document:', err);
            } else {
              console.log('Document uploaded successfully:', data);
            }
          });
        };
        reader.readAsArrayBuffer(value);
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> The **npm install aws-sdk** package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).

## Using Server-Backed PDF Viewer

To save a PDF file to AWS S3, you can follow the steps below

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in Vue. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessKey;
public readonly string _secretKey;
public readonly string _bucketName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  _accessKey = _configuration.GetValue<string>("AccessKey");
  _secretKey = _configuration.GetValue<string>("SecretKey");
  _bucketName = _configuration.GetValue<string>("BucketName");
}
```

5. Modify the `Download` method to save the downloaded PDF files to AWS S3 bucket

```csharp

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

  // Configure the AWS SDK with your access credentials and other settings
  var s3Client = new AmazonS3Client(_accessKey, _secretKey, bucketRegion);
  string bucketName = _bucketName;
  string documentName = jsonObject["documentId"];
  string result = Path.GetFileNameWithoutExtension(documentName);
  byte[] bytes = Convert.FromBase64String(documentBase.Split(",")[1]);
  using (MemoryStream stream = new MemoryStream(bytes))
  {
    var request = new PutObjectRequest
    {
      BucketName = bucketName,
      Key = result + "_downloaded.pdf",
      InputStream = stream,
    };
    // Upload the PDF document to AWS S3
    var response = s3Client.PutObjectAsync(request).Result;
  }
  return Content(documentBase);
}
```

6. Open the `app settings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}
```

N> Replace **Your Access Key from AWS S3**, **Your Secret Key from AWS S3**, and **Your Bucket name from AWS S3** with your actual AWS access key, secret key and bucket name

**Step 3:**  Set the PDF Viewer Properties in Vue PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from AWS S3. Ensure that you correctly pass the document name from the files available in your AWS S3 bucket to the documentPath property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { provide } from "vue";
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

// Replace the "localhost:44396" with the actual URL of your server
const serviceUrl = "https://localhost:44396/pdfviewer";
const documentPath = "PDF_Succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]);

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      // Replace the "localhost:44396" with the actual URL of your server
      serviceUrl: "https://localhost:44396/pdfviewer",
      documentPath: "PDF_Succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Server-Backend)