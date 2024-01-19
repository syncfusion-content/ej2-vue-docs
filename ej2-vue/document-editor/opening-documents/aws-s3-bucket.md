---
layout: post
title: Open document from AWS S3 in ##Platform_Name## Document editor control | Syncfusion
description:  Learn about how to Open document from AWS S3 in ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Open document from AWS S3
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open document from AWS S3

To load a document from AWS S3 in a Document Editor, you can follow the steps below

**Step 1:** Create a Simple Document Editor Sample in Vue

Start by following the steps provided in this [link](../../document-editor/getting-started) to create a simple Document Editor sample in Vue. This will give you a basic setup of the Document Editor component. 

**Step 2:** Modify the `DocumentEditorController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

2. Open the `DocumentEditorController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
```

4. Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessKey;
public readonly string _secretKey;
public readonly string _bucketName;

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  _accessKey = _configuration.GetValue<string>("AccessKey");
  _secretKey = _configuration.GetValue<string>("SecretKey");
  _bucketName = _configuration.GetValue<string>("BucketName");
}
```

5. Create the `LoadFromS3()` method to load the document from AWS S3.

```csharp

[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("LoadFromS3")]
//Post action for Loading the documents

public async Task<string> LoadFromS3([FromBody] Dictionary<string, string> jsonObject)
{
  MemoryStream stream = new MemoryStream();

  if (jsonObject == null && !jsonObject.ContainsKey("documentName"))
  {
     return null;
  }
  RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

  // Configure the AWS SDK with your access credentials and other settings
  var s3Client = new AmazonS3Client(_accessKey, _secretKey, bucketRegion);
      
  string documentName = jsonObject["documentName"];
      
  // Specify the document name or retrieve it from a different source
  var response = await s3Client.GetObjectAsync(_bucketName, documentName);
      
  Stream responseStream = response.ResponseStream;
  responseStream.CopyTo(stream);
  stream.Seek(0, SeekOrigin.Begin);
  WordDocument document = WordDocument.Load(stream, FormatType.Docx);
  string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
  document.Dispose();
  stream.Close();
  return json;
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
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}
```

N> Replace **Your Access Key from AWS S3**, **Your Secret Key from AWS S3**, and **Your Bucket name from AWS S3** with your actual AWS access key, secret key and bucket name

**Step 3:**  Modify the index File in the Document Editor sample

In the client-side, the document is returned from the web service is opening using [`open`](../api/document-editor/#open) method.

```typescript
<template>
    <button v-on:click='load' >Open Document From AWS S3 Bucket</button>
    <ejs-documenteditorcontainer ref="container" :serviceUrl='serviceUrl' :height='height' :enableToolbar='true'> </ejs-documenteditorcontainer>
</template>

<script>
    import Vue from 'vue';
    import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar } from '@syncfusion/ej2-vue-documenteditor';

    Vue.use(DocumentEditorContainerPlugin);
    export default {
      data(){
        return {
            serviceUrl:'http://localhost:62870/api/documenteditor/',
            height: '590px'
        }
      },
      provide: {
        DocumentEditorContainer: [Toolbar]
      },
      methods: {
            load: function() {
                  fetch(
  'http://localhost:62870/api/documenteditor/LoadFromS3',
  {
      method: 'Post',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({ documentName: 'Getting Started.docx' })
  }
)
  .then(response => {
      if (response.status === 200 || response.status === 304) {
          return response.json(); // Return the Promise
      } else {
          throw new Error('Error loading data');
      }
  })
  .then(json => {
    this.$refs.container.ej2Instances.documentEditor.open(JSON.stringify(json));
  })
  .catch(error => {
      console.error(error);
  });
            }
      }
    }
</script>

```

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.