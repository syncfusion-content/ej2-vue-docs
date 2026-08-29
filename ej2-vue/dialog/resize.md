---
layout: post
title: Resize in Vue Dialog | Syncfusion
description: Enable Vue Dialog resizing with the enableResize property and control resize handles and the target container for dynamic size changes.
control: Resize 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resize in Vue Dialog

The Dialog supports resizing. You can resize the Dialog by selecting its resize handle (grip) or by hovering over any of its edges or borders within the sample container.

The resizable Dialog can be created by setting the [enableResize](https://ej2.syncfusion.com/vue/documentation/api/dialog#enableresize) property to true, which is used to change the size of a Dialog dynamically and view its content in expanded mode. The [resizeHandles](https://ej2.syncfusion.com/vue/documentation/api/dialog#resizehandles) property can also be configured to specify all the directions in which the Dialog can be resized. When you configure the [target](https://ej2.syncfusion.com/vue/documentation/api/dialog#target) property along with the [enableResize](https://ej2.syncfusion.com/vue/documentation/api/dialog#enableresize) property, the Dialog can be resized within its specified target container.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/resize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/resize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/resize-cs1" %}