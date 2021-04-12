<template>
    <div class="container mt-5">
        <span>Выберите кабинет:</span>
        <select class="form-select mb-3" id="floatingSelect" aria-label="Floating label select example" v-model="selected"  @change="sortByLocation">
            <option v-for="cabinet in Cabinets" :key="cabinet.numberCabinet"  :value="cabinet.numberCabinet" >{{cabinet.numberCabinet}}{{cabinet.description}}</option>
        </select>
        <span>Поиск по сотрудникам:</span>
        <select class="form-select mb-3" id="floatingSelect1" aria-label="Floating label select example" v-model="selectedPib"  @change="sortByPib">
            <option v-for="client in Clients" :key="client.pib"  :value="client.pib" >{{client.pib}}</option>
        </select>
        <div>
            <div class="card mb-3 "  v-for="client in filteredClients" :key="client.id">
                <client-card :client="client"></client-card>
            </div>
        </div>

    </div>

</template>

<script>
import ClientCard from "./ClientCard";

export default {
name: "Compair",
    components: {ClientCard},
    data:()=>({
        clients: [],
        sortedUnits: [],
        selected:'Все',
        selectedPib: 'Все'
    }),
    mounted() {
        this.loadClients();
        this.loadCabinets();
    },
    methods:{
        loadClients(){
            this.$store.dispatch('ajaxClientsFromDB')
        },
        loadCabinets(){
            this.$store.dispatch('ajaxCabinetsFromDB')
        },
        sortByLocation(){
            this.sortedUnits = []
            this.Clients.map(item => {
                if(item.locations == this.selected){
                    this.sortedUnits.push(item)
                }
            })
        },
        sortByPib(){
            this.sortedUnits = []
            this.Clients.map(item => {
                if(item.pib == this.selectedPib){
                    this.sortedUnits.push(item)
                }
            })}
    },
    computed:{
        Clients(){
            return this.$store.getters.getClients
        },
        Cabinets(){
            return this.$store.getters.getCabinets
        },
        filteredClients(){
            if (this.sortedUnits.length){
                return this.sortedUnits
            }else {
                return this.Clients
            }
        }
    }
}
</script>

<style scoped>

</style>
