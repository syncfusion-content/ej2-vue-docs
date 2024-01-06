---
layout: post
title: Steps in Vue Stepper component | Syncfusion
description: Checkout and learn about Steps with Vue Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Steps in Vue Stepper component

The Vue Stepper allows you to add steps using the `<e-step>` directive . Each step can be configured with options such as `iconCss`, `text`, `label`, `cssClass` and more.

## Adding steps

You can define the icon and text content for each step using the `iconCss`, `text` and `label` properties.

### Defining icon CSS

You can define the CSS class to show the icon for each step using the `iconCss` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/icon/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/icon" %}

### Defining text content

You can define text instead of an icon by setting the `text` property and display label content for a step using the `label` property.

> When both label and text are defined, the label takes priority for display based on the `stepType`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/text/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/text" %}

## Optional steps

You can show whether the step is optional or not by using `optional` property. By default, the `optional` property is `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/optional/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/optional" %}

## Disabling steps

You can use the `disabled` property to disable a step, preventing user interaction when set to `true`. By default, the value is `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/disabled/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/disabled" %}

## Setting active step

You can set the active step by specifying its index using the [activeStep](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#activestep) property. The default value is `0`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/activeStep/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/activeStep" %}

## Step status

Each step's progress state can be specified using the `status` property. The possible values are `NotStarted`, `InProgress` and `Completed`. By default, the value is `NotStarted`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/stepStatus/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/stepStatus" %}

## Step styling

You can use the `cssClass` property to customize the appearance of each step.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stepper/cssclass/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/cssclass" %}

## Step validation

You can set the validation state for each step to displaying a success or error icon by using `isValid` property.

> To know more about Stepper validation, please refer to the [Validation](./steps-validation#validating-steps) section.