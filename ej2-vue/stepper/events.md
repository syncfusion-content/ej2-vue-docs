---
layout: post
title: Events in Vue Stepper component | Syncfusion
description: Checkout and learn about Events with Vue Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Stepper component

This section describes the Stepper events that will be triggered when an appropriate actions are performed. The following events are available in the Stepper component.

## created

The Stepper component triggers the [created](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#created) event when the control rendering is completed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/step-created/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/step-created/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/step-created" %}

## stepChanged

The Stepper component triggers the [stepChanged](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#stepchanged) event after the active step is changed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/step-changed/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/step-changed/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/step-changed" %}

## stepChanging

The Stepper component triggers the [stepChanging](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#stepchanging) event before the active step change.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/step-changing/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/step-changing/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/step-changing" %}

## stepClick

The Stepper component triggers the [stepClick](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#stepclick) event when the step is clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/step-click/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/step-click/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/step-click" %}

## beforeStepRender

The Stepper component triggers the [beforeStepRender](https://ej2.syncfusion.com/vue/documentation/api/stepper/stepperModel/#beforesteprender) event before rendering each step.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stepper/beforesteprender/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stepper/beforesteprender/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/beforesteprender" %}