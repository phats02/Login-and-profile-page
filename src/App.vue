<template>
  <ToggleDarkMode />
  <router-view/>
</template>
<script>
import ToggleDarkMode from './components/ToggleDarkMode.vue'
export default {
  components: {
    ToggleDarkMode
  }
}
</script>
<style>
</style>
