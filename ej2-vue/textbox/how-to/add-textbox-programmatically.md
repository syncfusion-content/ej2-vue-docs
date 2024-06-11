---
layout: post
title: Add textbox programmatically in Vue Textbox component | Syncfusion
description: Learn here all about Add textbox programmatically in Syncfusion Vue Textbox component of Syncfusion Essential JS 2 and more.
control: Add textbox programmatically 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add textbox programmatically in Vue Textbox component

* Create a TypeScript file and import the `Input` modules from `ej2-inputs` library as shown below.

```ts
import {Input} from '@syncfusion/ej2-inputs';
```

* Pass the `HTML Input` element as parameter to the `createInput` method.

* You can also add the `icons` on the input by passing `buttons` property value with the class name `e-input-group-icon` as parameter to the `createInput` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/utility-rendering-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/utility-rendering-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/utility-rendering-cs1" %}