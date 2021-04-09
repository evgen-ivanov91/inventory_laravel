<template>
    <div class="container">
        <span>Сканеры</span>
        <create-scan></create-scan>
        <div class="card" style="width: 100%;" v-for="scan in Scans" :key="scan.id">
            <scan :scan="scan"></scan>
        </div>
    </div>
</template>

<script>
import Scan from "./Scan";
import CreateScan from "./CreateScan";
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

</style>
