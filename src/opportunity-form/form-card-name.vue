
<template lang="pug">
    .formCard.is-active(data-card="1")
        .formCard-header.u-text-center
            h2.formCard-title  {{ title }}
            p.formCard-subTitle  {{ subTitle }}

        .formCard-inputGroup
            .formCard-group
            label Name
            input(type="text")

        button.btn.btn--primary.btn--center(@click="nextCard") Next
</template>

<script>
export default {
    data () {
        return {
            selection: [],
            years: []
        }
    },

    props: [
        "index",
        "config",
        "title",
        "subTitle"
    ],

    computed: {
    },

    methods: {
        nextCard () {
            this.$emit("nextCard", this.index)
        }
    }

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

