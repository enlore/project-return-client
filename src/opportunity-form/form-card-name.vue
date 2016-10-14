
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
                    input(type="text", v-model="cFirst")

                .formCard-inputGroup
                    label Last
                    input(type="text", v-model="cLast")

            .halfGroup
                h3 Participant
                .formCard-inputGroup
                    label First
                    input(type="text", v-model="pFirst")

                .formCard-inputGroup
                    label Last
                    input(type="text", v-model="pLast")

        button.btn.btn--primary.btn--center(@click="nextCard") Next
</template>

<script>
export default {
    data () {
        return {
            selection: [],
            years: [],
            cFirst: "",
            cLast: "",
            pFirst: "",
            pLast: "",
        }
    },

    watch: {
        cFirst () {
            this.doNameChange()
        },

        cLast () {
            this.doNameChange()
        },

        pFirst () {
            this.doNameChange()
        },

        pLast () {
            this.doNameChange()

        },
    },

    props: [
        "type",
        "index",
        "config",
        "title",
        "subTitle"
    ],

    computed: {
    },

    methods: {
        doNameChange () {
            this.$emit("formInput", {
                type: this.type,
                data: {
                    cFirst: this.cFirst,
                    cLast: this.cLast,
                    pFirst: this.pFirst,
                    pLast: this.pLast,
                }
            })
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

