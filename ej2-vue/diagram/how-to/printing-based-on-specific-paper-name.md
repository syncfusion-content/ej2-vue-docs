---
layout: post
title: Printing based on specific paper name in Vue Diagram component | Syncfusion
description: Learn here all about Printing based on specific paper name in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Printing based on specific paper name 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Printing based on specific paper name in Vue Diagram component

In the diagram, you can print the content in a specific paper name.

## Step1

To print the diagram based on the specific paper name, configure the page settings and print settings according to the requirement.

Using the following code snippet, print the diagram based on the specific paper name.

```ts

//Based on the specific paper name the size of the paper is getting assigned.
public getPaperSize(paperName: string): PaperSize {
        let paperSize = new PaperSize();
        switch (paperName) {
            case 'Letter':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1056;
                break;
            case 'Legal':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1344;
                break;
            case 'Tabloid':
                paperSize.pageWidth = 1056;
                paperSize.pageHeight = 1632;
                break;
            case 'A3':
                paperSize.pageWidth = 1122;
                paperSize.pageHeight = 1587;
                break;
            case 'A4':
                paperSize.pageWidth = 793;
                paperSize.pageHeight = 1122;
                break;
            case 'A5':
                paperSize.pageWidth = 559;
                paperSize.pageHeight = 793;
                break;
            case 'A6':
                paperSize.pageWidth = 396;
                paperSize.pageHeight = 559;
                break;
        }
        return paperSize;
    }
            //Determining the print settings for portrait or landscape
            // Getting the size of the paer based on the specific paper name
            let papersize = getPaperSize('A4');
            // For portrait
            if ( papersize.pageWidth > papersize.pageHeight ) {
                let temp = paperSize.pageWidth;
                papersize.pageWidth = papersize.pageHeight;
                papersize.pageHeight = temp;
            }

            // For Landscape
            if (  papersize.pageHeight > papersize.pageWidth  ) {
                let temp = paperSize.pageWidth;
                papersize.pageWidth = tempWidth;
                papersize.pageHeight = paperSize.pageWidth
            }
```