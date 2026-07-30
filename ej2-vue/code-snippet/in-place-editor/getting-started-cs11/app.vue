<template>
  <div id="app">
    <div class="control-group">
      <h3>Modify Basic Details</h3>
      <ejs-inplaceeditor
        id="element"
        type="Text"
        mode="Inline"
        value="Andrew"
        :model="textModel"
      ></ejs-inplaceeditor>
    </div>
  </div>
</template>

<script>
  import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';
  
  export default {
    name: 'App',
    components: {
      'ejs-inplaceeditor': InPlaceEditorComponent,
    },
    data() {
      return {
        textModel: {
          placeholder: 'Enter your name',
        },
      };
    },
  };
</script>

<style>
  #app .control-group {
    text-align: center;
    margin-top: 50px;
  }

  #app .control-group table {
    width: 400px;
    margin: auto;
  }

  #app .control-group table td {
    height: 70px;
    width: 150px;
  }

  #app .control-group table td.left {
    text-align: left;
  }
</style>