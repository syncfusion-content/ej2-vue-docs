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

The Dialog supports resizing feature. To resize the dialog, we have to select and resize it by using its handle (grip) or hovering on any of the edges or borders of the dialog within the sample container.

The resizable dialog can be created by setting the [enableResize](https://ej2.syncfusion.com/vue/documentation/api/dialog#enableresize) property to true, which is used to change the size of a dialog dynamically and view its content with expanded mode. The [resizeHandles](https://ej2.syncfusion.com/vue/documentation/api/dialog#resizehandles) property can also be configured for all the which directions in which the dialog should be resized. When you configure the target property along with the [enableResize](https://ej2.syncfusion.com/vue/documentation/api/dialog#enableresize) property, the dialog can be resized within its specified target container.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/resize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/resize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/resize-cs1" %}