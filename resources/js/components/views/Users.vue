<template>
    <div class="container">
        <div class="card" style="width: 100%;" v-for="client in Clients" :key="client.id">
            <client :client="client"></client>
<!--            <ul class="list-group" v-for="tech in client.all_tech">-->
<!--                <li class="list-group-item disabled" aria-disabled="true">{{tech.model}}</li>-->
<!--                <li class="list-group-item">A second item</li>-->
<!--                <li class="list-group-item">A third item</li>-->
<!--                <li class="list-group-item">A fourth item</li>-->
<!--                <li class="list-group-item">And a fifth one</li>-->
<!--            </ul>-->
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
