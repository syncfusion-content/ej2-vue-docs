---
layout: post
title: Set default format in document editor in Vue Document editor component | Syncfusion
description: Learn here all about Set default format in document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Set default format in document editor 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set default format in document editor in Vue Document editor component

You can set the default character format, paragraph format and section format in Document editor.

## Set the default character format

You can use [`setDefaultCharacterFormat`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#setdefaultcharacterformat) method to set the default character format. For example, Document editor default font size is 11 and you can change it as any valid value.

The following example code illustrates how to change the default font size in Document editor.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
      data() {
        return {
          serviceUrl:
            'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
        };
      },
      provide: {
        //Inject require modules.
        DocumentEditorContainer: [Toolbar],
      },
        methods: {
        onCreated: function () {
          this.$refs.container.ej2Instances.documentEditor.setDefaultCharacterFormat({fontSize: 20});
        },
      },
    };
</script>
```

Similarly, you can change the required [`CharacterFormatProperties`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/characterFormatProperties) default value.

The following example code illustrates how to change other character format default value in Document editor.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
      data() {
        return {
          serviceUrl:
            'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
        };
      },
      provide: {
        //Inject require modules.
        DocumentEditorContainer: [Toolbar],
      },
      methods: {
        onCreated: function () {
          var defaultCharacterFormat = {
            bold: false,
            italic: false,
            baselineAlignment: 'Normal',
            underline: 'None',
            fontColor: '#000000',
            fontFamily: 'Algerian',
            fontSize: 12,
          };
          this.$refs.container.ej2Instances.documentEditor.setDefaultCharacterFormat(
            defaultCharacterFormat
          );
        },
      },
    };
</script>
```

## Set the default paragraph format

You can use [`setDefaultParagraphFormat`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#setdefaultparagraphformat) API to set the default paragraph format. You can change the required [`ParagraphFormatProperties`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/paragraphFormatProperties) default value.

The following example code illustrates how to change the paragraph format(before spacing, line spacing etc.,) default value in Document editor.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
      data() {
        return {
          serviceUrl:
            'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
        };
      },
      provide: {
        //Inject require modules.
        DocumentEditorContainer: [Toolbar],
      },
      methods: {
        onCreated: function () {
        let defaultParagraphFormat = {
        beforeSpacing: 8,
        lineSpacing: 1.5,
        leftIndent: 24,
        textAlignment: "Center"
        };
        this.$refs.container.ej2Instances.documentEditor.setDefaultParagraphFormat(defaultParagraphFormat);
        },
      }
  };
</script>
```

## Set the default section format

You can use [`setDefaultSectionFormat`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#setdefaultsectionformat) API to set the default section format. You can change the required [`SectionFormatProperties`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/sectionFormatProperties) default value.

The following example code illustrates how to change the section format(header and footer distance, page width and height, etc.,) default value in Document editor.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
      data() {
        return {
          serviceUrl:
            'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
        };
      },
      provide: {
        //Inject require modules.
        DocumentEditorContainer: [Toolbar],
      },
      methods: {
        onCreated: function () {
        let defaultSectionFormat = {
        pageWidth: 500,
        pageHeight: 800,
        headerDistance: 56,
        footerDistance: 48,
        leftMargin: 12,
        rightMargin: 12,
        topMargin:0,
        bottomMargin:0
      };
      this.$refs.container.ej2Instances.documentEditor.setDefaultSectionFormat(defaultSectionFormat);
        },
      },
    };
</script>
```