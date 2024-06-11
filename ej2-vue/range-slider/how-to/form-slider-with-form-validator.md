---
layout: post
title: Form slider with form validator in Vue Range slider component | Syncfusion
description: Learn here all about Form slider with form validator in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Form slider with form validator 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Form slider with form validator in Vue Range slider component

The Slider component can be validated using our [FormValidator](https://ej2.syncfusion.com/documentation/form-validator/?lang=typescript). The following steps walk-through slider validation.

* Render slider component inside a form.
* Bind [changed]../api/slider#changed) event in the slider component to validate the slider value when the value changes.
* Initialize and render FormValidator for the form using form ID.

    ```ts

    // Initialize Form validation
    let formObj: FormValidator;
    formObj = new FormValidator("#formId", options);

    ```

* Set the required property in the FormValidator rules collection. Here, the [min](https://ej2.syncfusion.com/vue/documentation/api/slider/#min) property of slider that sets the minimum value in the slider component is set, and it has hidden input as enable `validateHidden` property is set to true.

    ```ts

    // Slider element
    <ejs-slider id="default" name="slider"></ejs-slider>

    // sets required property in the FormValidator rules collection
    let options: FormValidatorModel = {
      rules: {
        'default': {
          validateHidden: true,
          min: [6, "You must select value greater than 5"]
        }
      }
    };

    ```

> Form validation is done either by ID or name value of the slider component. Above ID of the slider is used to validate it.

Using slider name: Render slider with name attribute. In the following code snippet, name attribute value of ?slider? is used for form validation.

    ```ts

    // Slider element
    <ejs-slider id="default" name="slider"></ejs-slider>

    // sets required property in the FormValidator rules collection
    let options: FormValidatorModel = {
      rules: {
        'slider': {
          validateHidden: true,
          min: [6, "You must select value greater than 5"]
        }
      }
    };

    ```

* Validate the form using [validate](https://ej2.syncfusion.com/documentation/api/form-validator/#validate) method, and it validates the slider value with the defined rules collection and returns the result. If user selects the value less than the minimum value, form will not submit.

```ts

formObj.validate();

```

* Slider validation can be done during value changes in slider. Refer to the following code snippet.

    ```ts

    // change event handler for slider
    onChanged(args) {
      formObj.validate();
    }

    ```

The `FormValidator` has following default validation rules, which are used to validate the Slider component.

| Rules | Description | Example |
| ------------- | ------------- | ------------- |
| `max` | Slider component must have value less than or equal to `max` number | if `max: 3`, **3** is valid and **4** is invalid |
| `min` | Slider component must have value greater than or equal to `min` number | if `min: 4`, **5** is valid and **2** is invalid |
| `regex` | Slider component must have valid value in `regex` format | if `regex: '/4/`, **4** is valid and **1** is invalid |
| `range` | Slider component must have value between `range` number | if `range: [4,5]`, **4** is valid and **6** is invalid |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/thumb-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/thumb-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/thumb-cs2" %}