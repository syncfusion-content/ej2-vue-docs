---
layout: post
title: Empty Record Template in Vue TreeGrid component | Syncfusion
description: Learn here all about Customize the Empty Record Template in Syncfusion Vue TreeGrid of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Customize the Empty Record Template 
documentation: ug
domainurl: ##DomainURL##
---
# Customize the empty record template in Vue TreeGrid
The empty record template feature in the TreeGrid allows you to use custom content such as images, text, or other components, when the TreeGrid doesn't contain any records to display. This feature replaces the default message of **No records to display** typically shown in the TreeGrid.
To activate this feature, set the `emptyRecordTemplate` property of the TreeGrid. The `emptyRecordTemplate` property expects the HTML element or a function that returns the HTML element.
In the following example, an image and text have been rendered as a template to indicate that the TreeGrid has no data to display.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/empty-record-template/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/empty-record-template/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/empty-record-template/default-cs1" %}