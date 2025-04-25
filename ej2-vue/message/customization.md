---
layout: post
title: Customization in Vue Message component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Message component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Message component

The Message component allows the user to customize the content display positions and appearance. This section explains the details about changing the content alignments and border styles for messages.

## Content Alignment

Normally, the message content is aligned to the **left**. The Message component allows the user to align the message content in the **center** or **right** through the built-in classes `e-content-center` and `e-content-right`.

The following example demonstrates the message with different content alignments.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/getting-started-cs1" %}

## Rounded and Square

To customize the Message component's appearance, add the custom class to the message through the `cssClass` property. This custom class will be added to the root element. Based on this custom class, the user can override the message styles at the application level.

The following example shows the rounded and squared appearance of the message, which can be achieved by adding the `cssClass` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/getting-started-cs2" %}

## CSS Message

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Message has predefined CSS classes that can be defined in the HTML elements, which renders the message without any script reference. This can display a simple message with content and make the code lighter.

The following DOM structure is required to display the simple message with the content.

```bash

<div class="e-message">
    <div class="e-msg-content">..content..</div>
</div>

```

The following DOM structure is required to display the simple message with the content and severity icon.

```bash

<div class="e-message">
    <span class="e-msg-icon"></span>
    <div class="e-msg-content">..content..</div>
</div>

```

The following is the available list of predefined CSS classes to make the appearance of a message.

| Class | Description |
| -------- | -------- |
| e-message | Represents the message wrapper. |
| e-msg-icon | Represents the severity type icon. |
| e-msg-content | Represents the message content. |
| e-msg-close-icon | Represents the close icon. |
| e-info | Represents the information message. |
| e-success | Represents the success message. |
| e-warning | Represents the warning message. |
| e-error | Represents the error message. |
| e-content-center | Aligns the message content to the center. |
| e-content-right | Aligns the message content to the right. |

The following example shows the message which renders without any script reference.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/getting-started-cs3" %}