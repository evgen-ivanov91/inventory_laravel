<template>
    <div class="container">
        <span class="title">Кабинеты</span>
        <div class="create"><create-cabinet></create-cabinet></div>

        <div class="card" v-for="cabinet in Cabinets" :key="cabinet.id">
            <cabinet :cabinet="cabinet" @open="loadCabinets"></cabinet>
        </div>
    </div>
</template>

<script>
import CreateCabinet from "./CreateCabinet";
import Cabinet from "./Cabinet";
export default {
name: "allCabinets",
    components: {Cabinet, CreateCabinet},
    data:()=>({
        cabinets: []
    }),
    mounted() {
        this.loadCabinets();
    },
    methods:{
        loadCabinets(){
            this.$store.dispatch('ajaxCabinetsFromDB')
        }
    },
    computed:{
        Cabinets(){
            return this.$store.getters.getCabinets
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
