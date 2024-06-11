<template>
    <ejs-ribbon id="ribbon" ref="backstageRibbon" :backStageMenu="backstageSettings">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" :buttonSettings="cutButton">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="copyButton">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="pasteButton">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                            </e-ribbon-collection>
                        </e-ribbon-collections>
                    </e-ribbon-group>
                </e-ribbon-groups>
            </e-ribbon-tab>
        </e-ribbon-tabs>
    </ejs-ribbon>
</template>

<script setup>

import { provide } from "vue";
import { RibbonBackstage } from "@syncfusion/ej2-vue-ribbon";
import { RibbonComponent as EjsRibbon, RibbonGroupDirective as ERibbonGroup, RibbonGroupsDirective as ERibbonGroups, RibbonCollectionsDirective as ERibbonCollections, RibbonCollectionDirective as ERibbonCollection, RibbonItemsDirective as ERibbonItems, RibbonItemDirective as ERibbonItem, RibbonTabsDirective as ERibbonTabs, RibbonTabDirective as ERibbonTab } from "@syncfusion/ej2-vue-ribbon";
import { onMounted } from 'vue';

provide('ribbon', [RibbonBackstage]);

const backstageSettings = {
    visible: true,
    template: homeContentTemplate()
};
const cutButton = { iconCss: "e-icons e-cut", content: "Cut" };
const copyButton = { iconCss: "e-icons e-copy", content: "Copy" };
const pasteButton = { iconCss: "e-icons e-paste", content: "Paste" };

displayPopup = () => {
    backstagePopup = ribbonEle.querySelector('#ribbon_backstagepopup');
    if (backstagePopup) {
        backstagePopup.style.display = 'block';
    }
}
const contentClick = (id) => {
    content = ribbonEle.querySelector('.content-open')
    if (content) { content.classList.replace('content-open', 'content-close'); }
    ribbonEle.querySelector('#' + id + '-wrapper').classList.add('content-open');
};
const closeContent = () => {
    ribbonEle.querySelector('#ribbon_backstagepopup').style.display = 'none'
}
const homeContentTemplate = () => {
    return `
    <div id="temp-content" style="width: 550px; height: 350px; display: flex">
      <div id="items-wrapper" style="width: 130px; height:100%; background: #779de8;">
          <ul>
              <li id="close" @click="closeContent">
                  <span class="e-icons e-close"></span>
                  Close
              </li>
              <li id="new" @click="contentClick('new')">
                  <span class="e-icons e-file-new"></span>
                  New
              </li>
              <li id="open" @click="contentClick('open')">
                  <span class="e-icons e-folder-open"></span>
                  Open
              </li>
              <li id="save" @click="contentClick('save')">
                  <span class="e-icons e-save"></span>
                  Save
              </li>
          </ul>
      </div>
      <div id="content-wrapper">
          <div id='new-wrapper' class='content-open' style="padding: 20px;">
              <div id='new-section' class='new-wrapper'>
                  <div class='section-title'> New </div>
                  <div class='category_container'>
                      <div class='doc_category_image'></div> 
                      <span class='doc_category_text'> New document </span>
                  </div>
              </div>
          </div>
          <div id="save-wrapper" class='content-close' style="padding: 20px;">
              <div class="section-content" style="padding: 12px 0px; cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-save"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Save as </span>
                                  <span style="font-size: 12px"> Save as copy online </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="section-content" style="padding: 12px 0px cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-rename"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Rename </span>
                                  <span style="font-size: 12px">Rename this file. </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div id="open-wrapper" class='content-close' style="padding: 20px;">
              <div class="section-content" style="padding: 12px 0px; cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-open-link"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Ribbon.docx </span>
                                  <span style="font-size: 12px"> EJ2 >> Components >> Navigations >> Ribbon >> default </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="section-content" style="padding: 12px 0px; cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-open-link"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Classic_layout.docx </span>
                                  <span style="font-size: 12px">  EJ2 >> Components >> Navigations >> Ribbon >> layouts </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="section-content" style="padding: 12px 0px; cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-open-link"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Simplified_layout.docx </span>
                                  <span style="font-size: 12px"> EJ2 >> Components >> Navigations >> Ribbon >> layouts </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
      `;
};

onMounted(() => {
    ribbonEle = document.getElementById('ribbon');
    document.querySelector('.e-ribbon-backstage').onClick = displayPopup.bind(this);
});

</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";

.e-ribbon-backstage-content {
    width: 550px;
    height: 350px;
}

.section-title {
    font-size: 22px;
}

.new-docs {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.category_container {
    width: 150px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
}

.doc_category_image {
    width: 80px;
    height: 100px;
    background-color: #fff;
    border: 1px solid rgb(125, 124, 124);
    text-align: center;
    overflow: hidden;
    margin: 0px auto 10px;
}

.doc_category_text {
    font-size: 16px;
}

.section-content {
    padding: 12px 0px;
    cursor: pointer;
}

.doc_icon {
    font-size: 16px;
    padding: 0px 10px;
}

.category_container:hover,
.section-content:hover {
    background-color: #dfdfdf;
    border-radius: 5px;
    transition: all 0.3s;
}

#targetElement {
    width: 500px;
    height: 500px;
}

#items-wrapper ul {
    padding: 0;
    margin: 0;
}

#items-wrapper li {
    height: 38px;
    font-size: 16px;
    list-style: none;
    cursor: pointer;
    text-align: center;
    padding-top: 10px;
}

#items-wrapper li span {
    margin-right: 15px;
    font-size: 14px;
}

#items-wrapper ul li:hover {
    background-color: #a5bff4;
}

#content-wrapper .content-close {
    display: none;
}

#content-wrapper .content-open {
    display: block;
}
</style>