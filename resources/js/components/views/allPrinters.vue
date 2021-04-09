<template>
    <div class="container">
        <span>Принтеры</span>
        <create-printer></create-printer>
        <div class="card" style="width: 100%;" v-for="printer in printer" :key="printer.id">
            <printer :printer="printer"></printer>
        </div>
    </div>
</template>

<script>
import CreatePrinter from "./CreatePrinter";
import Printer from "./Printer";
export default {
    name: "allPrinters",
    components: {Printer, CreatePrinter},
    data:()=>({
        printers: []
    }),
    mounted() {
        this.loadPrinters();
    },
    methods:{
        loadPrinters(){
            this.$store.dispatch('ajaxPrinterFromDB')
        }
    },
    computed:{
        printer(){
            return this.$store.getters.getPrinters
        }
    }
}
</script>

<style scoped>

</style>
