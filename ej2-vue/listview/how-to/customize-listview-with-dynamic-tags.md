---
layout: post
title: Customize listview with dynamic tags in Vue Listview component | Syncfusion
description: Learn here all about Customize listview with dynamic tags in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Customize listview with dynamic tags 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize listview with dynamic tags in Vue Listview component

You can customize the ListView items using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#template) property. Here, the dynamic tags are added and removed in the list item from another ListView. Refer to the following steps to achieve this.

*Initialize dynamic ListView with required property that holds the tags of parent ListView, and bind the [`select`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#select) event (triggers when the list item is selected), in which you can get and add the selected item value as tags into parent ListView. Refer to the following code sample.

   ```ts

   //Select the event that is is rendered inside dialog for ListView
   addTag: function(e) {
    let listTag = document.createElement('span');
    listTag.className = 'advanced-option';
    let labelElem = document.createElement('span');
    labelElem.className = 'label';
    let deleteElem = document.createElement('span');
    deleteElem.className = 'delete';
    deleteElem.onclick = this.removeTag;
    labelElem.innerHTML = e.target.textContent;
    listTag.appendChild(labelElem);
    listTag.appendChild(deleteElem);
    let tag = document.createElement('span');
    tag.className = 'advanced-option-list';
    tag.appendChild(listTag);
    this.$refs.listviewInstance.$el.ej2_instances[0].element.querySelector('.e-active').appendChild(tag);
    }

  ```

* Render the dialog component with empty content and append the created dynamic ListView object to the dialog on [`created`](https://ej2.syncfusion.com/vue/documentation/api/dialog/#created) event.

* Bind the click event for button icon (+) to update the ListView data source with tags, and open the dialog with this dynamic ListView. Refer to the following code sample.

   ```ts

    //Method to hide/show the dialog and update the ListView data source
     renderDialog: function(id){
       if (document.getElementsByClassName('e-popup-open').length !== 0) {
        this.$refs.dialogInstance.hide();
      }
      else {
        this.listObj = document.getElementById('dialog').querySelector("#list").ej2_instances[0];
        this.listObj.dataSource = this.datasource[id];
        this.listObj.dataBind();
        this.$refs.dialogInstance.position = { X: document.querySelector('.e-add-icon').getBoundingClientRect().left + 50, Y: document.querySelector('.e-add-icon').getBoundingClientRect().top - 5 };
        this.$refs.dialogInstance.show();
      }
    }
 
  ```

* Bind the click event with added dynamic tags to remove it. Refer to the following code sample.

   ```ts
   //Method to remove the list item
    removeTag() {
    this.$refs.listviewInstance.$el.ej2_instances[0].selectedLI.children[1].remove();
   }

  ```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/listview/data-binding/remote-data-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/data-binding/remote-data-cs2" %}