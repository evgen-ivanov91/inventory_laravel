<template>
    <div class="container">
        <span class="title">Наушники</span>
        <div class="card" v-for="headphones in Headphoneses" :key="headphones.id">
            <headphones :headphones="headphones" @open="loadHeadphoneses"></headphones>
        </div>
    </div>
</template>

<script>
import CreateHeadphones from "../create/CreateHeadphones";
import Headphones from "../ComponentTech/Headphones";
export default {
    name: "allHeadphoneses",
    components: {Headphones, CreateHeadphones},
    data:()=>({
        headphoneses: []
    }),
    mounted() {
        this.loadHeadphoneses();
    },
    methods:{
        loadHeadphoneses(){
            this.$store.dispatch('ajaxHeadphonesFromDB')
        }
    },
    computed:{
        Headphoneses(){
            return this.$store.getters.getHeadphoneses
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
