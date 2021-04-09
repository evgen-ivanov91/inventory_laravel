<template>
    <div class="container">
        <span>источник бесперебойного питания</span>
        <create-ups></create-ups>
        <div class="card" style="width: 100%;" v-for="ups in Upss" :key="ups.id">
            <ups :ups="ups"> </ups>
        </div>
    </div>
</template>

<script>
import CreateUps from "./CreateUps";
import Ups from "./Ups";
export default {
    name: "allUpss",
    components: {Ups, CreateUps},
    data:()=>({
        upss: []
    }),
    mounted() {
        this.loadUpss();
    },
    methods:{
        loadUpss(){
            this.$store.dispatch('ajaxUpsFromDB')
        }
    },
    computed:{
        Upss(){
            return this.$store.getters.getUps
        }
    }
}
</script>

<style scoped>

</style>
