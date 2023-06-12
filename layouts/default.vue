<template>
  <div>
    <BaseHeader />
    <Transition name="slide-fade">
        <Nuxt />
    </Transition>
    <BaseFooter />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */

.slide-fade-enter,
.slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>