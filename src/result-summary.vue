<template lang="pug">
    #job-match-results
        .jobMatchResults
            .jobMatchResults-query
                .jobMatchResults-header
                    h2 Search Results
                    p Click on any item to view more details about that opportunity.

                .jobsMatchResults-queryParts
                    .jobsMatchResults-section
                        b Conviction History
                        p Violent Offense in 2007

                    .jobsMatchResults-section
                        b Abilities
                        p Caregiving 
                        p Specialized tools operations

                    .jobsMatchResults-section
                        b Industry
                        p Building Construction/Skilled Trade 
                        p Manufacturing/Productions/Operations

                    .jobsMatchResults-section
                        b Driver's License
                        p Yes

                    .jobsMatchResults-section
                        b Part Time Only
                        p No

            .jobMatchResults-rows
                result-row(v-for="result in results",
                    :result="result"
                )
</template>

<script>
    import ResultRow from './result-summary/result-row.vue'

    export default {
        data () {
            return {
                lastQuery: {

                },
                results: [
                    { name: "A Job at this place" },
                    { name: "A Job at this place" },
                    { name: "A Job at this place" },
                    { name: "A Job at this place" },
                ]
            }
        },

        components: {
            'result-row': ResultRow
        }
    }
</script>

<style lang="scss" scoped>
.jobMatchResults-query {
    margin: 0 auto;
    max-width: 1120px;
    background-color: white;
    border-radius: 5px;
    padding: 32px;
}

.jobsMatchResults-queryParts {
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 32px auto 0;
}

.jobsMatchResults-section {
    flex: 0 0 250px;
    padding: 16px;
}

.jobMatchResults-header {
    margin-top: 32px;
    text-align: center;
}

.jobMatchResults-rows {
    margin-top: 32px;
}
</style>
