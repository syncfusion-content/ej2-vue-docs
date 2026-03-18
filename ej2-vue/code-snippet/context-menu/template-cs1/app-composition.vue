<template>
    <div class="control-section">
        <div class="contextmenu-control">
            <div id='contextmenutarget'></div>
            <ejs-contextmenu cssClass="e-contextMenu-template" id="contextmenu" ref="contextMenu"
                target="#contextmenutarget" :items="data" :itemTemplate="'itemTemplate'" :beforeOpen="addtemplateClass">
                <template v-slot:itemTemplate="{ data }">
                    <div class="menu-wrapper">
                        <span :class="`${data.iconCss} icon-right`"></span>
                        <div class="text-content">
                            <span class="text">{{ data.answerType }}</span>
                            <span class="description">{{ data.description }}</span>
                        </div>
                    </div>
                </template>
            </ejs-contextmenu>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ContextMenuComponent as EjsContextmenu } from "@syncfusion/ej2-vue-navigations";

const data = ref([
    {
        answerType: 'Selection',
        description: "Choose from options",
        iconCss: 'e-icons e-list-unordered'
    },
    {
        answerType: 'Yes / No',
        description: "Select Yes or No",
        iconCss: 'e-icons e-check-box',
    },
    {
        answerType: 'Text',
        description: "Type own answer",
        iconCss: 'e-icons e-caption',
        items: [
            {
                answerType: 'Single line',
                description: "Type answer in a single line",
                iconCss: 'e-icons e-text-form'
            },
            {
                answerType: 'Multiple line',
                description: "Type answer in multiple line",
                iconCss: 'e-icons e-text-wrap',
            }
        ]
    },
    {
        answerType: 'None',
        iconCss: 'e-icons e-mouse-pointer',
        description: "No answer required"
    }
]);

const addtemplateClass = (args) => {
    if (args.element.classList.contains('e-ul')) {
        args.element.classList.add('e-contextMenu-template');
    }
};

onMounted(() => {
    const menuObj = ref('contextMenu').value.ej2Instances;
    if (window.browserDetails.isDevice) {
        document.getElementById("contextmenutarget").textContent =
            "Touch hold to open the Context Menu and select the answer type";
        menuObj.animationSettings.effect = "ZoomIn";
    } else {
        document.getElementById("contextmenutarget").textContent =
            "Right click/Touch hold to open the Context Menu and select the answer type";
        menuObj.animationSettings.effect = "SlideDown";
    }
});
</script>

<style>
/* Import Syncfusion styles */
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

/* Local styles */
#target {
    border: 1px dashed;
    height: 150px;
    padding: 10px;
    position: relative;
    text-align: justify;
    color: gray;
    user-select: none;
}

.e-contextMenu-template .menu-wrapper {
    display: flex;
    align-items: center;
    padding: 2px;
}

.e-contextMenu-template .menu-wrapper .text-content {
    display: flex;
    flex-direction: column;
}

.e-contextMenu-template .menu-wrapper .text {
    font-weight: 600;
}

.e-contextMenu-template .menu-wrapper .description {
    font-size: 0.8em;
}

.e-contextMenu-template .menu-wrapper .icon-right {
    padding: 8px 8px 8px 0px;
    font-size: 1.5em;
}

.e-contextMenu-template .e-caret {
    margin-top: -34px !important;
}

.e-contextMenu-template .e-menu-item {
    height: auto !important;
    line-height: unset !important;
}

.contextmenu-control {
    margin: 5% 25%;
    width: auto;
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
}

#contextmenutarget {
    border: 1px dashed;
    height: 250px;
    padding: 10px;
    position: relative;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
    justify-content: center;
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 700px) {
    .contextmenu-control {
        margin: 5% 10%;
        width: auto;
    }

    #contextmenutarget {
        line-height: 19;
        font-size: 12px;
    }
}
</style>