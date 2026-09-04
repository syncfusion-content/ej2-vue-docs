---
layout: post
title: Chunk Upload in Vue Uploader | Syncfusion
description: Split large files into small chunks in the Syncfusion Vue Uploader and pause, resume, or retry failed chunks with the chunkSize option.
control: Chunk upload 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chunk Upload in Vue Uploader

The Uploader splits the large file into small chunks and transmits them to the server using AJAX. You can also pause, resume, and retry the failed chunk file.

> * The chunk upload works in asynchronous upload only.
* This feature is available from the Essential Studio<sup style="font-size:70%">&reg;</sup> Vol 2, 2018 release.

To enable the chunk upload, set the size in the [chunkSize](https://ej2.syncfusion.com/vue/documentation/api/uploader/asyncSettingsModel#chunksize) option of the upload and it receives the value in `bytes`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/chunk-upload-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/chunk-upload-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/chunk-upload-cs1" %}

The chunk upload functionality separates the selected files into blobs of data or chunks. These chunks are transmitted to the server using an AJAX request.

The chunks are sent in **sequential** order, and the next chunk can be sent to the server according to the [success](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#chunksuccess) of the previous chunk. If any one of the chunks fails, the remaining chunks cannot be sent to the server. The [chunkSuccess](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#chunksuccess) or [chunkFailure](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#chunkfailure) event will be triggered when the chunk is sent to the server successfully or fails. If all the chunks are sent to the server successfully, the Uploader's success event is triggered.

> Chunk upload will work when the selected file size is greater than the specified chunk size. Otherwise, it uploads the files normally.

## Additional configurations

To modify the chunk upload, the following options can be used.

* **RetryAfterDelay** - If an error occurs while sending any chunk request from JavaScript, hold the operation for 500 milliseconds (by default), and retry the operation using the chunk. This can be achieved by using the [asyncSettings.retryAfterDelay](https://ej2.syncfusion.com/vue/documentation/api/uploader/asyncSettingsModel#retryafterdelay) property. You can modify the holding time interval in milliseconds.

* **RetryCount** - Specifies the number of retry actions performed when the file fails to upload. By default, the [retry](https://ej2.syncfusion.com/vue/documentation/api/uploader/asyncSettingsModel#retrycount) action is performed 3 times. If the file fails to upload continuously, the request is aborted and the Uploader's [failure](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#failure) event will trigger.

The following sample specifies the chunk upload delay as 3000 milliseconds and the retry count as 5. The failure event is triggered because a wrong saveUrl is used.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/chunk-upload-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/chunk-upload-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/chunk-upload-cs2" %}

## Resumable upload

Allows you to resume an upload operation after a network failure or a manual interruption (pause) of the upload. You can perform pause and resume upload actions using the public methods ([pause](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#pause) and [resume](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#resume)) and UI interaction. The pause icon is enabled after the upload begins.

> These pause and resume features are available only when the chunk upload is enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/chunk-upload-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/chunk-upload-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/chunk-upload-cs3" %}

## Cancel upload

The Uploader component allows you to cancel the uploading file. This can be achieved by clicking the cancel icon or using the [cancel](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#cancel) method. The [canceling](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#canceling) event will be fired whenever the file upload request is canceled. While canceling the upload request, the partially uploaded file is removed from the server.

When the request fails, the pause icon changes to a retry icon. By clicking the retry icon, the failed chunk request is sent again to the server and the upload starts from where it failed. You can retry the canceled upload request again using the retry UI or [retry](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#retry) methods. However, if you retry this, the file upload action starts from the initial again.

The following example explains chunk upload with cancel support.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/chunk-upload-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/chunk-upload-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/chunk-upload-cs4" %}

> The retry action has different working behavior for chunk upload and default upload.
* Chunk upload - Retries to upload the failed request where it is failed previously.
* Default upload - Retries to upload the failed file again from initial.

## Server-Side configurations

The server-side implementation entirely depends on the application requirements and logic. The following code snippet provides the server-side logic to handle the chunk upload using the Uploader component.

>The `chunk-index` and `total-chunk` values are accessible through the form data using `Request.Form`, which retrieves these details from the incoming request.
* `chunk-index` - Indicates the index of the current chunk being received.
* `total-chunk` - Represents the total number of chunks for the file being uploaded.

```c#
public string uploads = Path.Combine(Directory.GetCurrentDirectory(), "Uploaded Files"); // Set your desired upload directory path

public async Task<IActionResult> Save(IFormFile UploadFiles)
{
    try
    {
        if (UploadFiles.Length > 0)
        {
            var fileName = UploadFiles.FileName;

            // Create upload directory if it doesn't exist
            if (!Directory.Exists(uploads))
            {
                Directory.CreateDirectory(uploads);
            }

            if (UploadFiles.ContentType == "application/octet-stream") //Handle chunk upload
            {
                // Fetch chunk-index and total-chunk from form data
                var chunkIndex = Request.Form["chunk-index"];
                var totalChunk = Request.Form["total-chunk"];

                // Path to save the chunk files with .part extension
                var tempFilePath = Path.Combine(uploads, fileName + ".part");

                using (var fileStream = new FileStream(tempFilePath, chunkIndex == "0" ? FileMode.Create : FileMode.Append))
                {
                    await UploadFiles.CopyToAsync(fileStream);
                }

                // If all chunks are uploaded, move the file to the final destination
                if (Convert.ToInt32(chunkIndex) == Convert.ToInt32(totalChunk) - 1)
                {
                    var finalFilePath = Path.Combine(uploads, fileName);

                    // Move the .part file to the final destination without the .part extension
                    System.IO.File.Move(tempFilePath, finalFilePath);

                    return Ok(new { status = "File uploaded successfully" });
                }

                return Ok(new { status = "Chunk uploaded successfully" });
            }
            else //Handle normal upload
            {
                var filePath = Path.Combine(uploads, fileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await UploadFiles.CopyToAsync(fileStream);
                }

                return Ok(new { status = "File uploaded successfully" });
            }
        }

        return BadRequest(new { status = "No file to upload" });
    }
    catch (Exception ex)
    {
        return StatusCode(500, new { status = "Error", message = ex.Message });
    }
}

// Method to handle file removal (optional if needed)
public async Task<IActionResult> Remove(string UploadFiles)
{
    try
    {
        var filePath = Path.Combine(uploads, UploadFiles);

        if (System.IO.File.Exists(filePath))
        {
            System.IO.File.Delete(filePath);
            return Ok(new { status = "File deleted successfully" });
        }
        else
        {
            return NotFound(new { status = "File not found" });
        }
    }
    catch (Exception ex)
    {
        return StatusCode(500, new { status = "Error", message = ex.Message });
    }
}
```

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.