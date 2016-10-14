<template lang="pug">
    #opportunity-form.form-area
        p {{ criteria  }}
        .prevCardTab(@click="prevCard", v-show="showPrev")
            span.fa.fa-2x.fa-chevron-left.prevCardTab-chevron

        .nextCardTab(v-show="showNext")
            //span next

        component( :is="currentCard",
            :title="cards[cardIndex].title",
            :subTitle="cards[cardIndex].subTitle",
            :config="cards[cardIndex]",
            :index="cardIndex",
            :type="cards[cardIndex].type",
            :options="cards[cardIndex].options",
            @formInput="onInput",
            @nextCard="nextCard"
        )

</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'

import FormCard from './opportunity-form/form-card.vue'
import FormCardConvictions from './opportunity-form/form-card-convictions.vue'
import FormCardBoolean from './opportunity-form/form-card-boolean.vue'
import FormCardMulti from './opportunity-form/form-card-multi.vue'
import FormCardAbilities from './opportunity-form/form-card-abilities.vue'
import FormCardIndustries from './opportunity-form/form-card-industries.vue'
import FormCardName from './opportunity-form/form-card-name.vue'

const mapped = mapState(['criteria', 'abilities', 'convictions', 'industries'])

export default {
    data () {
        return {
            cardIndex: 0,
            searchCriteria: {
                name: {},
                convictions: [],
                driversLicense: false,
                abilities: [],
                industry: [],
                availability: false,

            },
            cards: [
                {
                    component: "form-card-name",
                    title: "Participant",
                    subTitle: "",
                    type: "name",
                    options: []
                },
                {
                    component: "form-card-convictions",
                    title: "Conviction History",
                    subTitle: "Which of the following have you been convicted of?",
                    type: "convictions",
                },
                {
                    component: "form-card-boolean",
                    title: "Driver's License",
                    subTitle: "Do you have a driver's license?",
                    type: "driversLicense",
                    options: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    component: "form-card-abilities",
                    title: "Abilities",
                    subTitle: "Which of the following are you capable of?Which of the following are you capable of?",
                    type: "abilities",
                },
                {
                    component: "form-card-boolean",
                    title: "Part-time Availability",
                    subTitle: "Are you solely looking for a part time job?",
                    type: "availability",
                    options: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    component: "form-card-industries",
                    title: "Industry",
                    subTitle: "Which of the following industries interest you?",
                    type: "industries",
                }
            ]
        }
    },

    watch: {
    },

    computed: {
        currentCard () {
            return this.cards[this.cardIndex].component
        },

        showPrev () {
            return this.cardIndex > 0;
        },

        showNext () {
            return this.cardIndex < this.cards.length - 1;
        },

        criteria: mapped.criteria,
    },

    components: {
        'form-card': FormCard,
        'form-card-convictions': FormCardConvictions,
        'form-card-boolean': FormCardBoolean,
        'form-card-industries': FormCardIndustries,
        'form-card-abilities': FormCardAbilities,
        'form-card-name': FormCardName
    },

    methods: {
        toggleYearSelect () {},

        onInput (input) {
            console.info(input)
            this.searchCriteria[input.type] = input.data
        },

        nextCard () { 
            let index = this.cardIndex

            console.info("Next card call:", index)

            let nextIndex = index + 1

            if (nextIndex < this.cards.length)
                this.cardIndex = nextIndex
        },

        prevCard () {
            let prevIndex = this.cardIndex - 1

            if (prevIndex >= 0)
                this.cardIndex = prevIndex
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
#opportunity-form {
    position: relative;
}

.prevCardTab {
    height: 400px;
    width: 60px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
}

.nextCardTab {
    height: 400px;
    width: 60px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
}

.prevCardTab-chevron {
    position: absolute;;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>

