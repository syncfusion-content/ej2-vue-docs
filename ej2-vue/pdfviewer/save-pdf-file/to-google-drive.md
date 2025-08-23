---
layout: post
title: Save PDF files to  Google Drive in Vue Pdfviewer component | Syncfusion
description: Learn here how to Save PDF files to Google Drive in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Save PDF files to  Google Drive
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF file to Google Drive

To save a PDF file to Google Drive, you can follow the steps below

**Step 1** Set up Google Drive API

You must set up a project in the Google Developers Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For more information, view the official [link](https://developers.google.com/drive/api/guides/enable-sdk).

**Step 2:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in Vue. This will set up the basic structure of your PDF Viewer application.

**Step 3:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Util.Store;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string folderId;
public readonly string applicationName;
public readonly string credentialPath;
private static readonly string[] Scopes = { DriveService.Scope.DriveFile, DriveService.Scope.DriveReadonly};

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  folderId = _configuration.GetValue<string>("FolderId");
  credentialPath = _configuration.GetValue<string>("CredentialPath");
  applicationName = _configuration.GetValue<string>("ApplicationName");
}
```

5. Modify the `Download` method to save the downloaded PDF files to Google Drive bucket

```csharp
[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public async Task<IActionResult> Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);

  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  byte[] documentBytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  string documentId = jsonObject["documentId"];
  string result = Path.GetFileNameWithoutExtension(documentId);
  string fileName = result + "_downloaded.pdf";
          
  UserCredential credential;

  using (var memStream = new FileStream(credentialPath, FileMode.Open, FileAccess.Read))
  {
    string credPath = "token.json";
    credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
    GoogleClientSecrets.Load(memStream).Secrets,
    Scopes,
    "user",
     CancellationToken.None,
    new FileDataStore(credPath, true));
  }
          
  // Create the Drive API service.
  var service = new DriveService(new BaseClientService.Initializer()
  {
    HttpClientInitializer = credential,
    ApplicationName = applicationName,
  });

  var fileMetadata = new Google.Apis.Drive.v3.Data.File()
  {
    Name = fileName,
    Parents = new List<string> { folderId }
  };

  FilesResource.CreateMediaUpload request;

  using (var stream = new MemoryStream(documentBytes))
  {
    request = service.Files.Create(fileMetadata, stream, "application/pdf");
    request.Fields = "id";
    object value = await request.UploadAsync();
  }
  return Content(documentBase);
} 
```

6. Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "FolderId": "Your Google Drive Folder ID",
  "CredentialPath": "Your Path to the OAuth 2.0 Client IDs json file",
  "ApplicationName": "Your Application name"
}
```

N> Replace **Your Google Drive Folder ID**, **Your Application name**, and **Your Path to the OAuth 2.0 Client IDs json file** with your actual Google drive folder ID , Your name for your application and the path for the JSON file.

N> The **FolderId** part is the unique identifier for the folder. For example, if your folder URL is: `https://drive.google.com/drive/folders/abc123xyz456`, then the folder ID is `abc123xyz456`.

N> You must use a unique `Client_ID` from json file to interface your application with the Google Drive API in order to save PDFs directly to Google Drive. This Client_ID will serve as the authentication key, allowing you to save files securely.

**Step 4:**  Set the PDF Viewer Properties in Vue PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from Google Drive. Ensure that you correctly pass the document name from the files available in your drive folder to the documentPath property.

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

N> The **Google.Apis.Drive.v3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-drive).