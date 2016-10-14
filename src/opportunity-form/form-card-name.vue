
<template lang="pug">
    .formCard.is-active(data-card="1")
        .formCard-header.u-text-center
            h2.formCard-title  {{ title }}
            p.formCard-subTitle  {{ subTitle }}

        .formCard-textGroup
            .halfGroup
                h3 Coordinator
                .formCard-inputGroup
                    label First
                    input(type="text")

                .formCard-inputGroup
                    label Last
                    input(type="text")

            .halfGroup
                h3 Participant
                .formCard-inputGroup
                    label First
                    input(type="text")

                .formCard-inputGroup
                    label Last
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
.formCard-textGroup {
    display: flex;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
}


.halfGroup {
    flex: 1 1 %50;
}

.halfGroup:first-child {
    margin-right: 16px;
}

.halfGroup:last-child {
    margin-left: 16px;
}

.formCard-inputGroup {
    margin-top: 16px;
}

.formCard-inputGroup input{
    margin-left: 16px;
}
</style>

