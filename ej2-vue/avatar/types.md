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

The Essential JS 2 Avatar has the following predefined sizes that can be used with the `.e-avatar` class to change the appearance of the avatar.

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

The types of Essential JS 2 avatar are:

* Default
* Circle

### Default

The default style of the avatar is rectangular shape with rounded corners, which can be applied from adding the modifier class `.e-avatar` to the target element.

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

The circle avatar style can be applied by adding the modifier class `.e-avatar-circle` to the target element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/avatar/circle-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/avatar/circle-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/avatar/circle-cs1" %}