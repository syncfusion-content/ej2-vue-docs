---
layout: post
title: Render a dialog using utility functions in Vue Dialog component | Syncfusion
description: Learn here all about Render a dialog using utility functions in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Render a dialog using utility functions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Render a dialog using utility functions in Vue Dialog component

The dialog component provides built-in utility functions to render the alert and confirm dialogs with the minimal code.
The following options are used as an argument on calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of dialog like the [`header`](https://ej2.syncfusion.com/vue/documentation/api/dialog/#header) property.|
| content | Specifies the value that can be displayed in dialog's content area like the [`content`](https://ej2.syncfusion.com/vue/documentation/api/dialog/#content) property. |
| isModal | Specifies the Boolean value whether the dialog can be displayed as modal or non-modal. For more details, refer to the [`isModal`](https://ej2.syncfusion.com/vue/documentation/api/dialog/#ismodal) property.|
| position | Specifies the value where the alert or confirm dialog is positioned within the document. For more details, refer to the [`position`](https://ej2.syncfusion.com/vue/documentation/api/dialog/#position) property { X: 'center', Y: 'center'}|
| okButton | Configures the `OK button` that contains button properties with the click events. `okButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for OK button click', text: 'Yes' // <-- Default value is 'OK' }`|
| cancelButton | Configures the `Cancel button` that contains button properties with the click events. `cancelButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for ‘Cancel’ button click', text: 'No' // <-- Default value is 'Cancel'}`|
| isDraggable | Specifies the value whether the alert or confirm dialog can be dragged by the user. |
| showCloseIcon | When set to true, the close icon is shown in the dialog component. |
| closeOnEscape | When set to true, you can close the dialog by pressing ESC key. |
| animationSettings | Specifies the animation settings of the dialog component. |
| cssClass | Specifies the CSS class name that can be appended to the dialog. |
| zIndex | Specifies the order of the dialog, that is displayed in front or behind of another component. |
| open | Event which is triggered after the dialog is opened. |
| close | Event which is triggered after the dialog is closed. |
| animationSettings |Specifies the animation settings of the dialog component. |

## Alert dialog

An alert dialog box is used to display warning like messages to the users. Use the following code to render a simple alert dialog in an application.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/dialog-utility-alert-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert-cs3" %}

### Render an alert dialog with options

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/dialog-utility-alert1-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert1-cs3" %}

## Confirm dialog

A confirm dialog displays a specified message along with 'OK' and 'Cancel' button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/dialog-utility-confirm-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm-cs3" %}

### Render a confirmation dialog with options

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/dialog-utility-confirm1-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-confirm1-cs4" %}