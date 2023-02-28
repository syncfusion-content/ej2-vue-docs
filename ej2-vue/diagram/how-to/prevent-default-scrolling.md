---
layout: post
title: Prevent default scrolling in Vue Diagram component | Syncfusion
description: Learn here all about Prevent default scrolling in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Prevent default scrolling 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent default scrolling in Vue Diagram component

If the Diagram's size is greater than the screen size, the diagram scrolling will be enabled automatically instead of browser scrolling (diagram will not be focussed).

It can be prevented by defining the following code snippet in the diagram's parent element. So that, you can prevent the browser scrolling when the diagram gets focused.

## Step1

```ts

       let x, y;
       //Getting windows scrollX and Y
        function mouseDown() {
            x = window.scrollX;
            y = window.scrollY;
        }
        //Assigning the x and y points in window.scroll to method in mouseUp function
        function mouseUp() {
            window.scrollTo(x, y);
        }

```
