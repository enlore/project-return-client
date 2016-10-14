<template lang="pug">
    #opportunity-form.form-area
        .prevCardTab(@click="prevCard", v-show="showPrev")
            span.fa.fa-2x.fa-chevron-left.prevCardTab-chevron

        .nextCardTab(v-show="showNext")
            //span next

        component( :is="currentCard",
            :title="cards[cardIndex].title",
            :subTitle="cards[cardIndex].subTitle",
            :config="cards[cardIndex]",
            :index="cardIndex",
            :options="cards[cardIndex].options",
            @nextCard="nextCard"
        )

</template>

<script>
import FormCard from './opportunity-form/form-card.vue'
import FormCardConvictions from './opportunity-form/form-card-convictions.vue'
import FormCardBoolean from './opportunity-form/form-card-boolean.vue'
import FormCardMulti from './opportunity-form/form-card-multi.vue'
import FormCardName from './opportunity-form/form-card-name.vue'

export default {
    data () {
        return {
            years: [],
            convictions: [],
            cardIndex: 0,
            cards: [
                {
                    component: "form-card-name",
                    title: "Participant",
                    subTitle: "",
                    options: [
                    ]
                },
                {
                    component: "form-card-convictions",
                    title: "Conviction History",
                    subTitle: "Which of the following have you been convicted of?",
                    options: [
                        "Violent Offense",
                        "Drug Offense",
                        "Sex Offense",
                        "Theft",
                        "Arson"
                    ]
                },
                {
                    component: "form-card-boolean",
                    title: "Driver's License",
                    subTitle: "Do you have a driver's license?",
                    options: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    component: "form-card-multi",
                    title: "Abilities",
                    subTitle: "Which of the following are you capable of?Which of the following are you capable of?",
                    options: [
                        "Caregiving",
                        "Standing 8 hours",
                        "Computer operations",
                        "Customer service",
                        "Forklift operations",
                        "Heavy lifting",
                        "Specialized tools operations",
                        "Basic Math",
                        "Outside work"
                    ]
                },
                {
                    component: "form-card-boolean",
                    title: "Part-time Availability",
                    subTitle: "Are you solely looking for a part time job?",
                    options: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    component: "form-card-multi",
                    title: "Industry",
                    subTitle: "Which of the following industries interest you?",
                    options: [
                        "Administrative",
                        "Building Construction/Skilled Trade",
                        "Creative/Design",
                        "Education/Training",
                        "Food Service",
                        "Groundskeeping/Landscaping",
                        "Housekeeping/Janitorial",
                        "Logistics/Transportation",
                        "Manufacturing/Productions/Operations",
                        "Medical/Health",
                        "Other",
                        "Sales/Retail/Customer Service",
                        "Security/Protective Services",
                        "Installation/Maintenance"
                    ]
                }
            ]
        }
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
        }
    },

    components: {
        'form-card': FormCard,
        'form-card-convictions': FormCardConvictions,
        'form-card-boolean': FormCardBoolean,
        'form-card-multi': FormCardMulti,
        'form-card-name': FormCardName
    },

    methods: {
        toggleYearSelect () {},


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

