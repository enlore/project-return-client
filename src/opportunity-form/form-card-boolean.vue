<template lang="pug">
    .formCard.is-active(data-card="1")
        .formCard-header.u-text-center
            h2.formCard-title  {{ title }}
            p.formCard-subTitle  {{ subTitle }}

        .formCard-boolGroup
            template(v-for="option in options")
                label
                    input(type="radio", v-model="selection", :value="option")
                    span {{ option }}

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
        options: {
            get () {
                return this.config.options
            }
        }
    },

    methods: {
        showYear (conviction) {
            return this.selection.indexOf(conviction) !== -1;
        },

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

