<template lang="pug">
    #opportunity-form.form-area
        .prevCardTab(@click="prevCard")
            span back

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

export default {
    data () {
        return {
            years: [],
            convictions: [],
            cardIndex: 0,
            cards: [
                {
                    component: "form-card-convictions",
                    title: "Conviction History",
                    subTitle: "Which of the following have you been convicted of?",
                    type: "convictions",
                    options: [
                        "Violent Offense",
                        "Drug Offense",
                        "Sex Offense",
                        "Theft",
                        "Arson"
                    ]
                },
                {
                    component: "form-card-convictions",
                    title: "Conviction History 2",
                    subTitle: "Which of the following have you been convicted of?",
                    type: "convictions",
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
                    type: "convictions",
                    options: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    component: "form-card-multi",
                    title: "Driver's License",
                    subTitle: "Do you have a driver's license?",
                    type: "convictions",
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
                    component: "form-card-multi",
                    title: "Industry",
                    subTitle: "Which of the following industries interest you?",
                    type: "convictions",
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
    },

    components: {
        'form-card': FormCard,
        'form-card-convictions': FormCardConvictions,
        'form-card-boolean': FormCardBoolean,
        'form-card-multi': FormCardMulti
    },

    methods: {
        toggleYearSelect () {},


        nextCard (index) { 
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
</style>

