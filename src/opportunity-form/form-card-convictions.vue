<template lang="pug">
    .formCard.is-active(data-card="1")
        .formCard-header.u-text-center
            h2.formCard-title  {{ title }}
            p.formCard-subTitle  {{ subTitle }}

        .formCard-checklist
            template(v-for="c in convictions")
                conviction-group(@donePicked="updateSelection",
                    v-for="c in convictions",
                    :option="c"
                )

        button.btn.btn--primary.btn--center(@click="nextCard") Next

</template>

<script>
import { mapState } from 'vuex'
import ConvictionGroup from './conviction-group.vue'

export default {
    data () {
        return {
            selection: [],
            years: []
        }
    },

    watch: {
        selection () {
            /*
            this.$emit("formInput", {
                type: this.type,
                data: this.selection
            })
            */
        }
    },

    props: [
        "type",
        "index",
        "config",
        "options",
        "title",
        "subTitle"
    ],

    components: {
        'conviction-group': ConvictionGroup
    },

    computed: {
        convictions: mapState(['convictions']).convictions
    },

    methods: {
        updateSelection (data) {
            let found = false

            this.selection.forEach((item, i) => {
                if (item.type === data.type) {
                    this.selection[i] = data
                    found = true
                }
            })

            if (!found)
                this.selection.push(data)

            this.$emit("formInput", {
                type: this.type,
                data: this.selection
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

