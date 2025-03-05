---
layout: post
title: Export in Vue Barcode component | Syncfusion®
description: Learn here all about Export in Syncfusion® Vue Barcode component of Syncfusion Essential® JS 2 and more.
control: Export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Export in Vue Barcode component

Export barcode as an image and base64 string is common for barcode,QRcode and datamatrix. The following code samples explain how to export the barcode as an image
and base64 string.

## Export

Barcode provides the support to export its content as an image in the specified image type and downloads it in the browser.
The following code example shows how to export the barcode as an image

```javascript

export default {
    name: 'app',
    data () {
        return {
              width: "200px",
              height: "150px",
              mode: "SVG",
              type: "Code39",
              value: "SYNCFUSION",
        }
    }
    mounted: function() {
        let barcodeInstance;
        let barcodeObj = document.getElementById("barcode");
        barcodeInstance = barcodeObj.ej2_instances[0];
         let filename = 'Export';
        barcodeInstance.exportImage(filename,'JPG');
    }
}

```

The filename specifies the name of the file to be downloaded.

### Export As Base64String

Barcode provides the support to export its content as an image in the specified image type and returns it as base64 string.
The following code example shows how to export the barcode as a base64 string

```javascript

export default {
    name: 'app',
    data () {
        return {
              width: "200px",
              height: "150px",
              mode: "SVG",
              type: "Code39",
              value: "SYNCFUSION",
              image: function(event) {
              let barcodeInstance;
              let barcodeObj = document.getElementById("barcode");
              barcodeInstance = barcodeObj.ej2_instances[0];
              setTimeout(() => {
                   base64string();
              }, 100);
              console.log(barcodeInstance.exportAsBase64Image('JPG'))
            }
        }
    }
}
    async function base64string(){
        let barcodeInstance;
        let barcodeObj = document.getElementById("barcode");
        barcodeInstance = barcodeObj.ej2_instances[0];
        let base64 = await barcodeInstance.exportAsBase64Image('JPG');
        console.log(base64);

}

```

>**Note:**
>Format is to specify the type or format of the exported file. You can export the barcode to the following formats:
>* JPG.
>* PNG.