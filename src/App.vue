<template lang="pug">
    #app
        header-bar
        .appBody
            router-view
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

<style lang="scss">
body {
  font-family: Helvetica, sans-serif;
}

.appBody {
    position: absolute;
    top: 125px;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
