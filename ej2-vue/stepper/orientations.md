---
layout: post
title: Orientations in Vue Stepper | Syncfusion
description: Display Vue Stepper steps in horizontal or vertical orientation using the orientation property to suit different layout requirements of your application.
control: Stepper 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Orientations in Vue Stepper

The Stepper component supports the display of steps in both horizontal and vertical orientations by using the [orientation](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#orientation) property.

## Horizontal

In horizontal orientation, the steps are displayed in a side-by-side manner by setting the [orientation](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#orientation) property to `Horizontal`. By default, the steps are displayed in the horizontal orientation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/horizontal/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/horizontal/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/horizontal" %}

## Vertical

You can display the steps one below the other vertically by setting the [orientation](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#orientation) property to `Vertical`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/vertical/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/vertical/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/vertical" %}