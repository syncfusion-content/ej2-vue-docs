<template>
    <div class="control-section">
        <div class="contextmenu-control">
            <div id="contextmenutarget"></div>
            <ejs-contextmenu cssClass="e-contextMenu-template" id="contextmenu" ref="contextMenu"
                target="#contextmenutarget" :items="data" :itemTemplate="'itemTemplate'" :beforeOpen="addTemplateClass">
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
        <div id="action-description">
            <p>This sample demonstrates the template support functionalities of the ContextMenu. You can customize the
                menu
                items using templates to enhance flexibility and integrate custom content.</p>
        </div>
    </div>
</template>

<script>
import { ContextMenuComponent } from "@syncfusion/ej2-vue-navigations";

export default {
    components: {
        'ejs-contextmenu': ContextMenuComponent
    },
    data() {
        return {
            data: [
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
                    description: "Type your own answer",
                    iconCss: 'e-icons e-caption',
                    items: [
                        {
                            answerType: 'Single line',
                            description: "Type answer in a single line",
                            iconCss: 'e-icons e-text-form'
                        },
                        {
                            answerType: 'Multiple line',
                            description: "Type answer in multiple lines",
                            iconCss: 'e-icons e-text-wrap',
                        }
                    ]
                },
                {
                    answerType: 'None',
                    iconCss: 'e-icons e-mouse-pointer',
                    description: "No answer required"
                },
            ]
        };
    },
    methods: {
        addTemplateClass(args) {
            if (args.element.classList.contains('e-ul')) {
                args.element.classList.add('e-contextMenu-template');
            }
        }
    },
    mounted() {
        const menuObj = this.$refs.contextMenu.ej2Instances;
        const targetElement = document.getElementById("contextmenutarget");
        if (window.navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/)) {
            targetElement.textContent = "Touch hold to open the Context Menu and select the answer type";
            menuObj.animationSettings.effect = "ZoomIn";
        } else {
            targetElement.textContent = "Right click/Touch hold to open the Context Menu and select the answer type";
            menuObj.animationSettings.effect = "SlideDown";
        }
    }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";

.contextmenu-control {
    margin: 5% 25%;
    width: auto;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
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

@media only screen and (max-width: 700px) {
    .contextmenu-control {
        margin: 5% 10%;
        width: auto;
    }

    #contextmenutarget {
        line-height: 19px;
        font-size: 12px;
    }
}
</style>