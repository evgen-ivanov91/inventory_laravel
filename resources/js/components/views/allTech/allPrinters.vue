<template>
    <div class="container">
        <span class="title">Принтеры</span>
        <div class="card" v-for="printer in printer" :key="printer.id">
            <printer :printer="printer" @open="loadPrinters"></printer>
        </div>
    </div>
</template>

<script>
import CreatePrinter from "../create/CreatePrinter";
import Printer from "../ComponentTech/Printer";
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
