<template>
    <div class="container">
        <span class="title">Сканеры</span>
        <div class="card" v-for="scan in Scans" :key="scan.id">
            <scan :scan="scan" @open="loadScans"></scan>
        </div>
    </div>
</template>

<script>
import Scan from "../ComponentTech/Scan";
import CreateScan from "../create/CreateScan";
export default {
    name: "allScans",
    components: {CreateScan, Scan},
    data:()=>({
        scan: []
    }),
    mounted() {
        this.loadScans();
    },
    methods:{
        loadScans(){
            this.$store.dispatch('ajaxScansFromDB')
            console.log(this.Scans)
        }
    },
    computed:{
        Scans(){
            return this.$store.getters.getScans
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
