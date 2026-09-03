---
layout: post
title: How to convert image into binary format in Vue Uploader | Syncfusion
description: Save Syncfusion Vue Uploader images as binary on the server by reading the posted file stream with a binary reader and ReadBytes method.
control: Convert image into binary format after uploading 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to convert image into binary format in Vue Uploader

By default, the file upload component saves the uploaded image files in physical directories. You can also convert the images into binary format on the server side before saving them. To retrieve the binary format of image files, convert the posted file's input stream into a binary reader and read it as bytes using the `ReadBytes` method.

Refer to the following server-side code snippet.

```c#

[AcceptVerbs("Post")]
public void Save()
{
    try
    {
        if (System.Web.HttpContext.Current.Request.Files.AllKeys.Length > 0)
        {
            var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];

            if (httpPostedFile != null)
            {
                byte[] fileBytes;
                using (BinaryReader br = new BinaryReader(httpPostedFile.InputStream))
                {
                    fileBytes = br.ReadBytes((int)httpPostedFile.InputStream.Length);
                    // bytes will be stored in variable fileBytes
                }
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusCode = 200;
                Response.Status = "200 Success";
                Response.End();
            }
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = 204;
        Response.Status = "204 No Content";
        Response.StatusDescription = e.Message;
        Response.End();
    }
}

```

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.