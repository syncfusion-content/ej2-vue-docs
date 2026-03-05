---
layout: post
title: Types in Vue Avatar component | Syncfusion
description: Learn here all about Types in Syncfusion Vue Avatar component of Syncfusion Essential JS 2 and more.
control: Types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Types in Vue Avatar component

This section explains different types of avatar.

## Avatar size

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Avatar provides the following predefined sizes. Apply the modifier classes below alongside the `.e-avatar` class to change the avatar size.

| Class Name         | Description
| :-------------:    |:-------------:
| e-avatar-xlarge    | Displays xlarge size avatar.
| e-avatar-large     | Displays apply large size avatar.
| e-avatar           | Displays apply default size avatar.
| e-avatar-small     | Displays apply small size avatar.
| e-avatar-xsmall    | Displays apply xsmall size avatar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/avatar/size-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/avatar/size-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/size-cs1" %}

## Avatar types

The types of Essential<sup style="font-size:70%">&reg;</sup> JS 2 avatar are:

* Default
* Circle

### Default

The default avatar is a rectangular shape with rounded corners. Apply it by adding the modifier class `.e-avatar` to the target element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/avatar/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/avatar/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/default-cs1" %}

### Circle

Apply the circle avatar style by adding the modifier class `.e-avatar-circle` to the target element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/avatar/circle-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/avatar/circle-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/circle-cs1" %}