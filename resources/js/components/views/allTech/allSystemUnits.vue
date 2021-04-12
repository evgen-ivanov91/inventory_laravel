<template>
    <div class="container">

        <h1>Системные блоки</h1>
        <div class="card" v-for="systemUnit in SystemUnits" :key="systemUnit.id">
        <system-unit :systemUnit="systemUnit" @open="loadSystemUnits"></system-unit>
        </div>
    </div>
</template>

<script>
import SystemUnit from "../ComponentTech/SystemUnit";
import CreateSystemUnit from "../create/CreateSystemUnit";
export default {
name: "allSystemUnits",
    components: {SystemUnit},
    data:()=>({
        systemUnits: []
    }),
    mounted() {
        this.loadSystemUnits();
    },
    methods:{
        loadSystemUnits(){
            this.$store.dispatch('ajaxSystemUnitFromDB')
        }
    },
    computed:{
        SystemUnits(){
            return this.$store.getters.getSystemUnits
        }
    }
}
</script>

<style scoped>

</style>
