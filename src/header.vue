<template lang="pug">
    header.appHeader
        img.headerLogo(src="//placehold.it/220x75?text=Project Return Logo")
        h1.appHeader-pageTitle Job Opportunity Matching
</template>

<script>
export default {
  data () {
    return {

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
$deepBlue: #333366;

.appHeader {
    background-color: white;
    clear: both;
}

.appHeader-pageTitle {
    color: $deepBlue;
    width: 60%;
    float: right;
    text-align: right;
    padding-right: 32px;
    font-weight: 500;
}

.headerLogo {
    height: 75px;
}
</style>

