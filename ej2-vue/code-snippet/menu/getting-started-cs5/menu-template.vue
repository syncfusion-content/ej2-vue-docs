<template>
  <span class="e-menu-template" v-if="data.category">
    {{data.category}}
  </span>
  <div v-else-if="data.value && data.url" class="e-avatar e-avatar-small image" v-bind:style="image">{{data.value}}</div>
  <span class="e-menu-template" v-else-if="data.support">
    <ul>
      <li v-bind:key="index" v-for="(val,index) of data.support">
        {{val.value}}
        <span v-if="val.count" class="e-badge e-badge-success">{{val.count}}</span>
      </li>
    </ul>
  </span>
  <div tabindex="0" class="e-card" v-else>
      <div class="e-card-header">
          <div class="e-card-header-caption">
              <div class="e-card-header-title">About Us</div>
          </div>
      </div>
      <div class="e-card-content">
          {{data.about.value}}
      </div>
      <div class="e-card-actions">
          <button class="e-btn e-outline">
              Read More
          </button>
      </div>
  </div>
</template>
 
<script>
 
export default {
  data () {
    return {
      data: {}
    }
  },
  computed: {
    image: function() {
      return 'background-image: url(src/menu/images/' + this.data.url + '.png);';
    }
  }
}
</script>
