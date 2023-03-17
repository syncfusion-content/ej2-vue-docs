---
layout: post
title: Creating custom shapes using template binding in Vue Diagram component | Syncfusion
description: Learn here all about Creating custom shapes using template binding in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Creating custom shapes using template binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Creating custom shapes using template binding in Vue Diagram component

Manually, you can create the custom shapes in two ways.
* In order to load SVG content, refer to the [`Native`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node#shape-shapemodel).
* In order to load [`HTML`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node#shape-shapemodel) content.

## Step1

To create the custom shapes, define a template with HTML content or SVG content as shown as follows.

```ts

//Svg content binding using template binding which binds the addinfo property defines in the node
let svgContent = '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /><text x="50%" y="50%" text-anchor="middle" stroke="#51c5cf">${addInfo.text}</text></svg>';
   // ...
   // ...
let nodes = [{
       //addInfo property is binded with the defined svg content
        id: 'node1', addInfo:{text:'Native'}, offsetX: 100, offsetY: 200, width: 100, height: 100, shape: {type: 'Native', content: svgContent}
    }
    ]

```

Refer the following sample for creating custom shapes using template binding.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/customshapes-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/customshapes-cs1" %}