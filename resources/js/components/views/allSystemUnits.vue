<template>
    <div class="container">
        <create-system-unit></create-system-unit>
        <h1>Системные блоки</h1>
        <div class="card" style="width: 100%;" v-for="systemUnit in SystemUnits" :key="systemUnit.id">
        <system-unit :systemUnit="systemUnit"></system-unit>
        </div>
    </div>
</template>

<script>
import SystemUnit from "./SystemUnit";
import CreateSystemUnit from "./CreateSystemUnit";
export default {
name: "allSystemUnits",
    components: {CreateSystemUnit, SystemUnit},
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
