<template>
    <div class="container">
        <span>Кабинеты</span>
        <create-cabinet></create-cabinet>
        <div class="card" style="width: 100%;" v-for="cabinet in Cabinets" :key="cabinet.id">
            <cabinet :cabinet="cabinet"></cabinet>
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

</style>
