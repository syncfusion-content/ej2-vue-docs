---
layout: post
title: Localization in Vue Common control | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Localization

The localization library allows you to localize the text content of Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components. This is useful when you want to display the UI in a language other than English.

## Loading translations

To load translation data in your application, use the L10n.load function from the @syncfusion/ej2-base module. This function takes an object that maps locale codes to translation objects.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/intl-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/intl-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/intl-cs1" %}

## Changing current locale

Change the current locale for all Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components by calling `setCulture` with the desired culture name. Ensure the locale translations have been loaded via `L10n.load` before changing the culture.

```ts
import {L10n, setCulture} from '@syncfusion/ej2-base';
L10n.load({
    'fr-BE': {
       'Button': {
             'id': 'Numéro de commande',
             'date':'Date de commande'
         }
     }
});
setCulture('fr-BE');
```

>Note: Before changing a culture globally, you need to ensure that locale text for the concerned culture is loaded through `L10n.load` function.