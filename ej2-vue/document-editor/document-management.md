---
layout: post
title: Document management in Vue Document editor component | Syncfusion
description: Learn here all about Document management in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Document management 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Document management in Vue Document editor component

Document Editor provides support to restrict editing. When the protected document includes range permission, then unique user or user group only authorized to edit separate text area.

## Set current user

You can use the `currentUser` property to authorize the current document user by name, email, or user group name.

The following code shows how to set currentUser

```javascript
this.$refs.doceditcontainer.ej2Instances.documentEditor.currentUser = 'engineer@mycompany.com';
```

## Highlighting the text area

You can highlight the editable region of the current user using the `userColor` property.

The following code shows how to set userColor.

```javascript
this.$refs.doceditcontainer.ej2Instances.documentEditor..userColor = '#fff000';
```

You can toggle the highlight the editable region value using the "highlightEditableRanges" property.

The folowing code shows how to toggle the highlight editable region value.

```javascript
this.$refs.doceditcontainer.ej2Instances.documentEditor.documentEditorSettings.highlightEditableRanges = true; 
```

## Restrict Editing Pane

Restrict Editing Pane provides the following options to manage the document:
* To apply formatting restrictions to the current document, select the allow formatting check box.
* To apply editing restrictions to the current document, select the read only check box.
* To add users to the current document, select more users option and add user from the popup dialog.
* To include range permission to the current document, select parts of the document and choose users who are allowed to freely edit them from the listed check box.
* To apply the chosen editing restrictions, click the **YES,START ENFORCING PROTECTION** button. A dialog box displays asking for a   password to protect.
* To stop protection, select **STOP PROTECTION** button. A dialog box displays asking for a password to stop protection.

The following code shows Restrict Editing Pane. To unprotect the document, use password '123'.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/getting-started-cs1" %}

> The Web API hosted link `https://services.syncfusion.com/vue/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## See Also

* [How to protect the document in form filling mode](../document-editor/form-fields/#protect-the-document-in-form-filling-mode)
* [How to protect the document in comments only mode](../document-editor/comments/#protect-the-document-in-comments-only-mode)
* [How to protect the document in track changes only mode](../document-editor/track-changes/#protect-the-document-in-track-changes-only-mode)