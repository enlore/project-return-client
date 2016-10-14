<template lang="pug">
    .checklist-group
        label()
            input(type="checkbox", :true-value="option", v-model="type")
            span {{ option }}

        select(v-show="showYear()", v-model="year")
            option(v-for="n in 100", :value="2017 - n") {{ 2017 - n }}
</template>

<script>
export default {
    data () {
        return {
            type: "",
            year: undefined
        }
    },

    watch: {
        year () { this.doPick() },
        type () { this.doPick() }
    },

    methods: {
        showYear () {
            return this.type !== ""
        },

        doPick () {
            let pick = {
                type: this.type,
                year: this.year
            }

            console.info(pick)

            this.$emit("donePicked", pick)
        }
    },

    props: ["option"],

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

