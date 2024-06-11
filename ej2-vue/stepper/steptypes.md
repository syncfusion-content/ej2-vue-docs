---
layout: post
title: Step Types in Vue Stepper component | Syncfusion
description: Checkout and learn about Step Types with Vue Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Step types in Vue Stepper component

The Stepper component provides support for displaying steps with the following step types.

## Default type

In default type, the Stepper displays steps with a combination of both indicators and labels by setting the [stepType](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#steptype) property as `Default`. By default, the Stepper displays steps in the `Default` type.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/defaultStepType/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/defaultStepType/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/defaultStepType" %}

## Label type

In label type, the Stepper displays the steps with only the step labels by setting the [stepType](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#steptype) property as `Label`.

> When both label and text are defined, the label takes priority in displaying the steps.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/labelStepType/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/labelStepType/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/labelStepType" %}

### Label positions

You can display the label on the top, bottom, left, or right side of the steps using the [labelPosition](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#labelposition) property.

The following label positions are supported in Stepper:

| Value | Description |
|-----|-----|
| `Top` | Positions the label at the top of each step. |
| `Bottom` | Positions the label at the bottom of each step. |
| `Start` | Positions the label to the left side of each step. |
| `End` | Positions the label to the right side of each step. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/labelPosition/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/labelPosition/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/labelPosition" %}

## Indicator type

In indicator type, the Stepper displays steps with only the step indicators  by setting the [stepType](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#steptype) property as `Indicator`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/indicatorType/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/indicatorType/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/indicatorType" %}