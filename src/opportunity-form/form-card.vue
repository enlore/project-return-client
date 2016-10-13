<template lang="pug">
    .formCard.is-active(data-card="1")
        .formCard-header.u-text-center
            h2.formCard-title  {{ title }}
            p.formCard-subTitle  {{ subTitle }}

        .formCard-checklist
            template(v-for="c in options")
                .checklist-group
                    label()
                        input(type="checkbox", :value="c", v-model="selection")
                        span {{ c }}

                    select(v-show="showYear(c)", v-model="years")
                        option(v-for="n in 100", :value="2017 - n") {{ 2017 - n }}

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
.formCard {
    background-color: white;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    padding: 36px 72px;
    max-width: 800px;
    margin-top: 32px;
}

.formCard-checklist {
    margin-top: 32px;
}

.checklist-group {
    display: flex;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;

}

.checklist-group input {
    flex: 0 1 36px;
}

.checklist-group span {
    margin-left: 16px;
}

.checklist-group label {
    flex: 0 1 150px;
}

.checklist-group select {
    flex: 0 1 150px;
}

</style>

