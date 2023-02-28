---
layout: post
title: Avoid empty diagram in Vue Diagram component | Syncfusion
description: Learn here all about Avoid empty diagram in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Avoid empty diagram 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Avoid empty diagram in Vue Diagram component

In the Diagram, if you assign static width for the diagram and parent element `<body> </body>`, the diagram will render based on the dimension provided. When the diagram is enclosed into the `<body> </body>` tag and the diagrams width is assigned to 100%, it will render an empty diagram since by default, `<body>` does not have any dimension that is the cause for an empty diagram.

To avoid empty diagram, set the diagram's parent element's (i.e., `<body>`) width and height to 100% so that the `<body>` element can also occupy 100% dimension and the child element `diagram` also occupies full dimension to avoid empty diagram.