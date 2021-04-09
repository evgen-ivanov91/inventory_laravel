<template>
    <div class="container">
        <span>Мониторы</span>
        <create-monitor></create-monitor>
        <div class="card" style="width: 100%;" v-for="monitor in Monitors" :key="monitor.id">
            <monitor :monitor="monitor"></monitor>
        </div>
    </div>
</template>

<script>
import CreateMonitor from "./CreateMonitor";
import Monitor from "./Monitor";
export default {
name: "allMonitors",
    components: {Monitor, CreateMonitor},
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

</style>
