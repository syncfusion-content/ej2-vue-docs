<template>
    <div id="app">
        <div id='container'>
            <ejs-tab ref="tabObj" id='draggableTab' heightAdjustMode='Auto' :allowDragAndDrop="true"
                dragArea="#container" :created="onTabCreate" :dragged="tabDragStop">
                <e-tabitems>
                    <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
                    <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
                    <e-tabitem :header='headerText2' :content="content2"></e-tabitem>
                    <e-tabitem :header='headerText3' :content="content3"></e-tabitem>
                </e-tabitems>
            </ejs-tab>
            <ejs-treeview ref="treeObj" id="draggableTreeview" :fields="fields" cssClass="treeview-external-drop-tab">
            </ejs-treeview>
        </div>
    </div>
</template>
<script setup>

import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem, TreeViewComponent as EjsTreeview } from '@syncfusion/ej2-vue-navigations';
import { ref } from 'vue';

const tabObj = ref(null);
const treeObj = ref(null);
const headerText0 = { text: 'India' };
const headerText1 = { text: 'Australia' };
const headerText2 = { text: 'USA' };
const headerText3 = { text: 'France' };
const fields = {
    dataSource: [
        { text: 'Hennessey Venom', id: 'list-01' },
        { text: 'Bugatti Chiron', id: 'list-02' },
        { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
        { text: 'SSC Ultimate Aero', id: 'list-04' },
        { text: 'Koenigsegg CCR', id: 'list-05' },
        { text: 'McLaren F1', id: 'list-06' },
        { text: 'Aston Martin One- 77', id: 'list-07' },
        { text: 'Jaguar XJ220', id: 'list-08' },
        { text: 'McLaren P1', id: 'list-09' },
        { text: 'Ferrari LaFerrari', id: 'list-10' },
    ],
    id: "id", text: "text",
};

const content0 = 'India officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west;China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.';

const content1 = 'Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the world sixth-largest country by total area. Neighboring countries include Indonesia, East Timor and Papua New Guinea to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east.';

const content2 = 'The United States of America (USA or U.S.A.), commonly called the United States (US or U.S.) and America, is a federal republic consisting of fifty states and a federal district. The 48 contiguous states and the federal district of Washington, D.C. are in central North America between Canada and Mexico. The state of Alaska is west of Canada and east of Russia across the Bering Strait, and the state of Hawaii is in the mid-North Pacific. The country also has five populated and nine unpopulated territories in the Pacific and the Caribbean.';

const content3 = 'France, officially the French Republic is a sovereign state comprising territory in western Europe and several overseas regions and territories. The European part of France, called Metropolitan France, extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean; France covers 640,679 square kilo metres and as of August 2015 has a population of 67 million, counting all the overseas departments and territories.';

const onTabCreate = () => {
    let tabElement = document.getElementById('draggableTab');
    if (!isNullOrUndefined(tabElement)) {
        tabElement.querySelector('.e-tab-header').classList.add('e-droppable');
        tabElement.querySelector('.e-content').classList.add('tab-content');
    }
};
const tabDragStop = (args) => {
    const tabObject = tabObj.value.ej2Instances;
    const treeObject = treeObj.value.ej2Instances;
    let dragTabIndex = Array.prototype.indexOf.call(tabObject.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);
    let dragItem = tabObject.items[dragTabIndex];
    let dropNode = args.target.closest('#draggableTreeview .e-list-item');
    if (dropNode != null && !args.target.closest('#draggableTab .e-toolbar-item')) {
        args.cancel = true;
        let dropContainer = (document.querySelector('.treeview-external-drop-tab')).querySelectorAll('.e-list-item');
        let dropIndex = Array.prototype.indexOf.call(dropContainer, dropNode);
        let newNode = [{ id: 'list' + this.i, text: dragItem.header.text }];
        tabObject.removeTab(dragTabIndex);
        treeObject.addNodes(newNode, 'Treeview', dropIndex);
    }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

#draggableTab .e-content .e-item {
    font-size: 12px;
    margin: 10px;
    text-align: justify;
}

.treeview-external-drop-tab .e-list-item,
.e-bigger .treeview-external-drop-tab .e-list-item {
    border: 0.5px solid #E1E7EC;
    line-height: 15px;
    padding: 0 5px;
}

.treeview-external-drop-tab .e-list-item.e-hover>.e-fullrow,
.treeview-external-drop-tab .e-list-item.e-active>.e-fullrow,
.treeview-external-drop-tab .e-list-item.e-active.e-hover>.e-fullrow,
.e-bigger .treeview-external-drop-tab .e-list-item.e-hover>.e-fullrow,
.e-bigger .treeview-external-drop-tab .e-list-item.e-active>.e-fullrow,
.e-bigger .treeview-external-drop-tab .e-list-item.e-active.e-hover>.e-fullrow {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none !important;
}

#draggableTab {
    margin-bottom: 40px;
}

#draggableTreeview {
    margin-top: 40px;
}
</style>