---
layout: post
title: Integrate toolbar in Vue Signature component | Syncfusion
description: Learn here all about Integrate toolbar in Syncfusion Vue Signature component of Syncfusion Essential JS 2 and more.
control: Integrate toolbar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Integrate toolbar in Vue Signature component

The Signature component integrates with the toolbar and the interaction performed using the `change` event of the toolbar. In that, [`canUndo`](https://ej2.syncfusion.com/vue/documentation/api/signature/#canundo), [`canRedo`](https://ej2.syncfusion.com/vue/documentation/api/signature/#canredo) and [`isEmpty`](https://ej2.syncfusion.com/vue/documentation/api/signature/#isempty) methods were used to enable/disable undo, redo, and clear buttons.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/signature/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs8" %}