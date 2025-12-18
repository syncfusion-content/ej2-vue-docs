<template>
    <div>
        <div class="col-lg-12 control-section adornment-mask">
            <div class="content-wrapper">
                <div class="mask-row">
                    <ejs-maskedtextbox id="maskTextbox" mask="0000-000-000" promptChar="#" floatLabelType="Auto" cssClass="e-prepend-mask" placeholder="Enter phone number" :prependTemplate="'prependTemplate'" :appendTemplate="'appendTemplate'">
                        <template v-slot:prependTemplate>
                            <span id="user" class="e-icons e-user" title="User"></span>
                            <span class="e-input-separator"></span>
                        </template>
                        <template v-slot:appendTemplate>
                            <span class="e-input-separator"></span>
                            <span id="sendIcon" class="e-icons e-send"></span>
                        </template>
                    </ejs-maskedtextbox>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { getComponent } from '@syncfusion/ej2-base';

export default {
    data: function() {
        return {};
    },
    components: { 
        'ejs-maskedtextbox': MaskedTextBoxComponent
    },
};

</script>
