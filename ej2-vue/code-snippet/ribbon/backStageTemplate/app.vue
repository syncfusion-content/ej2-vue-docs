<template>
    <ejs-ribbon id="ribbon" ref="backstageRibbon" :backStageMenu="backstageSettings">
        <e-ribbon-tabs>
            <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                    <e-ribbon-group header="Clipboard">
                        <e-ribbon-collections>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="SplitButton" :allowedSizes="largeSize"
                                        :splitButtonSettings="pasteSettigs">
                                    </e-ribbon-item>
                                </e-ribbon-items>
                            </e-ribbon-collection>
                            <e-ribbon-collection>
                                <e-ribbon-items>
                                    <e-ribbon-item type="Button" :buttonSettings="cutButton">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="copyButton">
                                    </e-ribbon-item>
                                    <e-ribbon-item type="Button" :buttonSettings="formatButton">
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

<script>

import { RibbonBackstage, RibbonComponent, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonTabsDirective, RibbonTabDirective, RibbonItemSize } from "@syncfusion/ej2-vue-ribbon";

export default {
    name: "App",
    components: {
        "ejs-ribbon": RibbonComponent,
        "e-ribbon-tabs": RibbonTabsDirective,
        "e-ribbon-tab": RibbonTabDirective,
        "e-ribbon-groups": RibbonGroupsDirective,
        "e-ribbon-group": RibbonGroupDirective,
        "e-ribbon-collections": RibbonCollectionsDirective,
        "e-ribbon-collection": RibbonCollectionDirective,
        "e-ribbon-items": RibbonItemsDirective,
        "e-ribbon-item": RibbonItemDirective
    },
    provide: {
        ribbon: [RibbonBackstage]
    },
    data: function () {
        return {
            backstageSettings: {
                visible: true,
                template: this.homeContentTemplate()
            },
            largeSize: RibbonItemSize.Large,
            pasteSettigs:{ 
            iconCss: "e-icons e-paste", content: "Paste",
            items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
            },
            cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
            copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
        };
    },
    methods: {
        displayPopup() {
            this.backstagePopup = this.ribbonEle.querySelector('#ribbon_backstagepopup');
            if (this.backstagePopup) {
                this.backstagePopup.style.display = 'block';
            }
        },
        contentClick(id) {
            this.content = this.ribbonEle.querySelector('.content-open')
            if (this.content) { this.content.classList.replace('content-open', 'content-close'); }
            this.ribbonEle.querySelector('#' + id + '-wrapper').classList.add('content-open');
        },
        closeContent() {
            this.ribbonEle.querySelector('#ribbon_backstagepopup').style.display = 'none';
        },
        homeContentTemplate() {
            return `
     <div id="temp-content" style="width: 550px; height: 350px; display: flex">
            <div id="items-wrapper" style="width: 130px; height:100%; background: #779de8;">
                <ul>
                    <li id="close">
                        <span class="e-icons e-close"></span>
                        Close
                    </li>
                    <li id="new">
                        <span class="e-icons e-file-new"></span>
                        New
                    </li>
                    <li id="open">
                        <span class="e-icons e-folder-open"></span>
                        Open
                    </li>
                    <li id="save">
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
        },
        bindBackstageEvents() {
            document.querySelector("#close").addEventListener("click", this.closeContent);
            document.querySelector("#new").addEventListener("click", () => this.contentClick("new"));
            document.querySelector("#open").addEventListener("click", () => this.contentClick("open"));
            document.querySelector("#save").addEventListener("click", () => this.contentClick("save"));
        }
    },
    mounted() {
        this.ribbonEle = document.getElementById('ribbon');
        document.querySelector('.e-ribbon-backstage').onclick = this.displayPopup.bind(this);
        this.bindBackstageEvents();
    },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";

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