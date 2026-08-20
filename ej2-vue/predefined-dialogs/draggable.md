---
layout: post
title: Draggable in Vue Predefined Dialogs | Syncfusion
description: Enable dragging for Vue Predefined Dialogs with the isDraggable property so users can grab the dialog header and reposition it within the target container.
control: Draggable 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Draggable in Vue Predefined Dialogs

The predefined dialogs supports dragging within its target container by grabbing the dialog header, which allows the user to reposition the dialog dynamically by using `isDraggable` property.

## Alert drag

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/alert-drag-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/alert-drag-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-drag-cs1" %}

## Confirm drag

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/confirm-drag-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/confirm-drag-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-drag-cs1" %}

## Prompt drag

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/prompt-drag-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/prompt-drag-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-drag-cs1" %}