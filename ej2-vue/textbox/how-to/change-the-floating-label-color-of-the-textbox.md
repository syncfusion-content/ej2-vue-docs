---
layout: post
title: Change the floating label color of the textbox in Vue Textbox component | Syncfusion
description: Learn here all about Change the floating label color of the textbox in Syncfusion Vue Textbox component of Syncfusion Essential JS 2 and more.
control: Change the floating label color of the textbox 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change the floating label color of the textbox in Vue Textbox component

You can change the floating label color of the TextBox for both `success` and `warning` validation states by applying the following CSS styles.

```css

    /* For Success state */
    .e-float-input.e-success label.e-float-text,
    .e-float-input.e-success input:focus ~ label.e-float-text,
    .e-float-input.e-success input:valid ~ label.e-float-text {
      color: #22b24b;
    }

    /* For Warning state */
    .e-float-input.e-warning label.e-float-text,
    .e-float-input.e-warning input:focus ~ label.e-float-text,
   .e-float-input.e-warning input:valid ~ label.e-float-text {
      color: #ffca1c;
    }

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/validation-state-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/validation-state-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/validation-state-cs1" %}