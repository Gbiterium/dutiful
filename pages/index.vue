<template>
  <div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'empty',
  created () {
  this.$router.push('/auth/signup')
  }
})
</script>
<style>
</style>