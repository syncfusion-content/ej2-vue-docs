---
layout: post
title: Mode dialog with rte in Vue Dialog component | Syncfusion
description: Learn here all about Mode dialog with rte in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Mode dialog with rte 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Mode dialog with rte in Vue Dialog component

This section explains how to render model dialog with the Rich Text Editor component. when you render model dialog with the Rich Text Editor component, the first row of the content will be hidden because the dialog container and its wrapper elements are styled with display as none. so, the editor’s toolbar does not get proper offset width and rendered above the edit area container. In this scenario, we could use the `refreshUI` method on the Dialog `open` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/model-dialog-with-rte-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/model-dialog-with-rte-cs1" %}