---
layout: post
title: Validation events in Vue Form validator component | Syncfusion
description: Learn here all about Validation events in Syncfusion Vue Form validator component of Syncfusion Essential JS 2 and more.
control: Validation events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Validation events in Vue Form validator component

Validation events have two types of events. These are

* validationBegin
* validationComplete

## Validation Begin

`validationBegin` event triggers before the validation starts and also it invoke for each rules in validation process. Please find the below code snippet.

```ts

validationBegin: function(args) {
        // ("Validation begin");
      },
```

The following values are passed in `args`. You can use this values in event validation.

| Fields  | Description |
|---------|-------------|
|`element`| Specifies the input element |
|`name`   | Specifies the event name (validationBegin)  |
|`param`  | Specifies the param value (true/false)  |
|`value`  | Specifies the input value  |

## Validation Complete

`validationComplete` event triggered after validation is completed and also it invoke  for each rules in validation process. Please find the below code snippet.

```ts

validationComplete: function(args) {
        // ("Validation complete");
      }
```

The following values are passed in `args`. You can use this values in event validation.

| Fields  | Description |
|---------|-------------|
|`element`| Specifies the input element |
|`name`   | Specifies the event name (validationComplete)  |
|`param`  | Specifies the param value (true/false)  |
|`value`  | Specifies the input value  |
|`status` | Specifies the status (success/failure) |
|`inputName` | Specifies the type of input  |

Please find the simple sample for validation events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/form-validator/form-validation-events-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/form-validator/form-validation-events-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/form-validator/form-validation-events-cs2" %}

In the above code example, after completion of validation, the status of the validation process is passed as arguments to validationComplete method and the values are assigned according to the status of the validation.