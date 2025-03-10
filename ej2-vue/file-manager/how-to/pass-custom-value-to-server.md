---
layout: post
title: Custom value to server in Vue File Manager component | Syncfusion
description: Learn here all about How to pass custom value to server in Syncfusion Vue File Manager component of Syncfusion Essential JS 2 and more.
control: File Manager 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pass custom value to server in Vue File Manager component

The Syncfusion Vue File Manager component allows you to pass custom values from the client to the server for various operations. This guide demonstrates how to implement this functionality for **Upload**, **Download**, and **GetImage** operations using the [`beforeSend`](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforesend), [`beforeDownload`](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforedownload), and [`beforeImageLoad`](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforeimageload) events respectively.

## Upload Operation

To pass custom values during the upload operation, utilize the [`beforeSend`](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforesend) event of the File Manager component.

### Client-side Implementation

```ts

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings" :beforeSend='onBeforeSend'>
        </ejs-filemanager>
    </div>
</template>
<script>

import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

export default {
    ....
    data () {
        return {
             ajaxSettings:
            {
                url: "http://localhost:{port}/api/FileManager/FileOperations",
                getImageUrl: "http://localhost:{port}/api/FileManager/GetImage",
                uploadUrl: "http://localhost:{port}/api/FileManager/Upload",
                downloadUrl: "http://localhost:{port}/api/FileManager/Download"
            },
        };
    },
    methods: {
        onBeforeSend: function (args) {
            if( args.ajaxSettings){
                args.ajaxSettings .beforeSend = function (args) {
                    args.httpRequest.setRequestHeader('Authorization', 'User1');
                };
            }
        },
    }
     provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }
}

```

### Server-side Implementation (C#)

```typescript

public class FileManagerController : Controller
{
    ...
    [Route("FileOperations")]
    public object FileOperations([FromBody] FileManagerDirectoryContent args)
    {
        var header = HttpContext.Request.Headers["Authorization"];
        this.root = (header == "User1") ? "wwwroot\\FileBrowser" : "wwwroot\\Files";
        this.operation.RootFolder(this.basePath + "\\" + this.root);
        ...
    }

    // uploads the file(s) into a specified path
    [Route("Upload")]
    public IActionResult Upload(string path, long size, IList<IFormFile> uploadFiles, string action)
    {
        var header = HttpContext.Request.Headers["Authorization"];
        ...
    }
    ...
}


```
## Download Operation
For the download operation, use the [`beforeDownload`](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforedownload) event to send custom values to the server.

### Client-side Implementation


```ts

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings" :beforeDownload='onBeforeDownload'>
        </ejs-filemanager>
    </div>
</template>
<script>

import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

export default {
    ....
    data () {
        return {
             ajaxSettings:
            {
                url: "http://localhost:{port}/api/FileManager/FileOperations",
                getImageUrl: "http://localhost:{port}/api/FileManager/GetImage",
                uploadUrl: "http://localhost:{port}/api/FileManager/Upload",
                downloadUrl: "http://localhost:{port}/api/FileManager/Download"
            },
        };
    },
    methods: {
        onBeforeDownload: function (args) {
            args.cancel = true;
            if(args.data){
                var obj= {
                action: 'download',
                path: args.data.path,
                names:args.data.names,
                data: args.data.data,
                };
            }
            var xhr = new XMLHttpRequest();
            xhr.open(
                'POST',
                'http://localhost:{port}/api/FileManager/Download',
                true);
            xhr.responseType = 'blob';
            xhr.onload = function () {
                if (this.status === 200) {
                    var name = '';
                    // Getting file name from content-disposition header
                    let header = xhr.getResponseHeader('Content-Disposition');
                    if (header && header.indexOf('attachment') !== -1) {
                        var regex = /name[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        var matches = regex.exec(header);
                        if (matches != null && matches[1])
                            name = matches[1].replace(/['"]/g, '');
                    }
                    //saving the file locally using anchor tag
                    var blob = new Blob([this.response], {
                        type: xhr.getResponseHeader('Content-Type'),
                    });
                    var anchorUrl = window.URL.createObjectURL(blob);
                    if (name) {
                        var anchor = document.createElement('a');
                        anchor.href = anchorUrl;
                        anchor.download = name;
                        anchor.click();
                    } else {
                        window.location = anchorUrl;
                    }
                    setTimeout(function () {
                        URL.revokeObjectURL(anchorUrl);
                    }, 100);
                }
            };
            var fdata = new FormData();
            fdata.append('downloadInput', JSON.stringify(obj));
            //Custom Header Added to XHR
            xhr.setRequestHeader('Authorization', 'User1');
            xhr.send(fdata);
        },
    }
     provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }
}

```

### Server-side Implementation (C#)

```typescript
[Route("Download")]
public IActionResult Download(string downloadInput)
{
    var header = Request.Headers["Authorization"].ToString();
    Response.Headers.Add("Access-Control-Expose-Headers", "Content-Disposition");
    ...
}

```

## GetImage Operation

For the GetImage operation, use the [`beforeImageLoad`](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#beforeimageload) event to pass custom values as query parameters.

### Client-side Implementation

```ts

<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings" :beforeImageLoad='onBeforeImageLoad'>
        </ejs-filemanager>
    </div>
</template>
<script>

import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

export default {
    ....
    data () {
        return {
             ajaxSettings:
            {
                url: "http://localhost:{port}/api/FileManager/FileOperations",
                getImageUrl: "http://localhost:{port}/api/FileManager/GetImage",
                uploadUrl: "http://localhost:{port}/api/FileManager/Upload",
                downloadUrl: "http://localhost:{port}/api/FileManager/Download"
            },
        };
    },
    methods: {
        onBeforeImageLoad: function (args) {
            args.imageUrl = args.imageUrl + "&Authorization=" + "User1";
        },
    }
     provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }
}

```

### Server-side Implementation (C#)

```typescript

public class FileManagerAccessController : Controller
{
    ...
    public class FileManagerDirectoryContent1 : FileManagerDirectoryContent
    {
        public string Authorization { get; set; }
    }
    ...

    // gets the image(s) from the given path
    [Route("GetImage")]
    public IActionResult GetImage(FileManagerDirectoryContent1 args)
    {
        var header = args.Authorization;
        return this.operation.GetImage(args.Path, args.Id, false, null, null);
    }

    ...
}


```

## Implementing custom value transfer in Syncfusion File Manager with server-side integration.

The below file system provider allows the users to access and manage the file system which includes the server side code for custom values passing from client. To get started, clone the [provider](https://github.com/SyncfusionExamples/How-to-pass-custom-values-from-client-to-server-in-filemanager) using the following command.

```typescript

git clone https://github.com/SyncfusionExamples/How-to-pass-custom-values-from-client-to-server-in-filemanager  How-to-pass-custom-values-from-client-to-server-in-filemanager

```

After cloning, just open the project in Visual Studio and restore the NuGet packages. The root directory of the provided file system in the File Manager controller is **Files** for **User1**. Now, just build and run the project.

Run the sample which includes all the above event for passing custom values to server: [How-to-pass-custom-values-from-client-to-server-in-File-Manager](https://stackblitz.com/edit/custom-values-from-client-to-server-in-vue-filemanager?file=src%2FApp.vue)

```ts
url: "http://localhost:{port}/api/FileManager/FileOperations", // Replace {port} with host wherever used.
```

The project will be hosted and map the local host in the **ajaxSettings** property of the File Manager component.
