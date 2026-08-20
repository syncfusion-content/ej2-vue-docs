---
layout: post
title: Position in Vue Predefined Dialogs | Syncfusion
description: Position Vue Predefined Dialogs at custom X and Y coordinates using the position property, with left, center, right, top, bottom, or offset values for placement.
control: Position 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Position in Vue Predefined Dialogs

Customize the dialog position by using the [position](https://ej2.syncfusion.com/documentation/api/dialog/#position) property. The position can be represented with specific `X` and `Y` values.

* The `PositionDataModel.X` can be configured with a left, center, right or offset value. By default, the value is set as `center`.
* The `PositionDataModel.Y` can be configured with a top, center, bottom or offset value. By default, the value is set as `center`.

## Alert position

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/alert-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/alert-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-position-cs1" %}

## Confirm position

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/confirm-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/confirm-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-position-cs1" %}

## Prompt position

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/prompt-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/predefined-dialogs/prompt-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-position-cs1" %}