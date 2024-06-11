---
layout: post
title: Components in Vue Inplace editor component | Syncfusion
description: Learn here all about Components in Syncfusion Vue Inplace editor component of Syncfusion Essential JS 2 and more.
control: Components 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Components in Vue Inplace editor component

In-place Editor renders various components based on the [type](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#type) property and it have built-in and injectable component. To use injectable components, inject the required modules into `In-place Editor`. By default, the `type` property set to `Text` and render the `TextBox`.

The following table explains Injectable components module name and built-in components and their types.

| **Injectable Components** | **Built in Components** |
|-----------------------|---------------------|
| [AutoComplete](../auto-complete/)  (`AutoComplete`)        | [TextBox](../textbox/)  (`Text`)             |
| [ComboBox](../combo-box/)  (`ComboBox`)              | [DatePicker](../datepicker/)  (`Date`)        |
| [MultiSelect](../multi-select/)   (`MultiSelect`)        | [DateTimePicker](../datetimepicker/)   (`DateTime`)     |
| [TimePicker](../timepicker/)   (`Time`)         | [DropDownList](../drop-down-list/)  (`DropDownList`)      |
| [DateRangePicker](../daterangepicker/)   (`DateRange`)       | [MaskedTextBox](../maskedtextbox/)   (`Mask`)      |
| [Slider](../range-slider/)   (`Slider`)             | [NumericTextBox](../numerictextbox/)   (`Numeric`)    |
| [Rte](../rich-text-editor/)     (`RTE`)              |                     |
| [ColorPicker](../color-picker/)    (`Color`)       |                     |

In the following sample, built-in and injectable based In-place Editor components are rendered.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs2" %}

## Model configuration

Components properties and events can be customized using the In-place Editor [model](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#model) property.

In the following code, the [type](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#type) defined as the `Date` and `DatePicker` properties are configured through [model](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#type) property to customize the [DatePicker](https://ej2.syncfusion.com/vue/documentation/api/datepicker) component at In-place Editor.

```ts
    model: {
        showTodayButton: true,
        placeholder: 'Select Date'
    }
```


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-inplaceeditor id="inplace_editor" type="Date" :value="datepickerValue" :model="model">
    </ejs-inplaceeditor>
  </div>
</template>

<script setup>

import { InPlaceEditorComponent as EjsInplaceeditor } from '@syncfusion/ej2-vue-inplace-editor';

const datepickerValue = new Date('04/12/2018');
const dateModel = {
  showTodayButton: true,
  placeholder: 'Select Date'
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-inplaceeditor id="inplace_editor" type="Date" :value="datepickerValue" :model="model">
    </ejs-inplaceeditor>
  </div>
</template>

<script>

import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';

export default {
  name: 'app',
  components: {
    'ejs-inplaceeditor': InPlaceEditorComponent
  },
  data() {
    return {
      datepickerValue: new Date('04/12/2018');
      dateModel: {
        showTodayButton: true,
        placeholder: 'Select Date'
      },
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## See Also

* [HTML5 components](./integration/)