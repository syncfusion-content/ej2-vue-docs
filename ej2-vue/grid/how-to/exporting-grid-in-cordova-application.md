---
layout: post
title: Exporting grid in cordova application in Vue Grid component | Syncfusion
description: Learn here all about Exporting grid in cordova application in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Exporting grid in cordova application 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid in cordova application in Vue Grid component

Cordova application does not support direct file download. So we have to use the Blob stream to export the Grid.You can use corresponding exporting methods and exportComplete events to get the Blob stream.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/foreignKey-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/how-to/foreignKey-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/foreignKey-cs8" %}