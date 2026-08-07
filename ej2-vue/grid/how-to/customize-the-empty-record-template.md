---
layout: post
title: Vue Grid Empty Record Template | Syncfusion
description: Learn how to customize the empty record template in Vue Data Grid to display custom messages, images, or actions when no data is available.
control: Customize the Empty Record Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Empty Record Template in Vue Data Grid

The empty record template feature in the [Vue Data Grid](https://www.syncfusion.com/vue-components/vue-grid) allows you to use custom content such as images, text, or other components, when the grid doesn't contain any records to display. This feature replaces the default message of 'No records to display' typically shown in the grid.

To activate this feature, set the `emptyRecordTemplate` property of the Grid. The `emptyRecordTemplate` property expects the HTML element or a function that returns the HTML element.

In the following example, an image and text have been rendered as a template to indicate that the grid has no data to display.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/empty-record-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/empty-record-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/empty-record-template-cs1" %}