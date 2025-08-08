---
layout: post
title: Customize Ribbon in Vue Document Editor | Syncfusion
description: Learn how to customize the ribbon in Syncfusion Vue Document Editor - file menu, backstage, tabs, groups, and items.
platform: ej2-vue
control: Ribbon Customization
documentation: ug
domainurl: ##DomainURL##
---

# Customize Ribbon in Vue Document Editor

The Syncfusion Document Editor provides an extensive and flexible API to customize the built-in ribbon UI. You can:

- Customize the File menu.
- Add the Backstage menu instead of File menu.
- Show, hide, or add Ribbon tabs.
- Show, hide, or add groups within tabs.
- Show, hide, add, enable, or disable items within groups.

Below are detailed examples for each ribbon customization scenario.

## File Menu Customization

Document Editor provides APIs to remove existing File menu items and add new custom items based on your requirements. You can modify the File menu using the [`fileMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/#filemenuitems) property.

In below code example, In the example below, the "Open" and "Export" items have been removed from the File Menu Items, and new custom items have been added.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px' :fileMenuItems="fileMenuItems"
    @fileMenuItemClick="fileMenuClick"></ejs-documenteditorcontainer>
</div>
</template>
<script setup>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
import { onMounted, ref } from 'vue';

const documenteditorcontainer = ref(null);
provide('DocumentEditorContainer', [Toolbar, Ribbon]);
const fileMenuItems = [
  'New',
  'Print',
  { text: 'Export', id: 'custom_item', iconCss: 'e-icons e-export' }
];
function fileMenuClick(args) {
  if (args.item && args.item.id === 'custom_item') {
    doceditcontainer.value.ej2Instances.documentEditor.save('Sample', 'Docx');
  }
}
onMounted(() => {
  const editorInstance = doceditcontainer.value?.ej2Instances?.documentEditor;
});
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px' :fileMenuItems="fileMenuItems"
    @fileMenuItemClick="fileMenuClick"></ejs-documenteditorcontainer>
</div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
  },
  provide: {
    DocumentEditorContainer: [Toolbar, Ribbon]
  },
  data() {
    return {
      fileMenuItems: [
        'New',
        'Print',
        { text: 'Export', id: 'custom_item', iconCss: 'e-icons e-export' }
      ]
    };
  },
  methods: {
    fileMenuClick(args) {
      if (args.item) {
        this.$refs.doceditcontainer.ej2Instances.documentEditor.save('Sample', 'Docx');
      }
    }
  }
};

</script>

{% endhighlight %}
{% endtabs %}

## Backstage Menu Customization

The Document Editor provides an [`backStageMenu`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/#backStageMenu) API to add a backstage menu. When the backstage menu is enabled, the default File menu items are automatically hidden.

The following code example shows how to add the backstage menu items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px' :fileMenuItems="fileMenuItems"
    @fileMenuItemClick="fileMenuClick"></ejs-documenteditorcontainer>
</div>
</template>
<script setup>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
import { onMounted, ref } from 'vue';

const documenteditorcontainer = ref(null);
provide('DocumentEditorContainer', [Toolbar, Ribbon]);
const backstageMenu = {
  text: 'File',
  backButton: { text: 'close' },
  items: [
    { id: 'new', text: 'New', iconCss: 'e-icons e-de-ctnr-new' }
  ]
};
function handleBackstageItemClick(args) {
  if (args.item) {
    doceditcontainer.value.ej2Instances.documentEditor.openBlank();
  }
}
onMounted(() => {
  const editorInstance = doceditcontainer.value?.ej2Instances?.documentEditor;
});
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px' :backstageMenu="backstageMenu"
    @backstageItemClick="handleBackstageItemClick"></ejs-documenteditorcontainer>
</div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
  },
  provide: {
    DocumentEditorContainer: [Toolbar, Ribbon]
  },
  data() {
    return {
      backstageMenu: {
        text: 'File',
        backButton: { text: 'close' },
        items: [
          { id: 'new', text: 'New', iconCss: 'e-icons e-de-ctnr-new' }
        ]
      }
    };
  },
  methods: {
    handleBackstageItemClick(args) {
      if (args.item) {
        this.$refs.doceditcontainer.ej2Instances.documentEditor.openBlank();
      }
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

Refer this documentation know more about [`backstage items`](https://ej2.syncfusion.com/documentation/ribbon/backstage)

## Tab Customization

You can customize the ribbon tabs in the Document Editor by showing, hiding, or adding tabs according to your application's requirements.

### Show/Hide Tab

Document editor provides the [`showTab`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/ribbon/#showtab) API to show and hide the existing tab using existing `RibbonTabType` and `tabId`.

The following code example how to show/hide existing tab using existing tab type and tab id.

```ts
// To hide the Home tab using the built-in `RibbonTabType`
this.$refs.doceditcontainer.ej2Instances.ribbon.showTab('Home', false);

// To hide a tab by its tab id (for example, a custom tab)
this.$refs.doceditcontainer.ej2Instances.ribbon.showTab('custom_tab', false);
```

### Add Tab

The Document Editor provides the [`addTab`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/ribbon/#addtab) API, which allows you to insert a new custom tab either between existing tabs or at the end of the ribbon tabs.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
</div>
</template>
<script setup>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
import { onMounted, ref } from 'vue';
import { RibbonTabModel } from '@syncfusion/ej2-ribbon';

const documenteditorcontainer = ref(null);
provide('DocumentEditorContainer', [Toolbar, Ribbon]);

onMounted(() => {
    const container = doceditcontainer.value?.ej2Instances;
    // To add the tab at end of tab
    const ribbonTab = {
      header: 'Custom Tab',
      id: 'custom_tab',
      groups: [{
        header: 'Custom Group',
        collections: [{
          items: [{
            type: 'Button',
            buttonSettings: {
              content: 'New',
              iconCss: 'e-icons e-de-ctnr-new',
              clicked: () => {
                container.documentEditor.openBlank();
              }
            }
          }]
        }]
      }]
    };
    container.ribbon.addTab(ribbonTab);

    // To add the tab before the Insert tab(exising tab)
    container.ribbon.addTab(ribbonTab, 'Insert');
});
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
</div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
  },
  provide: {
    DocumentEditorContainer: [Toolbar, Ribbon]
  },
  mounted() {
    const container = this.$refs.doceditcontainer.ej2Instances;

    // To add the tab at end of tab
    const ribbonTab = {
      header: 'Custom Tab',
      id: 'custom_tab',
      groups: [{
        header: 'Custom Group',
        collections: [{
          items: [{
            type: 'Button',
            buttonSettings: {
              content: 'New',
              iconCss: 'e-icons e-de-ctnr-new',
              clicked: () => {
                container.documentEditor.openBlank();
              }
            }
          }]
        }]
      }]
    };
    container.ribbon.addTab(ribbonTab);

    // To add the tab before the Insert tab(exising tab)
    container.ribbon.addTab(ribbonTab, 'Insert');
  }
};

</script>

{% endhighlight %}
{% endtabs %}

## Group Customization

You can also customize ribbon groups within a tab to better organize commands or add new functionalities as per your needs.

### Show/Hide Group 

Document Editor provides an [`showGroup`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/ribbon/#showgroup) API to show or hide existing groups within a ribbon tab.

The following code example show how to show/hide the group using group Id or [`RibbonGroupInfo`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/#ribbongroupinfo).

```ts

// To hide the clipboard group using group index
this.$refs.doceditcontainer.ej2Instances.ribbon.showGroup({tabId: 'Home', index: 1} , false);

// To show the clipboard group using group index
this.$refs.doceditcontainer.ej2Instances.ribbon.showGroup({tabId: 'Home', index: 1} , true);

// To hide the group using id
this.$refs.doceditcontainer.ej2Instances.ribbon.showGroup('custom_group', false);

```

### Add Group

To extend the ribbon's functionality, you can add custom groups to any tab. This allows you to organize related commands together within a tab.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
</div>
</template>
<script setup>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
import { onMounted, ref } from 'vue';

const documenteditorcontainer = ref(null);
provide('DocumentEditorContainer', [Toolbar, Ribbon]);

onMounted(() => {
    const container = doceditcontainer.value?.ej2Instances;
    // Add the new group at the end of the Home tab
    const ribbonGroup = {
      header: 'Custom Group',
      collections: [
        {
          items: [
            {
              type: 'Button',
              buttonSettings: {
                content: 'New',
                iconCss: 'e-icons e-de-ctnr-new',
                clicked: () => {
                  container.documentEditor.openBlank();
                }
              }
            }
          ]
        }
      ]
    };
    container.ribbon.addGroup('Home', ribbonGroup);

    // Add the new group at the specified index of the Home tab (before the Clipboard group)

    container.ribbon.addGroup('Home', ribbonGroup, 1);
});
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
</div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
  },
  provide: {
    DocumentEditorContainer: [Toolbar, Ribbon]
  },
  mounted() {
    const container = this.$refs.doceditcontainer.ej2Instances;

    // Add the new group at the end of the Home tab
    const ribbonGroup = {
      header: 'Custom Group',
      collections: [
        {
          items: [
            {
              type: 'Button',
              buttonSettings: {
                content: 'New',
                iconCss: 'e-icons e-de-ctnr-new',
                clicked: () => {
                  container.documentEditor.openBlank();
                }
              }
            }
          ]
        }
      ]
    };
    container.ribbon.addGroup('Home', ribbonGroup);

    // Add the new group at the specified index of the Home tab (before the Clipboard group)

    container.ribbon.addGroup('Home', ribbonGroup, 1);
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Item Customization

You can customize individual items within ribbon groups. This includes showing, hiding, enabling, disabling, or adding new items to any group within a ribbon tab.

### Show/Hide Item

Using [`showItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/ribbon/#showitems) API in Document editor ribbon to enable/disable the existing item. Here, you can specify the item Id or [`RibbonItemInfo`].

The following code example show how to show/hide the item using item Id or [`RibbonItemInfo`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/#ribboniteminfo).

```ts
// To hide the Bold and Italic items using ribbon item information
this.$refs.doceditcontainer.ej2Instances.ribbon.showItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [5, 6] } , false);

// To show the Bold and Italic items using ribbon item information
this.$refs.doceditcontainer.ej2Instances.ribbon.showItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [5, 6] } , true);

// To hide the item using item id
this.$refs.doceditcontainer.ej2Instances.ribbon.showItems('custom_item', false);
```

### Enable/Disable Item

Using [`enableItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/ribbon/#enableitems) API in Document editor ribbon to enable/disable the existing item.

```ts
// To disable the underline using ribbon item info
this.$refs.doceditcontainer.ej2Instances.ribbon.enableItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [7] },false);

// To enable the underline using ribbon item info
this.$refs.doceditcontainer.ej2Instances.ribbon.enableItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [7] },true);

