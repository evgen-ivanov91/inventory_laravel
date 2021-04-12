<template>
    <div class="container">
        <span class="title">Сканеры штрихкодов</span>
        <div class="card" v-for="barcodeScan in BarcodeScans" :key="barcodeScan.id">
            <barcode-scan :barcodeScan="barcodeScan" @open="loadBarcodeScans"></barcode-scan>
        </div>
    </div>
</template>

<script>
import CreateBarcodeScan from "../create/createBarcodeScan";
import BarcodeScan from "../ComponentTech/BarcodeScan";
export default {
    name: "allBarcodeScans",
    components: {BarcodeScan, CreateBarcodeScan},
    data:()=>({
        barcodeScans: []
    }),
    mounted() {
        this.loadBarcodeScans();
    },
    methods:{
        loadBarcodeScans(){
            console.log('test')
            this.$store.dispatch('ajaxBarcodeScanFromDB')
        }
    },
    computed:{
        BarcodeScans(){
            return this.$store.getters.getBarcodeScans
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
