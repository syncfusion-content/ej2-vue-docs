
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { createApp } from "vue";

createApp({
template: `
<ejs-tooltip class="tooltipcontainer" content='<img src=text onerror=alert("XSS_Script_Attack") \/>'
    enable-html-sanitizer="true" target="#target">
    <div style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
    <ejs-button id='target'>Hover me for a tooltip!</ejs-button>
    </div>
</ejs-tooltip>
`
}).use(TooltipPlugin).use(ButtonPlugin).mount('#app');
