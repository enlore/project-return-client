<template lang="pug">
    #app
        header-bar
</template>

<script>
import Header from './header.vue'

export default {
    data () {
        return {
        }
    },

    components: {
        "header-bar": Header
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
