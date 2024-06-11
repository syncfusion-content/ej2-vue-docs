<template>
    <div class="col-lg-8 control-section uploader chunk">
        <div class="control_wrapper">
            <ejs-uploader id='validation' name="UploadFiles" :asyncSettings="path" ref="uploadObj" :locale='locale'
                :autoUpload='false'>
            </ejs-uploader>
        </div>
    </div>
</template>
<script>

import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    "fr-CH": {
        "uploader": {
            "invalidMinFileSize": "La taille du fichier est trop petite! S'il vous plaît télécharger des fichiers avec une taille minimale de 10 Ko",
            "invalidMaxFileSize": "La taille du fichier dépasse 28 Mo",
            "invalidFileType": "Le type de fichier n'est pas autorisé",
            "Browse": "Feuilleter",
            "Clear": "Clair",
            "Upload": "Télécharger",
            "dropFilesHint": "ou Déposer des fichiers ici",
            "uploadFailedMessage": "Impossible d'importer le fichier",
            "uploadSuccessMessage": "Fichier téléchargé avec succès",
            "removedSuccessMessage": "Fichier supprimé avec succès",
            "removedFailedMessage": "Le fichier n'a pas pu être supprimé",
            "inProgress": "Téléchargement",
            "readyToUploadMessage": "Prêt à télécharger",
            "remove": "Retirer",
            "cancel": "Annuler",
            "delete": "Supprimer le fichier",
            "totalFiles": "Total des fichiers",
            "size": "taille"
        }
    }
})
export default {
    name: "App",
    components: {
        "ejs-uploader": UploaderComponent
    },
    data: function () {
        return {
            path: {
                saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
            },
            extensions: '.doc, .docx, .xls, .xlsx',
            locale: 'fr-CH'
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#container {
    visibility: hidden;
    padding-left: 5%;
    width: 100%;
}

#loader {
    color: #008cff;
    font-family: 'Helvetica Neue', 'calibiri';
    font-size: 14px;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
</style>