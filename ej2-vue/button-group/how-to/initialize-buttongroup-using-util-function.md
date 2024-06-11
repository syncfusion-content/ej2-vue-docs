---
layout: post
title: Initialize buttongroup using util function in Vue Button group component | Syncfusion
description: Learn here all about Initialize buttongroup using util function in Syncfusion Vue Button group component of Syncfusion Essential JS 2 and more.
control: Initialize buttongroup using util function 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Initialize buttongroup using util function in Vue Button group component

Though it is a CSS component, for easy initialization of ButtonGroup `createButtonGroup` util function can be used.

To use `createButtonGroup` util function, [`SplitButton dependencies`](./../../split-button/getting-started#dependencies) should be configured and it should be added in `system.config.js`.

Using `createButtonGroup` method, the Button options, selector, and cssClass is passed and the corresponding classes is added to the elements.

## For basic ButtonGroup

To create basic ButtonGroup, the target element along with the button elements needs to be created and `createButtonGroup` is to be imported from `ej2-splitbuttons` package.

## For radio type ButtonGroup

To create a radio type ButtonGroup, the target element along with the input elements should be created with type `radio`.

## For checkbox type ButtonGroup

Checkbox type ButtonGroup creation is similar to radio type ButtonGroup, instead the type of the input elements should be `checkbox`.

The following example illustrates how to create ButtonGroup using `createButtonGroup` function for basic, checkbox and radio type behavior.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs10" %}