---
layout: post
title: Customizing the selector in Vue Diagram component | Syncfusion
description: Learn here all about Customizing the selector in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Customizing the selector 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customizing the selector in Vue Diagram component

You can customize the selection handle of nodes and connectors by defining the appropriate customization for the selectors in cascading style sheet.

## Step1

In the following code snippet, the selectors have been customized for the nodes resize handles and connectors source/target thumbs in a style sheet.

```ts

<style>
    #borderRect, #resizeNorthWest, #resizeNorthEast, #resizeSouthWest, #resizeSouthEast, #resizeNorth, #resizeSouth, #resizeWest, #resizeEast, #connectorSourceThumb, #connectorTargetThumb {
                    stroke= EE1919;
                    stroke-width= 5px;
                    fill= EE1919;
                    opacity= 1;
                    }
</style>

```

Refer to the following sample for customizing the selectors for the nodes and connectors.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/how-to/customselectors-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/how-to/customselectors-cs1" %}