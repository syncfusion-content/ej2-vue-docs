---
layout: post
title: Multiline in Vue Textbox component | Syncfusion
description: Learn here all about Multiline in Syncfusion Vue Textbox component of Syncfusion Essential JS 2 and more.
control: Multiline 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multiline in Vue Textbox component

This feature allows the textbox to accept one or more lines of text like address, description, comments, and more.

## Create multiline textbox

You can convert the default textbox into the multiline textbox by setting the [multiline](https://ej2.syncfusion.com/vue/documentation/api/textbox/#multiline) API value as true or pass HTML5 textarea as element to the textbox.

> The multiline textbox allows you to resize it in vertical direction alone.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/textbox/textarea-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/textarea-cs1" %}

## Implementing floating label

You can achieve the floating label behavior in the multiline textbox by setting [floatLabelType](https://ej2.syncfusion.com/vue/documentation/api/textbox/#floatlabeltype) as 'Auto'. The placeholder text act as floating label to the multiline textbox. You can provide the placeholder text to the multiline textbox either by using the [placeholder](https://ej2.syncfusion.com/vue/documentation/api/textbox/#placeholder) property or placeholder attribute.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/textbox/float-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/float-cs1" %}

## Auto resizing

By default, you can manually resize the multiline textbox. But you can also create an `auto resizing` multiline textbox with both the initial and dynamic value change. It can be done by calculating the height of the textarea in the created event for initial value update and in the input event for dynamic value update of the auto resize multiline textbox, as explained in the following code sample.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/textbox/auto-resize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/auto-resize-cs1" %}

## Disable resizing

By default, the multiline textbox is rendered with resizable. You can disable the resize of the multiline textbox by applying the following CSS styles.

```css
    textarea.e-input,
    .e-float-input textarea,
    .e-float-input.e-control-wrapper textarea,
    .e-input-group textarea,
    .e-input-group.e-control-wrapper textarea {
        resize: none;
    }

```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/textbox/disable-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/disable-cs1" %}

## Limit the text length

By default, the text length of the multiline textbox is unlimited. You can limit the text length by setting the `maxLength` attribute using the [addAttributes](https://ej2.syncfusion.com/vue/documentation/api/textbox/#addattributes) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/textbox/maxlength-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/maxlength-cs1" %}

## Count characters

You can show the number of characters entered inside the textarea by calculating the character count in the input event of multiline textbox. The character count is updated while entering or deleting any character inside the textarea. The character count shows how many characters can be entered or left to be entered.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/textbox/auto-resize-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/auto-resize-cs2" %}
