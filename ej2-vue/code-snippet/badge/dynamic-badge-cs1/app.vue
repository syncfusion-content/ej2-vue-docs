<template>
    <div id='element'>
        <div class="sample_container badge-list">
            <!-- Listview element -->
            <ejs-listview id="lists" :dataSource="data" :headerTitle="title" :showHeader="header" :template="listTemplate" :fields="fieldData"></ejs-listview>
            <p class='crossline'></p>
            <span class='incr_button'>
                <button class='e-btn e-primary' v-on:click="butonClick()">Increment Badge Count</button>
            </span>
        </div>
    </div>
</template>

<script>

import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import {createApp} from 'vue';

const app = createApp({});

var templateVue = app.component("template", {
  template: `
    <div class="listWrapper" style="width: inherit;height: inherit;">
        <span :class="[data.icons + 'list_svg']">&nbsp;</span>
        <span class="list_text">{{data.text}} </span>
        <span :class="[data.badge]" v-if="data.messages !== ''" style="float: right;margin-top: 16px;font-size: 12px;">{{data.messages}} New</span>
    </div>
  `,
  data() {
    return {
      data: {}
    };
  }
});

export default {
name: "App",
components: {
"ejs-listview":ListViewComponent,

},

    data: function() {
        return {
            data: [
            {
                id: "p_01",
                text: "Primary",
                messages: 3,
                badge: "e-badge e-badge-primary",
                icons: "primary",
                type: "Primary"
            },
            {
                id: "p_02",
                text: "Social",
                messages: 27,
                badge: "e-badge e-badge-secondary",
                icons: "social",
                type: "Primary"
            },
            {
                id: "p_03",
                text: "Promotions",
                messages: 7,
                badge: "e-badge e-badge-success",
                icons: "promotion",
                type: "Primary"
            },
            {
                id: "p_04",
                text: "Updates",
                messages: 13,
                badge: "e-badge e-badge-info",
                icons: "updates",
                type: "Primary"
            },
            {
                id: "p_05",
                text: "Starred",
                messages: "",
                badge: "",
                icons: "starred",
                type: "All Labels"
            },
            {
                id: "p_06",
                text: "Important",
                messages: 2,
                badge: "e-badge e-badge-danger",
                icons: "important",
                type: "All Labels"
            },
            {
                id: "p_07",
                text: "Sent",
                messages: "",
                badge: "",
                icons: "sent",
                type: "All Labels"
            },
            {
                id: "p_08",
                text: "Outbox",
                messages: "",
                badge: "",
                icons: "outbox",
                type: "All Labels"
            },
            {
                id: "p_09",
                text: "Drafts",
                messages: 7,
                badge: "e-badge e-badge-warning",
                icons: "draft",
                type: "All Labels"
            }
        ],
        title: "Inbox",
        header: true,
        listTemplate: function() {
            return { template: templateVue };
        },
        fieldData: { groupBy: "type" }
        };
    },
    methods: {
        butonClick: function() {
            let badgeElements = Array.prototype.slice.call(
                document.getElementById("lists").getElementsByClassName("e-badge")
            );
            badgeElements.forEach((element) => {
                element.textContent =
                    Number(element.textContent.split(" ")[0]) + 1 + " New";
            });
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";

    #element {
        width: 400px;
        margin: auto;
        border-radius: 3px;
        justify-content: center;
    }

    /* Listview Customization */

    #letterAvatarList {
        max-width: 350px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
    }

    #letterAvatarList .listWrapper {
        width: inherit;
        height: inherit;
        position: relative;
    }

    #letterAvatarList .e-list-header {
        height: 54px;
    }

    #letterAvatarList .e-list-header .e-text {
        line-height: 22px;
    }

    #letterAvatarList .e-list-item {
        cursor: pointer;
        height: 50px;
        line-height: 44px;
        border: 0;
    }

    /* Badge Positioning */

    #letterAvatarList .e-badge {
        margin-top: 12px;
    }

    #letterAvatarList .listWrapper .list-text {
        width: 60%;
        display: inline-block;
        vertical-align: middle;
        margin: 0 50px;
    }

    /* Avatar Positioning */

    #letterAvatarList .listWrapper .e-avatar {
        position: absolute;
        top: calc(100% - 40px);
        font-size: 10px;
        left: 5px;
    }

    /* Avatar Background Customization */

    #letterAvatarList .e-list-item:nth-child(1) .e-avatar {
        background-color: #039BE5;
    }

    #letterAvatarList .e-list-item:nth-child(3) .e-avatar {
        background-color: #E91E63;
    }

    #letterAvatarList .e-list-item:nth-child(5) .e-avatar {
        background-color: #009688;
    }
</style>