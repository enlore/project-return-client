<template lang="pug">
    .result-row.
        {{ result }}
</template>

<script>
    export default {
        data () {
            return {

            }
        },

        props: [
            "result"
        ]
    }
</script>

<style lang="scss" scoped>
.result-row {
    margin: 0 auto;
    background-color: white;
    width: 1120px;
    padding: 16px;
    border-bottom: 1px solid #EDEDED;
    position: relative; // WTF css (this fixes drop shadows so they appear over siblings)
}

.result-row:first-child {
    border-radius: 5px 5px 0 0;
}

.result-row:last-child {
    border-bottom: none;
}

.result-row:hover {
    width: 1180px;
    box-shadow: 0px 4px 25px -2px black;
}
</style>

