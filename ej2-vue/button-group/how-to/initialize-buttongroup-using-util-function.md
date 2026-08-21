---
layout: post
title: How to initialize using util function in Vue Button Group | Syncfusion
description: Learn how to initialize a Syncfusion Vue Button Group using the createButtonGroup utility function for basic, radio, and checkbox type ButtonGroups.
control: Initialize buttongroup using util function 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to initialize using utility function in Vue Button Group

Though it is a CSS component, for easy initialization of ButtonGroup `createButtonGroup` utility function can be used.

To use `createButtonGroup` utility function, [`SplitButton dependencies`](./../../split-button/getting-started#dependencies) should be configured and it should be added in `system.config.js`.

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