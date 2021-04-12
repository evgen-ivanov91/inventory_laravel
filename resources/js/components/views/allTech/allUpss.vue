<template>
    <div class="container">
        <span class="title">Источник бесперебойного питания</span>
        <div class="card" style="width: 100%;" v-for="ups in Upss" :key="ups.id">
            <ups :ups="ups" @open="loadUpss"> </ups>
        </div>
    </div>
</template>

<script>
import CreateUps from "../create/CreateUps";
import Ups from "../ComponentTech/Ups";
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
.title{
    font-size: 1.5em;
    margin-bottom: 15px;
}
.create{
    padding-top: 20px;
}
.card{
    width: 100%;
    margin: 10px 0;
}
</style>
