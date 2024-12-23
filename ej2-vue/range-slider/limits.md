---
layout: post
title: Limits in Vue Range slider component | Syncfusion
description: Learn here all about Limits in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Limits 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Limits in Vue Range slider component

The slider [`limits`](https://ej2.syncfusion.com/vue/documentation/api/slider#limits) restrict the slider thumb to a particular range. This is used when higher or lower values would negatively affect the process or product where the slider is being used.

The following are the six options in the slider's limits object. Each API in the limits object is optional.

* [``enabled``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#enabled): Enables the limits in the Slider.
* [``minStart``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#minstart): Sets the minimum limit for the first handle.
* [``minEnd``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#minend): Sets the maximum limit for the first handle.
* [``maxStart``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#maxstart): Sets the minimum limit for the second handle.
* [``maxEnd``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#maxend): Sets the maximum limit for the second handle.
* [``startHandleFixed``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#starthandlefixed): Locks the first handle.
* [``endHandleFixed``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#endhandlefixed): Locks the second handle.

## Default and MinRange Slider limits

There is only one handle in the Default and MinRange Slider, so [``minStart``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#minstart), [`minEnd``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#minend) and [``startHandleFixed``](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#starthandlefixed) options can be used. When the limits are enabled in the Slider, the limited area becomes darkened. So you can differentiate the allowed and restricted area. Refer to the following snippet to enable the limits in the Slider.

```ts

    ......

    limits: { enabled: true, minStart: 10, minEnd: 40 }

    ......

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/default-limit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/default-limit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/default-limit-cs1" %}

## Range Slider limits

In the range slider, both handles can be restricted and locked using the limit's object. In this sample, the first handle is limited between 10 and 40, and the second handle is limited between 60 and 90.

```ts
    ......

    limits: { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 }

    ......

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/range-limit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/range-limit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/range-limit-cs1" %}

## Handle lock

The movement of slider handles can be locked. This is done by enabling the [`startHandleFixed`](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#starthandlefixed) and [`endHandleFixed`](https://ej2.syncfusion.com/vue/documentation/api/slider/limitDataModel/#endhandlefixed) properties in the limit's object.
In this sample, the movement of both slider handles has been locked.

```ts

    ......

    limits: { enabled: true, startHandleFixed: true, endHandleFixed: true }

    ......

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/handle-lock-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/handle-lock-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/handle-lock-cs1" %}