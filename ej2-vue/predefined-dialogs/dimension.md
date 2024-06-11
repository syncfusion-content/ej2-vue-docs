---
layout: post
title: Dimension in Vue Predefined dialogs component | Syncfusion
description: Learn here all about Dimension in Syncfusion Vue Predefined dialogs component of Syncfusion Essential JS 2 and more.
control: Dimension 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Dimension in Vue Predefined dialogs component

Customize the predefined dialogs dimensions using the [height](https://ej2.syncfusion.com/documentation/api/dialog/#height) and [width](https://ej2.syncfusion.com/documentation/api/dialog/#width) properties.

You can specify the dimension values in both pixels and percentage format to change the default dialog width and height values.

## Alert dimension

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/alert-dimension-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dimension-cs1" %}

## Confirm dimension

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/confirm-dimension-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dimension-cs1" %}

## Prompt dimension

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/prompt-dimension-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dimension-cs1" %}

## Max-width and max-height

To have a restricted max-width and max-height dialog dimension, you need to specify the max-width, max-height CSS properties for the component’s container element by using the [cssClass](https://ej2.syncfusion.com/documentation/api/dialog/#cssclass) property. The max-height value is calculated in source level and set to the dialog. so, need to override the max-height property.

Use the following code to customize the max-width and max-height for alert dialog:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/maxWidth-maxHeight-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/maxWidth-maxHeight-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/maxWidth-maxHeight-cs1" %}

## Min-width and min-height

To have a restricted min-width and min-height dialog dimension, you need to specify the min-width, min-height CSS properties for the component’s container element by using the `cssClass` property.

Use the following code to customize the min-width and min-height for alert dialog:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/minWidth-minHeight-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/minWidth-minHeight-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/minWidth-minHeight-cs1" %}