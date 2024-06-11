---
layout: post
title: Image in Vue Rich text editor component | Syncfusion
description: Learn here all about Image in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Image 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Image in Vue Rich text editor component

Rich Text Editor allows to insert images from online sources as well as local computer where you want to insert the image in your content. For inserting the image to the Rich Text Editor, the following list of options have been provided in the [`insertImageSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/imageSettings/#imagesettings)

| Options | Description |
|----------------|---------|
| allowedTypes | Specifies the extensions of the image types allowed to insert on bowering and passing the extensions with comma separators. For example, pass allowedTypes as .jpg and .png.|
| display | Sets the default display for an image when it is inserted in to the Rich Text Editor. Possible options are: 'inline' and 'break'.|
| width | Sets the default width of the image when it is inserted in the Rich Text Editor.|
| height | Sets the default height of the image when it is inserted in the Rich Text Editor.|
| saveUrl | Provides URL to map the action result method to save the image.|
| path | Specifies the location to store the image.|

## Upload options

Through the `browse` option in the Image dialog, select the image from the local machine and insert into the Rich Text Editor content.

If the [path](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/imageSettings/#path) field is not specified in the [`insertImageSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/imageSettings/#imagesettings), the image will be transferred into base 64 and blob url for the image will be created and the generated url will be set to the src property of img tag.

```ts
<img src="blob:http://ej2.syncfusion.com/3ab56a6e-ec0d-490f-85a5-f0aeb0ad8879" >

```

> If you want to insert a lot of tiny images in the editor and don't want a specific physical location for saving images, you can opt to save format as Base64.

In the following sample, the image has been loaded from the local machine and it will be saved in the given location.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs3" %}

## Image delete

To remove an image from the Rich Text Editor content, select the image and click Remove tool from the quick toolbar. It will delete the image from the Rich Text Editor content as well as from the service location if the saveUrl is given.

Once you select the image from the local machine, the URL for the image will be generate. From there,you can remove the image from the service location by clicking the cross icon.

![image-delete](./images/image-del.png)

The following sample explains, how to configure `removeUrl` to remove a saved image from the remote service location, when the following image remove actions are performed:

* `delete` key action.
* `backspace` key action.
* Removing uploaded image file from the insert image dialog.
* Deleting image using the quick toolbar `remove` option.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs18" %}

## Insert from web

To insert an image from the online source like Google, Ping, etc., you should enable the image tool on the editor’s toolbar. By default, the image tool opens a simple dialog which allows you to insert an image from online source.

## Dimension

Sets the default width and height of the image when it is inserted in the Rich Text Editor using [`width`](../api/rich-text-editor/imageSettings/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/imageSettings/#height) of the insertImageSettings.

Through the quickToolbar, also you can change the width and height using `Change Size` option. Once click into the option. The Image Size dialog will open as below. In that specify the width and height of the image in pixel.

![image-size](./images/image-size.png)

## Caption and Alt Text

Image caption and alternative text can be specified for the inserted image in the Rich Text Editor through the quick toolbar options such as, Image Caption and Alternative Text.

Through the Alternative Text option, set the alternative text for the image, when the image is not upload successfully into the Rich Text Editor.

By clicking the Image Caption, the image will get wrapped in an image element with a caption. Then, you can type caption content inside the Rich Text Editor.

## Display position

Sets the default display for an image when it is inserted in the Rich Text Editor using [`display`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/imageSettings/#display) field in [`insertImageSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/imageSettings/#imagesettings). It has two possible options: 'inline' and 'break'.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs4" %}

## Image with link

The hyperlink itself can be an image in Rich Text Editor. If the image given as hyperlink, the remove, edit, and open link will be added to the quick toolbar of image. For further details about link, see the [`link documentation`](./link) documentation.

![image-link](./images/image-link.png)

## Resize

Rich Text Editor has a built-in image inserting support.  The resize points will be appearing on each corner of image when focus. So, users can resize the image using mouse points or thumb through the resize points easily. Also, the resize calculation will be done based on aspect ratio.

![image-resize](./images/image-resize.png)

## Drag and Drop

By default, the Rich Text Editor allows you to insert images by drag-and-drop from the local file system such as Windows Explorer into the content editor area. And, you can upload the images to the server before inserting into the editor by configuring the saveUrl property. The images can be repositioned anywhere within the editor area by dragging and dropping the image.

In the following sample, you can see feature demo.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs19" %}

### Drag and drop with specific extension images

You can allow the specific images alone to be uploaded using the the allowedExtentions property. The extension can be represented as collection by comma separators. By default, the Rich Text Editor allows the JPG, JPEG, and PNG formats. You can configure this formats as follows.

```ts

    insertImageSettings: {
      allowedTypes: ['.jpg']
    }

```

### Prevent drag and drop action

You can prevent drag-and-drop action by setting the actionBegin argument cancel value to true. The following code shows how to prevent the drag-and-drop.

```ts

    actionBegin: function (args: any): void {
        if(args.type === 'drop' || args.tpe === 'dragstart') {
            args.cancel =true;
        }
    }

```

## See Also

* [How to edit the quick toolbar settings](./toolbar#quick-inline-toolbar)
* [How to use link editing option in the toolbar items](./link)