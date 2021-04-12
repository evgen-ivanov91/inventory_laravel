<template>
    <div class="container">
        <span class="title">Мониторы</span>
        <div class="card" v-for="monitor in Monitors" :key="monitor.id">
            <monitor :monitor="monitor" @open="loadMonitors"></monitor>
        </div>
    </div>
</template>

<script>
import Monitor from "../ComponentTech/Monitor";
export default {
name: "allMonitors",
    components: {Monitor},
    data:()=>({
        monitors: []
    }),
    mounted() {
        this.loadMonitors();
    },
    methods:{
        loadMonitors(){
            this.$store.dispatch('ajaxMonitorFromDB')
        }
    },
    computed:{
        Monitors(){
            return this.$store.getters.getMonitors
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
