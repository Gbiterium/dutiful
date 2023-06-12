<template>
  <div class="dashboard-page">
    <div class="pt-4 px-5">Welcome, {{ getUser.user.name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('auth', ['getUser'])
    }
}
</script>

<style scoped>
.dashboard-page {
    min-height: 100vh;
}
</style>