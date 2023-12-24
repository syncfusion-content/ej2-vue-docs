---
layout: post
title: Customize the Empty Record Template in Vue Grid component | Syncfusion
description: Learn here all about Customize the Empty Record Template in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Customize the Empty Record Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Empty Record Template in Vue Grid component

The empty record template feature in the Grid allows you to use custom content such as images, text, or other components, when the grid doesn't contain any records to display. This feature replaces the default message of 'No records to display' typically shown in the grid.

To activate this feature, set the `emptyRecordTemplate` property of the Grid. The `emptyRecordTemplate` property expects the HTML element or a function that returns the HTML element.

In the following example, an image and text have been rendered as a template to indicate that the grid has no data to display.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/empty-record-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/empty-record-template-cs1" %}