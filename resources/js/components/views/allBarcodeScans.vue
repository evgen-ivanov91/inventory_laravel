<template>
    <div class="container">
        <span>Сканеры штрихкодов</span>
            <create-barcode-scan></create-barcode-scan>
        <div class="card" style="width: 100%;" v-for="barcodeScan in BarcodeScans" :key="barcodeScan.id">
            <barcode-scan :barcodeScan="barcodeScan"></barcode-scan>
        </div>
    </div>
</template>

<script>
import CreateBarcodeScan from "./createBarcodeScan";
import BarcodeScan from "./BarcodeScan";
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

</style>
