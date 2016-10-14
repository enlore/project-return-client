<template lang="pug">
    .formCard.is-active(data-card="1")
        .formCard-header.u-text-center
            h2.formCard-title  {{ title }}
            p.formCard-subTitle  {{ subTitle }}

        .formCard-multi
            template(v-for="c in options")
                .multi-group
                    label()
                        input(type="checkbox", :value="c", v-model="selection")
                        span {{ c }}

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

    watch: {
        selection () {
            this.$emit("formInput", {
                type: this.type,
                data: this.selection
            })
        }
    },


    props: [
        "type",
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
.formCard-multi {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 320px;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
}

.multi-group {
    flex: 1 1 auto;
    padding: 12px;
    //text-align: center;
}

.multi-group label {
    //text-align: center;
}

.multi-group label input {
}

.multi-group label span {
    margin-left: 8px;
}
</style>

