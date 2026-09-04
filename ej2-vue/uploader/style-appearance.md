---
layout: post
title: Style and Appearance in Vue Uploader | Syncfusion
description: Customize the Syncfusion Vue Uploader wrapper, drop area, and buttons with custom CSS for height, width, color, and bigger sizes.
control: Style appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Vue Uploader

The following content provides the exact CSS structure that can be used to modify the control’s appearance based on the user preference.

## Customizing the appearance of File Upload wrapper element

Use the following CSS to customize the appearance of the wrapper element:

```
/* To specify height */
.e-upload.e-control-wrapper, .e-bigger.e-small .e-upload.e-control-wrapper {
        height: 300px;
        width: 300px;
}
```

## Customizing the File Upload browse button

Use the following CSS to customize the File Upload browse button:

```
/* To specify font size and color */
.e-upload .e-file-select-wrap .e-btn, .e-upload .e-upload-actions .e-btn, .e-bigger.e-small .e-upload .e-file-select-wrap .e-btn, .e-bigger.e-small .e-upload .e-upload-actions .e-btn {
        font-family: cursive;
        height: 40px;
        background-color: aquamarine;
        color: coral;
}
```

## Customizing the File Upload content

Use the following CSS to customize the File Upload content:

```
/* To specify font size and color */
.e-upload .e-file-select-wrap .e-file-drop, .e-bigger.e-small .e-upload .e-file-select-wrap .e-file-drop {
        font-size: 20px;
        color: aqua;
}
```

## Customizing the uploaded file container in File Upload

Use the following CSS to customize the uploaded file container in File Upload:

```
/* To specify background color */
.e-upload .e-upload-files .e-upload-file-list {
        background-color: beige;
}
```

## See Also

* [Customize the appearance of uploader using a template](https://ej2.syncfusion.com/vue/documentation/uploader/template)