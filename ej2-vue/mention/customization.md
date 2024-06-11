---
layout: post
title: Customization in Vue Mention component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Mention component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Mention component

## Show or hide mention character

You can show mention character as prefix of selected item in mention component using [showMentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#showmentionchar) property. The default value of `showMentionChar` is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/customization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/customization-cs1" %}

## Adding the suffix character after selection

The Mention has provided support to specify the custom suffix to append alongside the mentioned selected item while inserting. You can append space or new line character as [suffixText](https://ej2.syncfusion.com/vue/documentation/api/mention/#suffixtext).

The following example displays the white space next to the text selected since the suffixText is configured as `&nbsp;`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/customization-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/customization-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/customization-cs2" %}

## Configure the popup list

You can customize the suggestion list width and height using the [popupHeight](https://ej2.syncfusion.com/vue/documentation/api/mention/#popupheight) and [popupWidth](https://ej2.syncfusion.com/vue/documentation/api/mention/#popupwidth) properties.

By default, the popup list width value is set as `auto`. Depending on the mentioned suggestion data list, the width value is automatically adjusted. The popup list height value is set as `300px`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/customization-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/customization-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/customization-cs3" %}

## Trigger character

You can customize the trigger character by using the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#mentionchar) property in the Mention component. The trigger character triggers the suggestion list to display in the target area.

> By default, the [mentionChar](https://ej2.syncfusion.com/vue/documentation/api/mention/#mentionchar) is `@`.