// To disable the item using id
this.$refs.doceditcontainer.ej2Instances.ribbon.enableItems('custom_item', false);

```

### Add Item

You can use the [`addItem`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/ribbon/#additem) API in the Document Editor ribbon to add a new item. Additionally, you can specify the target tab and group where the new item should be placed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
</div>
</template>
<script setup>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
import { onMounted, ref } from 'vue';

const documenteditorcontainer = ref(null);
provide('DocumentEditorContainer', [Toolbar, Ribbon]);

onMounted(() => {
    const container = doceditcontainer.value?.ej2Instances;
    // To add the item at the end of the specified group (the item will be added at the end of the Undo group)
    const ribbonItem = {
      type: 'Button',
      buttonSettings: {
        content: 'New',
        iconCss: 'e-icons e-de-ctnr-new',
        clicked: () => {
          container.documentEditor.openBlank();
        }
      }
    };
    container.ribbon.addItem({ tabId: 'Home', index: 0 }, ribbonItem);

    // To add the item before the specified item index (the item will be added before the Redo item in the Undo group)

    container.ribbon.addItem({ tabId: 'Home', index: 0 }, ribbonItem, 1);
});
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
<div class="control-section">
    <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" 
    :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
</div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
  },
  provide: {
    DocumentEditorContainer: [Toolbar, Ribbon]
  },
  mounted() {
    const container = this.$refs.doceditcontainer.ej2Instances;
    // To add the item at the end of the specified group (the item will be added at the end of the Undo group)
    const ribbonItem = {
      type: 'Button',
      buttonSettings: {
        content: 'New',
        iconCss: 'e-icons e-de-ctnr-new',
        clicked: () => {
          container.documentEditor.openBlank();
        }
      }
    };
    container.ribbon.addItem({ tabId: 'Home', index: 0 }, ribbonItem);

    // To add the item before the specified item index (the item will be added before the Redo item in the Undo group)

    container.ribbon.addItem({ tabId: 'Home', index: 0 }, ribbonItem, 1);
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Related Links

- [File menu Customization Demo](https://ej2.syncfusion.com/demos/#/material/document-editor/ribbon-customization)