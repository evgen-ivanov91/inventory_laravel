<template>
    <div class="container">
        <div class="card" style="width: 100%;" v-for="client in Clients" :key="client.id">
            <client :client="client" @open="loadClients"></client>
        </div>
    </div>
</template>

<script>
import Client from "./Client";
export default {
name: "Users",
    components: {Client},
    data:()=>({
        clients: []
    }),
    mounted() {
        this.loadClients();
    },
    methods:{
        loadClients(){
            this.$store.dispatch('ajaxClientsFromDB')
        }
    },
    computed:{
        Clients(){
            return this.$store.getters.getClients
        }
    }
}
</script>

<style scoped>

</style>
