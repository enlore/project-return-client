<template lang="pug">
    .checklist-group
        label()
            input(type="checkbox", :value="c", v-model="selection")
            span {{ c }}

        select(v-show="showYear(c)", v-model="years")
            option(v-for="n in 100", :value="2017 - n") {{ 2017 - n }}
</template>

<script>
export default {
  data () {
    return {

    }
  },

  /*created () {},*/
  /*beforeCompile () {},*/
  /*compiled () {},*/
  /*ready () {},*/
  /*beforeDestroy () {},*/
  /*destroyed () {}*/
}
</script>

<style lang="scss" scoped>
</style>

